import React, { useState } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

// Generate sample performance data over time
const generatePerformanceData = () => {
  const data = [];
  const now = new Date();
  
  for (let i = 14; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const formattedDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    
    // Create sample data with some milestones
    const hasMilestone = i === 10 || i === 5 || i === 0;
    const milestoneText = i === 10 ? "Completed Module 1" : 
                         i === 5 ? "Reached 50% of Course" : 
                         i === 0 ? "Quiz Score: 95%" : "";
    
    data.push({
      date: formattedDate,
      // Add some noise to the data to make it look more realistic
      quizPerformance: Math.min(100, Math.max(60, 75 + Math.floor(Math.random() * 20) - 10)),
      timeSpent: Math.floor(Math.random() * 30) + 60, // minutes per day
      milestone: hasMilestone ? milestoneText : null,
    });
  }
  
  return data;
};

const performanceData = generatePerformanceData();

const PerformanceTimeline = () => {
  const [showLegend, setShowLegend] = useState(true);
  
  const chartConfig = {
    quizPerformance: {
      label: "Quiz Performance",
      theme: {
        dark: "#f59e0b",
        light: "#fbbf24",
      },
    },
    timeSpent: {
      label: "Time Spent (min)",
      theme: {
        dark: "#3b82f6",
        light: "#60a5fa",
      },
    },
  };
  
  const milestones = performanceData.filter(item => item.milestone);
  
  return (
    <div className="w-full h-full flex flex-col">
      <Collapsible open={showLegend} onOpenChange={setShowLegend}>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-muted-foreground">Performance over the last 2 weeks</p>
          <CollapsibleTrigger className="flex items-center text-xs text-muted-foreground hover:text-foreground">
            {showLegend ? "Hide" : "Show"} Milestones
            <ChevronDown className={`h-4 w-4 transition-transform ${showLegend ? "rotate-180" : ""}`} />
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <div className="mb-4 space-y-2">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center text-xs">
                <Badge variant="outline" className="bg-gold-400/10 text-gold-400 border-gold-400/20">
                  {milestone.date}
                </Badge>
                <span className="ml-2 text-muted-foreground">{milestone.milestone}</span>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-full w-full"
      >
        {/* Fix: Directly use the ResponsiveContainer instead of wrapping it in a function */}
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart
            data={performanceData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="quizGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="timeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              yAxisId="left"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 120]}
              tickFormatter={(value) => `${value}m`}
            />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <ChartTooltipContent>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{data.date}</p>
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full h-3 w-3 bg-amber-500" />
                          <p className="text-sm">Performance: {data.quizPerformance}%</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="rounded-full h-3 w-3 bg-blue-500" />
                          <p className="text-sm">Time Spent: {data.timeSpent} minutes</p>
                        </div>
                        {data.milestone && (
                          <div className="pt-1 mt-1 border-t border-border">
                            <Badge className="bg-gold-400 text-navy-950">Milestone</Badge>
                            <p className="text-xs mt-1">{data.milestone}</p>
                          </div>
                        )}
                      </div>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="quizPerformance"
              yAxisId="left"
              stroke="#f59e0b"
              fillOpacity={1}
              fill="url(#quizGradient)"
            />
            <Area
              type="monotone"
              dataKey="timeSpent"
              yAxisId="right"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#timeGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
        
        <ChartLegend>
          <ChartLegendContent className="mt-3" />
        </ChartLegend>
      </ChartContainer>
    </div>
  );
};

export default PerformanceTimeline;
