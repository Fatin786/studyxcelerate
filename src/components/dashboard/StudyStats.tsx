
import { BarChart, Clock, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useStudyAnalytics } from "@/hooks/useStudyAnalytics";

const StudyStats = () => {
  const { data: analytics, isLoading } = useStudyAnalytics();
  
  if (isLoading) {
    return (
      <Card className="bento-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center">
            <span className="text-gradient-gold">Study Statistics</span>
          </CardTitle>
          <CardDescription>Loading your weekly metrics...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-charcoal-800/30 rounded animate-pulse" />
                <div className="h-2 bg-charcoal-800/30 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  const stats = analytics?.currentWeek || {
    totalHours: 0,
    avgFocusScore: 0,
    taskCompletionRate: 0,
    weeklyGoalProgress: 0
  };

  const changes = analytics?.weekOverWeekChange || {
    hours: 0,
    focusScore: 0,
    sessions: 0
  };
  return (
    <Card className="bento-card">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <span className="text-gradient-gold">Study Statistics</span>
        </CardTitle>
        <CardDescription>Your weekly productivity metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Study Hours</span>
            </div>
            <span className="text-sm font-semibold">
              {stats.totalHours.toFixed(1)} / 25
            </span>
          </div>
          <Progress className="h-2" value={stats.weeklyGoalProgress} />
          <p className="text-xs text-muted-foreground">
            {stats.weeklyGoalProgress}% of your weekly goal completed
            {changes.hours !== 0 && (
              <span className={changes.hours > 0 ? "text-green-400" : "text-red-400"}>
                {" "}({changes.hours > 0 ? "+" : ""}{changes.hours.toFixed(1)}h from last week)
              </span>
            )}
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Focus Score</span>
            </div>
            <span className="text-sm font-semibold">{stats.avgFocusScore}/100</span>
          </div>
          <Progress className="h-2" value={stats.avgFocusScore} />
          <p className="text-xs text-muted-foreground">
            Average concentration this week
            {changes.focusScore !== 0 && (
              <span className={changes.focusScore > 0 ? "text-green-400" : "text-red-400"}>
                {" "}({changes.focusScore > 0 ? "+" : ""}{changes.focusScore} points from last week)
              </span>
            )}
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Task Completion</span>
            </div>
            <span className="text-sm font-semibold">{stats.taskCompletionRate}%</span>
          </div>
          <Progress className="h-2" value={stats.taskCompletionRate} />
          <p className="text-xs text-muted-foreground">
            {stats.taskCompletionRate}% completion rate this week
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStats;
