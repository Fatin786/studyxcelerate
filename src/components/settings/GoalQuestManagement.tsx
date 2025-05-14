
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Goal } from "lucide-react";

const GoalQuestManagement = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Goal settings saved",
      description: "Your goal management preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Goal className="h-5 w-5 text-gold-400" />
          <CardTitle>Goal & Quest Management</CardTitle>
        </div>
        <CardDescription>
          Configure how goals and quests are handled in your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-archive">Auto-archive Completed Goals</Label>
              <p className="text-sm text-muted-foreground">Automatically hide completed goals after 7 days</p>
            </div>
            <Switch id="auto-archive" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="daily-goals">Daily Goals Feature</Label>
              <p className="text-sm text-muted-foreground">Enable daily goal tracking system</p>
            </div>
            <Switch id="daily-goals" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="quest-notifications">Quest Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive alerts about new quests and achievements</p>
            </div>
            <Switch id="quest-notifications" defaultChecked />
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Goal Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalQuestManagement;
