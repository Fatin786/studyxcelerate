
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { MessageSquare, Search, FileText, FileCode, Image, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type HistorySession = {
  id: string;
  title: string;
  preview: string;
  date: string;
  time: string;
  type: "chat" | "document" | "code" | "image";
};

const AIAssistantHistory = () => {
  const { toast } = useToast();
  
  // Mock history data - in a real app this would come from a database or API
  const historySessions: HistorySession[] = [
    {
      id: "1",
      title: "Quantum Physics Discussion",
      preview: "Question about quantum entanglement and wave-particle duality",
      date: "Today",
      time: "10:45 AM",
      type: "chat"
    },
    {
      id: "2",
      title: "Statistics Homework Help",
      preview: "Analysis of variance and hypothesis testing questions",
      date: "Today",
      time: "9:20 AM",
      type: "chat"
    },
    {
      id: "3",
      title: "Physics_Midterm_Study_Guide.pdf",
      preview: "Document analysis and summary generation",
      date: "Yesterday",
      time: "4:15 PM",
      type: "document"
    },
    {
      id: "4",
      title: "Python Algorithm Debug",
      preview: "Fixing recursion error in sorting algorithm",
      date: "Yesterday",
      time: "2:30 PM",
      type: "code"
    },
    {
      id: "5",
      title: "Biology Lab Diagram",
      preview: "Cell structure identification from microscope image",
      date: "May 12",
      time: "11:05 AM",
      type: "image"
    },
    {
      id: "6",
      title: "Literary Analysis Discussion",
      preview: "Themes in Shakespeare's Hamlet and character motivations",
      date: "May 11",
      time: "3:45 PM",
      type: "chat"
    },
    {
      id: "7",
      title: "Calculus_Textbook_Chapter7.pdf",
      preview: "Integration techniques and application problems",
      date: "May 10",
      time: "10:20 AM",
      type: "document"
    },
    {
      id: "8",
      title: "React Component Issue",
      preview: "Debugging state management in functional components",
      date: "May 8",
      time: "9:15 AM",
      type: "code"
    }
  ];
  
  const getIconByType = (type: string) => {
    switch(type) {
      case "chat":
        return <MessageSquare className="h-5 w-5 text-gold-400" />;
      case "document":
        return <FileText className="h-5 w-5 text-blue-400" />;
      case "code":
        return <FileCode className="h-5 w-5 text-green-400" />;
      case "image":
        return <Image className="h-5 w-5 text-purple-400" />;
      default:
        return <MessageSquare className="h-5 w-5 text-gold-400" />;
    }
  };
  
  const handleOpenSession = (sessionId: string) => {
    toast({
      title: "Session opened",
      description: `Opening conversation session #${sessionId}`,
    });
  };
  
  const handleSearch = () => {
    toast({
      title: "Search initiated",
      description: "Enter keywords to search your conversation history",
    });
  };
  
  const handleClearHistory = () => {
    toast({
      title: "Clear history",
      description: "This will permanently delete your conversation history",
      variant: "destructive",
    });
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 pb-2 border-b border-charcoal-800/30">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Conversation History</h2>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="border-charcoal-800/30 hover:bg-gold-400/10 hover:text-gold-400"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4 mr-1" />
              Search
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-charcoal-800/30 hover:bg-red-400/10 hover:text-red-400"
              onClick={handleClearHistory}
            >
              Clear All
            </Button>
          </div>
        </div>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-6 pt-4 space-y-1">
          {historySessions.map((session) => (
            <div 
              key={session.id}
              className="group flex items-center justify-between p-3 rounded-md hover:bg-charcoal-800/10 transition-colors cursor-pointer"
              onClick={() => handleOpenSession(session.id)}
            >
              <div className="flex items-center space-x-3">
                {getIconByType(session.type)}
                <div>
                  <p className="font-medium text-sm">{session.title}</p>
                  <p className="text-xs text-muted-foreground">{session.preview}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-right mr-3">
                  <p className="text-xs text-muted-foreground">{session.date}</p>
                  <p className="text-xs text-muted-foreground">{session.time}</p>
                </div>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-gold-400" />
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AIAssistantHistory;
