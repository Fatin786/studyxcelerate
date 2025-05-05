
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

const AIExplanationPanel = () => {
  return (
    <Card className="bg-gradient-to-br from-navy-900/50 to-charcoal-900/50 border-gold-400/30">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <div className="mt-0.5">
            <div className="p-2 bg-gold-400/20 rounded-md">
              <BrainCircuit className="h-5 w-5 text-gold-400" />
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-semibold text-gold-400">AI Planning Reasoning</h3>
              <p className="text-xs text-muted-foreground">
                Here's why your schedule is optimized this way:
              </p>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="space-y-1">
                <h4 className="font-medium">Energy Optimization</h4>
                <p className="text-xs text-muted-foreground">
                  Your Physics session is scheduled first (9:00 AM) because your historical data shows 
                  85% comprehension rate for complex topics in the morning. Chemistry follows to 
                  create subject diversity, reducing cognitive fatigue.
                </p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-medium">Break Distribution</h4>
                <p className="text-xs text-muted-foreground">
                  30-minute break after Physics aligns with your focus decay metrics (typically 
                  90 minutes before a 15% drop). I've extended lunch to 1 hour based on your 
                  previous patterns and calendar commitments.
                </p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-medium">Calendar Integration</h4>
                <p className="text-xs text-muted-foreground">
                  Math class at 2:00 PM is imported from your school calendar. Literature is 
                  scheduled after a 30-minute buffer to accommodate potential class overrun and 
                  allow mental context switching.
                </p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-medium">Evening Sequence</h4>
                <p className="text-xs text-muted-foreground">
                  Computer Science project is placed last as your interaction data indicates you
                  prefer hands-on coding activities in the evening, with a 75% completion rate
                  for similar evening sessions.
                </p>
              </div>
            </div>
            
            <div className="pt-1 text-xs">
              <span className="text-gold-400 font-medium">Try adjusting:</span> Drag any study block to a new time and I'll instantly recalculate the optimal schedule.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIExplanationPanel;
