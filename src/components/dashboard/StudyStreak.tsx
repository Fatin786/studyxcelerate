
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Trophy, Star, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

const StudyStreak = () => {
  const currentStreak = 7;
  const bestStreak = 14;
  const { toast } = useToast();
  const [showReward, setShowReward] = useState(false);

  // Random reward when clicking on streak
  const triggerRandomReward = () => {
    const rewards = [
      { title: "Bonus Points!", description: "+50 XP for maintaining your streak", variant: "default" },
      { title: "Streak Defender!", description: "You've unlocked a streak shield", variant: "secondary" },
      { title: "Focus Boost!", description: "Next focus session extended by 5 mins", variant: "outline" }
    ];
    
    // Variable reward schedule (30% chance)
    if (Math.random() < 0.3) {
      const reward = rewards[Math.floor(Math.random() * rewards.length)];
      toast({
        title: reward.title,
        description: reward.description,
        variant: "default",
      });
      setShowReward(true);
      setTimeout(() => setShowReward(false), 2000);
    }
  };

  // Calculate streak milestone progress
  const nextMilestone = bestStreak + 7; // Next milestone is 7 days beyond best streak
  const milestoneProgress = Math.min(100, (currentStreak / nextMilestone) * 100);

  return (
    <Card className="bento-card relative overflow-hidden">
      {showReward && (
        <div className="absolute inset-0 bg-gold-400/10 animate-pulse z-10 pointer-events-none"></div>
      )}
      
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-gold-400 animate-pulse-gold" />
            <CardTitle className="text-xl font-semibold">Study Streak</CardTitle>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge 
                  className="bg-charcoal-800 hover:bg-charcoal-700 cursor-pointer"
                  onClick={triggerRandomReward}
                >
                  Level 2
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>Maintain 14 days to reach Level 3!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>Keep your momentum going!</CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="flex items-center justify-center gap-8">
          <div 
            className="text-center cursor-pointer transition-transform hover:scale-105" 
            onClick={triggerRandomReward}
          >
            <div className="text-3xl font-bold text-gradient-gold flex items-center justify-center">
              {currentStreak}
              <Flame className="h-5 w-5 ml-1 text-gold-400" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Current Streak</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold flex items-center justify-center">
              {bestStreak}
              <Trophy className="h-5 w-5 ml-1 text-gold-400" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">Best Streak</p>
          </div>
        </div>
        
        {/* Progress visualization with achievements */}
        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Progress to next milestone</span>
            <span>{currentStreak}/{nextMilestone} days</span>
          </div>
          
          <div className="relative">
            <div className="h-2 bg-charcoal-800/50 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-gold-300 to-gold-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${milestoneProgress}%` }}
              />
            </div>
            
            {/* Milestones on progress bar */}
            <div className="absolute top-0 left-0 right-0 h-2">
              {[7, 14, 21].map((milestone) => {
                const position = (milestone / nextMilestone) * 100;
                const achieved = currentStreak >= milestone;
                return (
                  <TooltipProvider key={milestone}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div 
                          className={`absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                            achieved ? 'bg-gold-400 border-gold-200' : 'bg-charcoal-700 border-charcoal-600'
                          }`}
                          style={{ left: `${position}%` }}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="flex items-center gap-1">
                          {achieved ? (
                            <Star className="h-3 w-3 text-gold-400" />
                          ) : (
                            <Star className="h-3 w-3 text-muted-foreground" />
                          )}
                          <span>{milestone}-day milestone</span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded ${
                i < 5 ? "bg-gold-400" : "bg-charcoal-800/50"
              }`}
            />
          ))}
        </div>
        
        <div className="mt-4 bg-charcoal-800/30 p-3 rounded-lg border border-charcoal-700/50">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-gold-400 flex-shrink-0" />
            <p className="text-xs">
              Study 2 more days to beat your record and earn the <span className="text-gold-400 font-medium">Consistency Master</span> badge!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreak;
