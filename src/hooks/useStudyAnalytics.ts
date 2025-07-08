import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

export interface StudyAnalytics {
  totalHours: number;
  avgFocusScore: number;
  sessionsCompleted: number;
  avgSessionLength: number;
  taskCompletionRate: number;
  weeklyGoalProgress: number;
  topSubjects: string[];
  energyTrends: {
    morning: number;
    afternoon: number;
    evening: number;
  };
  productivityTrend: 'improving' | 'stable' | 'declining';
}

export interface WeeklyStats {
  currentWeek: StudyAnalytics;
  lastWeek: StudyAnalytics;
  weekOverWeekChange: {
    hours: number;
    focusScore: number;
    sessions: number;
  };
}

export const useStudyAnalytics = (timeframe: 'week' | 'month' = 'week') => {
  const fetchStudyAnalytics = async (): Promise<WeeklyStats> => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("Not authenticated");

    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay()); // Start of current week
    weekStart.setHours(0, 0, 0, 0);

    const lastWeekStart = new Date(weekStart);
    lastWeekStart.setDate(weekStart.getDate() - 7);

    const lastWeekEnd = new Date(weekStart);
    lastWeekEnd.setTime(weekStart.getTime() - 1);

    // Current week data
    const { data: currentWeekData } = await supabase
      .from('study_session_analytics')
      .select('*')
      .eq('user_id', user.id)
      .gte('session_date', weekStart.toISOString().split('T')[0]);

    // Last week data
    const { data: lastWeekData } = await supabase
      .from('study_session_analytics')
      .select('*')
      .eq('user_id', user.id)
      .gte('session_date', lastWeekStart.toISOString().split('T')[0])
      .lte('session_date', lastWeekEnd.toISOString().split('T')[0]);

    const calculateAnalytics = (sessions: any[]): StudyAnalytics => {
      if (!sessions || sessions.length === 0) {
        return {
          totalHours: 0,
          avgFocusScore: 0,
          sessionsCompleted: 0,
          avgSessionLength: 0,
          taskCompletionRate: 0,
          weeklyGoalProgress: 0,
          topSubjects: [],
          energyTrends: { morning: 0, afternoon: 0, evening: 0 },
          productivityTrend: 'stable'
        };
      }

      const totalHours = sessions.reduce((sum, s) => sum + (s.total_study_time || 0), 0);
      const avgFocusScore = sessions.reduce((sum, s) => sum + (s.focus_score || 0), 0) / sessions.length;
      const avgTaskCompletion = sessions.reduce((sum, s) => sum + (s.task_completion_rate || 0), 0) / sessions.length;
      const avgSessionLength = (totalHours / sessions.length) * 60; // in minutes

      // Extract subjects
      const allSubjects = sessions
        .flatMap(s => s.subjects_studied || [])
        .filter(subject => typeof subject === 'string' && subject.length > 0);
      
      const subjectCounts: Record<string, number> = {};
      allSubjects.forEach(subject => {
        subjectCounts[subject] = (subjectCounts[subject] || 0) + 1;
      });
      
      const topSubjects = Object.entries(subjectCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3)
        .map(([subject]) => subject);

      return {
        totalHours,
        avgFocusScore: Math.round(avgFocusScore),
        sessionsCompleted: sessions.length,
        avgSessionLength: Math.round(avgSessionLength),
        taskCompletionRate: Math.round(avgTaskCompletion),
        weeklyGoalProgress: Math.round((totalHours / 25) * 100), // Assuming 25hr weekly goal
        topSubjects,
        energyTrends: { morning: 0, afternoon: 0, evening: 0 }, // Would calculate from timestamps
        productivityTrend: 'stable' // Would calculate from historical comparison
      };
    };

    const currentWeek = calculateAnalytics(currentWeekData || []);
    const lastWeek = calculateAnalytics(lastWeekData || []);

    const weekOverWeekChange = {
      hours: currentWeek.totalHours - lastWeek.totalHours,
      focusScore: currentWeek.avgFocusScore - lastWeek.avgFocusScore,
      sessions: currentWeek.sessionsCompleted - lastWeek.sessionsCompleted,
    };

    return {
      currentWeek,
      lastWeek,
      weekOverWeekChange
    };
  };

  return useQuery({
    queryKey: ['study-analytics', timeframe],
    queryFn: fetchStudyAnalytics,
    refetchInterval: 60000, // Refetch every minute to keep data current
  });
};

// Hook for real-time session metrics
export const useRealTimeMetrics = () => {
  const [metrics, setMetrics] = useState({
    todayHours: 0,
    todaySessions: 0,
    currentStreak: 0,
    weekProgress: 0,
  });

  useEffect(() => {
    const fetchTodayMetrics = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const today = new Date().toISOString().split('T')[0];
      
      const { data: todayData } = await supabase
        .from('study_session_analytics')
        .select('total_study_time')
        .eq('user_id', user.id)
        .eq('session_date', today);

      if (todayData) {
        const todayHours = todayData.reduce((sum, s) => sum + (s.total_study_time || 0), 0);
        setMetrics(prev => ({
          ...prev,
          todayHours,
          todaySessions: todayData.length,
        }));
      }
    };

    fetchTodayMetrics();
    const interval = setInterval(fetchTodayMetrics, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return metrics;
};