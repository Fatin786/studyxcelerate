
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Settings, Calendar, Brain, Layers, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PlannerControls = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Target className="h-5 w-5 text-gold-400" />
          Plan Controls
        </CardTitle>
        <CardDescription>
          Adjust your study plan parameters
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Study Goals</span>
            <Button variant="outline" size="sm" className="h-7 px-2 gap-1">
              <Settings className="h-3.5 w-3.5" />
              <span className="text-xs">Adjust</span>
            </Button>
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-none">Physics Exam</Badge>
            <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-none">Chemistry Lab</Badge>
            <Badge variant="outline" className="bg-amber-500/20 text-amber-400 border-none">Literature Essay</Badge>
            <Badge variant="outline" className="bg-green-500/20 text-green-400 border-none">CS Project</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Schedule Constraints</span>
            <Button variant="outline" size="sm" className="h-7 px-2 gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span className="text-xs">Edit</span>
            </Button>
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <div className="flex justify-between p-1.5 border border-charcoal-800/30 rounded">
              <span>Start Time:</span>
              <span className="text-gold-400">9:00 AM</span>
            </div>
            <div className="flex justify-between p-1.5 border border-charcoal-800/30 rounded">
              <span>End Time:</span>
              <span className="text-gold-400">8:00 PM</span>
            </div>
            <div className="flex justify-between p-1.5 border border-charcoal-800/30 rounded">
              <span>Break Duration:</span>
              <span className="text-gold-400">30 min</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Focus Parameters</span>
            <Button variant="outline" size="sm" className="h-7 px-2 gap-1">
              <Brain className="h-3.5 w-3.5" />
              <span className="text-xs">Adjust</span>
            </Button>
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="bg-gold-400/20 text-gold-400 border-none">25-min Pomodoro</Badge>
            <Badge variant="outline" className="bg-gold-400/20 text-gold-400 border-none">Medium Intensity</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">View Options</span>
            <Button variant="outline" size="sm" className="h-7 px-2 gap-1">
              <Layers className="h-3.5 w-3.5" />
              <span className="text-xs">Toggle</span>
            </Button>
          </div>
          <div className="flex flex-wrap gap-1">
            <Badge variant="outline" className="bg-charcoal-800/30 border-gold-400/50">Energy Curve</Badge>
            <Badge variant="outline" className="bg-charcoal-800/30 border-gold-400/50">Focus Mesh</Badge>
            <Badge variant="outline" className="bg-charcoal-800/30 border-gold-400/50">Deadlines</Badge>
          </div>
        </div>

        <Button className="w-full bg-gold-400 text-navy-950 hover:bg-gold-500 gap-1">
          <Zap className="h-4 w-4" />
          Regenerate Optimized Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlannerControls;
