import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Tables, TablesInsert, TablesUpdate } from "@/integrations/supabase/types";

type Task = Tables<"tasks">;
type TaskInsert = TablesInsert<"tasks">;
type TaskUpdate = TablesUpdate<"tasks">;
type TaskSession = Tables<"task_sessions">;

export const useTasks = (filters?: {
  status?: string;
  subject_area?: string;
  task_type?: string;
  due_before?: string;
}) => {
  return useQuery({
    queryKey: ["tasks", filters],
    queryFn: async () => {
      console.log("Fetching tasks with filters:", filters);
      
      let query = supabase
        .from("tasks")
        .select(`
          *,
          parent_task:parent_task_id(*),
          sub_tasks:tasks!parent_task_id(*),
          goal:goals(*)
        `)
        .order("due_date", { ascending: true, nullsFirst: false });

      if (filters?.status) {
        query = query.eq("status", filters.status);
      }
      if (filters?.subject_area) {
        query = query.eq("subject_area", filters.subject_area);
      }
      if (filters?.task_type) {
        query = query.eq("task_type", filters.task_type);
      }
      if (filters?.due_before) {
        query = query.lte("due_date", filters.due_before);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error("Error fetching tasks:", error);
        throw error;
      }
      
      console.log("Fetched tasks:", data);
      return data || [];
    },
  });
};

export const useTask = (taskId: string) => {
  return useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      console.log("Fetching task:", taskId);
      
      const { data, error } = await supabase
        .from("tasks")
        .select(`
          *,
          parent_task:parent_task_id(*),
          sub_tasks:tasks!parent_task_id(*),
          goal:goals(*),
          task_sessions(*)
        `)
        .eq("id", taskId)
        .single();
      
      if (error) {
        console.error("Error fetching task:", error);
        throw error;
      }
      
      console.log("Fetched task:", data);
      return data;
    },
    enabled: !!taskId,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (task: TaskInsert) => {
      console.log("Creating task:", task);
      
      const { data, error } = await supabase
        .from("tasks")
        .insert([task])
        .select()
        .single();
      
      if (error) {
        console.error("Error creating task:", error);
        throw error;
      }
      
      console.log("Created task:", data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast({
        title: "Task created",
        description: "Your task has been created successfully.",
      });
    },
    onError: (error) => {
      console.error("Failed to create task:", error);
      toast({
        title: "Error",
        description: "Failed to create task. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, ...updates }: TaskUpdate & { id: string }) => {
      console.log("Updating task:", id, updates);
      
      const { data, error } = await supabase
        .from("tasks")
        .update(updates)
        .eq("id", id)
        .select()
        .single();
      
      if (error) {
        console.error("Error updating task:", error);
        throw error;
      }
      
      console.log("Updated task:", data);
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task", data.id] });
      toast({
        title: "Task updated",
        description: "Your task has been updated successfully.",
      });
    },
    onError: (error) => {
      console.error("Failed to update task:", error);
      toast({
        title: "Error",
        description: "Failed to update task. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (taskId: string) => {
      console.log("Deleting task:", taskId);
      
      const { error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", taskId);
      
      if (error) {
        console.error("Error deleting task:", error);
        throw error;
      }
      
      console.log("Deleted task:", taskId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast({
        title: "Task deleted",
        description: "Your task has been deleted successfully.",
      });
    },
    onError: (error) => {
      console.error("Failed to delete task:", error);
      toast({
        title: "Error",
        description: "Failed to delete task. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export const useTaskSessions = (taskId: string) => {
  return useQuery({
    queryKey: ["task-sessions", taskId],
    queryFn: async () => {
      console.log("Fetching task sessions for task:", taskId);
      
      const { data, error } = await supabase
        .from("task_sessions")
        .select("*")
        .eq("task_id", taskId)
        .order("started_at", { ascending: false });
      
      if (error) {
        console.error("Error fetching task sessions:", error);
        throw error;
      }
      
      console.log("Fetched task sessions:", data);
      return data || [];
    },
    enabled: !!taskId,
  });
};

export const useCreateTaskSession = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (session: Omit<TaskSession, "id" | "created_at">) => {
      console.log("Creating task session:", session);
      
      const { data, error } = await supabase
        .from("task_sessions")
        .insert([session])
        .select()
        .single();
      
      if (error) {
        console.error("Error creating task session:", error);
        throw error;
      }
      
      console.log("Created task session:", data);
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["task-sessions", data.task_id] });
      queryClient.invalidateQueries({ queryKey: ["task", data.task_id] });
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      console.error("Failed to create task session:", error);
      toast({
        title: "Error",
        description: "Failed to save task session. Please try again.",
        variant: "destructive",
      });
    },
  });
};

export const useTaskAnalytics = () => {
  return useQuery({
    queryKey: ["task-analytics"],
    queryFn: async () => {
      console.log("Fetching task analytics");
      
      // Get task completion stats
      const { data: completionStats, error: completionError } = await supabase
        .from("tasks")
        .select("status, estimated_duration_minutes, actual_duration_minutes, estimated_difficulty, actual_difficulty, success_score")
        .not("completed_at", "is", null);

      if (completionError) {
        console.error("Error fetching completion stats:", completionError);
        throw completionError;
      }

      // Get upcoming tasks
      const today = new Date().toISOString();
      const { data: upcomingTasks, error: upcomingError } = await supabase
        .from("tasks")
        .select("*")
        .gte("due_date", today)
        .in("status", ["not_started", "in_progress"])
        .order("due_date", { ascending: true })
        .limit(5);

      if (upcomingError) {
        console.error("Error fetching upcoming tasks:", upcomingError);
        throw upcomingError;
      }

      // Calculate analytics
      const totalCompleted = completionStats?.length || 0;
      const avgTimeAccuracy = totalCompleted > 0 
        ? completionStats?.reduce((acc, task) => {
            if (task.estimated_duration_minutes && task.actual_duration_minutes) {
              const accuracy = Math.abs(task.estimated_duration_minutes - task.actual_duration_minutes) / task.estimated_duration_minutes;
              return acc + (1 - accuracy);
            }
            return acc;
          }, 0) / totalCompleted * 100
        : 0;

      const avgDifficultyAccuracy = totalCompleted > 0
        ? completionStats?.reduce((acc, task) => {
            if (task.estimated_difficulty && task.actual_difficulty) {
              const accuracy = 1 - Math.abs(task.estimated_difficulty - task.actual_difficulty) / 10;
              return acc + accuracy;
            }
            return acc;
          }, 0) / totalCompleted * 100
        : 0;

      const avgSuccessScore = totalCompleted > 0
        ? completionStats?.reduce((acc, task) => acc + (task.success_score || 0), 0) / totalCompleted
        : 0;

      const analytics = {
        totalCompleted,
        avgTimeAccuracy: Math.round(avgTimeAccuracy),
        avgDifficultyAccuracy: Math.round(avgDifficultyAccuracy),
        avgSuccessScore: Math.round(avgSuccessScore * 10), // Convert to 1-100 scale
        upcomingTasks: upcomingTasks || [],
      };

      console.log("Task analytics:", analytics);
      return analytics;
    },
  });
};