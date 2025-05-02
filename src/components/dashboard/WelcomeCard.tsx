
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WelcomeCard = () => {
  const currentHour = new Date().getHours();
  let greeting = "Good morning";
  
  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon";
  } else if (currentHour >= 18) {
    greeting = "Good evening";
  }

  return (
    <Card className="bento-card">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold flex items-center">
          <span className="text-gradient-gold">{greeting}, Student!</span> 
        </CardTitle>
        <CardDescription>
          Your personalized AI study assistant is ready to help
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Track your progress, manage your time, and excel in your studies with StudyXcelerate's AI-powered tools.
          </p>
          <div className="flex items-center gap-3">
            <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500">
              Begin Session
            </Button>
            <Button variant="outline" className="border-gold-400/20 hover:border-gold-400/50 text-gold-400">
              Take Tour <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
