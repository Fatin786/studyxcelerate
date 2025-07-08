import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Timer, Brain, Zap, AlertCircle } from "lucide-react";
import { useSessionTracking } from "@/hooks/useSessionTracking";

const LiveSessionMetrics = () => {
  const { isTracking, currentSession } = useSessionTracking();

  if (!isTracking || !currentSession) {
    return (
      <Card className="bento-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Timer className="h-5 w-5 text-gold-400" />
            Session Metrics
          </CardTitle>
          <CardDescription>No active session</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-4 text-muted-foreground">
            <Timer className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>Start a focus session to see live metrics</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getFocusStatus = (score: number) => {
    if (score >= 80) return { label: "Excellent", color: "bg-green-500" };
    if (score >= 60) return { label: "Good", color: "bg-yellow-500" };
    return { label: "Needs Attention", color: "bg-red-500" };
  };

  const focusStatus = getFocusStatus(currentSession.focusScore);

  return (
    <Card className="bento-card golden-glow">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Timer className="h-5 w-5 text-gold-400" />
          Live Session
          <Badge className="bg-green-500/20 text-green-400 border-green-400/30">
            Active
          </Badge>
        </CardTitle>
        <CardDescription>
          {currentSession.subjectStudied || "General Study Session"}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Session Duration */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Timer className="h-4 w-4 text-gold-400" />
            <span className="text-sm font-medium">Duration</span>
          </div>
          <span className="text-lg font-bold text-gold-400">
            {formatDuration(currentSession.duration)}
          </span>
        </div>

        {/* Focus Score */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Focus Score</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">{currentSession.focusScore}/100</span>
              <Badge className={`${focusStatus.color}/20 text-white border-${focusStatus.color}/30`}>
                {focusStatus.label}
              </Badge>
            </div>
          </div>
          <Progress value={currentSession.focusScore} className="h-2" />
        </div>

        {/* Task Completion */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Task Progress</span>
            </div>
            <span className="text-sm font-semibold">{currentSession.taskCompletionRate}%</span>
          </div>
          <Progress value={currentSession.taskCompletionRate} className="h-2" />
        </div>

        {/* Interruptions */}
        {currentSession.interruptionCount > 0 && (
          <div className="flex items-center justify-between p-2 bg-yellow-500/10 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">Interruptions</span>
            </div>
            <span className="text-sm font-semibold text-yellow-500">
              {currentSession.interruptionCount}
            </span>
          </div>
        )}

        {/* Energy Level */}
        <div className="text-xs text-muted-foreground">
          <span>Started with energy level: {currentSession.energyLevelStart}/10</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveSessionMetrics;