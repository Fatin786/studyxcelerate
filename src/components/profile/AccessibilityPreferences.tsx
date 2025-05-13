
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, Type, Moon, Sun, Monitor, LayoutGrid, Languages, BookOpen, FileEdit, Keyboard, VolumeX, Volume2, Mic, Headphones } from "lucide-react";

const AccessibilityPreferences = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-gold-400" />
              Visual Preferences
            </CardTitle>
            <CardDescription>Customize the visual appearance of the application</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">High Contrast Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Increase contrast for better visibility
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label className="text-base">Text Size</Label>
                  <span className="text-sm text-muted-foreground">Medium</span>
                </div>
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={10}
                  className="py-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Small</span>
                  <span>Large</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-base">Theme Preference</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="flex flex-col gap-1 h-auto py-3 justify-center bg-background border-gold-400">
                    <Sun className="h-5 w-5" />
                    <span className="text-xs">Light</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col gap-1 h-auto py-3 justify-center">
                    <Moon className="h-5 w-5" />
                    <span className="text-xs">Dark</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col gap-1 h-auto py-3 justify-center">
                    <Monitor className="h-5 w-5" />
                    <span className="text-xs">System</span>
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-base">Motion & Animations</Label>
                <Select defaultValue="reduced">
                  <SelectTrigger>
                    <SelectValue placeholder="Select animation preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Animations</SelectItem>
                    <SelectItem value="reduced">Reduced Animations</SelectItem>
                    <SelectItem value="none">No Animations</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Reduce or disable animations for a more comfortable experience
                </p>
              </div>
              
              <div className="space-y-2">
                <Label className="text-base">Font Style</Label>
                <Select defaultValue="default">
                  <SelectTrigger>
                    <SelectValue placeholder="Select font style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    <SelectItem value="dyslexic">Dyslexia-friendly</SelectItem>
                    <SelectItem value="sans">Sans-serif</SelectItem>
                    <SelectItem value="serif">Serif</SelectItem>
                    <SelectItem value="mono">Monospace</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Color Blind Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Optimize colors for different types of color blindness
                    </p>
                  </div>
                  <Switch />
                </div>
                <Select defaultValue="none" disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Select color blind mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="protanopia">Protanopia</SelectItem>
                    <SelectItem value="deuteranopia">Deuteranopia</SelectItem>
                    <SelectItem value="tritanopia">Tritanopia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Focus Indicators</Label>
                    <p className="text-sm text-muted-foreground">
                      Enhance visibility of focused elements
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto bg-gold-400 text-navy-950 hover:bg-gold-500">Save Visual Preferences</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <LayoutGrid className="h-5 w-5 text-gold-400" />
              Content Display
            </CardTitle>
            <CardDescription>Adjust how content is presented</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label className="text-base">Layout Density</Label>
              <Tabs defaultValue="comfortable">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="compact">Compact</TabsTrigger>
                  <TabsTrigger value="comfortable">Comfortable</TabsTrigger>
                  <TabsTrigger value="spacious">Spacious</TabsTrigger>
                </TabsList>
              </Tabs>
              <p className="text-xs text-muted-foreground">
                Controls spacing between elements
              </p>
            </div>
            
            <div className="space-y-2">
              <Label className="text-base">Line Spacing</Label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={10}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Tight</span>
                <span>Spacious</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Reading Guide</Label>
                  <p className="text-sm text-muted-foreground">
                    Highlight line of text being read
                  </p>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Simplified View</Label>
                  <p className="text-sm text-muted-foreground">
                    Remove decorative elements for cleaner reading
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5 text-gold-400" />
              Language & Region
            </CardTitle>
            <CardDescription>Set your preferred language and regional settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Interface Language</Label>
              <Select defaultValue="en-US">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en-US">English (United States)</SelectItem>
                  <SelectItem value="en-GB">English (United Kingdom)</SelectItem>
                  <SelectItem value="es">Spanish (Español)</SelectItem>
                  <SelectItem value="fr">French (Français)</SelectItem>
                  <SelectItem value="de">German (Deutsch)</SelectItem>
                  <SelectItem value="zh">Chinese (中文)</SelectItem>
                  <SelectItem value="ja">Japanese (日本語)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone">Time Zone</Label>
              <Select defaultValue="america-new_york">
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select time zone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="america-new_york">Eastern Time (ET) - New York</SelectItem>
                  <SelectItem value="america-chicago">Central Time (CT) - Chicago</SelectItem>
                  <SelectItem value="america-denver">Mountain Time (MT) - Denver</SelectItem>
                  <SelectItem value="america-los_angeles">Pacific Time (PT) - Los Angeles</SelectItem>
                  <SelectItem value="europe-london">Greenwich Mean Time (GMT) - London</SelectItem>
                  <SelectItem value="europe-paris">Central European Time (CET) - Paris</SelectItem>
                  <SelectItem value="asia-tokyo">Japan Standard Time (JST) - Tokyo</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date-format">Date Format</Label>
              <Select defaultValue="mdy">
                <SelectTrigger id="date-format">
                  <SelectValue placeholder="Select date format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mdy">MM/DD/YYYY (05/15/2024)</SelectItem>
                  <SelectItem value="dmy">DD/MM/YYYY (15/05/2024)</SelectItem>
                  <SelectItem value="ymd">YYYY/MM/DD (2024/05/15)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time-format">Time Format</Label>
              <Select defaultValue="12h">
                <SelectTrigger id="time-format">
                  <SelectValue placeholder="Select time format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12h">12-hour (2:30 PM)</SelectItem>
                  <SelectItem value="24h">24-hour (14:30)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="first-day">First Day of Week</Label>
              <Select defaultValue="sunday">
                <SelectTrigger id="first-day">
                  <SelectValue placeholder="Select first day of week" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sunday">Sunday</SelectItem>
                  <SelectItem value="monday">Monday</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Translation Services</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable automatic translation for study materials
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto bg-gold-400 text-navy-950 hover:bg-gold-500">Save Regional Settings</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Headphones className="h-5 w-5 text-gold-400" />
              Audio & Sound
            </CardTitle>
            <CardDescription>Customize audio settings and screen reader options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-base">Screen Reader Support</Label>
                <Switch defaultChecked />
              </div>
              <p className="text-sm text-muted-foreground">
                Optimize content for screen readers
              </p>
            </div>
            
            <div className="space-y-2">
              <Label className="text-base">Text-to-Speech Speed</Label>
              <div className="flex items-center gap-3">
                <Volume2 className="h-4 w-4 text-muted-foreground" />
                <Slider
                  defaultValue={[50]}
                  max={100}
                  step={10}
                  className="flex-1 py-2"
                />
                <VolumeX className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-base">Text-to-Speech Voice</Label>
              <Select defaultValue="female-1">
                <SelectTrigger>
                  <SelectValue placeholder="Select voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="female-1">Female Voice 1</SelectItem>
                  <SelectItem value="female-2">Female Voice 2</SelectItem>
                  <SelectItem value="male-1">Male Voice 1</SelectItem>
                  <SelectItem value="male-2">Male Voice 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Study Sound Effects</Label>
                  <p className="text-sm text-muted-foreground">
                    Play sounds for notifications and achievements
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Voice Control</Label>
                  <p className="text-sm text-muted-foreground">
                    Navigate and control the app using voice commands
                  </p>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="space-y-2">
              <Button variant="outline" className="w-full gap-1">
                <Mic className="h-4 w-4" />
                Test Speech Recognition
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Keyboard className="h-5 w-5 text-gold-400" />
              Keyboard Navigation
            </CardTitle>
            <CardDescription>Customize keyboard shortcuts and navigation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Enhanced Keyboard Navigation</Label>
                  <p className="text-sm text-muted-foreground">
                    Navigate all UI elements with keyboard
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Common Shortcuts</h3>
              <div className="space-y-2 text-sm">
                {[
                  { key: "Alt + 1", action: "Go to Dashboard" },
                  { key: "Alt + 2", action: "Go to Study Planner" },
                  { key: "Alt + 3", action: "Go to Focus Mode" },
                  { key: "Alt + 4", action: "Go to Study Materials" },
                  { key: "Alt + 5", action: "Go to Progress Tracker" },
                ].map((shortcut, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{shortcut.action}</span>
                    <kbd className="px-2 py-1 rounded bg-muted text-xs">{shortcut.key}</kbd>
                  </div>
                ))}
              </div>
              
              <Button variant="link" className="text-xs px-0 h-6">View all keyboard shortcuts</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccessibilityPreferences;
