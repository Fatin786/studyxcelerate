
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clipboard, Clock, Lightbulb, BookOpen, Trophy } from "lucide-react";

interface QuickGlanceItem {
  icon: React.ElementType;
  label: string;
  value: string;
  color?: string;
  badge?: string;
}

const QuickGlance = () => {
  // Sample data for quick glance items
  const quickGlanceItems: QuickGlanceItem[] = [
    {
      icon: Clock,
      label: "Next Session",
      value: "Physics - 2:00 PM",
      badge: "Today"
    },
    {
      icon: Clipboard,
      label: "Due Soon",
      value: "Essay Draft",
      badge: "Tomorrow"
    },
    {
      icon: Lightbulb,
      label: "Daily Tip",
      value: "Try the Feynman technique",
      color: "text-gold-400"
    },
    {
      icon: BookOpen,
      label: "Current Progress",
      value: "Chapter 7 - Quantum Physics",
    },
    {
      icon: Trophy,
      label: "Achievement",
      value: "5-Day Study Streak",
      color: "text-gold-400"
    },
  ];

  return (
    <Card className="bento-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">At a Glance</CardTitle>
        <CardDescription>Important updates and reminders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {quickGlanceItems.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col p-3 bg-charcoal-800/20 rounded-lg border border-charcoal-700/30 hover:border-gold-400/30 transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <item.icon className={`h-4 w-4 ${item.color || "text-muted-foreground"}`} />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant="outline" className="text-[10px] h-4 px-1 bg-charcoal-700/50 hover:bg-charcoal-700/80 border-none">
                    {item.badge}
                  </Badge>
                )}
              </div>
              <p className={`text-sm font-medium ${item.color || ""}`}>{item.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickGlance;
