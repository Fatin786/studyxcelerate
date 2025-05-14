
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Bell } from "lucide-react";

const NotificationCustomizer = () => {
  const { toast } = useToast();
  
  const [notifications, setNotifications] = useState({
    email: {
      studySessions: true,
      goalReminders: true,
      badgeAchievements: true,
      mentorMessages: true
    },
    push: {
      studySessions: true,
      goalReminders: true,
      badgeAchievements: false,
      mentorMessages: true
    },
    inApp: {
      studySessions: true,
      goalReminders: true,
      badgeAchievements: true,
      mentorMessages: true
    },
    sms: {
      studySessions: false,
      goalReminders: false,
      badgeAchievements: false,
      mentorMessages: false
    }
  });

  const handleToggleChange = (channel, type) => {
    setNotifications({
      ...notifications,
      [channel]: {
        ...notifications[channel],
        [type]: !notifications[channel][type]
      }
    });
  };

  const handleSaveSettings = () => {
    toast({
      title: "Notification settings saved",
      description: "Your notification preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-gold-400" />
          <CardTitle>Notification Customizer</CardTitle>
        </div>
        <CardDescription>
          Control which notifications you receive and how they are delivered
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1"></div>
            <div className="text-center text-sm font-medium">Email</div>
            <div className="text-center text-sm font-medium">Push</div>
            <div className="text-center text-sm font-medium">In-app</div>
            <div className="text-center text-sm font-medium">SMS</div>
          </div>
          
          <Separator />
          
          {/* Study Sessions */}
          <div className="grid grid-cols-5 items-center gap-4">
            <div className="col-span-1">
              <Label className="text-sm">Study Sessions</Label>
              <p className="text-xs text-muted-foreground">Reminders about upcoming sessions</p>
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.email.studySessions}
                onCheckedChange={() => handleToggleChange('email', 'studySessions')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.push.studySessions}
                onCheckedChange={() => handleToggleChange('push', 'studySessions')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.inApp.studySessions}
                onCheckedChange={() => handleToggleChange('inApp', 'studySessions')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.sms.studySessions}
                onCheckedChange={() => handleToggleChange('sms', 'studySessions')}
              />
            </div>
          </div>
          
          <Separator />
          
          {/* Goal Reminders */}
          <div className="grid grid-cols-5 items-center gap-4">
            <div className="col-span-1">
              <Label className="text-sm">Goal Reminders</Label>
              <p className="text-xs text-muted-foreground">Alerts about approaching deadlines</p>
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.email.goalReminders}
                onCheckedChange={() => handleToggleChange('email', 'goalReminders')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.push.goalReminders}
                onCheckedChange={() => handleToggleChange('push', 'goalReminders')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.inApp.goalReminders}
                onCheckedChange={() => handleToggleChange('inApp', 'goalReminders')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.sms.goalReminders}
                onCheckedChange={() => handleToggleChange('sms', 'goalReminders')}
              />
            </div>
          </div>
          
          <Separator />
          
          {/* Badge Achievements */}
          <div className="grid grid-cols-5 items-center gap-4">
            <div className="col-span-1">
              <Label className="text-sm">Badge Achievements</Label>
              <p className="text-xs text-muted-foreground">Notifications when you earn badges</p>
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.email.badgeAchievements}
                onCheckedChange={() => handleToggleChange('email', 'badgeAchievements')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.push.badgeAchievements}
                onCheckedChange={() => handleToggleChange('push', 'badgeAchievements')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.inApp.badgeAchievements}
                onCheckedChange={() => handleToggleChange('inApp', 'badgeAchievements')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.sms.badgeAchievements}
                onCheckedChange={() => handleToggleChange('sms', 'badgeAchievements')}
              />
            </div>
          </div>
          
          <Separator />
          
          {/* Mentor Messages */}
          <div className="grid grid-cols-5 items-center gap-4">
            <div className="col-span-1">
              <Label className="text-sm">Mentor Messages</Label>
              <p className="text-xs text-muted-foreground">Messages from your mentors</p>
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.email.mentorMessages}
                onCheckedChange={() => handleToggleChange('email', 'mentorMessages')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.push.mentorMessages}
                onCheckedChange={() => handleToggleChange('push', 'mentorMessages')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.inApp.mentorMessages}
                onCheckedChange={() => handleToggleChange('inApp', 'mentorMessages')}
              />
            </div>
            <div className="flex justify-center">
              <Switch 
                checked={notifications.sms.mentorMessages}
                onCheckedChange={() => handleToggleChange('sms', 'mentorMessages')}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Notification Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationCustomizer;
