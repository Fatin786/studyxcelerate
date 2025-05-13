
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Flame, Award, Star, Trophy, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample milestone data
const milestones = [
  {
    id: 1,
    name: "First Steps",
    description: "Completed 25% of the course",
    icon: Star,
    achieved: true,
    progress: 100,
    color: "text-gold-400",
    bgColor: "bg-gold-400/20",
    date: "May 5, 2025",
  },
  {
    id: 2,
    name: "Halfway There",
    description: "Completed 50% of the course",
    icon: Medal,
    achieved: true,
    progress: 100,
    color: "text-gold-400",
    bgColor: "bg-gold-400/20",
    date: "May 10, 2025",
  },
  {
    id: 3,
    name: "Almost There",
    description: "Completed 75% of the course",
    icon: Trophy,
    achieved: false,
    progress: 60,
    color: "text-muted-foreground",
    bgColor: "bg-muted/30",
    date: null,
  },
  {
    id: 4,
    name: "Course Master",
    description: "Completed 100% of the course",
    icon: Award,
    achieved: false,
    progress: 20,
    color: "text-muted-foreground",
    bgColor: "bg-muted/30",
    date: null,
  },
];

const MilestoneAchievements = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col gap-4 p-1">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className={cn(
              "relative flex items-center space-x-3 rounded-lg p-2 transition-colors",
              milestone.achieved ? "hover:bg-gold-400/10" : "opacity-70"
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                milestone.bgColor
              )}
            >
              <milestone.icon className={cn("h-5 w-5", milestone.color)} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center">
                <p
                  className={cn(
                    "text-sm font-medium",
                    milestone.achieved ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {milestone.name}
                </p>
                {milestone.achieved && (
                  <Badge
                    variant="outline"
                    className="ml-2 bg-gold-400/10 text-gold-400 border-gold-400/20 text-[10px]"
                  >
                    Unlocked
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {milestone.description}
              </p>
              {milestone.achieved ? (
                <p className="text-[10px] text-muted-foreground mt-1">
                  Achieved on {milestone.date}
                </p>
              ) : (
                <div className="w-full bg-muted/30 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-gold-400/50 h-1.5 rounded-full"
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneAchievements;
