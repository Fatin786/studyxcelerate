
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, Edit2, Palette } from "lucide-react";

const ProfileHeader = () => {
  const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);
  const [themeDialogOpen, setThemeDialogOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("default");
  
  const themes = [
    { id: "default", name: "Default", color: "#8B5CF6" },
    { id: "ocean", name: "Ocean", color: "#0EA5E9" },
    { id: "forest", name: "Forest", color: "#10B981" },
    { id: "sunset", name: "Sunset", color: "#F97316" },
    { id: "cherry", name: "Cherry", color: "#EC4899" },
    { id: "midnight", name: "Midnight", color: "#312E81" },
  ];
  
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="relative">
        <Avatar className="h-24 w-24 border-2 border-gold-400">
          <AvatarImage src="/placeholder.svg" alt="@username" />
          <AvatarFallback className="bg-navy-900 text-xl">JD</AvatarFallback>
        </Avatar>
        
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute bottom-0 right-0 rounded-full bg-gold-400 text-navy-950 hover:bg-gold-500"
          onClick={() => setAvatarDialogOpen(true)}
        >
          <Camera className="h-4 w-4" />
        </Button>
        
        <Dialog open={avatarDialogOpen} onOpenChange={setAvatarDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Change Avatar</DialogTitle>
              <DialogDescription>Upload a new avatar or choose from our gallery</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="avatar">Upload Image</Label>
                <Input id="avatar" type="file" accept="image/*" />
              </div>
              <div>
                <Label>Or choose from gallery</Label>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="cursor-pointer border rounded-md p-1 hover:border-gold-400">
                      <div className="aspect-square rounded-md bg-muted"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setAvatarDialogOpen(false)}>Cancel</Button>
              <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <h1 className="text-2xl font-bold text-gradient-gold">John Doe</h1>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground h-7 px-2 gap-1"
          >
            <Edit2 className="h-3 w-3" />
            Edit
          </Button>
        </div>
        
        <p className="text-muted-foreground mb-2">Computer Science Student</p>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
          <div className="text-xs px-2 py-1 rounded-full bg-charcoal-800/30 text-muted-foreground">Visual Learner</div>
          <div className="text-xs px-2 py-1 rounded-full bg-charcoal-800/30 text-muted-foreground">Night Owl</div>
          <div className="text-xs px-2 py-1 rounded-full bg-charcoal-800/30 text-muted-foreground">Math Enthusiast</div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 px-2 rounded-full flex items-center gap-1 text-xs text-gold-400 hover:bg-gold-400/10"
            onClick={() => setThemeDialogOpen(true)}
          >
            <Palette className="h-3 w-3" />
            Change Theme
          </Button>
          
          <Dialog open={themeDialogOpen} onOpenChange={setThemeDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Choose Theme</DialogTitle>
                <DialogDescription>Select a theme for your profile and application</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-3 gap-3 py-4">
                {themes.map((theme) => (
                  <div 
                    key={theme.id}
                    className={`p-3 rounded-lg border-2 cursor-pointer flex flex-col items-center gap-2 ${
                      selectedTheme === theme.id ? "border-gold-400" : "border-transparent hover:border-muted"
                    }`}
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <div 
                      className="w-12 h-12 rounded-full" 
                      style={{ backgroundColor: theme.color }}
                    />
                    <span>{theme.name}</span>
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setThemeDialogOpen(false)}>Cancel</Button>
                <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500">Apply Theme</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="shrink-0 flex flex-col items-center md:items-end gap-2">
        <div className="flex gap-1 items-center text-sm">
          <span className="font-medium text-gold-400">1250</span>
          <span className="text-xs text-muted-foreground">StudyCoins</span>
        </div>
        
        <div className="flex gap-2">
          <div className="text-xs px-2 py-1 rounded-full bg-gold-400/10 text-gold-400 flex gap-1 items-center">
            <span>Premium</span>
          </div>
          <div className="text-xs px-2 py-1 rounded-full bg-charcoal-800/30 text-muted-foreground">
            Since May 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
