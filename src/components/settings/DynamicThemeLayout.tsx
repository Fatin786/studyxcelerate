
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Moon, Sun, LayoutDashboard } from "lucide-react";

const DynamicThemeLayout = () => {
  const { toast } = useToast();
  const [theme, setTheme] = useState("system");
  const [layout, setLayout] = useState("default");
  const [enableBento, setEnableBento] = useState(true);
  const [enableColors, setEnableColors] = useState(true);

  const handleSaveTheme = () => {
    toast({
      title: "Theme settings saved",
      description: "Your visual preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <LayoutDashboard className="h-5 w-5 text-gold-400" />
          <CardTitle>Dynamic Theme & Layout</CardTitle>
        </div>
        <CardDescription>
          Customize the appearance and layout of your dashboard and study space
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Theme Selection</h3>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="theme-mode">Color Mode</Label>
            <ToggleGroup 
              type="single" 
              value={theme} 
              onValueChange={(value) => value && setTheme(value)} 
              className="justify-start"
            >
              <ToggleGroupItem value="light" aria-label="Light Mode">
                <Sun className="h-4 w-4 mr-2" />
                Light
              </ToggleGroupItem>
              <ToggleGroupItem value="dark" aria-label="Dark Mode">
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </ToggleGroupItem>
              <ToggleGroupItem value="system" aria-label="System Mode">
                System
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="premium-themes">Premium Theme Packs</Label>
            <Select defaultValue="default">
              <SelectTrigger>
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Navy & Gold (Default)</SelectItem>
                <SelectItem value="forest">Forest Green</SelectItem>
                <SelectItem value="sunset">Sunset Orange</SelectItem>
                <SelectItem value="ocean">Ocean Blue</SelectItem>
                <SelectItem value="lavender">Lavender Fields</SelectItem>
                <SelectItem value="monochrome">Monochrome</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Layout Customization</h3>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="bento-grid">Bento Grid Layout</Label>
              <p className="text-sm text-muted-foreground">
                Enable drag-and-drop rearrangement of dashboard widgets
              </p>
            </div>
            <Switch
              id="bento-grid"
              checked={enableBento}
              onCheckedChange={setEnableBento}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="color-widgets">Colored Widget Borders</Label>
              <p className="text-sm text-muted-foreground">
                Add color accents to dashboard widget borders
              </p>
            </div>
            <Switch
              id="color-widgets"
              checked={enableColors}
              onCheckedChange={setEnableColors}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <Label htmlFor="default-view">Default Dashboard View</Label>
            <Select defaultValue={layout}>
              <SelectTrigger>
                <SelectValue placeholder="Select layout" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Standard (Default)</SelectItem>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="expanded">Expanded</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveTheme}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Appearance Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DynamicThemeLayout;
