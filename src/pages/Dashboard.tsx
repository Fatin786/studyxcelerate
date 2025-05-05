
import { useEffect } from "react";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import QuickGlance from "@/components/dashboard/QuickGlance";
import QuickStats from "@/components/dashboard/QuickStats";
import UpcomingTasks from "@/components/dashboard/UpcomingTasks";
import StudyStats from "@/components/dashboard/StudyStats";
import FocusSession from "@/components/dashboard/FocusSession";
import RecommendedCard from "@/components/dashboard/RecommendedCard";
import StudyStreak from "@/components/dashboard/StudyStreak";
import StudyResourcesCard from "@/components/dashboard/StudyResourcesCard";
import DraggableDashboard from "@/components/dashboard/DraggableDashboard";
import "@/components/dashboard/DashboardStyles.css";

const Dashboard = () => {
  // Add a class to the body to ensure proper styling for the grid
  useEffect(() => {
    document.body.classList.add('dashboard-page');
    return () => {
      document.body.classList.remove('dashboard-page');
    };
  }, []);

  return (
    <DraggableDashboard>
      <WelcomeCard />
      <QuickStats />
      <QuickGlance />
      <StudyStreak />
      <StudyStats />
      <FocusSession />
      <UpcomingTasks />
      <RecommendedCard />
      <StudyResourcesCard />
    </DraggableDashboard>
  );
};

export default Dashboard;
