import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import FocusMode from "@/pages/FocusMode";
import StudyPlanner from "@/pages/StudyPlanner";
import ProgressTracker from "@/pages/ProgressTracker";
import StudyMaterials from "@/pages/StudyMaterials";
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";
import AIAssistant from "@/pages/AIAssistant";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/focus" element={<FocusMode />} />
        <Route path="/planner" element={<StudyPlanner />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/materials" element={<StudyMaterials />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
