
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CollaborativeStudySettings = () => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Collaborative Study Settings</CardTitle>
        <CardDescription>
          Configure how you collaborate with others during group study sessions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="auto-join">Auto-Join Study Rooms</Label>
            <p className="text-sm text-muted-foreground">Automatically join scheduled group sessions</p>
          </div>
          <Switch id="auto-join" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="screen-share">Default Screen Sharing</Label>
            <p className="text-sm text-muted-foreground">Allow screen sharing in collaborative sessions by default</p>
          </div>
          <Switch id="screen-share" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="private-rooms">Private Study Rooms Only</Label>
            <p className="text-sm text-muted-foreground">Only join password-protected study rooms</p>
          </div>
          <Switch id="private-rooms" />
        </div>
      </CardContent>
    </Card>
  );
};

export default CollaborativeStudySettings;
