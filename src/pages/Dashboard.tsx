
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
import ClickSpark from "@/components/ui/ClickSpark";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <ClickSpark sparkColor="#fbbf24" sparkCount={12} sparkRadius={20} duration={600}>
            <WelcomeCard />
          </ClickSpark>
        </div>
        <div className="md:col-span-4">
          {/* Empty column for balance */}
        </div>
      </div>
      
      <ClickSpark sparkColor="#fbbf24" sparkCount={10} sparkRadius={15} duration={500}>
        <QuickStats />
      </ClickSpark>
      
      <ClickSpark sparkColor="#fbbf24" sparkCount={8} sparkRadius={12} duration={400}>
        <QuickGlance />
      </ClickSpark>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ClickSpark sparkColor="#fbbf24" sparkCount={6} sparkRadius={15} duration={500}>
          <StudyStreak />
        </ClickSpark>
        <ClickSpark sparkColor="#fbbf24" sparkCount={8} sparkRadius={15} duration={500}>
          <StudyStats />
        </ClickSpark>
        <ClickSpark sparkColor="#fbbf24" sparkCount={10} sparkRadius={18} duration={600}>
          <FocusSession />
        </ClickSpark>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ClickSpark sparkColor="#fbbf24" sparkCount={8} sparkRadius={15} duration={500}>
          <UpcomingTasks />
        </ClickSpark>
        <ClickSpark sparkColor="#fbbf24" sparkCount={8} sparkRadius={15} duration={500}>
          <RecommendedCard />
        </ClickSpark>
        <ClickSpark sparkColor="#fbbf24" sparkCount={8} sparkRadius={15} duration={500}>
          <StudyResourcesCard />
        </ClickSpark>
      </div>
    </div>
  );
};

export default Dashboard;
