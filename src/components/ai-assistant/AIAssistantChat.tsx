
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, User } from "lucide-react";

type Message = {
  id: string;
  content: string;
  type: "user" | "assistant";
  timestamp: Date;
};

const AIAssistantChat = () => {
  // Mock conversation data - in a real app this would be stored in state and updated
  const messages: Message[] = [
    {
      id: "1",
      content: "Hello! I'm your AI study assistant. I'm here to help with your coursework, answer questions, and provide personalized learning support. How can I assist you today?",
      type: "assistant",
      timestamp: new Date(Date.now() - 1000 * 60 * 10) // 10 minutes ago
    },
    {
      id: "2",
      content: "Can you help me understand the concept of quantum entanglement?",
      type: "user",
      timestamp: new Date(Date.now() - 1000 * 60 * 8) // 8 minutes ago
    },
    {
      id: "3",
      content: "Certainly! Quantum entanglement is a phenomenon in quantum physics where two or more particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others, regardless of the distance separating them.\n\nWhen particles are entangled, whatever happens to one particle can instantly affect the other, even if they're at opposite ends of the universe. This connection happens instantaneously, seemingly faster than the speed of light, which Einstein famously called \"spooky action at a distance.\"\n\nFrom your Physics 301 course materials, Professor Johnson described this as \"nature's most bizarre and counterintuitive phenomenon\" in Lecture 7. Would you like me to explain the mathematical formulation or provide some practical examples of entanglement?",
      type: "assistant",
      timestamp: new Date(Date.now() - 1000 * 60 * 7) // 7 minutes ago
    }
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <ScrollArea className="flex-1 pr-4">
      <div className="space-y-4 py-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <Card 
              className={`max-w-[80%] ${
                message.type === "user" 
                  ? "bg-gold-400/10 border-gold-400/30" 
                  : "bg-charcoal-800/10 border-charcoal-800/30"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  {message.type === "assistant" && (
                    <Avatar className="h-8 w-8 border border-gold-400/30 bg-navy-950">
                      <BrainCircuit className="h-5 w-5 text-gold-400" />
                    </Avatar>
                  )}
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium">
                        {message.type === "assistant" ? "AI Assistant" : "You"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                    <div className="whitespace-pre-line text-sm">
                      {message.content}
                    </div>
                  </div>
                  
                  {message.type === "user" && (
                    <Avatar className="h-8 w-8 border bg-navy-950">
                      <User className="h-5 w-5" />
                    </Avatar>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default AIAssistantChat;
