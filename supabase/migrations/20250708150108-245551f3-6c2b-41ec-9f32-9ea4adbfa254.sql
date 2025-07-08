-- Create user profiles table with comprehensive student information
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Basic profile information
  first_name TEXT,
  last_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  timezone TEXT DEFAULT 'UTC',
  
  -- Academic information
  institution TEXT,
  major TEXT,
  year_level TEXT,
  expected_graduation DATE,
  gpa DECIMAL(3,2),
  
  UNIQUE(user_id)
);

-- Create learning preferences table
CREATE TABLE public.learning_preferences (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Learning style preferences
  visual_learner BOOLEAN DEFAULT false,
  auditory_learner BOOLEAN DEFAULT false,
  kinesthetic_learner BOOLEAN DEFAULT false,
  reading_writing_learner BOOLEAN DEFAULT false,
  
  -- Study preferences
  preferred_session_length INTEGER DEFAULT 25, -- minutes
  preferred_break_length INTEGER DEFAULT 5, -- minutes
  optimal_study_blocks INTEGER DEFAULT 4, -- number of blocks per session
  focus_music_preference TEXT, -- 'none', 'instrumental', 'nature', 'white_noise'
  
  -- Environment preferences
  preferred_study_environment TEXT, -- 'quiet', 'moderate_noise', 'collaborative'
  notification_preferences JSONB DEFAULT '{}',
  reminder_style TEXT DEFAULT 'gentle', -- 'gentle', 'assertive', 'minimal'
  
  UNIQUE(user_id)
);

-- Create productivity patterns table
CREATE TABLE public.productivity_patterns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Time-based productivity data
  peak_focus_hours JSONB DEFAULT '[]', -- Array of hour ranges like [{"start": 9, "end": 11}, {"start": 14, "end": 16}]
  low_energy_hours JSONB DEFAULT '[]', -- Array of hour ranges when energy is typically low
  best_study_days JSONB DEFAULT '[]', -- Array of weekday preferences [1,2,3,4,5] for Mon-Fri
  
  -- Performance metrics
  average_focus_score DECIMAL(5,2) DEFAULT 0.0,
  average_session_completion DECIMAL(5,2) DEFAULT 0.0,
  streak_maintenance_rate DECIMAL(5,2) DEFAULT 0.0,
  
  -- Behavioral patterns
  procrastination_tendency TEXT DEFAULT 'moderate', -- 'low', 'moderate', 'high'
  task_switching_frequency TEXT DEFAULT 'normal', -- 'low', 'normal', 'high'
  break_adherence_rate DECIMAL(5,2) DEFAULT 0.0,
  
  UNIQUE(user_id)
);

-- Create goal hierarchies table
CREATE TABLE public.goals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_goal_id UUID REFERENCES public.goals(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Goal information
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL, -- 'academic', 'personal', 'career', 'habit', 'project'
  priority TEXT NOT NULL DEFAULT 'medium', -- 'low', 'medium', 'high', 'urgent'
  status TEXT NOT NULL DEFAULT 'active', -- 'active', 'completed', 'paused', 'cancelled'
  
  -- Timeline and tracking
  target_date DATE,
  start_date DATE DEFAULT CURRENT_DATE,
  completion_date DATE,
  progress_percentage DECIMAL(5,2) DEFAULT 0.0,
  
  -- Quantifiable metrics
  target_value DECIMAL(10,2), -- For quantifiable goals (e.g., target GPA, study hours)
  current_value DECIMAL(10,2) DEFAULT 0.0,
  unit TEXT, -- 'hours', 'points', 'percentage', 'count'
  
  -- AI optimization data
  estimated_effort_hours DECIMAL(8,2),
  actual_effort_hours DECIMAL(8,2) DEFAULT 0.0,
  difficulty_level INTEGER CHECK (difficulty_level BETWEEN 1 AND 10),
  
  -- Reminders and preferences
  reminder_enabled BOOLEAN DEFAULT true,
  reminder_frequency TEXT DEFAULT 'weekly' -- 'daily', 'weekly', 'monthly', 'milestone'
);

-- Create performance baselines table
CREATE TABLE public.performance_baselines (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject_area TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Academic performance metrics
  baseline_grade DECIMAL(5,2),
  current_grade DECIMAL(5,2),
  grade_trend TEXT, -- 'improving', 'stable', 'declining'
  
  -- Study efficiency metrics
  average_study_time_per_assignment DECIMAL(8,2), -- hours
  assignment_completion_rate DECIMAL(5,2), -- percentage
  on_time_submission_rate DECIMAL(5,2), -- percentage
  
  -- Learning velocity metrics
  concepts_mastered_per_week DECIMAL(5,2),
  retention_rate DECIMAL(5,2), -- percentage of material retained over time
  application_success_rate DECIMAL(5,2), -- success rate on applied learning tasks
  
  -- Difficulty assessment
  subject_difficulty_rating INTEGER CHECK (subject_difficulty_rating BETWEEN 1 AND 10),
  time_investment_rating INTEGER CHECK (time_investment_rating BETWEEN 1 AND 10),
  
  -- Historical tracking
  performance_history JSONB DEFAULT '[]', -- Array of timestamped performance data points
  
  UNIQUE(user_id, subject_area)
);

-- Create study session analytics table
CREATE TABLE public.study_session_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Session metrics
  total_study_time DECIMAL(8,2) DEFAULT 0.0, -- hours
  focus_score DECIMAL(5,2) DEFAULT 0.0,
  break_adherence DECIMAL(5,2) DEFAULT 0.0,
  task_completion_rate DECIMAL(5,2) DEFAULT 0.0,
  
  -- Contextual data
  subjects_studied JSONB DEFAULT '[]',
  session_quality_rating INTEGER CHECK (session_quality_rating BETWEEN 1 AND 10),
  energy_level_start INTEGER CHECK (energy_level_start BETWEEN 1 AND 10),
  energy_level_end INTEGER CHECK (energy_level_end BETWEEN 1 AND 10),
  
  -- Environmental factors
  study_location TEXT,
  distractions_reported INTEGER DEFAULT 0,
  tools_used JSONB DEFAULT '[]',
  
  UNIQUE(user_id, session_date)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.productivity_patterns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.performance_baselines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.study_session_analytics ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.profiles FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for learning_preferences
CREATE POLICY "Users can view their own learning preferences" ON public.learning_preferences FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own learning preferences" ON public.learning_preferences FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own learning preferences" ON public.learning_preferences FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for productivity_patterns
CREATE POLICY "Users can view their own productivity patterns" ON public.productivity_patterns FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own productivity patterns" ON public.productivity_patterns FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own productivity patterns" ON public.productivity_patterns FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for goals
CREATE POLICY "Users can view their own goals" ON public.goals FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own goals" ON public.goals FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own goals" ON public.goals FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own goals" ON public.goals FOR DELETE USING (auth.uid() = user_id);

-- Create RLS policies for performance_baselines
CREATE POLICY "Users can view their own performance baselines" ON public.performance_baselines FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own performance baselines" ON public.performance_baselines FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own performance baselines" ON public.performance_baselines FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for study_session_analytics
CREATE POLICY "Users can view their own study analytics" ON public.study_session_analytics FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update their own study analytics" ON public.study_session_analytics FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own study analytics" ON public.study_session_analytics FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_learning_preferences_updated_at BEFORE UPDATE ON public.learning_preferences FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_productivity_patterns_updated_at BEFORE UPDATE ON public.productivity_patterns FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_goals_updated_at BEFORE UPDATE ON public.goals FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_performance_baselines_updated_at BEFORE UPDATE ON public.performance_baselines FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX idx_learning_preferences_user_id ON public.learning_preferences(user_id);
CREATE INDEX idx_productivity_patterns_user_id ON public.productivity_patterns(user_id);
CREATE INDEX idx_goals_user_id ON public.goals(user_id);
CREATE INDEX idx_goals_parent_goal_id ON public.goals(parent_goal_id);
CREATE INDEX idx_goals_status ON public.goals(status);
CREATE INDEX idx_goals_category ON public.goals(category);
CREATE INDEX idx_performance_baselines_user_id ON public.performance_baselines(user_id);
CREATE INDEX idx_performance_baselines_subject ON public.performance_baselines(subject_area);
CREATE INDEX idx_study_session_analytics_user_id ON public.study_session_analytics(user_id);
CREATE INDEX idx_study_session_analytics_date ON public.study_session_analytics(session_date);

-- Create a trigger to automatically create a profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, first_name, last_name)
  VALUES (NEW.id, NEW.raw_user_meta_data ->> 'first_name', NEW.raw_user_meta_data ->> 'last_name');
  
  INSERT INTO public.learning_preferences (user_id)
  VALUES (NEW.id);
  
  INSERT INTO public.productivity_patterns (user_id)
  VALUES (NEW.id);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();