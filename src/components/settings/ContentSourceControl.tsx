
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Filter } from "lucide-react";

const ContentSourceControl = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Content settings saved",
      description: "Your content source preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gold-400" />
          <CardTitle>Content Source Control</CardTitle>
        </div>
        <CardDescription>
          Choose which content providers and formats to include
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Content Providers</h3>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="khan-academy">Khan Academy</Label>
              <Switch id="khan-academy" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="coursera">Coursera</Label>
              <Switch id="coursera" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="youtube">YouTube Educational</Label>
              <Switch id="youtube" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="mit-ocw">MIT OpenCourseWare</Label>
              <Switch id="mit-ocw" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Content Preferences
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentSourceControl;
