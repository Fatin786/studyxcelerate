
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const ResourceUploadPreferences = () => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Upload className="h-5 w-5 text-gold-400" />
          <CardTitle>Resource Upload Preferences</CardTitle>
        </div>
        <CardDescription>
          Configure how your uploaded study materials are handled
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Default Upload Privacy</Label>
          <Select defaultValue="private">
            <SelectTrigger>
              <SelectValue placeholder="Select privacy level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private (Only Me)</SelectItem>
              <SelectItem value="friends">Friends Only</SelectItem>
              <SelectItem value="public">Public</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="auto-ocr">Automatic OCR</Label>
            <p className="text-sm text-muted-foreground">Extract text from images and PDFs automatically</p>
          </div>
          <Switch id="auto-ocr" defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <Label htmlFor="auto-tag">Auto-Tagging</Label>
            <p className="text-sm text-muted-foreground">Automatically categorize uploads by content</p>
          </div>
          <Switch id="auto-tag" defaultChecked />
        </div>
        
        <Button className="w-full mt-4">Manage Storage (2.1GB/5GB Used)</Button>
      </CardContent>
    </Card>
  );
};

export default ResourceUploadPreferences;
