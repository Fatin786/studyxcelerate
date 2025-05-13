
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface GoalTrackerProps {
  detailed?: boolean;
}

// Sample goals data
const goalsData = [
  {
    id: 1,
    title: "Complete Programming Fundamentals Course",
    description: "Finish all modules and quizzes",
    progress: 82,
    dueDate: "May 20, 2025",
    category: "Courses",
    isCustom: false,
    status: "in-progress",
  },
  {
    id: 2,
    title: "Practice Coding Problems",
    description: "Solve at least 30 problems",
    progress: 100,
    dueDate: "May 12, 2025",
    category: "Practice",
    isCustom: true,
    status: "completed",
  },
  {
    id: 3,
    title: "Read 'Clean Code' Book",
    description: "Complete chapters 1-7",
    progress: 45,
    dueDate: "May 25, 2025",
    category: "Reading",
    isCustom: true,
    status: "in-progress",
  },
  {
    id: 4,
    title: "Build Personal Portfolio Website",
    description: "Create and deploy a simple portfolio",
    progress: 0,
    dueDate: "June 10, 2025",
    category: "Projects",
    isCustom: false,
    status: "not-started",
  },
];

const GoalTracker: React.FC<GoalTrackerProps> = ({ detailed = false }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500 text-white";
      case "in-progress":
        return "bg-amber-500 text-white";
      case "not-started":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "not-started":
        return "Not Started";
      default:
        return status;
    }
  };
  
  const getProgressColor = (progress: number) => {
    if (progress >= 100) return "bg-green-500";
    if (progress >= 80) return "bg-amber-500";
    if (progress > 0) return "bg-blue-500";
    return "bg-muted";
  };

  return (
    <div className="w-full h-full overflow-auto pr-1">
      <ul className="space-y-4">
        {goalsData.map((goal) => (
          <li
            key={goal.id}
            className={cn(
              "border border-border/50 rounded-lg p-3 transition-all hover:border-gold-400/30",
              goal.status === "completed" && "border-green-500/20 bg-green-500/5"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                {goal.status === "completed" ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <Target className="h-5 w-5 text-gold-400 mr-2" />
                )}
                <h4 className="font-medium text-sm">{goal.title}</h4>
              </div>
              <Badge
                className={cn("text-xs", getStatusColor(goal.status))}
              >
                {getStatusText(goal.status)}
              </Badge>
            </div>
            
            {detailed && (
              <p className="text-xs text-muted-foreground mb-3">
                {goal.description}
              </p>
            )}
            
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium">{goal.progress}%</span>
              <div className="flex items-center">
                <Clock className="h-3 w-3 text-muted-foreground mr-1" />
                <span className="text-xs text-muted-foreground">Due {goal.dueDate}</span>
              </div>
            </div>
            
            <Progress
              value={goal.progress}
              className={cn("h-1.5", getProgressColor(goal.progress))}
            />
            
            {detailed && (
              <div className="mt-3 flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {goal.category}
                </Badge>
                {goal.isCustom && (
                  <Badge variant="outline" className="text-xs bg-gold-400/10 text-gold-400 border-gold-400/20">
                    Custom Goal
                  </Badge>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalTracker;
