
import { CalendarDays, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTasks } from "@/hooks/useTasks";
import { formatDistanceToNow } from "date-fns";

const priorityColors = {
  "high": "bg-red-500/20 text-red-400",
  "medium": "bg-yellow-500/20 text-yellow-400",
  "low": "bg-green-500/20 text-green-400",
  "urgent": "bg-purple-500/20 text-purple-400",
} as const;

const UpcomingTasks = () => {
  const { data: tasks, isLoading } = useTasks({ 
    due_before: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() 
  });

  const upcomingTasks = tasks?.filter(task => 
    task.status === 'not_started' || task.status === 'in_progress'
  ).slice(0, 5) || [];

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
        {isLoading ? (
          <div className="p-6">
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 bg-charcoal-800/30 rounded animate-pulse" />
                  <div className="h-3 bg-charcoal-800/30 rounded animate-pulse w-2/3" />
                </div>
              ))}
            </div>
          </div>
        ) : upcomingTasks.length > 0 ? (
          <div className="space-y-1">
            {upcomingTasks.map((task) => (
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
                    <p className="text-xs text-muted-foreground">
                      {task.due_date 
                        ? formatDistanceToNow(new Date(task.due_date), { addSuffix: true })
                        : 'No due date'
                      }
                    </p>
                  </div>
                </div>
                <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
                  {task.priority}
                </Badge>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <CheckCircle2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No upcoming tasks</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpcomingTasks;
