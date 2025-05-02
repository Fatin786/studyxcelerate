
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const tasks = [
  {
    id: 1,
    title: "Physics Assignment",
    dueDate: "Today, 4:00 PM",
    priority: "High",
  },
  {
    id: 2,
    title: "Literature Essay Draft",
    dueDate: "Tomorrow, 11:59 PM",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Math Practice Problems",
    dueDate: "May 5, 2:00 PM",
    priority: "Low",
  },
];

const priorityColors = {
  "High": "destructive",
  "Medium": "gold-400",
  "Low": "muted",
} as const;

const UpcomingTasks = () => {
  return (
    <Card className="bento-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Upcoming Tasks</CardTitle>
          <Button variant="ghost" size="icon" className="text-gold-400">
            <CalendarDays className="h-5 w-5" />
          </Button>
        </div>
        <CardDescription>Stay on top of your academic work</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between border-t border-charcoal-800/20 px-6 py-3 first:border-none hover:bg-charcoal-800/10 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground hover:text-gold-400"
                >
                  <CheckCircle2 className="h-5 w-5" />
                </Button>
                <div>
                  <p className="text-sm font-medium">{task.title}</p>
                  <p className="text-xs text-muted-foreground">{task.dueDate}</p>
                </div>
              </div>
              <Badge className={`bg-${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                {task.priority}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingTasks;
