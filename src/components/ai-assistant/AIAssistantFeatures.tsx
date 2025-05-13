
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, Search, Bell, FileText, Book, Languages, 
  Clock, VideoIcon, ArrowRight, AlertTriangle, HelpCircle,
  FileCode, Pencil, FileEdit, Brain, Code, Mic, Share2,
  Laptop, Info
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Context-Aware Query Resolution",
    description: "Get answers based on your actual course materials, not generic responses.",
    icon: <MessageSquare className="text-gold-400" />
  },
  {
    id: 2,
    title: "Multi-Modal Input Handling",
    description: "Upload images, PDFs, or use voice to ask questions about complex topics.",
    icon: <FileText className="text-gold-400" />
  },
  {
    id: 3,
    title: "Proactive Study Reminders",
    description: "Receive timely reminders to review challenging concepts at optimal times.",
    icon: <Bell className="text-gold-400" />
  },
  {
    id: 4,
    title: "Adaptive Hint Generation",
    description: "Get progressive hints that guide without revealing complete solutions.",
    icon: <HelpCircle className="text-gold-400" />
  },
  {
    id: 5,
    title: "Emotionally Intelligent Check-Ins",
    description: "Receive supportive messages based on your learning patterns and stress indicators.",
    icon: <Brain className="text-gold-400" />
  },
  {
    id: 6,
    title: "Real-Time Translation",
    description: "Instantly translate content into multiple languages for better comprehension.",
    icon: <Languages className="text-gold-400" />
  },
  {
    id: 7,
    title: "Smart Content Summarization",
    description: "Convert lengthy materials into concise summaries and concept maps.",
    icon: <FileEdit className="text-gold-400" />
  },
  {
    id: 8,
    title: "Integration with Live Video Lectures",
    description: "Get real-time support during online classes through platform integrations.",
    icon: <VideoIcon className="text-gold-400" />
  },
  {
    id: 9,
    title: "Personalized Learning Pathways",
    description: "Follow AI-generated study paths tailored to your progress and goals.",
    icon: <ArrowRight className="text-gold-400" />
  },
  {
    id: 10,
    title: "Predictive Academic Alerts",
    description: "Get early warnings about potential challenges or grade risks.",
    icon: <AlertTriangle className="text-gold-400" />
  },
  {
    id: 11,
    title: "Contextual Resource Recommendations",
    description: "Discover relevant learning materials based on your current focus area.",
    icon: <Book className="text-gold-400" />
  },
  {
    id: 12,
    title: "Voice-Activated Hands-Free Mode",
    description: "Operate the assistant with natural voice commands during hands-on tasks.",
    icon: <Mic className="text-gold-400" />
  },
  {
    id: 13,
    title: "Collaborative Group Study",
    description: "Share AI insights with study partners in collaborative sessions.",
    icon: <Share2 className="text-gold-400" />
  },
  {
    id: 14,
    title: "Code Debugging and Explanation",
    description: "Get line-by-line code analysis and bug-fixing recommendations.",
    icon: <FileCode className="text-gold-400" />
  },
  {
    id: 15,
    title: "Virtual Whiteboard Assistant",
    description: "Convert free-form notes into organized mind maps and outlines.",
    icon: <Pencil className="text-gold-400" />
  },
  {
    id: 16,
    title: "Automated Citation Help",
    description: "Generate properly formatted citations in any academic style.",
    icon: <FileText className="text-gold-400" />
  },
  {
    id: 17,
    title: "Exam Simulation & Analysis",
    description: "Practice with custom exams and get detailed performance feedback.",
    icon: <Clock className="text-gold-400" />
  },
  {
    id: 18,
    title: "Continuous Skill Gap Analysis",
    description: "Visualize your knowledge strengths and areas for improvement.",
    icon: <Search className="text-gold-400" />
  },
  {
    id: 19,
    title: "Cross-Platform Session Sync",
    description: "Continue conversations seamlessly across all your devices.",
    icon: <Laptop className="text-gold-400" />
  },
  {
    id: 20,
    title: "Ethical Usage Insights",
    description: "See source attribution and confidence levels for AI-generated answers.",
    icon: <Info className="text-gold-400" />
  }
];

const AIAssistantFeatures = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">AI Assistant Features</h2>
        <p className="text-muted-foreground">Explore how our AI can enhance your learning experience</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <Card key={feature.id} className="border-charcoal-800/30 hover:border-gold-400/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {feature.icon}
                <CardTitle className="text-md">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AIAssistantFeatures;
