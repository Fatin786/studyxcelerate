
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const FocusSession = () => {
  const [isActive, setIsActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleSession = () => {
    setIsActive(!isActive);
    // In a real app, we would start/stop a timer here
  };

  const resetSession = () => {
    setIsActive(false);
    setProgress(0);
  };

  return (
    <Card className={`bento-card ${isActive ? 'golden-glow' : ''}`}>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Focus Session</CardTitle>
        <CardDescription>
          {isActive 
            ? "Currently in a Pomodoro session" 
            : "Start a focused study session"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-charcoal-800/30">
            <svg className="absolute h-full w-full" viewBox="0 0 100 100">
              <circle
                className="text-charcoal-800/50"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r="38"
                cx="50"
                cy="50"
              />
              <circle
                className="text-gold-400"
                strokeWidth="4"
                strokeDasharray={`${progress * 2.38} 238.76`}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="38"
                cx="50"
                cy="50"
              />
            </svg>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-gold">25:00</div>
              <p className="text-xs text-muted-foreground">minutes remaining</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button
            onClick={toggleSession}
            className={isActive 
              ? "bg-charcoal-800 hover:bg-charcoal-700 text-white" 
              : "bg-gold-400 hover:bg-gold-500 text-navy-950"
            }
          >
            {isActive ? (
              <>
                <Pause className="mr-2 h-4 w-4" /> Pause
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" /> Start
              </>
            )}
          </Button>
          <Button 
            onClick={resetSession} 
            variant="outline" 
            className="border-charcoal-800/30 hover:border-gold-400/50"
            disabled={!isActive && progress === 0}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FocusSession;
