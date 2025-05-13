
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Lock, Shield, Eye, EyeOff, Globe, UserCircle, Users, AlertTriangle, BookOpen, Settings, History, Activity, RefreshCw, Check, AlertCircle } from "lucide-react";

const PrivacySettings = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold-400" />
              Privacy Controls
            </CardTitle>
            <CardDescription>Manage who can see your information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Profile Visibility</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <Label className="text-sm">Study History & Progress</Label>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">Course completion and learning milestones</p>
                  </div>
                  <select className="bg-background border text-sm rounded-md px-2 py-1">
                    <option value="public">Public</option>
                    <option value="friends">Connections Only</option>
                    <option value="private" selected>Private</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <Label className="text-sm">Achievements & Badges</Label>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">Earned awards and accomplishments</p>
                  </div>
                  <select className="bg-background border text-sm rounded-md px-2 py-1">
                    <option value="public" selected>Public</option>
                    <option value="friends">Connections Only</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <Label className="text-sm">Learning Goals</Label>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">Current and future study objectives</p>
                  </div>
                  <select className="bg-background border text-sm rounded-md px-2 py-1">
                    <option value="public">Public</option>
                    <option value="friends" selected>Connections Only</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <Label className="text-sm">Social Connections</Label>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">Your network of study partners and mentors</p>
                  </div>
                  <select className="bg-background border text-sm rounded-md px-2 py-1">
                    <option value="public">Public</option>
                    <option value="friends" selected>Connections Only</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <UserCircle className="h-4 w-4 text-muted-foreground" />
                      <Label className="text-sm">Online Status</Label>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">Whether others can see when you're active</p>
                  </div>
                  <select className="bg-background border text-sm rounded-md px-2 py-1">
                    <option value="public">Public</option>
                    <option value="friends" selected>Connections Only</option>
                    <option value="private">Private</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <Label className="text-sm">Public Profile Listing</Label>
                    </div>
                    <p className="text-xs text-muted-foreground pl-6">Whether your profile appears in searches</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
            
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-medium">Data Privacy</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm">Allow Personalized Recommendations</Label>
                    <p className="text-xs text-muted-foreground">AI uses your study data to provide tailored suggestions</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm">Analytics & Usage Data Collection</Label>
                    <p className="text-xs text-muted-foreground">Helps us improve the learning experience</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm">Participation in Research Studies</Label>
                    <p className="text-xs text-muted-foreground">Anonymized data may be used for educational research</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto bg-gold-400 text-navy-950 hover:bg-gold-500">Save Privacy Settings</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <EyeOff className="h-5 w-5 text-gold-400" />
              Hidden Content
            </CardTitle>
            <CardDescription>Manage content you've chosen to hide</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <p className="text-sm font-medium">Hidden Achievements</p>
              <Button variant="outline" size="sm" className="h-7 text-xs">View All</Button>
            </div>
            
            <div className="flex items-center justify-between border-b pb-3">
              <p className="text-sm font-medium">Hidden Partner Recommendations</p>
              <Button variant="outline" size="sm" className="h-7 text-xs">View All</Button>
            </div>
            
            <div className="flex items-center justify-between border-b pb-3">
              <p className="text-sm font-medium">Blocked Users</p>
              <Button variant="outline" size="sm" className="h-7 text-xs">Manage</Button>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Muted Study Groups</p>
              <Button variant="outline" size="sm" className="h-7 text-xs">Manage</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-gold-400" />
              Activity & Login History
            </CardTitle>
            <CardDescription>Review your recent account activity</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="sessions">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
                <TabsTrigger value="logins">Login History</TabsTrigger>
                <TabsTrigger value="activity">Account Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="sessions" className="space-y-4">
                <div className="flex justify-between border-b pb-2 mb-2">
                  <p className="text-sm font-medium">Current Device</p>
                  <Badge className="bg-green-500 text-white text-xs">Active Now</Badge>
                </div>
                
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
                  {[
                    { device: "Windows PC - Chrome", location: "New York, USA", ip: "192.168.1.1", lastActive: "Current Session", current: true },
                    { device: "iPhone 13 - Safari", location: "New York, USA", ip: "192.168.1.2", lastActive: "2 hours ago" },
                    { device: "iPad Pro - Safari", location: "New York, USA", ip: "192.168.1.3", lastActive: "Yesterday, 8:45 PM" },
                    { device: "MacBook Pro - Chrome", location: "Boston, USA", ip: "192.168.2.1", lastActive: "May 10, 3:22 PM" },
                  ].map((session, i) => (
                    <div key={i} className={`border rounded-lg p-3 ${session.current ? 'border-gold-400/50 bg-gold-400/5' : ''}`}>
                      <div className="flex justify-between mb-1">
                        <p className="font-medium">{session.device}</p>
                        {session.current && (
                          <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">This Device</span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span>{session.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>IP Address:</span>
                          <span>{session.ip}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Active:</span>
                          <span>{session.lastActive}</span>
                        </div>
                      </div>
                      {!session.current && (
                        <Button variant="outline" size="sm" className="w-full mt-2 h-7 text-xs">
                          End Session
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="logins" className="max-h-[400px] overflow-y-auto pr-1">
                <div className="space-y-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="text-sm">{i === 0 ? 'Today, 10:23 AM' : i === 1 ? 'Yesterday, 8:45 PM' : `May ${10 - i}, ${i % 2 ? '9:30 AM' : '4:15 PM'}`}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{i % 2 ? 'Chrome - Windows' : 'Safari - iOS'}</span>
                          <span>•</span>
                          <span>{i % 2 ? 'New York, USA' : 'Boston, USA'}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {i < 2 ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <Check className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="activity" className="max-h-[400px] overflow-y-auto pr-1">
                <div className="space-y-3">
                  {[
                    { action: "Changed password", date: "May 8, 2024", icon: Lock },
                    { action: "Updated email preferences", date: "May 5, 2024", icon: Settings },
                    { action: "Changed privacy settings", date: "April 29, 2024", icon: Eye },
                    { action: "Connected Google account", date: "April 28, 2024", icon: RefreshCw },
                    { action: "Updated profile information", date: "April 25, 2024", icon: UserCircle },
                    { action: "Created account", date: "April 20, 2024", icon: UserCircle },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 border-b pb-2">
                      <div className="p-2 rounded-full bg-muted mt-0.5">
                        <item.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="link" className="px-0 text-destructive hover:text-destructive/90">
              Sign out of all devices
            </Button>
            <Button>Refresh</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-gold-400" />
              Data Management
            </CardTitle>
            <CardDescription>Control your personal data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Export Your Data</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Download a copy of all data associated with your account
                  </p>
                  <Button variant="outline" className="h-8 text-xs">Request Data Export</Button>
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-4 space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                <div>
                  <h3 className="font-medium">Delete Your Account</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Permanently remove your account and all associated data
                  </p>
                  <Button variant="destructive" className="h-8 text-xs">Delete Account</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacySettings;
