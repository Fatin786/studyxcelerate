
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar, CalendarDays, BrainCircuit, Smartphone, Award, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const SessionSettings = () => {
  const [calendarSync, setCalendarSync] = useState(true);
  const [wearableIntegration, setWearableIntegration] = useState(false);
  const [sessionStreak, setSessionStreak] = useState(7);
  const [teamMode, setTeamMode] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");
  
  const handleSaveSettings = () => {
    toast.success("Settings saved successfully");
  };
  
  const handleConnectDevice = () => {
    toast.info("Looking for wearable devices...", {
      description: "This would connect to your smartwatch or fitness tracker"
    });
  };
  
  const handleSyncCalendar = () => {
    toast.success("Calendar sync initiated", {
      description: "Your study sessions are being added to your calendar"
    });
  };
  
  const handleWebhookSave = () => {
    if (!webhookUrl) {
      toast.error("Please enter a valid webhook URL");
      return;
    }
    
    toast.success("Integration saved", {
      description: "Your focus sessions will now trigger the external webhook"
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bento-card">
        <CardHeader>
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <Calendar className="h-5 w-5 text-gold-400" />
            Contextual Awareness
          </CardTitle>
          <CardDescription>
            Connect your focus sessions with other tools and services
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-0.5">
              <Label className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-2 text-gold-400" />
                Calendar Integration
              </Label>
              <p className="text-xs text-muted-foreground">
                Sync with Google Calendar or Office 365
              </p>
            </div>
            <Switch checked={calendarSync} onCheckedChange={setCalendarSync} />
          </div>
          
          {calendarSync && (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                className="flex-1 border-gold-400/20"
                onClick={handleSyncCalendar}
              >
                Sync Calendar
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-gold-400/20"
                onClick={() => {
                  toast.info("Calendar settings", {
                    description: "Configure which calendars to include"
                  });
                }}
              >
                Settings
              </Button>
            </div>
          )}
          
          <Separator />
          
          <div className="flex justify-between items-start">
            <div className="space-y-0.5">
              <Label className="flex items-center">
                <Smartphone className="h-4 w-4 mr-2 text-gold-400" />
                Wearable Integration
              </Label>
              <p className="text-xs text-muted-foreground">
                Connect with smartwatches for heart rate and focus tracking
              </p>
            </div>
            <Switch checked={wearableIntegration} onCheckedChange={setWearableIntegration} />
          </div>
          
          {wearableIntegration && (
            <Button 
              variant="outline" 
              className="w-full border-gold-400/20"
              onClick={handleConnectDevice}
            >
              Connect Device
            </Button>
          )}
          
          <Separator />
          
          <div className="space-y-3">
            <Label htmlFor="webhook-url" className="flex items-center gap-1">
              Zapier Webhook Integration
            </Label>
            <p className="text-xs text-muted-foreground">
              Connect with Zapier to trigger actions when focus sessions start or end
            </p>
            <div className="flex gap-2">
              <Input 
                id="webhook-url"
                placeholder="https://hooks.zapier.com/..."
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
              />
              <Button 
                onClick={handleWebhookSave}
                className="bg-gold-400 hover:bg-gold-500 text-navy-950"
              >
                Save
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bento-card">
        <CardHeader>
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <Award className="h-5 w-5 text-gold-400" />
            Social & Gamification
          </CardTitle>
          <CardDescription>
            Make focus more engaging with social features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 border border-gold-400/20 rounded-md bg-charcoal-900/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/20">
                <Star className="h-5 w-5 text-gold-400" />
              </div>
              <div>
                <h3 className="font-medium flex items-center gap-1">
                  Focus Streak: <span className="text-gold-400">{sessionStreak} days</span>
                </h3>
                <p className="text-xs text-muted-foreground">
                  Keep it up! You're building great habits.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-start">
            <div className="space-y-0.5">
              <Label className="text-base">Team Focus Mode</Label>
              <p className="text-xs text-muted-foreground">
                Join focus sessions with friends or classmates
              </p>
            </div>
            <Switch checked={teamMode} onCheckedChange={setTeamMode} />
          </div>
          
          {teamMode && (
            <Button 
              variant="outline" 
              className="w-full border-gold-400/20"
              onClick={() => {
                toast.info("Team focus", {
                  description: "Create or join a team focus room"
                });
              }}
            >
              Create Focus Room
            </Button>
          )}
          
          <Separator />
          
          <div className="space-y-2">
            <h3 className="font-medium flex items-center gap-1">
              <BrainCircuit className="h-4 w-4 text-gold-400" />
              Weekly Challenge
            </h3>
            <div className="p-3 bg-charcoal-900/30 rounded-md">
              <p className="text-sm">
                Achieve 10 hours of focused study time this week
              </p>
              <div className="mt-2 h-2 bg-charcoal-800/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gold-400"
                  style={{ width: "35%" }}
                ></div>
              </div>
              <p className="text-xs text-right mt-1 text-muted-foreground">
                3.5 / 10 hours
              </p>
            </div>
          </div>
          
          <Button 
            className="w-full bg-gold-400 hover:bg-gold-500 text-navy-950"
            onClick={handleSaveSettings}
          >
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SessionSettings;
