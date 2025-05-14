
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Accessibility } from "lucide-react";

const AccessibilityModes = () => {
  const { toast } = useToast();
  const [textSize, setTextSize] = React.useState(100);

  const handleSaveSettings = () => {
    toast({
      title: "Accessibility settings saved",
      description: "Your accessibility preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Accessibility className="h-5 w-5 text-gold-400" />
          <CardTitle>Accessibility Modes</CardTitle>
        </div>
        <CardDescription>
          Customize settings to make the application more accessible
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Visual Accessibility</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="high-contrast">High Contrast Mode</Label>
              <p className="text-sm text-muted-foreground">Increase contrast for better readability</p>
            </div>
            <Switch id="high-contrast" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="text-size">Text Size</Label>
              <span className="text-sm">{textSize}%</span>
            </div>
            <Slider 
              id="text-size" 
              min={80} 
              max={150} 
              step={10} 
              value={[textSize]} 
              onValueChange={([value]) => setTextSize(value)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="reduce-motion">Reduce Motion</Label>
              <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
            </div>
            <Switch id="reduce-motion" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="reduce-transparency">Reduce Transparency</Label>
              <p className="text-sm text-muted-foreground">Make UI elements more opaque</p>
            </div>
            <Switch id="reduce-transparency" />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Reading Support</h3>
          
          <div className="space-y-2">
            <Label htmlFor="font-type">Font Type</Label>
            <Select defaultValue="system">
              <SelectTrigger>
                <SelectValue placeholder="Select font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">System Default</SelectItem>
                <SelectItem value="dyslexic">OpenDyslexic</SelectItem>
                <SelectItem value="sans">Sans Serif</SelectItem>
                <SelectItem value="serif">Serif</SelectItem>
                <SelectItem value="mono">Monospace</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="screen-reader">Screen Reader Optimization</Label>
              <p className="text-sm text-muted-foreground">Improve compatibility with screen readers</p>
            </div>
            <Switch id="screen-reader" />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="reading-guide">Reading Guide</Label>
              <p className="text-sm text-muted-foreground">Show a movable guide bar when reading text</p>
            </div>
            <Switch id="reading-guide" />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Media Accessibility</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="auto-captions">Automatic Captions</Label>
              <p className="text-sm text-muted-foreground">Show captions for videos and audio</p>
            </div>
            <Switch id="auto-captions" defaultChecked />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="caption-style">Caption Style</Label>
            <Select defaultValue="default">
              <SelectTrigger>
                <SelectValue placeholder="Select caption style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="large">Large Text</SelectItem>
                <SelectItem value="high-contrast">High Contrast</SelectItem>
                <SelectItem value="simple">Simple Background</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Accessibility Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccessibilityModes;
