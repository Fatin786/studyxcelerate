
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

const PrivacyVisibility = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Privacy settings saved",
      description: "Your privacy preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-gold-400" />
          <CardTitle>Privacy & Visibility</CardTitle>
        </div>
        <CardDescription>
          Control what information is visible to others and what remains private
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Profile Visibility</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="public-profile">Public Profile</Label>
              <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
            </div>
            <Switch id="public-profile" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="search-visibility">Search Visibility</Label>
              <p className="text-sm text-muted-foreground">Allow others to find you in study partner searches</p>
            </div>
            <Switch id="search-visibility" defaultChecked />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Data Sharing</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="share-progress">Study Progress</Label>
              <p className="text-sm text-muted-foreground">Share module completion with peers</p>
            </div>
            <Switch id="share-progress" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="share-streaks">Study Streaks</Label>
              <p className="text-sm text-muted-foreground">Share daily study streaks</p>
            </div>
            <Switch id="share-streaks" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="share-achievements">Achievements</Label>
              <p className="text-sm text-muted-foreground">Share badges and milestones</p>
            </div>
            <Switch id="share-achievements" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="share-goals">Goals</Label>
              <p className="text-sm text-muted-foreground">Share study goals and progress</p>
            </div>
            <Switch id="share-goals" />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Social Features</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="leaderboard">Appear on Leaderboards</Label>
              <p className="text-sm text-muted-foreground">Show your stats on leaderboards</p>
            </div>
            <Switch id="leaderboard" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="activity-feed">Show in Activity Feed</Label>
              <p className="text-sm text-muted-foreground">Display your milestones in community feeds</p>
            </div>
            <Switch id="activity-feed" />
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Privacy Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrivacyVisibility;
