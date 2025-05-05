
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock, Target, ArrowRight, Plus, BrainCircuit, Zap } from "lucide-react";
import StudyTimeline from "@/components/planner/StudyTimeline";
import AIExplanationPanel from "@/components/planner/AIExplanationPanel";
import PlannerControls from "@/components/planner/PlannerControls";

const StudyPlanner = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [activeView, setActiveView] = useState("timeline");
  const [showAIExplanation, setShowAIExplanation] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Study Planner</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Plus className="h-4 w-4" />
            New Plan
          </Button>
          <Button size="sm" className="gap-1 bg-gold-400 text-navy-950 hover:bg-gold-500">
            <BrainCircuit className="h-4 w-4" />
            Generate AI Plan
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          <Tabs value={activeView} onValueChange={setActiveView} className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="timeline">Timeline</TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
                <TabsTrigger value="blocks">Study Blocks</TabsTrigger>
              </TabsList>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-gold-400 hover:bg-gold-400/10"
                  onClick={() => setShowAIExplanation(!showAIExplanation)}
                >
                  <Zap className="h-4 w-4 mr-1" /> 
                  {showAIExplanation ? "Hide AI Explanation" : "Show AI Explanation"}
                </Button>
              </div>
            </div>
            
            <TabsContent value="timeline" className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-gold-400" />
                    Today's Study Timeline
                  </CardTitle>
                  <CardDescription>
                    Visualized schedule with focus prediction and energy levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <StudyTimeline />
                </CardContent>
              </Card>
              
              {showAIExplanation && <AIExplanationPanel />}
            </TabsContent>
            
            <TabsContent value="calendar">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium">Monthly Overview</CardTitle>
                  <CardDescription>
                    View and manage your study schedule across the month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="blocks">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium">Study Blocks</CardTitle>
                  <CardDescription>
                    Manage your study blocks and customize them
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="mb-4">
                      <Target className="h-12 w-12 text-gold-400 mx-auto" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Create Custom Study Blocks</h3>
                    <p className="text-muted-foreground mb-4">
                      Design your own study blocks with subjects, durations, and goals
                    </p>
                    <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500">
                      <Plus className="h-4 w-4 mr-1" /> Create Study Block
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="lg:col-span-4 space-y-6">
          <PlannerControls />
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Clock className="h-5 w-5 text-gold-400" />
                Upcoming Sessions
              </CardTitle>
              <CardDescription>
                Your next scheduled study sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-3 border border-charcoal-800/30 rounded-lg hover:border-gold-400/30 transition-all"
                  >
                    <div>
                      <p className="font-medium">Physics Chapter 7</p>
                      <p className="text-xs text-muted-foreground">Today, 2:00 PM - 3:30 PM</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gold-400 hover:bg-gold-400/10">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudyPlanner;
