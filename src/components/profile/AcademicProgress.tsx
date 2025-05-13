
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Award, Clock, Target, Calendar, Flame, Star } from "lucide-react";

const ProgressSnapshot = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <BarChart className="h-5 w-5 text-gold-400" /> 
          Progress Snapshot
        </CardTitle>
        <CardDescription>Your current study stats at a glance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center justify-center rounded-lg bg-muted p-3 text-center">
            <Flame className="h-8 w-8 text-gold-400 mb-1" />
            <span className="text-xl font-bold">7</span>
            <span className="text-xs text-muted-foreground">Day Streak</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-muted p-3 text-center">
            <Clock className="h-8 w-8 text-gold-400 mb-1" />
            <span className="text-xl font-bold">28.5</span>
            <span className="text-xs text-muted-foreground">Hours This Week</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg bg-muted p-3 text-center">
            <Target className="h-8 w-8 text-gold-400 mb-1" />
            <span className="text-xl font-bold">86%</span>
            <span className="text-xs text-muted-foreground">Focus Score</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm">Data Structures</span>
              <span className="text-xs text-muted-foreground">78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm">Algorithms</span>
              <span className="text-xs text-muted-foreground">65%</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm">Database Systems</span>
              <span className="text-xs text-muted-foreground">92%</span>
            </div>
            <Progress value={92} className="h-2" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm">Web Development</span>
              <span className="text-xs text-muted-foreground">87%</span>
            </div>
            <Progress value={87} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const SkillBadges = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-gold-400" /> 
            Skill Mastery & Badges
          </CardTitle>
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Badges</SelectItem>
              <SelectItem value="recent">Recently Earned</SelectItem>
              <SelectItem value="subject">By Subject</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardDescription>Your achievements and mastery levels</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { name: "Algorithm Master", description: "Completed 50 algorithm challenges", color: "bg-blue-500" },
            { name: "Focus Champion", description: "Maintained 90%+ focus for 10 sessions", color: "bg-purple-500" },
            { name: "Database Guru", description: "Completed all SQL exercises", color: "bg-green-500" },
            { name: "7-Day Streak", description: "Studied 7 days in a row", color: "bg-orange-500" },
            { name: "Early Bird", description: "Completed 10 morning sessions", color: "bg-yellow-500" },
            { name: "Night Owl", description: "Completed 10 evening study sessions", color: "bg-indigo-500" },
            { name: "Quick Learner", description: "Completed course 30% faster than average", color: "bg-pink-500" },
            { name: "Study Group Leader", description: "Led 5 study group sessions", color: "bg-teal-500" },
          ].map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center p-3 border rounded-lg hover:border-gold-400/50 transition-all">
              <div className={`w-10 h-10 rounded-full ${badge.color} flex items-center justify-center mb-2`}>
                <Star className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs font-medium line-clamp-1">{badge.name}</span>
              <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{badge.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const PerformanceTimeline = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gold-400" /> 
            Performance Timeline
          </CardTitle>
          <Select defaultValue="6m">
            <SelectTrigger className="w-[120px] h-8">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1m">Last Month</SelectItem>
              <SelectItem value="3m">3 Months</SelectItem>
              <SelectItem value="6m">6 Months</SelectItem>
              <SelectItem value="1y">1 Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardDescription>Track your progress over time</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="time">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="time">Study Time</TabsTrigger>
            <TabsTrigger value="focus">Focus Score</TabsTrigger>
            <TabsTrigger value="completion">Completion Rate</TabsTrigger>
          </TabsList>
          <TabsContent value="time" className="space-y-4">
            <div className="h-[250px] w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Interactive Timeline Chart
            </div>
          </TabsContent>
          <TabsContent value="focus" className="space-y-4">
            <div className="h-[250px] w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Focus Score Timeline
            </div>
          </TabsContent>
          <TabsContent value="completion" className="space-y-4">
            <div className="h-[250px] w-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
              Completion Rate Timeline
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const AcademicProgress = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-6">
        <ProgressSnapshot />
        <SkillBadges />
      </div>
      <PerformanceTimeline />
    </div>
  );
};

export default AcademicProgress;
