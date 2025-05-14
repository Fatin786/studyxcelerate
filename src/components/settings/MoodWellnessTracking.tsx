
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Smile } from "lucide-react";

const MoodWellnessTracking = () => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Smile className="h-5 w-5 text-gold-400" />
          <CardTitle>Mood & Wellness Tracking</CardTitle>
        </div>
        <CardDescription>
          Configure how your emotional well-being is tracked to optimize study habits
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="mood-tracking">Enable Mood Tracking</Label>
            <p className="text-sm text-muted-foreground">Track mood patterns alongside your study sessions</p>
          </div>
          <Switch id="mood-tracking" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="wellness-reminders">Wellness Reminders</Label>
            <p className="text-sm text-muted-foreground">Receive break and hydration reminders during study</p>
          </div>
          <Switch id="wellness-reminders" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="mood-analytics">Mood Analytics</Label>
            <p className="text-sm text-muted-foreground">Analyze how your mood affects study performance</p>
          </div>
          <Switch id="mood-analytics" defaultChecked />
        </div>
        
        <Button className="w-full mt-4 bg-gold-400 text-navy-950 hover:bg-gold-500">
          View Wellness Dashboard
        </Button>
      </CardContent>
    </Card>
  );
};

export default MoodWellnessTracking;
