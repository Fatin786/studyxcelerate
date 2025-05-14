
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Users } from "lucide-react";

const MentorPeerConnections = () => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-gold-400" />
          <CardTitle>Mentor & Peer Connections</CardTitle>
        </div>
        <CardDescription>
          Manage your study network and connection preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="auto-approve">Auto-approve Friends</Label>
            <p className="text-sm text-muted-foreground">Automatically accept friend requests from peers in your classes</p>
          </div>
          <Switch id="auto-approve" />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="peer-visibility">Peer Visibility</Label>
            <p className="text-sm text-muted-foreground">Allow peers to see when you're actively studying</p>
          </div>
          <Switch id="peer-visibility" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="mentor-requests">Mentor Requests</Label>
            <p className="text-sm text-muted-foreground">Allow other students to request mentoring from you</p>
          </div>
          <Switch id="mentor-requests" />
        </div>
        
        <Button className="w-full mt-4">Manage Connections</Button>
      </CardContent>
    </Card>
  );
};

export default MentorPeerConnections;
