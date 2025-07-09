import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Calendar, 
  Target, 
  AlertCircle, 
  CheckCircle2, 
  Plus,
  BookOpen,
  GraduationCap,
  FileText,
  Zap
} from "lucide-react";
import { useTasks, useTaskAnalytics } from "@/hooks/useTasks";
import { formatDistanceToNow } from "date-fns";

const TaskCard = ({ task }: { task: any }) => {
  const statusColors = {
    not_started: "bg-gray-500/20 text-gray-400 border-gray-400/30",
    in_progress: "bg-blue-500/20 text-blue-400 border-blue-400/30",
    completed: "bg-green-500/20 text-green-400 border-green-400/30",
    overdue: "bg-red-500/20 text-red-400 border-red-400/30",
    cancelled: "bg-gray-500/20 text-gray-400 border-gray-400/30"
  };

  const priorityColors = {
    low: "bg-green-500/20 text-green-400 border-green-400/30",
    medium: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
    high: "bg-orange-500/20 text-orange-400 border-orange-400/30",
    urgent: "bg-red-500/20 text-red-400 border-red-400/30"
  };

  const typeIcons = {
    assignment: FileText,
    project: Target,
    reading: BookOpen,
    practice: Zap,
    exam_prep: GraduationCap,
    research: Target
  };

  const TypeIcon = typeIcons[task.task_type as keyof typeof typeIcons] || FileText;

  return (
    <Card className="bento-card hover:border-gold-400/30 transition-all cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <TypeIcon className="h-4 w-4 text-gold-400" />
            <CardTitle className="text-sm font-medium">{task.title}</CardTitle>
          </div>
          <Badge className={statusColors[task.status as keyof typeof statusColors]}>
            {task.status.replace('_', ' ')}
          </Badge>
        </div>
        <CardDescription className="text-xs">
          {task.subject_area} • {task.course_code}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {task.progress_percentage > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span>Progress</span>
              <span>{task.progress_percentage}%</span>
            </div>
            <Progress value={task.progress_percentage} className="h-1" />
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-2 text-xs">
          {task.due_date && (
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3 text-muted-foreground" />
              <span className={
                new Date(task.due_date) < new Date() && task.status !== 'completed' 
                  ? "text-red-400" 
                  : ""
              }>
                {formatDistanceToNow(new Date(task.due_date), { addSuffix: true })}
              </span>
            </div>
          )}
          
          {task.estimated_duration_minutes && (
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span>{Math.round(task.estimated_duration_minutes / 60)}h est.</span>
            </div>
          )}
          
          {task.estimated_difficulty && (
            <div className="flex items-center gap-1">
              <AlertCircle className="h-3 w-3 text-muted-foreground" />
              <span>Difficulty: {task.estimated_difficulty}/10</span>
            </div>
          )}
          
          <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
            {task.priority}
          </Badge>
        </div>
        
        {task.actual_duration_minutes > 0 && (
          <div className="text-xs text-muted-foreground">
            Spent: {Math.round(task.actual_duration_minutes / 60)}h
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const TaskManagement = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const { data: upcomingTasks } = useTasks({ 
    status: "not_started,in_progress",
    due_before: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() 
  });
  
  const { data: completedTasks } = useTasks({ status: "completed" });
  const { data: overdueTasks } = useTasks({ status: "overdue" });
  const { data: analytics } = useTaskAnalytics();

  return (
    <Card className="bento-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">Task Management</CardTitle>
            <CardDescription>Track your academic assignments and projects</CardDescription>
          </div>
          <Button size="sm" className="bg-gold-400 text-navy-950 hover:bg-gold-500">
            <Plus className="h-4 w-4 mr-1" />
            New Task
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upcoming">
              Upcoming
              {upcomingTasks && upcomingTasks.length > 0 && (
                <Badge className="ml-1 bg-gold-400/20 text-gold-400">
                  {upcomingTasks.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="overdue">
              Overdue
              {overdueTasks && overdueTasks.length > 0 && (
                <Badge className="ml-1 bg-red-500/20 text-red-400">
                  {overdueTasks.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-4 mt-4">
            {upcomingTasks && upcomingTasks.length > 0 ? (
              <div className="grid gap-3">
                {upcomingTasks.slice(0, 5).map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No upcoming tasks. Great job staying on top of things!</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="overdue" className="space-y-4 mt-4">
            {overdueTasks && overdueTasks.length > 0 ? (
              <div className="grid gap-3">
                {overdueTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <CheckCircle2 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No overdue tasks. Excellent work!</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4 mt-4">
            {completedTasks && completedTasks.length > 0 ? (
              <div className="grid gap-3">
                {completedTasks.slice(0, 5).map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Target className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No completed tasks yet. Start working to see your achievements!</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4 mt-4">
            {analytics ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Tasks Completed</span>
                    <span className="text-lg font-bold text-gold-400">{analytics.totalCompleted}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Time Accuracy</span>
                    <span className="text-lg font-bold text-gold-400">{analytics.avgTimeAccuracy}%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Difficulty Accuracy</span>
                    <span className="text-lg font-bold text-gold-400">{analytics.avgDifficultyAccuracy}%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Avg Success Score</span>
                    <span className="text-lg font-bold text-gold-400">{analytics.avgSuccessScore}/100</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Target className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Complete some tasks to see your analytics!</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TaskManagement;