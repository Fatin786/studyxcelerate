
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Language } from "lucide-react";

const LanguageRegion = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Language & region settings saved",
      description: "Please reload the page for changes to fully take effect.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Language className="h-5 w-5 text-gold-400" />
          <CardTitle>Language & Region</CardTitle>
        </div>
        <CardDescription>
          Customize language preferences and regional formatting
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Language Settings</h3>
          
          <div className="space-y-2">
            <Label htmlFor="interface-language">Interface Language</Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="zh">Chinese (Simplified)</SelectItem>
                <SelectItem value="ko">Korean</SelectItem>
                <SelectItem value="pt">Portuguese</SelectItem>
                <SelectItem value="ar">Arabic</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="content-language">Content Language Preference</Label>
            <Select defaultValue="same">
              <SelectTrigger>
                <SelectValue placeholder="Select content language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="same">Same as interface language</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="zh">Chinese (Simplified)</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              This sets your preferred language for study content when available
            </p>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Regional Formatting</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date-format">Date Format</Label>
              <Select defaultValue="mdy">
                <SelectTrigger>
                  <SelectValue placeholder="Select date format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mdy">MM/DD/YYYY (US)</SelectItem>
                  <SelectItem value="dmy">DD/MM/YYYY (UK, EU)</SelectItem>
                  <SelectItem value="ymd">YYYY-MM-DD (ISO)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time-format">Time Format</Label>
              <Select defaultValue="12h">
                <SelectTrigger>
                  <SelectValue placeholder="Select time format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                  <SelectItem value="24h">24-hour</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="timezone">Time Zone</Label>
            <Select defaultValue="auto">
              <SelectTrigger>
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto-detect (System)</SelectItem>
                <SelectItem value="utc">UTC</SelectItem>
                <SelectItem value="est">Eastern (UTC-5)</SelectItem>
                <SelectItem value="cst">Central (UTC-6)</SelectItem>
                <SelectItem value="mst">Mountain (UTC-7)</SelectItem>
                <SelectItem value="pst">Pacific (UTC-8)</SelectItem>
                <SelectItem value="gmt">GMT (UTC+0)</SelectItem>
                <SelectItem value="cet">Central European (UTC+1)</SelectItem>
                <SelectItem value="jst">Japan (UTC+9)</SelectItem>
                <SelectItem value="aest">Australian Eastern (UTC+10)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>First Day of Week</Label>
            <RadioGroup defaultValue="sunday" className="flex flex-row space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sunday" id="sunday" />
                <Label htmlFor="sunday">Sunday</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monday" id="monday" />
                <Label htmlFor="monday">Monday</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Language & Regional Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LanguageRegion;
