
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Calendar, FileEdit, Cloud, Video, BookOpen, Clock, Plus, ExternalLink, ChevronDown, HelpCircle, Key } from "lucide-react";

const ConnectedApps = () => {
  const [isApiSectionOpen, setIsApiSectionOpen] = useState(false);
  const [isConnectAppDialogOpen, setIsConnectAppDialogOpen] = useState(false);
  const [isApiKeyDialogOpen, setIsApiKeyDialogOpen] = useState(false);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Cloud className="h-5 w-5 text-gold-400" />
                Connected Applications
              </CardTitle>
              <Dialog open={isConnectAppDialogOpen} onOpenChange={setIsConnectAppDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500 h-8 gap-1">
                    <Plus className="h-4 w-4" />
                    Connect App
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Connect a New Application</DialogTitle>
                    <DialogDescription>
                      Link your accounts for a seamless experience
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Tabs defaultValue="popular" className="py-4">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="popular">Popular</TabsTrigger>
                      <TabsTrigger value="productivity">Productivity</TabsTrigger>
                      <TabsTrigger value="all">All Apps</TabsTrigger>
                    </TabsList>
                    <TabsContent value="popular" className="grid grid-cols-2 gap-3">
                      {["Google Calendar", "Notion", "Zoom", "Google Drive", "Microsoft OneDrive", "Evernote"].map((app, i) => (
                        <Button key={i} variant="outline" className="h-auto py-4 flex-col space-y-2 hover:border-gold-400/50">
                          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                            <Cloud className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <span>{app}</span>
                        </Button>
                      ))}
                    </TabsContent>
                    <TabsContent value="productivity" className="h-[200px] flex items-center justify-center text-muted-foreground">
                      Productivity apps list
                    </TabsContent>
                    <TabsContent value="all" className="h-[200px] flex items-center justify-center text-muted-foreground">
                      All available apps
                    </TabsContent>
                  </Tabs>
                  
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsConnectAppDialogOpen(false)}>Cancel</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <CardDescription>Manage your integrated services</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Google Calendar", iconComponent: Calendar, connected: true, lastSync: "Today, 09:34 AM" },
              { name: "Notion", iconComponent: FileEdit, connected: true, lastSync: "Yesterday, 04:22 PM" },
              { name: "Google Drive", iconComponent: Cloud, connected: true, lastSync: "May 10, 10:15 AM" },
              { name: "Zoom", iconComponent: Video, connected: true, lastSync: "May 8, 03:45 PM" },
              { name: "Microsoft OneDrive", iconComponent: Cloud, connected: false },
            ].map((app, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full ${app.connected ? 'bg-muted' : 'bg-muted/50'} flex items-center justify-center`}>
                    <app.iconComponent className={`h-5 w-5 ${app.connected ? 'text-muted-foreground' : 'text-muted-foreground/50'}`} />
                  </div>
                  <div>
                    <p className={`font-medium ${app.connected ? '' : 'text-muted-foreground'}`}>{app.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {app.connected ? 
                        `Last synchronized: ${app.lastSync}` : 
                        "Not connected"}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {app.connected ? (
                    <>
                      <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                        Settings
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-8 gap-1 text-xs text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-8 gap-1 text-xs"
                    >
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold-400" />
              Sync Settings
            </CardTitle>
            <CardDescription>Control how your apps work together</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Auto-Synchronization</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically sync data between connected applications
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Sync Schedule</Label>
                  <p className="text-sm text-muted-foreground">
                    How often should we sync your data?
                  </p>
                </div>
                <div className="flex items-center">
                  <select className="bg-background text-sm border rounded-md px-2 py-1">
                    <option>Every 15 minutes</option>
                    <option>Every 30 minutes</option>
                    <option>Every hour</option>
                    <option>Every 3 hours</option>
                    <option>Every 6 hours</option>
                    <option>Daily</option>
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Sync Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Notify me when data is synchronized
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto bg-gold-400 text-navy-950 hover:bg-gold-500">Save Settings</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gold-400" />
              App Integration Features
            </CardTitle>
            <CardDescription>See what's possible with your connected apps</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-1 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold-400" />
                Calendar Integration
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Your study schedule syncs with Google Calendar for seamless planning
              </p>
              <div className="flex text-xs text-muted-foreground">
                <p>Enabled via Google Calendar</p>
                <Button variant="link" size="sm" className="h-auto p-0 ml-auto text-xs text-gold-400">
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  View Calendar
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-1 flex items-center gap-2">
                <FileEdit className="h-4 w-4 text-gold-400" />
                Note Synchronization
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Your study notes sync with Notion for cross-platform access
              </p>
              <div className="flex text-xs text-muted-foreground">
                <p>Enabled via Notion</p>
                <Button variant="link" size="sm" className="h-auto p-0 ml-auto text-xs text-gold-400">
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  Open Notion
                </Button>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-1 flex items-center gap-2">
                <Video className="h-4 w-4 text-gold-400" />
                Video Sessions
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Launch study group sessions directly through Zoom
              </p>
              <div className="flex text-xs text-muted-foreground">
                <p>Enabled via Zoom</p>
                <Button variant="link" size="sm" className="h-auto p-0 ml-auto text-xs text-gold-400">
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  Start Meeting
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Collapsible
          open={isApiSectionOpen}
          onOpenChange={setIsApiSectionOpen}
          className="w-full"
        >
          <Card>
            <CardHeader className="pb-2">
              <CollapsibleTrigger asChild>
                <div className="flex justify-between items-center w-full cursor-pointer">
                  <CardTitle className="flex items-center gap-2">
                    <Key className="h-5 w-5 text-gold-400" />
                    API & Developer Tools
                  </CardTitle>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isApiSectionOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
              </CollapsibleTrigger>
              <CardDescription>Advanced integration options for developers</CardDescription>
            </CardHeader>
            <CollapsibleContent>
              <CardContent className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="font-medium">Your API Keys</h3>
                    <p className="text-sm text-muted-foreground">Manage your API access credentials</p>
                  </div>
                  <Dialog open={isApiKeyDialogOpen} onOpenChange={setIsApiKeyDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500 h-8 gap-1">
                        <Plus className="h-4 w-4" />
                        Create API Key
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Create New API Key</DialogTitle>
                        <DialogDescription>
                          This key will allow secure access to your data via the API
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="key-name">Key Name</Label>
                          <Input id="key-name" placeholder="E.g., Personal Project" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Permissions</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Switch id="read" />
                              <Label htmlFor="read" className="font-normal">Read access</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Switch id="write" />
                              <Label htmlFor="write" className="font-normal">Write access</Label>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="expiration">Expiration</Label>
                          <select id="expiration" className="w-full p-2 rounded-md border">
                            <option value="30">30 days</option>
                            <option value="90">90 days</option>
                            <option value="365">1 year</option>
                            <option value="0">No expiration</option>
                          </select>
                        </div>
                      </div>
                      
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsApiKeyDialogOpen(false)}>Cancel</Button>
                        <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500" onClick={() => setIsApiKeyDialogOpen(false)}>
                          Generate API Key
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="text-center py-8">
                  <div className="mb-4">
                    <Key className="h-12 w-12 text-muted-foreground mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">No API Keys Yet</h3>
                  <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                    API keys allow developers to integrate with StudyXcelerate API 
                    for custom applications and workflows
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsApiKeyDialogOpen(true)}
                    className="gap-1"
                  >
                    <Key className="h-4 w-4" />
                    Create Your First API Key
                  </Button>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <Button variant="link" className="px-0 h-auto text-gold-400 gap-1">
                    <HelpCircle className="h-4 w-4" />
                    API Documentation
                  </Button>
                  <Button variant="link" className="px-0 h-auto text-gold-400 gap-1">
                    <BookOpen className="h-4 w-4" />
                    Developer Guide
                  </Button>
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </div>
  );
};

export default ConnectedApps;
