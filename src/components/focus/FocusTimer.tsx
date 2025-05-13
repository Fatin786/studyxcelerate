
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Timer, Volume2, BrainCircuit, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface FocusTimerProps {
  sessionLength: number;
  breakLength: number;
  isActive: boolean;
}

const FocusTimer = ({ sessionLength, breakLength, isActive }: FocusTimerProps) => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [progress, setProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [sessions, setSessions] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false); // For start animation
  const [endAnimation, setEndAnimation] = useState(false); // For end animation
  const sessionSeconds = sessionLength * 60;
  const breakSeconds = breakLength * 60;
  
  // Reset timer when session length changes
  useEffect(() => {
    if (!timerRunning) {
      if (isBreak) {
        setTimeLeft(breakLength * 60);
      } else {
        setTimeLeft(sessionLength * 60);
      }
    }
  }, [sessionLength, breakLength, isBreak, timerRunning]);

  // Timer effect
  useEffect(() => {
    let timer: number | null = null;
    
    if (timerRunning) {
      timer = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // Timer complete
            clearInterval(timer!);
            setTimerRunning(false);
            setEndAnimation(true); // Trigger end animation
            
            // Reset end animation after a delay
            setTimeout(() => {
              setEndAnimation(false);
            }, 2000);
            
            // Play sound if enabled
            if (soundEnabled) {
              // This would play a sound in a real implementation
              console.log("Timer complete sound played");
            }
            
            // Show toast notification
            if (isBreak) {
              toast.info("Break finished!", { 
                description: "Time to get back to work." 
              });
              setIsBreak(false);
              setSessions(prev => prev + 1);
              return sessionLength * 60;
            } else {
              toast.success("Focus session complete!", {
                description: "Take a well-deserved break."
              });
              setIsBreak(true);
              return breakLength * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    // Cleanup on unmount
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timerRunning, isBreak, sessionLength, breakLength, soundEnabled]);

  // Update progress
  useEffect(() => {
    const totalSeconds = isBreak ? breakSeconds : sessionSeconds;
    const progressValue = ((totalSeconds - timeLeft) / totalSeconds) * 100;
    setProgress(progressValue);
  }, [timeLeft, sessionSeconds, breakSeconds, isBreak]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    if (!timerRunning) {
      // Starting the timer
      setStartAnimation(true);
      setTimeout(() => setStartAnimation(false), 800);
    }
    setTimerRunning(!timerRunning);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    if (isBreak) {
      setTimeLeft(breakLength * 60);
    } else {
      setTimeLeft(sessionLength * 60);
    }
  };

  // Determine glow effect based on progress
  const getGlowEffect = () => {
    if (endAnimation) return "animate-pulse golden-glow shadow-[0_0_25px_rgba(255,215,0,0.4)]";
    if (timerRunning) {
      if (progress > 75) return "golden-glow shadow-[0_0_20px_rgba(255,215,0,0.35)]";
      if (progress > 50) return "golden-glow shadow-[0_0_15px_rgba(255,215,0,0.3)]";
      return "golden-glow";
    }
    return "";
  };

  return (
    <Card 
      className={`${isActive ? "glass-morphism" : "bento-card"} 
        ${getGlowEffect()}
        transition-all duration-300
        ${startAnimation ? "scale-105" : ""}
        ${endAnimation ? "animate-pulse" : ""}
      `}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-3">
            {isBreak ? (
              <BrainCircuit className="h-6 w-6 text-gold-400" />
            ) : (
              <Timer className="h-6 w-6 text-gold-400" />
            )}
            <h2 className="text-xl font-semibold">
              {isBreak ? "Break Time" : "Focus Session"} 
              {sessions > 0 && !isBreak && ` #${sessions + 1}`}
            </h2>
          </div>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
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
                className={`${isBreak ? "text-emerald-400" : "text-gold-400"} transition-all duration-300`}
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
            
            {/* Animated "aura" glow for deep focus */}
            {timerRunning && !isBreak && (
              <div className={`absolute inset-0 rounded-full blur-md opacity-20 ${
                progress > 75 ? "bg-gold-400 animate-pulse" :
                progress > 50 ? "bg-gold-400/80" :
                progress > 25 ? "bg-gold-400/60" : "bg-gold-400/40"
              }`} />
            )}
            
            <div className="text-center z-10">
              <div className="text-4xl font-bold text-gradient-gold">{formatTime(timeLeft)}</div>
              <p className="text-sm text-muted-foreground">
                {isBreak ? "Break time remaining" : "Focus time remaining"}
              </p>
            </div>
            
            {/* Show special effects for milestones */}
            {progress >= 75 && timerRunning && !isBreak && (
              <div className="absolute top-0 right-0">
                <Sparkles className="h-5 w-5 text-gold-400 animate-pulse" />
              </div>
            )}
          </div>
          
          <Progress value={progress} className="w-full h-1.5" />
          
          <div className="flex items-center justify-center gap-3">
            <Button
              onClick={toggleTimer}
              className={`transition-all duration-300 transform hover:scale-105 ${timerRunning 
                ? "bg-charcoal-800 hover:bg-charcoal-700 text-white" 
                : "bg-gold-400 hover:bg-gold-500 text-navy-950"
              }`}
            >
              {timerRunning ? (
                <>
                  <Pause className="mr-2 h-4 w-4" /> Pause
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" /> {progress > 0 ? "Resume" : "Start"}
                </>
              )}
            </Button>
            
            <Button 
              onClick={resetTimer} 
              variant="outline" 
              className="border-charcoal-800/30 hover:border-gold-400/50 transition-all duration-300 transform hover:scale-105"
              disabled={!timerRunning && progress === 0}
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            
            <Button 
              onClick={() => setSoundEnabled(!soundEnabled)} 
              variant="outline" 
              className={`border-charcoal-800/30 ${soundEnabled ? "text-gold-400" : ""} transition-all duration-300 transform hover:scale-105`}
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          </div>
          
          {isActive && (
            <div className="text-sm font-medium text-muted-foreground">
              {isBreak ? (
                <span>Take a moment to rest and recharge</span>
              ) : (
                <span>Stay focused and present in this moment</span>
              )}
            </div>
          )}
          
          {/* Display confetti animation on session completion */}
          {endAnimation && !isBreak && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* This would be replaced with actual confetti animation in a real implementation */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Sparkles className="h-8 w-8 text-gold-400 animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FocusTimer;
