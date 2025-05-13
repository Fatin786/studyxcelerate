
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Calendar, Clock, CheckCircle2, ArrowRight, BrainCircuit, Plus, AlarmClock } from "lucide-react";

const GoalManagement = () => {
  const [newGoalDialogOpen, setNewGoalDialogOpen] = useState(false);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      <div className="lg:col-span-4 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-gold-400" />
                Personal Goals
              </CardTitle>
              <Dialog open={newGoalDialogOpen} onOpenChange={setNewGoalDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500 h-8 gap-1">
                    <Plus className="h-4 w-4" />
                    New Goal
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Goal</DialogTitle>
                    <DialogDescription>Set a new academic or personal goal</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <FormLabel>Goal Title</FormLabel>
                      <Input placeholder="E.g., Complete Calculus Chapter 5" />
                    </div>
                    <div className="space-y-2">
                      <FormLabel>Category</FormLabel>
                      <Select defaultValue="academic">
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="academic">Academic</SelectItem>
                          <SelectItem value="personal">Personal Development</SelectItem>
                          <SelectItem value="project">Project</SelectItem>
                          <SelectItem value="habit">Habit Formation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FormLabel>Target Date</FormLabel>
                        <Input type="date" />
                      </div>
                      <div className="space-y-2">
                        <FormLabel>Priority</FormLabel>
                        <Select defaultValue="medium">
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <FormLabel>Description</FormLabel>
                      <Input placeholder="Detailed description of your goal" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="reminders" />
                      <label htmlFor="reminders" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Enable reminders for this goal
                      </label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setNewGoalDialogOpen(false)}>Cancel</Button>
                    <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500" onClick={() => setNewGoalDialogOpen(false)}>Create Goal</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <CardDescription>Track and manage your learning objectives</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="active">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="all">All Goals</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active" className="space-y-4">
                {[
                  { title: "Complete Data Structures Course", progress: 80, deadline: "May 18", category: "academic", priority: "high" },
                  { title: "Finish Algorithm Assignment", progress: 50, deadline: "May 20", category: "assignment", priority: "medium" },
                  { title: "Study 20 hours this week", progress: 65, deadline: "May 23", category: "habit", priority: "medium" },
                  { title: "Read Database Systems Chapter 7", progress: 30, deadline: "May 25", category: "reading", priority: "low" },
                ].map((goal, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:border-gold-400/50 transition-all">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{goal.title}</h3>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Due {goal.deadline}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{goal.progress}% complete</span>
                        <div className="flex items-center gap-1">
                          <span className={`px-2 py-0.5 rounded-full text-white text-xs ${
                            goal.priority === "high" ? "bg-red-500" : 
                            goal.priority === "medium" ? "bg-amber-500" : "bg-blue-500"
                          }`}>
                            {goal.priority}
                          </span>
                        </div>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center gap-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-charcoal-800/30 text-muted-foreground">
                          {goal.category}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 gap-1 text-gold-400 hover:bg-gold-400/10 hover:text-gold-400">
                        Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="upcoming">
                <div className="flex items-center justify-center h-[200px] text-muted-foreground">
                  You have no upcoming goals
                </div>
              </TabsContent>
              
              <TabsContent value="completed">
                <div className="flex items-center justify-center h-[200px] text-muted-foreground">
                  Completed goals will appear here
                </div>
              </TabsContent>
              
              <TabsContent value="all">
                <div className="flex items-center justify-center h-[200px] text-muted-foreground">
                  All your goals
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-gold-400" />
              Goal Completion History
            </CardTitle>
            <CardDescription>Your achievement timeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Goal History Timeline Chart
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-3 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-gold-400" />
              Smart Goal Suggestions
            </CardTitle>
            <CardDescription>Personalized goals based on your progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: "Review Calculus Limits Concept", reason: "Based on recent quiz performance", time: "1.5 hours" },
              { title: "Complete Programming Practice Set", reason: "Strengthen your coding skills", time: "2 hours" },
              { title: "Create Study Notes for Chapter 8", reason: "Upcoming exam material", time: "45 minutes" },
            ].map((goal, index) => (
              <div key={index} className="border rounded-lg p-3 hover:border-gold-400/50 transition-all">
                <div className="flex justify-between mb-1">
                  <h3 className="font-medium text-sm">{goal.title}</h3>
                  <div className="flex items-center gap-1">
                    <AlarmClock className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{goal.time}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{goal.reason}</p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="h-7 text-xs px-2 mr-2">Ignore</Button>
                  <Button size="sm" className="h-7 text-xs px-2 bg-gold-400 text-navy-950 hover:bg-gold-500">Add Goal</Button>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full gap-1">
              <BrainCircuit className="h-4 w-4" />
              Generate More Suggestions
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-gold-400" />
              Goal Planning Calendar
            </CardTitle>
            <CardDescription>Visualize your goal deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Goal Calendar View
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-gold-400" />
              Goal Statistics
            </CardTitle>
            <CardDescription>Your goal achievement metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <div className="border rounded-lg p-3 text-center">
                <span className="text-2xl font-bold">78%</span>
                <p className="text-xs text-muted-foreground">Completion Rate</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <span className="text-2xl font-bold">12</span>
                <p className="text-xs text-muted-foreground">Goals Completed</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <span className="text-2xl font-bold">4</span>
                <p className="text-xs text-muted-foreground">Active Goals</p>
              </div>
              <div className="border rounded-lg p-3 text-center">
                <span className="text-2xl font-bold">2.3</span>
                <p className="text-xs text-muted-foreground">Avg. Days Early</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoalManagement;
