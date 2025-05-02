
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BookCheck, BookOpen, Brain } from "lucide-react";

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  description: string;
  trend?: string;
  color?: string;
}

const StatCard = ({ icon: Icon, title, value, description, trend, color }: StatCardProps) => (
  <div className="bg-charcoal-800/30 rounded-lg p-4 border border-charcoal-700/30 hover:border-gold-400/30 transition-all">
    <div className="flex items-center justify-between mb-2">
      <div className={`rounded-full p-2 ${color || "bg-gold-400/10"}`}>
        <Icon className={`h-5 w-5 ${color ? "text-white" : "text-gold-400"}`} />
      </div>
      {trend && (
        <span className={`text-xs font-medium ${trend.includes("+") ? "text-green-400" : "text-red-400"}`}>
          {trend}
        </span>
      )}
    </div>
    <h3 className="text-xl font-semibold text-white">{value}</h3>
    <p className="text-sm text-muted-foreground">{title}</p>
    <p className="text-xs text-muted-foreground mt-1">{description}</p>
  </div>
);

const QuickStats = () => {
  const stats: StatCardProps[] = [
    {
      icon: Activity,
      title: "Weekly Study Hours",
      value: "18.5h",
      description: "Across all subjects",
      trend: "+2.5h",
      color: "bg-blue-500"
    },
    {
      icon: BookCheck,
      title: "Assignments Completed",
      value: "12/15",
      description: "This week",
      trend: "+3",
      color: "bg-green-600"
    },
    {
      icon: Brain,
      title: "Focus Score",
      value: "83%",
      description: "Average concentration",
      trend: "+7%",
      color: "bg-purple-600"
    },
    {
      icon: BookOpen,
      title: "Learning Efficiency",
      value: "92%",
      description: "Based on quiz results",
      trend: "+5%",
      color: "bg-amber-500"
    }
  ];

  return (
    <Card className="bento-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Performance Overview</CardTitle>
        <CardDescription>Your weekly study metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStats;
