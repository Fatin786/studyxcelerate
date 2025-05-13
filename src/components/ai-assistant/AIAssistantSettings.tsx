
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Info, Upload, Link, Code, Languages } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AIAssistantSettings = () => {
  const { toast } = useToast();
  
  const handleUploadSyllabus = () => {
    toast({
      title: "Upload initiated",
      description: "Please select your course syllabus to upload.",
    });
  };

  const handleConnectLMS = () => {
    toast({
      title: "LMS Connection",
      description: "Redirecting to Learning Management System authentication.",
    });
  };

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your AI Assistant preferences have been updated.",
    });
  };

  return (
    <div className="p-6 space-y-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">AI Assistant Settings</h2>
        <p className="text-muted-foreground">Customize your AI study companion to match your learning style</p>
      </div>
      
      <Card className="border-charcoal-800/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-gold-400" />
            <CardTitle>Context Integration</CardTitle>
          </div>
          <CardDescription>Connect your course materials to enhance AI relevance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="syllabus-upload">Course Syllabus</Label>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                className="border-charcoal-800/30 hover:bg-gold-400/10 hover:text-gold-400"
                onClick={handleUploadSyllabus}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Syllabus
              </Button>
              <p className="text-xs text-muted-foreground">PDF, DOCX (Max: 10MB)</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lms-connection">Learning Management System</Label>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline"
                className="border-charcoal-800/30 hover:bg-gold-400/10 hover:text-gold-400"
                onClick={handleConnectLMS}
              >
                <Link className="h-4 w-4 mr-2" />
                Connect LMS
              </Button>
              <p className="text-xs text-muted-foreground">Canvas, Blackboard, Moodle</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-charcoal-800/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-gold-400" />
            <CardTitle>Language & Communication</CardTitle>
          </div>
          <CardDescription>Adjust how the AI communicates with you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="preferred-language">Preferred Language</Label>
            <Select defaultValue="en">
              <SelectTrigger className="border-charcoal-800/30">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
                <SelectItem value="zh">Chinese (Mandarin)</SelectItem>
                <SelectItem value="ja">Japanese</SelectItem>
                <SelectItem value="ko">Korean</SelectItem>
                <SelectItem value="ar">Arabic</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="response-detail">Response Detail Level</Label>
            <Slider defaultValue={[50]} max={100} step={1} className="py-4" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Concise</span>
              <span>Balanced</span>
              <span>Detailed</span>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="learning-style">Learning Style Preference</Label>
            <Select defaultValue="balanced">
              <SelectTrigger className="border-charcoal-800/30">
                <SelectValue placeholder="Select learning style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visual">Visual (diagrams, charts)</SelectItem>
                <SelectItem value="auditory">Auditory (explanations)</SelectItem>
                <SelectItem value="kinesthetic">Kinesthetic (examples, practice)</SelectItem>
                <SelectItem value="reading">Reading/Writing focused</SelectItem>
                <SelectItem value="balanced">Balanced approach</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-charcoal-800/30">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-gold-400" />
            <CardTitle>Advanced Features</CardTitle>
          </div>
          <CardDescription>Configure specialized AI capabilities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="proactive-suggestions">Proactive Learning Suggestions</Label>
              <p className="text-sm text-muted-foreground">Receive AI-initiated study recommendations</p>
            </div>
            <Switch id="proactive-suggestions" defaultChecked />
          </div>
          
          <Separator className="bg-charcoal-800/30" />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="exam-predictions">Exam Performance Predictions</Label>
              <p className="text-sm text-muted-foreground">Get readiness estimates before exams</p>
            </div>
            <Switch id="exam-predictions" defaultChecked />
          </div>
          
          <Separator className="bg-charcoal-800/30" />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="sentiment-analysis">Emotional Intelligence Features</Label>
              <p className="text-sm text-muted-foreground">Enable mood detection and support</p>
            </div>
            <Switch id="sentiment-analysis" />
          </div>
          
          <Separator className="bg-charcoal-800/30" />
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="voice-commands">Voice Command Activation</Label>
              <p className="text-sm text-muted-foreground">Enable hands-free operation</p>
            </div>
            <Switch id="voice-commands" />
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button 
          onClick={handleSaveSettings}
          className="bg-gold-400 text-navy-950 hover:bg-gold-500"
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default AIAssistantSettings;
