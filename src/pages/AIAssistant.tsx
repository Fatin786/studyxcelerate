
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import AIAssistantChat from "@/components/ai-assistant/AIAssistantChat";
import AIAssistantFeatures from "@/components/ai-assistant/AIAssistantFeatures";
import AIAssistantSettings from "@/components/ai-assistant/AIAssistantSettings";
import AIAssistantHistory from "@/components/ai-assistant/AIAssistantHistory";
import { useToast } from "@/hooks/use-toast";
import { BrainCircuit, Mic, Upload, Send, ImageIcon } from "lucide-react";

const AIAssistant = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("chat");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setIsLoading(true);
    
    // Simulate sending a message - in a real implementation this would call an AI API
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Your message has been processed.",
      });
      setInputValue("");
      setIsLoading(false);
    }, 1000);
  };

  const handleVoiceInput = () => {
    toast({
      title: "Voice input",
      description: "Voice recognition activated. Please speak clearly.",
    });
  };

  const handleFileUpload = () => {
    toast({
      title: "File upload",
      description: "Please select a file to upload for analysis.",
    });
  };

  const handleImageUpload = () => {
    toast({
      title: "Image upload",
      description: "Please select an image to upload for analysis.",
    });
  };

  return (
    <div className="container mx-auto py-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-gold-400/10 p-2 rounded-md mr-3">
            <BrainCircuit className="h-6 w-6 text-gold-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Study Assistant</h1>
            <p className="text-muted-foreground">Your personalized learning companion</p>
          </div>
        </div>
      </div>

      <Tabs 
        defaultValue="chat" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="flex-1 flex flex-col"
      >
        <div className="border-b border-charcoal-800/30">
          <TabsList className="bg-transparent">
            <TabsTrigger value="chat">Chat</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <TabsContent value="chat" className="h-full flex flex-col m-0 p-0 data-[state=active]:flex-1">
            <AIAssistantChat />
          </TabsContent>
          
          <TabsContent value="features" className="h-full m-0 p-0 data-[state=active]:flex-1">
            <ScrollArea className="h-full">
              <AIAssistantFeatures />
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="history" className="h-full m-0 p-0 data-[state=active]:flex-1">
            <AIAssistantHistory />
          </TabsContent>
          
          <TabsContent value="settings" className="h-full m-0 p-0 data-[state=active]:flex-1">
            <ScrollArea className="h-full">
              <AIAssistantSettings />
            </ScrollArea>
          </TabsContent>
        </div>
      </Tabs>
      
      {activeTab === "chat" && (
        <div className="mt-4 flex flex-col">
          <div className="flex space-x-2 mb-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleVoiceInput}
              className="text-gold-400 border-charcoal-800/30 hover:bg-gold-400/10 hover:text-gold-400"
            >
              <Mic className="h-4 w-4 mr-1" />
              Voice
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleFileUpload}
              className="text-gold-400 border-charcoal-800/30 hover:bg-gold-400/10 hover:text-gold-400"
            >
              <Upload className="h-4 w-4 mr-1" />
              File
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleImageUpload}
              className="text-gold-400 border-charcoal-800/30 hover:bg-gold-400/10 hover:text-gold-400"
            >
              <ImageIcon className="h-4 w-4 mr-1" />
              Image
            </Button>
          </div>
          
          <div className="flex space-x-2">
            <Textarea 
              placeholder="Ask me anything about your courses..."
              value={inputValue}
              onChange={handleInputChange}
              className="flex-1 resize-none border-charcoal-800/30 focus:border-gold-400/50"
              rows={3}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="self-end bg-gold-400 text-navy-950 hover:bg-gold-500"
            >
              {isLoading ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-navy-950 border-t-transparent" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
