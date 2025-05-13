
import { useState, useEffect } from "react";
import { Clock, Sparkles, TreePine, Stars, Sunrise, Library, Leaf, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type BackgroundTheme = {
  id: string;
  name: string;
  description: string;
  className: string;
  icon: React.ReactNode;
  soundPreset?: string;
  unlocked: boolean;
};

export const backgroundThemes: BackgroundTheme[] = [
  {
    id: "auto",
    name: "Dynamic",
    description: "Changes based on time of day",
    className: "bg-gradient-to-br from-navy-900 to-navy-950 bg-opacity-90",
    icon: <Clock className="h-4 w-4" />,
    unlocked: true,
  },
  {
    id: "forest",
    name: "Calm Forest",
    description: "Peaceful woodland scene",
    className: "bg-[url('/backgrounds/forest.jpg')] bg-cover bg-center",
    icon: <TreePine className="h-4 w-4" />,
    soundPreset: "nature",
    unlocked: true,
  },
  {
    id: "night",
    name: "Starry Night",
    description: "Peaceful night sky",
    className: "bg-gradient-to-b from-navy-950 via-navy-900 to-charcoal-800",
    icon: <Stars className="h-4 w-4" />,
    soundPreset: "whitenoise",
    unlocked: true,
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Energizing morning view",
    className: "bg-gradient-to-br from-gold-500/20 via-charcoal-900 to-navy-950",
    icon: <Sunrise className="h-4 w-4" />,
    unlocked: true,
  },
  {
    id: "library",
    name: "Library Alcove",
    description: "Cozy study corner",
    className: "bg-[url('/backgrounds/library.jpg')] bg-cover bg-center",
    icon: <Library className="h-4 w-4" />,
    soundPreset: "cafe",
    unlocked: false,
  },
  {
    id: "zen",
    name: "Zen Garden",
    description: "Minimalist zen space",
    className: "bg-gradient-to-br from-charcoal-900 to-navy-900",
    icon: <Leaf className="h-4 w-4" />,
    soundPreset: "deepfocus",
    unlocked: false,
  },
  {
    id: "futuristic",
    name: "Study Pod",
    description: "Futuristic focus pod",
    className: "bg-gradient-to-r from-charcoal-950 via-navy-900 to-charcoal-900",
    icon: <Sparkles className="h-4 w-4" />,
    soundPreset: "whitenoise",
    unlocked: false,
  },
  {
    id: "ocean",
    name: "Ocean Waves",
    description: "Calming ocean view",
    className: "bg-gradient-to-b from-blue-900/50 to-navy-950",
    icon: <Waves className="h-4 w-4" />,
    soundPreset: "rain",
    unlocked: false,
  },
];

interface FocusBackgroundsProps {
  isActive: boolean;
  onSelectTheme: (theme: BackgroundTheme) => void;
  selectedThemeId: string;
}

const FocusBackgrounds = ({ isActive, onSelectTheme, selectedThemeId }: FocusBackgroundsProps) => {
  const [timeBasedThemeId, setTimeBasedThemeId] = useState<string>("night");
  
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
  
  // Get the currently active theme
  const getActiveTheme = (): BackgroundTheme => {
    if (selectedThemeId === "auto") {
      return backgroundThemes.find(theme => theme.id === timeBasedThemeId) || backgroundThemes[0];
    }
    return backgroundThemes.find(theme => theme.id === selectedThemeId) || backgroundThemes[0];
  };
  
  const activeTheme = getActiveTheme();
  const availableThemes = backgroundThemes.filter(theme => theme.unlocked || isActive);
  
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {availableThemes.map((theme) => (
          <Button
            key={theme.id}
            variant="ghost"
            size="sm"
            onClick={() => onSelectTheme(theme)}
            className={cn(
              "flex items-center gap-1 px-2 py-1 border",
              selectedThemeId === theme.id 
                ? "border-gold-400 bg-gold-400/10 text-gold-400" 
                : "border-charcoal-800/50 bg-charcoal-900/50",
              !theme.unlocked && "opacity-60"
            )}
          >
            {theme.icon}
            <span className="text-xs">{theme.name}</span>
            {!theme.unlocked && (
              <span className="text-xs ml-1 text-muted-foreground">🔒</span>
            )}
          </Button>
        ))}
      </div>
      
      {!isActive && selectedThemeId !== "auto" && (
        <div className="text-xs text-muted-foreground">
          <p>Select "Dynamic" for time-based backgrounds that change throughout the day</p>
        </div>
      )}
      
      {!isActive && backgroundThemes.some(theme => !theme.unlocked) && (
        <div className="text-xs text-muted-foreground italic">
          <p>More themes will unlock as you complete focus sessions</p>
        </div>
      )}
    </div>
  );
};

export const getBackgroundClasses = (themeId: string, isActive: boolean, timeBasedThemeId: string): string => {
  const baseClasses = "transition-all duration-1000";
  
  if (!isActive) {
    return `${baseClasses} bg-navy-950`;
  }
  
  const targetThemeId = themeId === "auto" ? timeBasedThemeId : themeId;
  const theme = backgroundThemes.find(t => t.id === targetThemeId);
  
  return theme ? `${baseClasses} ${theme.className}` : `${baseClasses} bg-navy-950`;
};

export default FocusBackgrounds;
