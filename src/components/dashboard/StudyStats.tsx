
import { BarChart, Clock, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const StudyStats = () => {
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
            <span className="text-sm font-semibold">18.5 / 25</span>
          </div>
          <Progress className="h-2" value={74} />
          <p className="text-xs text-muted-foreground">74% of your weekly goal completed</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Focus Score</span>
            </div>
            <span className="text-sm font-semibold">83/100</span>
          </div>
          <Progress className="h-2" value={83} />
          <p className="text-xs text-muted-foreground">Up 7 points from last week</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Task Completion</span>
            </div>
            <span className="text-sm font-semibold">12/15</span>
          </div>
          <Progress className="h-2" value={80} />
          <p className="text-xs text-muted-foreground">80% completion rate this week</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStats;
