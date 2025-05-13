
import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Check } from "lucide-react";

// Sample course modules data
const moduleData = [
  { name: "Introduction", progress: 100, complete: true },
  { name: "Fundamentals", progress: 85, complete: false },
  { name: "Core Concepts", progress: 62, complete: false },
  { name: "Advanced Topics", progress: 40, complete: false },
  { name: "Practical Applications", progress: 25, complete: false },
  { name: "Case Studies", progress: 10, complete: false },
  { name: "Final Project", progress: 0, complete: false },
];

interface ModuleCompletionMapProps {
  detailed?: boolean;
}

const ModuleCompletionMap: React.FC<ModuleCompletionMapProps> = ({ detailed = false }) => {
  const chartConfig = {
    completed: {
      label: "Completed",
      theme: {
        dark: "#fbbf24",
        light: "#fcd34d",
      },
    },
    inProgress: {
      label: "In Progress",
      theme: {
        dark: "#60a5fa",
        light: "#93c5fd",
      },
    },
    notStarted: {
      label: "Not Started",
      theme: {
        dark: "#4b5563",
        light: "#9ca3af",
      },
    },
  };

  const getBarColor = (progress: number) => {
    if (progress === 100) return chartConfig.completed.theme.dark;
    if (progress > 0) return chartConfig.inProgress.theme.dark;
    return chartConfig.notStarted.theme.dark;
  };

  return (
    <div className="w-full h-full">
      {detailed && (
        <div className="flex items-center justify-end mb-4 space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <span className="text-xs">Completed</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className="text-xs">In Progress</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
            <span className="text-xs">Not Started</span>
          </div>
        </div>
      )}

      <ChartContainer
        config={chartConfig}
        className="aspect-auto h-full w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={moduleData}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: detailed ? 40 : 20,
            }}
            barSize={detailed ? 30 : 20}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              angle={detailed ? -45 : 0}
              textAnchor={detailed ? "end" : "middle"}
              height={detailed ? 60 : 30}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <ChartTooltipContent>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{data.name}</p>
                        <div className="flex items-center space-x-2">
                          <div
                            className="rounded-full h-3 w-3"
                            style={{ backgroundColor: getBarColor(data.progress) }}
                          />
                          <p className="text-sm">
                            {data.progress === 100 ? (
                              <span className="flex items-center">
                                Complete <Check className="h-3 w-3 ml-1 text-green-500" />
                              </span>
                            ) : (
                              `${data.progress}% Complete`
                            )}
                          </p>
                        </div>
                      </div>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="progress" radius={[4, 4, 0, 0]}>
              {moduleData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(entry.progress)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default ModuleCompletionMap;
