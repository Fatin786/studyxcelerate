
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

const CalendarSyncControl = () => {
  const { toast } = useToast();
  
  const [calendars, setCalendars] = useState({
    google: { enabled: true, direction: "bidirectional" },
    outlook: { enabled: false, direction: "readonly" },
    apple: { enabled: true, direction: "readonly" }
  });

  const handleToggleCalendar = (calendar) => {
    setCalendars({
      ...calendars,
      [calendar]: {
        ...calendars[calendar],
        enabled: !calendars[calendar].enabled
      }
    });
  };

  const handleDirectionChange = (calendar, value) => {
    setCalendars({
      ...calendars,
      [calendar]: {
        ...calendars[calendar],
        direction: value
      }
    });
  };

  const handleSaveSettings = () => {
    toast({
      title: "Calendar settings saved",
      description: "Your calendar sync preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-gold-400" />
          <CardTitle>Calendar Sync Control</CardTitle>
        </div>
        <CardDescription>
          Manage how your study sessions integrate with external calendars
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Connected Calendars</h3>
          
          {/* Google Calendar */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <div>
              <Label className="font-medium">Google Calendar</Label>
              <p className="text-xs text-muted-foreground">Last synced: 1 hour ago</p>
            </div>
            <div>
              <Select 
                value={calendars.google.direction} 
                onValueChange={(value) => handleDirectionChange("google", value)}
                disabled={!calendars.google.enabled}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sync direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="readonly">Read-Only (Import Only)</SelectItem>
                  <SelectItem value="writeonly">Write-Only (Export Only)</SelectItem>
                  <SelectItem value="bidirectional">Bi-Directional (Full Sync)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Switch
                checked={calendars.google.enabled}
                onCheckedChange={() => handleToggleCalendar("google")}
              />
            </div>
          </div>
          
          <Separator />
          
          {/* Outlook Calendar */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <div>
              <Label className="font-medium">Outlook Calendar</Label>
              <p className="text-xs text-muted-foreground">Last synced: Never</p>
            </div>
            <div>
              <Select 
                value={calendars.outlook.direction} 
                onValueChange={(value) => handleDirectionChange("outlook", value)}
                disabled={!calendars.outlook.enabled}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sync direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="readonly">Read-Only (Import Only)</SelectItem>
                  <SelectItem value="writeonly">Write-Only (Export Only)</SelectItem>
                  <SelectItem value="bidirectional">Bi-Directional (Full Sync)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Switch
                checked={calendars.outlook.enabled}
                onCheckedChange={() => handleToggleCalendar("outlook")}
              />
            </div>
          </div>
          
          <Separator />
          
          {/* Apple Calendar */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4">
            <div>
              <Label className="font-medium">Apple Calendar</Label>
              <p className="text-xs text-muted-foreground">Last synced: 2 days ago</p>
            </div>
            <div>
              <Select 
                value={calendars.apple.direction} 
                onValueChange={(value) => handleDirectionChange("apple", value)}
                disabled={!calendars.apple.enabled}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sync direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="readonly">Read-Only (Import Only)</SelectItem>
                  <SelectItem value="writeonly">Write-Only (Export Only)</SelectItem>
                  <SelectItem value="bidirectional">Bi-Directional (Full Sync)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end">
              <Switch
                checked={calendars.apple.enabled}
                onCheckedChange={() => handleToggleCalendar("apple")}
              />
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Sync Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sync-frequency">Sync Frequency</Label>
              <Select defaultValue="30">
                <SelectTrigger>
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">Every 15 minutes</SelectItem>
                  <SelectItem value="30">Every 30 minutes</SelectItem>
                  <SelectItem value="60">Every hour</SelectItem>
                  <SelectItem value="manual">Manual sync only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="event-color">Calendar Event Color</Label>
              <Select defaultValue="gold">
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gold">Gold</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="inherit">Use Calendar Default</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch id="conflict-resolution" defaultChecked />
            <div>
              <Label htmlFor="conflict-resolution">Smart Conflict Resolution</Label>
              <p className="text-xs text-muted-foreground">
                Automatically resolve scheduling conflicts between study sessions and external events
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline">
            Force Sync Now
          </Button>
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Calendar Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarSyncControl;
