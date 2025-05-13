
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import UnderConstruction from "@/pages/UnderConstruction";
import StudyPlanner from "@/pages/StudyPlanner";
import FocusMode from "@/pages/FocusMode";
import ProgressTracker from "@/pages/ProgressTracker";
import StudyMaterials from "@/pages/StudyMaterials";
import Profile from "@/pages/Profile";
import AIAssistant from "@/pages/AIAssistant";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="/planner" element={<StudyPlanner />} />
      <Route path="/focus" element={<FocusMode />} />
      <Route path="/materials" element={<StudyMaterials />} />
      <Route path="/progress" element={<ProgressTracker />} />
      <Route path="/ai-assistant" element={<AIAssistant />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<UnderConstruction />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
