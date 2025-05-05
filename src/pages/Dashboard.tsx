
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

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <WelcomeCard />
        </div>
        <div className="md:col-span-4">
          {/* Empty column for balance */}
        </div>
      </div>
      
      <QuickStats />
      
      <QuickGlance />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StudyStreak />
        <StudyStats />
        <FocusSession />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UpcomingTasks />
        <RecommendedCard />
        <StudyResourcesCard />
      </div>
    </div>
  );
};

export default Dashboard;
