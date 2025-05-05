
import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import UnderConstruction from "@/pages/UnderConstruction";
import StudyPlanner from "@/pages/StudyPlanner";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="/planner" element={<StudyPlanner />} />
      <Route path="/focus" element={<UnderConstruction />} />
      <Route path="/materials" element={<UnderConstruction />} />
      <Route path="/progress" element={<UnderConstruction />} />
      <Route path="/ai-assistant" element={<UnderConstruction />} />
      <Route path="/profile" element={<UnderConstruction />} />
      <Route path="/settings" element={<UnderConstruction />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
