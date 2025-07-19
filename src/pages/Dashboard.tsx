
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp, 
  Star, 
  Brain, 
  Calendar as CalendarIcon,
  ArrowRight,
  Play,
  CheckCircle,
  AlertCircle,
  BarChart3
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const currentHour = new Date().getHours();
  let greeting = "Good morning";
  
  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else if (currentHour >= 18) {
    greeting = "Good evening";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold">StudyXcelerate</h1>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">
          {greeting}! <span className="text-primary">Student</span> 👋
        </h2>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Study Goals */}
        <div className="col-span-12 lg:col-span-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Study Goals</h3>
            
            {/* Goal Card 1 */}
            <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 dark:from-emerald-950 dark:to-emerald-900 dark:border-emerald-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-emerald-600" />
                </div>
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Mathematics</h4>
                <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">15 Sessions</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">Type: Exam Prep</p>
                <div className="flex items-center justify-between mt-3">
                  <Progress value={78} className="flex-1 mr-2" />
                  <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">7.8</span>
                </div>
              </CardContent>
            </Card>

            {/* Goal Card 2 */}
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 dark:from-pink-950 dark:to-pink-900 dark:border-pink-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-pink-600" />
                </div>
                <h4 className="font-semibold text-pink-900 dark:text-pink-100">Chemistry Lab</h4>
                <p className="text-sm text-pink-700 dark:text-pink-300 mb-2">8 Sessions</p>
                <p className="text-xs text-pink-600 dark:text-pink-400">Type: Lab Reports</p>
                <div className="flex items-center justify-between mt-3">
                  <Progress value={65} className="flex-1 mr-2" />
                  <span className="text-sm font-semibold text-pink-700 dark:text-pink-300">6.5</span>
                </div>
              </CardContent>
            </Card>

            {/* Goal Card 3 */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 dark:from-purple-950 dark:to-purple-900 dark:border-purple-800">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <ArrowRight className="w-4 w-4 text-purple-600" />
                </div>
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Philosophy</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">12 Sessions</p>
                <p className="text-xs text-purple-600 dark:text-purple-400">Type: Essay Writing</p>
                <div className="flex items-center justify-between mt-3">
                  <Progress value={92} className="flex-1 mr-2" />
                  <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">9.2</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-12 lg:col-span-6 space-y-6">
          {/* AI Study Assistant Promo */}
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">AI Study Assistant</h3>
                  <p className="text-muted-foreground mb-4">Get personalized study plans and intelligent recommendations</p>
                  <Button className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </div>
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <Brain className="w-12 h-12 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Assignment Tasks */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Assignment</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Calculus Problem Set</h4>
                    <p className="text-sm text-muted-foreground">Due: Tomorrow, 10:30 AM</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  In Progress
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Research Paper Draft</h4>
                    <p className="text-sm text-muted-foreground">Completed: 14 June, 12:45 AM</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Completed
                </Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">Lab Report Analysis</h4>
                    <p className="text-sm text-muted-foreground">Due: 18 May, 11:00 AM</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                  Upcoming
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Task Checklist */}
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Study Session Plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Focus Mode Setup</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-muted-foreground/30 rounded-full" />
                  <span className="text-muted-foreground">Progress Review</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          {/* Study Hours Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Hours Activity
              </CardTitle>
              <CardDescription className="text-green-600">+3% increase than last week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>10h</span>
                  <span>8h</span>
                  <span>6h</span>
                  <span>4h</span>
                  <span>2h</span>
                  <span>1h</span>
                </div>
                <div className="h-32 bg-muted/20 rounded-md flex items-end justify-around p-2">
                  {[60, 40, 80, 30, 70, 50, 90].map((height, i) => (
                    <div key={i} className="w-4 bg-primary rounded-t" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">18</div>
                <div className="text-sm text-muted-foreground">Goals Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-3xl font-bold">06</div>
                <div className="text-sm text-muted-foreground">Goals in Progress</div>
              </CardContent>
            </Card>
          </div>

          {/* Study Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">DR</AvatarFallback>
                </Avatar>
                <span className="text-sm">Data Research</span>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-purple-100 text-purple-700 text-xs">UX</AvatarFallback>
                </Avatar>
                <span className="text-sm">UX/UI Design</span>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-green-100 text-green-700 text-xs">PH</AvatarFallback>
                </Avatar>
                <span className="text-sm">Philosophy</span>
              </div>
            </CardContent>
          </Card>

          {/* Study Schedule Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Study Schedule
              </CardTitle>
              <CardDescription>16 January, 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-0 p-0"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
