
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import FocusTimer from "@/components/focus/FocusTimer";
import SessionSettings from "@/components/focus/SessionSettings";
import AmbientSounds from "@/components/focus/AmbientSounds";
import FocusBackgrounds, { BackgroundTheme, getBackgroundClasses, backgroundThemes } from "@/components/focus/FocusBackgrounds";
import { toast } from "sonner";
import { Headphones, Focus, Calendar, Volume2, Timer, Palette } from "lucide-react";

const FocusMode = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState("timer");
  const [ambienceEnabled, setAmbienceEnabled] = useState(true);
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [selectedThemeId, setSelectedThemeId] = useState("auto");
  const [timeBasedThemeId, setTimeBasedThemeId] = useState("night");
  
  // Update time-based theme
  useEffect(() => {
    const updateTimeBasedTheme = () => {
      const hour = new Date().getHours();
      let themeId = "night";
      
      if (hour >= 6 && hour < 10) {
        themeId = "sunrise";
      } else if (hour >= 10 && hour < 17) {
        themeId = "forest";
      } else if (hour >= 17 && hour < 20) {
        themeId = "sunrise"; // sunset
      } else {
        themeId = "night";
      }
      
      setTimeBasedThemeId(themeId);
    };
    
    updateTimeBasedTheme();
    const interval = setInterval(updateTimeBasedTheme, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);
  
  // Enter focus mode
  const startFocusMode = () => {
    setIsActive(true);
    
    // Notification
    toast.success("Focus Mode activated", {
      description: "Stay focused! You got this.",
      action: {
        label: "Settings",
        onClick: () => setActiveTab("settings"),
      },
    });
    
    // Request fullscreen for deeper focus (would need user interaction in real implementation)
    // document.documentElement.requestFullscreen();
  };
  
  // Exit focus mode
  const endFocusMode = () => {
    setIsActive(false);
    toast.info("Focus Mode deactivated");
    
    // Exit fullscreen
    // if (document.fullscreenElement) document.exitFullscreen();
  };

  // Handle theme selection  
  const handleThemeSelect = (theme: BackgroundTheme) => {
    setSelectedThemeId(theme.id);
    
    // If the theme has an associated sound preset, automatically enable ambience
    if (theme.soundPreset && !ambienceEnabled) {
      setAmbienceEnabled(true);
      toast.info(`${theme.name} theme enabled with ${theme.soundPreset} sounds`);
    } else {
      toast.info(`${theme.name} theme selected`);
    }
  };
  
  const backgroundClasses = getBackgroundClasses(selectedThemeId, isActive, timeBasedThemeId);
  
  return (
    <div className={`transition-all duration-500 min-h-screen ${backgroundClasses}`}>
      {/* Floating Focus Button */}
      <Button
        onClick={() => isActive ? endFocusMode() : startFocusMode()}
        className={`fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg ${
          isActive 
            ? "bg-charcoal-800 hover:bg-charcoal-700 text-white" 
            : "bg-gold-400 hover:bg-gold-500 text-navy-950"
        }`}
      >
        <Focus className="h-6 w-6" />
      </Button>

      <div className="space-y-6 p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Focus Mode</h1>
          <div className="flex items-center gap-2">
            <Label htmlFor="focus-switch" className="mr-2">Enable Focus Mode</Label>
            <Switch
              id="focus-switch"
              checked={isActive}
              onCheckedChange={(checked) => checked ? startFocusMode() : endFocusMode()}
            />
          </div>
        </div>

        {isActive ? (
          <div className={`transition-all duration-500 ${isActive ? "animate-fade-in" : ""}`}>
            {/* Focus Mode Active View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 space-y-6">
                <FocusTimer 
                  sessionLength={sessionLength}
                  breakLength={breakLength}
                  isActive={isActive}
                />
              </div>
              
              <div className="lg:col-span-4 space-y-4">
                <Card className="bg-charcoal-950/70 backdrop-blur-sm border border-white/5">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">Quick Controls</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-5 w-5 text-gold-400" />
                        <Label htmlFor="ambient-sound">Ambient Sound</Label>
                      </div>
                      <Switch
                        id="ambient-sound"
                        checked={ambienceEnabled}
                        onCheckedChange={setAmbienceEnabled}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Timer className="h-5 w-5 text-gold-400" />
                        <Label>Session Length: {sessionLength} min</Label>
                      </div>
                      <Slider
                        value={[sessionLength]}
                        min={5}
                        max={60}
                        step={5}
                        onValueChange={(value) => setSessionLength(value[0])}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Palette className="h-5 w-5 text-gold-400" />
                        <Label>Background Theme</Label>
                      </div>
                      <FocusBackgrounds 
                        isActive={isActive}
                        selectedThemeId={selectedThemeId}
                        onSelectTheme={handleThemeSelect}
                      />
                    </div>
                    
                    <Button 
                      className="w-full bg-gold-400 hover:bg-gold-500 text-navy-950"
                      onClick={() => setActiveTab("settings")}
                    >
                      More Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Settings & Configuration View */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="timer">
                  <Timer className="h-4 w-4 mr-2" />
                  Timer
                </TabsTrigger>
                <TabsTrigger value="ambient">
                  <Headphones className="h-4 w-4 mr-2" />
                  Ambient
                </TabsTrigger>
                <TabsTrigger value="themes">
                  <Palette className="h-4 w-4 mr-2" />
                  Themes
                </TabsTrigger>
                <TabsTrigger value="settings">
                  <Calendar className="h-4 w-4 mr-2" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="timer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <FocusTimer 
                    sessionLength={sessionLength} 
                    breakLength={breakLength}
                    isActive={isActive}
                  />
                  
                  <Card className="bento-card">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium">Session Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>Focus Session Length: {sessionLength} minutes</Label>
                        <Slider
                          value={[sessionLength]}
                          min={5}
                          max={60}
                          step={5}
                          onValueChange={(value) => setSessionLength(value[0])}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Break Length: {breakLength} minutes</Label>
                        <Slider
                          value={[breakLength]}
                          min={1}
                          max={15}
                          step={1}
                          onValueChange={(value) => setBreakLength(value[0])}
                        />
                      </div>
                      
                      <Button 
                        className="w-full bg-gold-400 hover:bg-gold-500 text-navy-950"
                        onClick={startFocusMode}
                      >
                        Enter Focus Mode
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="ambient">
                <AmbientSounds />
              </TabsContent>
              
              <TabsContent value="themes">
                <Card className="bento-card">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">Background Themes</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Choose your ideal focus environment
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <FocusBackgrounds 
                          isActive={isActive}
                          selectedThemeId={selectedThemeId}
                          onSelectTheme={handleThemeSelect}
                        />
                      </div>
                      
                      <div className="rounded-lg overflow-hidden h-48">
                        <div className={`w-full h-full ${getBackgroundClasses(selectedThemeId, true, timeBasedThemeId)} flex items-center justify-center`}>
                          <div className="text-center p-4 backdrop-blur-sm bg-black/30 rounded-lg">
                            <p className="font-medium text-white">Theme Preview</p>
                            <p className="text-xs text-white/70">
                              {selectedThemeId === "auto" 
                                ? "Changes based on time of day" 
                                : backgroundThemes.find(t => t.id === selectedThemeId)?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <SessionSettings />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default FocusMode;
