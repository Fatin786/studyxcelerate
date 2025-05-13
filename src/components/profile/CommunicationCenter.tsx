
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { MessageSquare, BrainCircuit, Bell, Users, BookOpen, CheckCircle2, AlertCircle, Search, ArrowRight, Filter } from "lucide-react";

const CommunicationCenter = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-gold-400" />
                Inbox & Messages
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" className="h-8 gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button className="h-8 gap-1 bg-gold-400 text-navy-950 hover:bg-gold-500">
                  <MessageSquare className="h-4 w-4" />
                  New Message
                </Button>
              </div>
            </div>
            <CardDescription>Your communication hub</CardDescription>
          </CardHeader>
          <CardContent className="h-[calc(100%-100px)]">
            <Tabs defaultValue="all" className="h-full">
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">
                  Unread
                  <Badge className="ml-1 bg-gold-400 text-navy-950">3</Badge>
                </TabsTrigger>
                <TabsTrigger value="mentors">Mentors</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
              </TabsList>
              
              <div className="relative">
                <div className="absolute right-0 top-0">
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
              
              <TabsContent value="all" className="h-[calc(100%-50px)]">
                <div className="border rounded-md h-full overflow-hidden flex flex-col">
                  <div className="overflow-auto h-full">
                    {[
                      { name: "AI Assistant", content: "Here are today's study recommendations based on your goals", time: "10:23 AM", avatar: "AI", system: true, unread: true },
                      { name: "Prof. Smith", content: "Could you send me your assignment draft for review?", time: "Yesterday", avatar: "PS", unread: true },
                      { name: "Study Group: Data Structures", content: "Alex: Can we meet tomorrow to review the linked list implementation?", time: "Yesterday", avatar: "DS", group: true },
                      { name: "System Notification", content: "Your weekly progress report is now available", time: "May 12", avatar: "SN", system: true, unread: true },
                      { name: "Emma Johnson", content: "Thanks for helping me with that problem!", time: "May 10", avatar: "EJ" },
                      { name: "Study Reminder", content: "Don't forget your scheduled study session in 30 minutes", time: "May 9", avatar: "SR", system: true },
                      { name: "Michael Chen", content: "I shared my notes from yesterday's lecture", time: "May 8", avatar: "MC" },
                    ].map((message, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center gap-3 px-4 py-3 border-b hover:bg-muted/50 cursor-pointer transition-colors ${
                          message.unread ? 'bg-gold-400/5' : ''
                        }`}
                      >
                        <Avatar className={`${message.system ? 'bg-gold-400/10' : message.group ? 'bg-blue-500/10' : 'bg-muted'}`}>
                          <AvatarFallback className={`${message.system ? 'text-gold-400' : message.group ? 'text-blue-500' : ''}`}>
                            {message.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <p className={`font-medium truncate ${message.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {message.name}
                            </p>
                            <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{message.time}</span>
                          </div>
                          <p className={`text-sm truncate ${message.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {message.content}
                          </p>
                        </div>
                        {message.unread && <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></div>}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto border-t p-4 bg-muted/30 text-center">
                    <p className="text-sm text-muted-foreground">End of messages</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="unread" className="h-[calc(100%-50px)]">
                <div className="border rounded-md h-full flex items-center justify-center text-muted-foreground">
                  Unread messages
                </div>
              </TabsContent>
              
              <TabsContent value="mentors" className="h-[calc(100%-50px)]">
                <div className="border rounded-md h-full flex items-center justify-center text-muted-foreground">
                  Mentor communications
                </div>
              </TabsContent>
              
              <TabsContent value="students" className="h-[calc(100%-50px)]">
                <div className="border rounded-md h-full flex items-center justify-center text-muted-foreground">
                  Student messages
                </div>
              </TabsContent>
              
              <TabsContent value="system" className="h-[calc(100%-50px)]">
                <div className="border rounded-md h-full flex items-center justify-center text-muted-foreground">
                  System notifications
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-gold-400" />
              Mentor Connections
            </CardTitle>
            <CardDescription>Request help from expert mentors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium">Request Mentor Session</h3>
                <Button size="sm" className="h-8 bg-gold-400 text-navy-950 hover:bg-gold-500">Find Mentors</Button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with subject experts who can help with challenging topics and provide personalized guidance.
              </p>
              <div className="space-y-2">
                <h4 className="text-xs font-medium">Available in Your Subjects:</h4>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold-400/10 text-gold-400">Data Structures</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold-400/10 text-gold-400">Algorithms</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-charcoal-800/30 text-muted-foreground">Machine Learning</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-sm font-medium pt-2">Recent Mentor Interactions</h3>
            
            <div className="space-y-3">
              {[
                { name: "Prof. Smith", subject: "Data Structures", status: "Scheduled", date: "May 15, 3:00 PM" },
                { name: "Dr. Johnson", subject: "Algorithms", status: "Completed", date: "May 8, 2:30 PM" },
              ].map((mentor, i) => (
                <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{mentor.name}</p>
                    <p className="text-xs text-muted-foreground">{mentor.subject}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge className={`text-xs ${mentor.status === "Scheduled" ? "bg-blue-500" : "bg-green-500"} text-white`}>
                        {mentor.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{mentor.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gold-400" />
              Notification Preferences
            </CardTitle>
            <CardDescription>Customize your notification settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-sm font-medium">Communication Channels</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">In-App Notifications</p>
                  <p className="text-xs text-muted-foreground">Real-time alerts within the app</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Email Notifications</p>
                  <p className="text-xs text-muted-foreground">Send important updates to your email</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Push Notifications</p>
                  <p className="text-xs text-muted-foreground">Alerts on your device when app is closed</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">SMS Notifications</p>
                  <p className="text-xs text-muted-foreground">Text message alerts for critical updates</p>
                </div>
                <Switch />
              </div>
            </div>
            
            <h3 className="text-sm font-medium pt-2">Notification Types</h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Social Updates</span>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Study Reminders</span>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Goal Updates</span>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">System Alerts</span>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">AI Recommendations</span>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CommunicationCenter;
