export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      goals: {
        Row: {
          actual_effort_hours: number | null
          category: string
          completion_date: string | null
          created_at: string
          current_value: number | null
          description: string | null
          difficulty_level: number | null
          estimated_effort_hours: number | null
          id: string
          parent_goal_id: string | null
          priority: string
          progress_percentage: number | null
          reminder_enabled: boolean | null
          reminder_frequency: string | null
          start_date: string | null
          status: string
          target_date: string | null
          target_value: number | null
          title: string
          unit: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_effort_hours?: number | null
          category: string
          completion_date?: string | null
          created_at?: string
          current_value?: number | null
          description?: string | null
          difficulty_level?: number | null
          estimated_effort_hours?: number | null
          id?: string
          parent_goal_id?: string | null
          priority?: string
          progress_percentage?: number | null
          reminder_enabled?: boolean | null
          reminder_frequency?: string | null
          start_date?: string | null
          status?: string
          target_date?: string | null
          target_value?: number | null
          title: string
          unit?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_effort_hours?: number | null
          category?: string
          completion_date?: string | null
          created_at?: string
          current_value?: number | null
          description?: string | null
          difficulty_level?: number | null
          estimated_effort_hours?: number | null
          id?: string
          parent_goal_id?: string | null
          priority?: string
          progress_percentage?: number | null
          reminder_enabled?: boolean | null
          reminder_frequency?: string | null
          start_date?: string | null
          status?: string
          target_date?: string | null
          target_value?: number | null
          title?: string
          unit?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "goals_parent_goal_id_fkey"
            columns: ["parent_goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
        ]
      }
      learning_preferences: {
        Row: {
          auditory_learner: boolean | null
          created_at: string
          focus_music_preference: string | null
          id: string
          kinesthetic_learner: boolean | null
          notification_preferences: Json | null
          optimal_study_blocks: number | null
          preferred_break_length: number | null
          preferred_session_length: number | null
          preferred_study_environment: string | null
          reading_writing_learner: boolean | null
          reminder_style: string | null
          updated_at: string
          user_id: string
          visual_learner: boolean | null
        }
        Insert: {
          auditory_learner?: boolean | null
          created_at?: string
          focus_music_preference?: string | null
          id?: string
          kinesthetic_learner?: boolean | null
          notification_preferences?: Json | null
          optimal_study_blocks?: number | null
          preferred_break_length?: number | null
          preferred_session_length?: number | null
          preferred_study_environment?: string | null
          reading_writing_learner?: boolean | null
          reminder_style?: string | null
          updated_at?: string
          user_id: string
          visual_learner?: boolean | null
        }
        Update: {
          auditory_learner?: boolean | null
          created_at?: string
          focus_music_preference?: string | null
          id?: string
          kinesthetic_learner?: boolean | null
          notification_preferences?: Json | null
          optimal_study_blocks?: number | null
          preferred_break_length?: number | null
          preferred_session_length?: number | null
          preferred_study_environment?: string | null
          reading_writing_learner?: boolean | null
          reminder_style?: string | null
          updated_at?: string
          user_id?: string
          visual_learner?: boolean | null
        }
        Relationships: []
      }
      performance_baselines: {
        Row: {
          application_success_rate: number | null
          assignment_completion_rate: number | null
          average_study_time_per_assignment: number | null
          baseline_grade: number | null
          concepts_mastered_per_week: number | null
          created_at: string
          current_grade: number | null
          grade_trend: string | null
          id: string
          on_time_submission_rate: number | null
          performance_history: Json | null
          retention_rate: number | null
          subject_area: string
          subject_difficulty_rating: number | null
          time_investment_rating: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          application_success_rate?: number | null
          assignment_completion_rate?: number | null
          average_study_time_per_assignment?: number | null
          baseline_grade?: number | null
          concepts_mastered_per_week?: number | null
          created_at?: string
          current_grade?: number | null
          grade_trend?: string | null
          id?: string
          on_time_submission_rate?: number | null
          performance_history?: Json | null
          retention_rate?: number | null
          subject_area: string
          subject_difficulty_rating?: number | null
          time_investment_rating?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          application_success_rate?: number | null
          assignment_completion_rate?: number | null
          average_study_time_per_assignment?: number | null
          baseline_grade?: number | null
          concepts_mastered_per_week?: number | null
          created_at?: string
          current_grade?: number | null
          grade_trend?: string | null
          id?: string
          on_time_submission_rate?: number | null
          performance_history?: Json | null
          retention_rate?: number | null
          subject_area?: string
          subject_difficulty_rating?: number | null
          time_investment_rating?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      productivity_patterns: {
        Row: {
          average_focus_score: number | null
          average_session_completion: number | null
          best_study_days: Json | null
          break_adherence_rate: number | null
          created_at: string
          id: string
          low_energy_hours: Json | null
          peak_focus_hours: Json | null
          procrastination_tendency: string | null
          streak_maintenance_rate: number | null
          task_switching_frequency: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          average_focus_score?: number | null
          average_session_completion?: number | null
          best_study_days?: Json | null
          break_adherence_rate?: number | null
          created_at?: string
          id?: string
          low_energy_hours?: Json | null
          peak_focus_hours?: Json | null
          procrastination_tendency?: string | null
          streak_maintenance_rate?: number | null
          task_switching_frequency?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          average_focus_score?: number | null
          average_session_completion?: number | null
          best_study_days?: Json | null
          break_adherence_rate?: number | null
          created_at?: string
          id?: string
          low_energy_hours?: Json | null
          peak_focus_hours?: Json | null
          procrastination_tendency?: string | null
          streak_maintenance_rate?: number | null
          task_switching_frequency?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          expected_graduation: string | null
          first_name: string | null
          gpa: number | null
          id: string
          institution: string | null
          last_name: string | null
          major: string | null
          timezone: string | null
          updated_at: string
          user_id: string
          year_level: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          expected_graduation?: string | null
          first_name?: string | null
          gpa?: number | null
          id?: string
          institution?: string | null
          last_name?: string | null
          major?: string | null
          timezone?: string | null
          updated_at?: string
          user_id: string
          year_level?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          expected_graduation?: string | null
          first_name?: string | null
          gpa?: number | null
          id?: string
          institution?: string | null
          last_name?: string | null
          major?: string | null
          timezone?: string | null
          updated_at?: string
          user_id?: string
          year_level?: string | null
        }
        Relationships: []
      }
      study_session_analytics: {
        Row: {
          break_adherence: number | null
          created_at: string
          distractions_reported: number | null
          energy_level_end: number | null
          energy_level_start: number | null
          focus_score: number | null
          id: string
          session_date: string
          session_quality_rating: number | null
          study_location: string | null
          subjects_studied: Json | null
          task_completion_rate: number | null
          tools_used: Json | null
          total_study_time: number | null
          user_id: string
        }
        Insert: {
          break_adherence?: number | null
          created_at?: string
          distractions_reported?: number | null
          energy_level_end?: number | null
          energy_level_start?: number | null
          focus_score?: number | null
          id?: string
          session_date?: string
          session_quality_rating?: number | null
          study_location?: string | null
          subjects_studied?: Json | null
          task_completion_rate?: number | null
          tools_used?: Json | null
          total_study_time?: number | null
          user_id: string
        }
        Update: {
          break_adherence?: number | null
          created_at?: string
          distractions_reported?: number | null
          energy_level_end?: number | null
          energy_level_start?: number | null
          focus_score?: number | null
          id?: string
          session_date?: string
          session_quality_rating?: number | null
          study_location?: string | null
          subjects_studied?: Json | null
          task_completion_rate?: number | null
          tools_used?: Json | null
          total_study_time?: number | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
