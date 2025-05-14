
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const FocusModePreferences = () => {
  const { toast } = useToast();
  const [ambientSounds, setAmbientSounds] = useState(true);
  const [soundVolume, setSoundVolume] = useState(70);
  const [autoPause, setAutoPause] = useState(true);

  const handleSaveSettings = () => {
    toast({
      title: "Focus mode settings saved",
      description: "Your focus mode preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Focus Mode Preferences</CardTitle>
        <CardDescription>
          Customize your focus session environment and behavior
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Session Duration</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="default-duration">Default Session Length</Label>
                <span className="text-sm">25 minutes</span>
              </div>
              <Select defaultValue="25">
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="25">25 minutes (Pomodoro)</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">60 minutes</SelectItem>
                  <SelectItem value="90">90 minutes</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <Label htmlFor="break-duration">Default Break Length</Label>
                <span className="text-sm">5 minutes</span>
              </div>
              <Select defaultValue="5">
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 minutes</SelectItem>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Ambient Sound Settings</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="enable-ambient">Enable Ambient Sounds</Label>
              <p className="text-sm text-muted-foreground">Play background sounds during focus sessions</p>
            </div>
            <Switch
              id="enable-ambient"
              checked={ambientSounds}
              onCheckedChange={setAmbientSounds}
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="sound-volume">Sound Volume</Label>
              <span className="text-sm">{soundVolume}%</span>
            </div>
            <Slider 
              id="sound-volume" 
              min={0} 
              max={100} 
              step={1} 
              value={[soundVolume]} 
              onValueChange={([value]) => setSoundVolume(value)}
              disabled={!ambientSounds}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="default-sound">Default Sound</Label>
            <Select defaultValue="rain" disabled={!ambientSounds}>
              <SelectTrigger>
                <SelectValue placeholder="Select sound" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rain">Rainfall</SelectItem>
                <SelectItem value="whitenoise">White Noise</SelectItem>
                <SelectItem value="forest">Forest</SelectItem>
                <SelectItem value="cafe">Coffee Shop</SelectItem>
                <SelectItem value="ocean">Ocean Waves</SelectItem>
                <SelectItem value="lofi">Lo-Fi Beats</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Auto-pause Triggers</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="enable-autopause">Enable Auto-pause</Label>
              <p className="text-sm text-muted-foreground">Automatically pause timer during detected breaks</p>
            </div>
            <Switch
              id="enable-autopause"
              checked={autoPause}
              onCheckedChange={setAutoPause}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Pause triggers</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="inactivity" defaultChecked disabled={!autoPause} />
                <Label htmlFor="inactivity" className="text-sm">Inactivity (3+ minutes)</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="tab-switch" defaultChecked disabled={!autoPause} />
                <Label htmlFor="tab-switch" className="text-sm">Tab switching</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="screen-lock" defaultChecked disabled={!autoPause} />
                <Label htmlFor="screen-lock" className="text-sm">Screen lock</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="video" defaultChecked disabled={!autoPause} />
                <Label htmlFor="video" className="text-sm">Video playback detected</Label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Focus Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FocusModePreferences;
