
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Headphones, Play, Pause, Volume2, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const soundscapes = [
  { 
    id: "lofi", 
    name: "Lo-Fi Study", 
    description: "Mellow beats for studying",
    icon: "🎵",
    brainwave: "Alpha",
    activeMinutes: 0
  },
  { 
    id: "nature", 
    name: "Forest Sounds", 
    description: "Birds and gentle wind",
    icon: "🌲",
    brainwave: "Alpha",
    activeMinutes: 0
  },
  { 
    id: "rain", 
    name: "Rainfall", 
    description: "Gentle rain ambience",
    icon: "🌧️",
    brainwave: "Theta",
    activeMinutes: 0
  },
  { 
    id: "cafe", 
    name: "Coffee Shop", 
    description: "Gentle cafe background noise",
    icon: "☕",
    brainwave: "Beta",
    activeMinutes: 0
  },
  { 
    id: "whitenoise", 
    name: "White Noise", 
    description: "Pure focus-enhancing white noise",
    icon: "📻",
    brainwave: "Alpha",
    activeMinutes: 0
  },
  { 
    id: "deepfocus", 
    name: "Deep Focus", 
    description: "Neural oscillation optimized sounds",
    icon: "🧠",
    brainwave: "Gamma",
    activeMinutes: 0
  },
];

const AmbientSounds = () => {
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);
  const [volume, setVolume] = useState(70);
  const [showMotivationalQuotes, setShowMotivationalQuotes] = useState(true);
  const [adaptiveSoundEnabled, setAdaptiveSoundEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("soundscapes");
  
  const playSound = (id: string) => {
    // In a real implementation, this would actually play the sound
    setActiveSoundId(id === activeSoundId ? null : id);
    
    const sound = soundscapes.find(s => s.id === id);
    if (sound) {
      if (id === activeSoundId) {
        toast.info(`Stopped ${sound.name}`);
      } else {
        toast.success(`Now playing: ${sound.name}`, {
          description: `${sound.description} (${sound.brainwave} waves)`,
        });
      }
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-4">
          <TabsTrigger value="soundscapes">Soundscapes</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="soundscapes">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {soundscapes.map((sound) => (
              <Card 
                key={sound.id} 
                className={`bento-card cursor-pointer transition-all hover:scale-[1.01] ${
                  activeSoundId === sound.id ? "golden-glow border-gold-400/50" : ""
                }`}
                onClick={() => playSound(sound.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{sound.icon}</span>
                        <h3 className="font-medium">{sound.name}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground">{sound.description}</p>
                      <p className="text-xs mt-4">
                        <span className="text-gold-400 font-medium">{sound.brainwave}</span> brainwave optimized
                      </p>
                    </div>
                    
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className={`rounded-full p-2 h-8 w-8 ${
                        activeSoundId === sound.id 
                          ? "bg-gold-400 text-navy-950 hover:bg-gold-500" 
                          : "bg-charcoal-800/30 hover:bg-charcoal-800/50"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        playSound(sound.id);
                      }}
                    >
                      {activeSoundId === sound.id ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card className="bento-card">
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Headphones className="h-5 w-5 text-gold-400" />
                Audio Settings
              </CardTitle>
              <CardDescription>
                Customize your ambient sound experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="volume" className="flex items-center">
                    <Volume2 className="h-4 w-4 mr-2 text-gold-400" />
                    Volume
                  </Label>
                  <span className="text-sm">{volume}%</span>
                </div>
                <Slider
                  id="volume"
                  value={[volume]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setVolume(value[0])}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <Label className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gold-400" />
                    Adaptive Sound
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Automatically adjust sound based on session phase
                  </p>
                </div>
                <Switch 
                  checked={adaptiveSoundEnabled}
                  onCheckedChange={setAdaptiveSoundEnabled}
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <Label className="flex items-center">
                    Motivational Quotes
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Display inspiring quotes during focus sessions
                  </p>
                </div>
                <Switch
                  checked={showMotivationalQuotes}
                  onCheckedChange={setShowMotivationalQuotes}
                />
              </div>
              
              {showMotivationalQuotes && (
                <div className="p-4 border border-gold-400/20 rounded-md bg-charcoal-900/30">
                  <p className="italic text-sm text-center">
                    "The difference between ordinary and extraordinary is that little extra."
                  </p>
                </div>
              )}
              
              <Button 
                className="w-full bg-gold-400 hover:bg-gold-500 text-navy-950"
                onClick={() => {
                  toast.success("Audio settings saved");
                }}
              >
                Save Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AmbientSounds;
