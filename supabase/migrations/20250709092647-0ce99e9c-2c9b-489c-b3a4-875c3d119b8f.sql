-- Create tasks table for flexible academic task management
CREATE TABLE public.tasks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_task_id UUID REFERENCES public.tasks(id) ON DELETE CASCADE,
  goal_id UUID REFERENCES public.goals(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Basic task information
  title TEXT NOT NULL,
  description TEXT,
  subject_area TEXT NOT NULL,
  task_type TEXT NOT NULL DEFAULT 'assignment', -- 'assignment', 'project', 'reading', 'practice', 'exam_prep', 'research'
  status TEXT NOT NULL DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed', 'cancelled', 'overdue'
  priority TEXT NOT NULL DEFAULT 'medium', -- 'low', 'medium', 'high', 'urgent'
  
  -- Time tracking
  due_date TIMESTAMP WITH TIME ZONE,
  estimated_duration_minutes INTEGER, -- estimated time to complete in minutes
  actual_duration_minutes INTEGER DEFAULT 0, -- actual time spent
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  
  -- Difficulty and success metrics
  estimated_difficulty INTEGER CHECK (estimated_difficulty BETWEEN 1 AND 10),
  actual_difficulty INTEGER CHECK (actual_difficulty BETWEEN 1 AND 10),
  success_score INTEGER CHECK (success_score BETWEEN 1 AND 10), -- self-rated success
  grade_received DECIMAL(5,2), -- actual grade if applicable
  grade_scale TEXT DEFAULT 'percentage', -- 'percentage', 'gpa', 'letter', 'points'
  
  -- Academic details
  course_code TEXT,
  instructor TEXT,
  assignment_weight DECIMAL(5,2), -- percentage weight in overall grade
  submission_method TEXT, -- 'online', 'in_person', 'email', 'printed'
  
  -- Progress tracking
  progress_percentage DECIMAL(5,2) DEFAULT 0.0,
  completion_confidence INTEGER CHECK (completion_confidence BETWEEN 1 AND 10),
  
  -- Metadata
  tags JSONB DEFAULT '[]', -- flexible tagging system
  resources_needed JSONB DEFAULT '[]', -- list of resources required
  notes TEXT,
  
  -- Dependency tracking
  depends_on_tasks JSONB DEFAULT '[]', -- array of task IDs this task depends on
  blocks_tasks JSONB DEFAULT '[]' -- array of task IDs blocked by this task
);

-- Create task sessions table to track work sessions on tasks
CREATE TABLE public.task_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  task_id UUID NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Session details
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ended_at TIMESTAMP WITH TIME ZONE,
  duration_minutes INTEGER,
  
  -- Session quality metrics
  focus_score INTEGER CHECK (focus_score BETWEEN 1 AND 10),
  productivity_rating INTEGER CHECK (productivity_rating BETWEEN 1 AND 10),
  interruption_count INTEGER DEFAULT 0,
  energy_level_start INTEGER CHECK (energy_level_start BETWEEN 1 AND 10),
  energy_level_end INTEGER CHECK (energy_level_end BETWEEN 1 AND 10),
  
  -- Progress made
  progress_made_percentage DECIMAL(5,2) DEFAULT 0.0,
  milestones_completed JSONB DEFAULT '[]',
  challenges_encountered TEXT,
  next_steps TEXT
);

-- Create task dependencies table for complex project management
CREATE TABLE public.task_dependencies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  prerequisite_task_id UUID NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
  dependent_task_id UUID NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
  dependency_type TEXT NOT NULL DEFAULT 'finish_to_start', -- 'finish_to_start', 'start_to_start', 'finish_to_finish', 'start_to_finish'
  lag_time_hours INTEGER DEFAULT 0, -- delay between tasks
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  UNIQUE(prerequisite_task_id, dependent_task_id)
);

-- Enable Row Level Security
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_dependencies ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for tasks
CREATE POLICY "Users can view their own tasks" ON public.tasks FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own tasks" ON public.tasks FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own tasks" ON public.tasks FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own tasks" ON public.tasks FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for task_sessions
CREATE POLICY "Users can view their own task sessions" ON public.task_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own task sessions" ON public.task_sessions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own task sessions" ON public.task_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own task sessions" ON public.task_sessions FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for task_dependencies
CREATE POLICY "Users can view dependencies for their tasks" ON public.task_dependencies FOR SELECT 
USING (
  EXISTS (SELECT 1 FROM public.tasks WHERE id = prerequisite_task_id AND user_id = auth.uid()) OR
  EXISTS (SELECT 1 FROM public.tasks WHERE id = dependent_task_id AND user_id = auth.uid())
);
CREATE POLICY "Users can manage dependencies for their tasks" ON public.task_dependencies FOR ALL
USING (
  EXISTS (SELECT 1 FROM public.tasks WHERE id = prerequisite_task_id AND user_id = auth.uid()) AND
  EXISTS (SELECT 1 FROM public.tasks WHERE id = dependent_task_id AND user_id = auth.uid())
);

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON public.tasks FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to automatically update task progress and completion
CREATE OR REPLACE FUNCTION public.update_task_status()
RETURNS TRIGGER AS $$
BEGIN
  -- Auto-complete task if progress reaches 100%
  IF NEW.progress_percentage >= 100 AND OLD.status != 'completed' THEN
    NEW.status = 'completed';
    NEW.completed_at = now();
  END IF;
  
  -- Set status to in_progress if progress > 0 and status is not_started
  IF NEW.progress_percentage > 0 AND OLD.status = 'not_started' THEN
    NEW.status = 'in_progress';
    NEW.started_at = COALESCE(NEW.started_at, now());
  END IF;
  
  -- Mark as overdue if past due date and not completed
  IF NEW.due_date IS NOT NULL AND NEW.due_date < now() AND NEW.status NOT IN ('completed', 'cancelled') THEN
    NEW.status = 'overdue';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for task status updates
CREATE TRIGGER task_status_update BEFORE UPDATE ON public.tasks FOR EACH ROW EXECUTE FUNCTION public.update_task_status();

-- Create function to calculate actual duration from sessions
CREATE OR REPLACE FUNCTION public.update_task_duration()
RETURNS TRIGGER AS $$
BEGIN
  -- Update the task's actual duration based on session data
  UPDATE public.tasks 
  SET actual_duration_minutes = (
    SELECT COALESCE(SUM(duration_minutes), 0)
    FROM public.task_sessions 
    WHERE task_id = NEW.task_id
  )
  WHERE id = NEW.task_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update task duration when sessions are added/updated
CREATE TRIGGER update_task_duration_on_session AFTER INSERT OR UPDATE OR DELETE ON public.task_sessions 
FOR EACH ROW EXECUTE FUNCTION public.update_task_duration();

-- Create indexes for better performance
CREATE INDEX idx_tasks_user_id ON public.tasks(user_id);
CREATE INDEX idx_tasks_parent_task_id ON public.tasks(parent_task_id);
CREATE INDEX idx_tasks_goal_id ON public.tasks(goal_id);
CREATE INDEX idx_tasks_status ON public.tasks(status);
CREATE INDEX idx_tasks_due_date ON public.tasks(due_date);
CREATE INDEX idx_tasks_subject_area ON public.tasks(subject_area);
CREATE INDEX idx_tasks_task_type ON public.tasks(task_type);
CREATE INDEX idx_task_sessions_task_id ON public.task_sessions(task_id);
CREATE INDEX idx_task_sessions_user_id ON public.task_sessions(user_id);
CREATE INDEX idx_task_dependencies_prerequisite ON public.task_dependencies(prerequisite_task_id);
CREATE INDEX idx_task_dependencies_dependent ON public.task_dependencies(dependent_task_id);