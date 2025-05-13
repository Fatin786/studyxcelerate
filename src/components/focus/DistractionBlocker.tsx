
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { BellOff, Plus, X, Smartphone, Laptop, Circle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

interface DistractionBlockerProps {
  blockEnabled: boolean;
  setBlockEnabled: (value: boolean) => void;
}

const commonDistractions = [
  { name: "Facebook", url: "facebook.com", enabled: true },
  { name: "Instagram", url: "instagram.com", enabled: true },
  { name: "Twitter", url: "twitter.com", enabled: true },
  { name: "YouTube", url: "youtube.com", enabled: false },
  { name: "TikTok", url: "tiktok.com", enabled: true },
  { name: "Reddit", url: "reddit.com", enabled: true },
];

const DistractionBlocker = ({ blockEnabled, setBlockEnabled }: DistractionBlockerProps) => {
  const [distractions, setDistractions] = useState(commonDistractions);
  const [newDistraction, setNewDistraction] = useState({ name: "", url: "" });
  const [multiDeviceSync, setMultiDeviceSync] = useState(true);
  const [autoBlockEnabled, setAutoBlockEnabled] = useState(true);

  const addDistraction = () => {
    if (!newDistraction.name || !newDistraction.url) {
      toast.error("Please enter both a name and URL");
      return;
    }
    
    setDistractions([
      ...distractions, 
      { ...newDistraction, enabled: true }
    ]);
    setNewDistraction({ name: "", url: "" });
    toast.success(`Added ${newDistraction.name} to blocklist`);
  };

  const removeDistraction = (index: number) => {
    const newDistractions = [...distractions];
    const removed = newDistractions.splice(index, 1)[0];
    setDistractions(newDistractions);
    toast.info(`Removed ${removed.name} from blocklist`);
  };

  const toggleDistraction = (index: number) => {
    const newDistractions = [...distractions];
    newDistractions[index].enabled = !newDistractions[index].enabled;
    setDistractions(newDistractions);
  };
  
  const handleMultiDeviceToggle = (checked: boolean) => {
    setMultiDeviceSync(checked);
    if (checked) {
      toast.success("Multi-device synchronization enabled", {
        description: "Your blocklist will sync across all your devices"
      });
    }
  };
  
  const handleAutoBlockToggle = (checked: boolean) => {
    setAutoBlockEnabled(checked);
    if (checked) {
      toast.success("Contextual auto-blocking enabled", {
        description: "Focus Mode will activate automatically during scheduled study sessions"
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bento-card">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <BellOff className="h-5 w-5 text-gold-400" />
                Distraction Blocker
              </CardTitle>
              <CardDescription>
                Block distracting websites and apps
              </CardDescription>
            </div>
            <Switch checked={blockEnabled} onCheckedChange={setBlockEnabled} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input 
              placeholder="Site Name" 
              value={newDistraction.name}
              onChange={(e) => setNewDistraction({...newDistraction, name: e.target.value})}
            />
            <Input 
              placeholder="URL (e.g. facebook.com)" 
              value={newDistraction.url}
              onChange={(e) => setNewDistraction({...newDistraction, url: e.target.value})}
            />
            <Button onClick={addDistraction} className="bg-gold-400 hover:bg-gold-500 text-navy-950">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-charcoal-900/30 rounded-md p-3 max-h-[300px] overflow-y-auto">
            {distractions.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-6">
                No distractions added yet
              </p>
            ) : (
              <ul className="space-y-2">
                {distractions.map((distraction, index) => (
                  <li key={index} className="flex items-center justify-between p-2 rounded-md hover:bg-charcoal-800/20">
                    <div className="flex items-center space-x-3">
                      <Circle className="h-3 w-3 text-gold-400" />
                      <div>
                        <p className="text-sm font-medium">{distraction.name}</p>
                        <p className="text-xs text-muted-foreground">{distraction.url}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Switch 
                        checked={distraction.enabled} 
                        onCheckedChange={() => toggleDistraction(index)}
                      />
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => removeDistraction(index)}
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-gold-400"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bento-card">
        <CardHeader>
          <CardTitle className="text-lg font-medium">Advanced Blocking Features</CardTitle>
          <CardDescription>
            Configure how distraction blocking works across your devices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="space-y-0.5">
                <Label className="text-base flex items-center">
                  <Smartphone className="h-4 w-4 mr-2 text-gold-400" />
                  Multi-Device Sync
                </Label>
                <p className="text-xs text-muted-foreground">
                  Block distractions across all connected devices
                </p>
              </div>
              <Switch checked={multiDeviceSync} onCheckedChange={handleMultiDeviceToggle} />
            </div>
            
            <Separator />
            
            <div className="flex justify-between items-center">
              <div className="space-y-0.5">
                <Label className="text-base flex items-center">
                  <Laptop className="h-4 w-4 mr-2 text-gold-400" />
                  Contextual Auto-Block
                </Label>
                <p className="text-xs text-muted-foreground">
                  Automatically block distractions during scheduled sessions
                </p>
              </div>
              <Switch checked={autoBlockEnabled} onCheckedChange={handleAutoBlockToggle} />
            </div>
          </div>
          
          <Button 
            className="w-full bg-gold-400 hover:bg-gold-500 text-navy-950"
            onClick={() => {
              toast.success("Settings saved", {
                description: "Your distraction blocker settings have been updated"
              });
            }}
          >
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DistractionBlocker;
