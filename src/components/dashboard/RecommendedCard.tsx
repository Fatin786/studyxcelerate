
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, ArrowRight } from "lucide-react";

const RecommendedCard = () => {
  return (
    <Card className="bento-card bg-gradient-to-br from-charcoal-950 to-navy-900">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-gold-400" />
          <CardTitle className="text-xl font-semibold">AI Recommendation</CardTitle>
        </div>
        <CardDescription>Personalized for your study habits</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm">
            Based on your study patterns, we recommend focusing on <span className="text-gold-400 font-medium">Physics Chapter 7</span> today. You have an upcoming exam and this topic needs attention.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Suggested time: 45 minutes</p>
              <p className="text-xs text-muted-foreground">Difficulty: Challenging</p>
            </div>
            <Button variant="ghost" className="text-gold-400 hover:bg-gold-400/10">
              <span>View Plan</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendedCard;
