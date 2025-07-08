import { useState, useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface SessionMetrics {
  sessionId: string;
  startTime: Date;
  duration: number; // in seconds
  focusScore: number; // 0-100
  interruptionCount: number;
  taskCompletionRate: number; // 0-100
  energyLevelStart: number; // 1-10
  energyLevelEnd?: number; // 1-10
  subjectStudied?: string;
  studyLocation?: string;
  toolsUsed: string[];
  sessionQuality?: number; // 1-10, subjective rating
}

export interface SessionTracker {
  isTracking: boolean;
  currentSession: SessionMetrics | null;
  startSession: (subject?: string, location?: string, energyLevel?: number) => void;
  endSession: (energyLevelEnd?: number, qualityRating?: number) => Promise<void>;
  recordInterruption: () => void;
  updateFocusScore: (score: number) => void;
  updateTaskCompletion: (rate: number) => void;
  addTool: (tool: string) => void;
}

export const useSessionTracking = (): SessionTracker => {
  const [isTracking, setIsTracking] = useState(false);
  const [currentSession, setCurrentSession] = useState<SessionMetrics | null>(null);
  const sessionTimerRef = useRef<number | null>(null);
  const focusCheckInterval = useRef<number | null>(null);

  const startSession = (subject?: string, location?: string, energyLevel: number = 5) => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const newSession: SessionMetrics = {
      sessionId,
      startTime: new Date(),
      duration: 0,
      focusScore: 100, // Start optimistic
      interruptionCount: 0,
      taskCompletionRate: 0,
      energyLevelStart: energyLevel,
      subjectStudied: subject,
      studyLocation: location,
      toolsUsed: ["Studeez Focus Timer"],
    };

    setCurrentSession(newSession);
    setIsTracking(true);

    // Start duration tracking
    sessionTimerRef.current = window.setInterval(() => {
      setCurrentSession(prev => prev ? {
        ...prev,
        duration: Math.floor((Date.now() - prev.startTime.getTime()) / 1000)
      } : null);
    }, 1000);

    // Start focus quality monitoring (simulate periodic checks)
    focusCheckInterval.current = window.setInterval(() => {
      // In a real implementation, this would analyze user activity
      // For now, we'll simulate natural focus degradation with some recovery
      setCurrentSession(prev => {
        if (!prev) return null;
        const timeElapsed = (Date.now() - prev.startTime.getTime()) / 1000 / 60; // minutes
        const baseFocusDecay = Math.max(0, 100 - (timeElapsed * 2)); // 2 points per minute
        const randomVariation = (Math.random() - 0.5) * 10; // ±5 points
        const newFocusScore = Math.max(0, Math.min(100, baseFocusDecay + randomVariation));
        
        return {
          ...prev,
          focusScore: Math.round(newFocusScore)
        };
      });
    }, 30000); // Check every 30 seconds

    console.log("Session started:", newSession);
    toast.success("Study session started", {
      description: subject ? `Studying ${subject}` : "Focus session active"
    });
  };

  const endSession = async (energyLevelEnd: number = 5, qualityRating: number = 5) => {
    if (!currentSession) {
      console.warn("No active session to end");
      return;
    }

    // Stop timers
    if (sessionTimerRef.current) {
      clearInterval(sessionTimerRef.current);
      sessionTimerRef.current = null;
    }
    if (focusCheckInterval.current) {
      clearInterval(focusCheckInterval.current);
      focusCheckInterval.current = null;
    }

    const finalSession = {
      ...currentSession,
      duration: Math.floor((Date.now() - currentSession.startTime.getTime()) / 1000),
      energyLevelEnd,
      sessionQuality: qualityRating
    };

    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Must be logged in to save session");
        return;
      }

      // Save session to database
      const { error } = await supabase
        .from('study_session_analytics')
        .insert({
          user_id: user.id,
          session_date: new Date().toISOString().split('T')[0],
          total_study_time: finalSession.duration / 3600, // Convert to hours
          focus_score: finalSession.focusScore,
          break_adherence: 100, // Will be calculated properly in future
          task_completion_rate: finalSession.taskCompletionRate,
          subjects_studied: finalSession.subjectStudied ? [finalSession.subjectStudied] : [],
          session_quality_rating: finalSession.sessionQuality,
          energy_level_start: finalSession.energyLevelStart,
          energy_level_end: finalSession.energyLevelEnd,
          study_location: finalSession.studyLocation,
          distractions_reported: finalSession.interruptionCount,
          tools_used: finalSession.toolsUsed,
        });

      if (error) {
        console.error("Error saving session:", error);
        toast.error("Failed to save session data");
      } else {
        console.log("Session saved successfully:", finalSession);
        toast.success("Session completed", {
          description: `${Math.round(finalSession.duration / 60)}min session saved`
        });
      }
    } catch (error) {
      console.error("Error saving session:", error);
      toast.error("Failed to save session data");
    }

    setCurrentSession(null);
    setIsTracking(false);
  };

  const recordInterruption = () => {
    setCurrentSession(prev => prev ? {
      ...prev,
      interruptionCount: prev.interruptionCount + 1,
      focusScore: Math.max(0, prev.focusScore - 5) // Reduce focus score on interruption
    } : null);
    
    console.log("Interruption recorded");
  };

  const updateFocusScore = (score: number) => {
    setCurrentSession(prev => prev ? {
      ...prev,
      focusScore: Math.max(0, Math.min(100, score))
    } : null);
  };

  const updateTaskCompletion = (rate: number) => {
    setCurrentSession(prev => prev ? {
      ...prev,
      taskCompletionRate: Math.max(0, Math.min(100, rate))
    } : null);
  };

  const addTool = (tool: string) => {
    setCurrentSession(prev => prev ? {
      ...prev,
      toolsUsed: [...new Set([...prev.toolsUsed, tool])]
    } : null);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (sessionTimerRef.current) {
        clearInterval(sessionTimerRef.current);
      }
      if (focusCheckInterval.current) {
        clearInterval(focusCheckInterval.current);
      }
    };
  }, []);

  return {
    isTracking,
    currentSession,
    startSession,
    endSession,
    recordInterruption,
    updateFocusScore,
    updateTaskCompletion,
    addTool,
  };
};