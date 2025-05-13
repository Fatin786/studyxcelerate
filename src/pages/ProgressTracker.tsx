
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ModuleCompletionMap from "@/components/progress/ModuleCompletionMap";
import StudyActivityHeatmap from "@/components/progress/StudyActivityHeatmap";
import MilestoneAchievements from "@/components/progress/MilestoneAchievements";
import PerformanceTimeline from "@/components/progress/PerformanceTimeline";
import GoalTracker from "@/components/progress/GoalTracker";
import PeerComparison from "@/components/progress/PeerComparison";
import SkillMasteryHeatmap from "@/components/progress/SkillMasteryHeatmap";

const ProgressTracker = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-gradient-gold">Progress Tracker</h1>
        <p className="text-muted-foreground">
          Monitor your learning journey and track your achievements
        </p>
      </div>

      <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 md:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 pt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bento-card col-span-1 md:col-span-2 lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle>Course Completion Status</CardTitle>
                <CardDescription>Real-time progress across all your courses</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ModuleCompletionMap />
              </CardContent>
            </Card>

            <Card className="bento-card">
              <CardHeader className="pb-2">
                <CardTitle>Milestone Achievements</CardTitle>
                <CardDescription>Your learning journey badges</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <MilestoneAchievements />
              </CardContent>
            </Card>

            <Card className="bento-card col-span-1 md:col-span-2 lg:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle>Study Activity</CardTitle>
                <CardDescription>When you study most effectively</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <StudyActivityHeatmap />
              </CardContent>
            </Card>

            <Card className="bento-card">
              <CardHeader className="pb-2">
                <CardTitle>Goal Achievement</CardTitle>
                <CardDescription>Progress on your learning goals</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <GoalTracker />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="modules" className="pt-4">
          <Card className="bento-card">
            <CardHeader>
              <CardTitle>Module Completion Map</CardTitle>
              <CardDescription>Track your progress through course modules</CardDescription>
            </CardHeader>
            <CardContent className="h-[450px]">
              <ModuleCompletionMap detailed={true} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="pt-4">
          <Card className="bento-card">
            <CardHeader>
              <CardTitle>Skills Mastery Heatmap</CardTitle>
              <CardDescription>Visualize your strengths and areas for improvement</CardDescription>
            </CardHeader>
            <CardContent className="h-[450px]">
              <SkillMasteryHeatmap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="pt-4">
          <Card className="bento-card">
            <CardHeader>
              <CardTitle>Goal Achievement Tracker</CardTitle>
              <CardDescription>Set, monitor, and achieve your learning goals</CardDescription>
            </CardHeader>
            <CardContent className="h-[450px]">
              <GoalTracker detailed={true} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6 pt-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bento-card">
              <CardHeader>
                <CardTitle>Performance Timeline</CardTitle>
                <CardDescription>Your progress journey over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <PerformanceTimeline />
              </CardContent>
            </Card>

            <Card className="bento-card">
              <CardHeader>
                <CardTitle>Peer Comparison</CardTitle>
                <CardDescription>Anonymous benchmarking against your peers</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <PeerComparison />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressTracker;
