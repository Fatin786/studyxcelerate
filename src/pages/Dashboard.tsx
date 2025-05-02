
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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2">
          <WelcomeCard />
        </div>
        
        <div className="md:col-span-2 lg:col-span-3">
          <QuickStats />
        </div>
        
        <div className="md:col-span-2 lg:col-span-3">
          <QuickGlance />
        </div>
        
        <div>
          <StudyStreak />
        </div>

        <div>
          <StudyStats />
        </div>
        
        <div>
          <FocusSession />
        </div>
        
        <div>
          <UpcomingTasks />
        </div>
        
        <div>
          <RecommendedCard />
        </div>
        
        <div>
          <StudyResourcesCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
