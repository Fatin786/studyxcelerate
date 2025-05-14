
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Zap } from "lucide-react";

const BetaFeatureOptIn = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Beta settings saved",
      description: "Your beta participation preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-gold-400" />
          <CardTitle>Beta Feature Opt-In</CardTitle>
        </div>
        <CardDescription>
          Try new experimental features before they're officially released
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label htmlFor="ai-features" className="font-medium">Advanced AI Assistant</Label>
              <Badge variant="outline" className="text-gold-400 border-gold-400">New</Badge>
            </div>
            <Switch id="ai-features" defaultChecked />
          </div>
          <p className="text-sm text-muted-foreground -mt-2">
            Enhanced AI capabilities with multimodal input support
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label htmlFor="study-analytics" className="font-medium">Enhanced Analytics</Label>
              <Badge variant="outline">Beta</Badge>
            </div>
            <Switch id="study-analytics" />
          </div>
          <p className="text-sm text-muted-foreground -mt-2">
            Advanced study pattern analysis and personalized recommendations
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Label htmlFor="collaborative-notes" className="font-medium">Collaborative Notes</Label>
              <Badge variant="outline">Alpha</Badge>
            </div>
            <Switch id="collaborative-notes" />
          </div>
          <p className="text-sm text-muted-foreground -mt-2">
            Real-time collaborative note-taking with peers
          </p>
          
          <div className="flex items-center justify-between mt-4">
            <div>
              <Label htmlFor="beta-updates" className="font-medium">Beta Update Notifications</Label>
            </div>
            <Switch id="beta-updates" defaultChecked />
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Beta Feature Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BetaFeatureOptIn;
