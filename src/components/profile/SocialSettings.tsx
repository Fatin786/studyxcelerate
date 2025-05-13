
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Users, UserSearch, Award, BookOpen, Check, X, Bell, Clock, UserCheck, Rocket, Zap, Plus, Filter, Search } from "lucide-react";

const SocialSettings = () => {
  const [studyPartnerDialogOpen, setStudyPartnerDialogOpen] = useState(false);
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      <div className="lg:col-span-4 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gold-400" />
                Social Profile
              </CardTitle>
              <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500">Update Profile</Button>
            </div>
            <CardDescription>Manage how others see you in the community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="display-name" className="text-sm font-medium">Display Name</label>
                <input
                  id="display-name"
                  type="text"
                  defaultValue="John Doe"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="tagline" className="text-sm font-medium">Tagline</label>
                <input
                  id="tagline"
                  type="text"
                  defaultValue="Computer Science Student | AI Enthusiast"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                />
                <p className="text-xs text-muted-foreground">Short description that appears under your name</p>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                <textarea
                  id="bio"
                  rows={3}
                  defaultValue="Computer Science student with a passion for AI and machine learning. Always looking to connect with like-minded students for study groups and projects."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 resize-none"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Interests & Subjects</label>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Data Structures", "Web Development", "Algorithms", "Databases", "Mathematics"].map((interest, i) => (
                    <Badge key={i} className="bg-charcoal-800/30 text-foreground hover:bg-charcoal-800/50 cursor-pointer flex gap-1">
                      {interest}
                      <X className="h-3 w-3" />
                    </Badge>
                  ))}
                  <Badge className="bg-transparent border border-dashed border-muted-foreground text-muted-foreground hover:bg-charcoal-800/10">
                    <Plus className="h-3 w-3 mr-1" /> Add
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4 space-y-4">
              <h3 className="font-medium">Privacy & Visibility Settings</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="block text-sm">Public Profile</label>
                    <p className="text-xs text-muted-foreground">Allow other students to view your profile</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="block text-sm">Share Study Progress</label>
                    <p className="text-xs text-muted-foreground">Show your course completion and milestones</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="block text-sm">Share Achievements</label>
                    <p className="text-xs text-muted-foreground">Display badges and awards on your profile</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="block text-sm">Share Goals</label>
                    <p className="text-xs text-muted-foreground">Let others see what you're working towards</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gold-400" />
              Public Achievements Feed
            </CardTitle>
            <CardDescription>Choose which accomplishments to share with the community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="block text-sm font-medium">Share Feed</label>
                  <p className="text-xs text-muted-foreground">Enable achievements feed on your profile</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="border rounded-md p-4 space-y-3">
                <h4 className="text-sm font-medium">Select which achievements to share:</h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Badges & Awards</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Goal Completions</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Course Completions</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Study Streaks</span>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-gold-400" />
                    <span className="text-sm">Focus Milestones</span>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
            
            <div className="border rounded-md p-4 space-y-3">
              <h4 className="text-sm font-medium mb-2">Recent Shared Achievements</h4>
              
              {[
                { type: "streak", title: "7-Day Study Streak", date: "May 12, 2024" },
                { type: "badge", title: "Algorithm Master Badge", date: "May 10, 2024" },
                { type: "completion", title: "Completed Data Structures Course", date: "May 5, 2024" },
              ].map((achievement, i) => (
                <div key={i} className="flex items-center justify-between border-b last:border-b-0 pb-2 last:pb-0">
                  <div className="flex items-center gap-2">
                    {achievement.type === "streak" && <Clock className="h-4 w-4 text-orange-500" />}
                    {achievement.type === "badge" && <Award className="h-4 w-4 text-purple-500" />}
                    {achievement.type === "completion" && <Check className="h-4 w-4 text-green-500" />}
                    <div>
                      <p className="text-sm">{achievement.title}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8">
                    Hide
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500 ml-auto">Save Preferences</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="lg:col-span-3 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <UserSearch className="h-5 w-5 text-gold-400" />
                Study Partner Match
              </CardTitle>
              <Dialog open={studyPartnerDialogOpen} onOpenChange={setStudyPartnerDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500 gap-1 h-8">
                    <Search className="h-4 w-4" />
                    Find Partners
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Find Study Partners</DialogTitle>
                    <DialogDescription>
                      Connect with students based on shared courses, interests, or learning styles
                    </DialogDescription>
                  </DialogHeader>
                  
                  <Tabs defaultValue="recommended" className="py-4">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="recommended">Recommended</TabsTrigger>
                      <TabsTrigger value="nearby">Nearby</TabsTrigger>
                      <TabsTrigger value="search">Search</TabsTrigger>
                    </TabsList>
                    
                    <div className="flex justify-end mb-4">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Filter className="h-3.5 w-3.5" />
                        Filters
                      </Button>
                    </div>
                    
                    <TabsContent value="recommended">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-2">
                        {Array.from({length: 5}).map((_, i) => (
                          <div key={i} className="border rounded-lg p-3 flex gap-3 hover:border-gold-400/50 transition-all">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>
                                {String.fromCharCode(65 + i)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="font-medium">Student {i + 1}</p>
                                  <p className="text-xs text-muted-foreground">Computer Science</p>
                                </div>
                                <Badge className={`${i % 2 === 0 ? 'bg-green-500' : 'bg-amber-500'} text-white text-xs`}>
                                  {i % 2 === 0 ? '95% Match' : '82% Match'}
                                </Badge>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                <span className="text-xs px-1.5 py-0.5 rounded-full bg-charcoal-800/30 text-muted-foreground">Data Structures</span>
                                <span className="text-xs px-1.5 py-0.5 rounded-full bg-charcoal-800/30 text-muted-foreground">Visual Learner</span>
                              </div>
                              <div className="mt-2 flex justify-end">
                                <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
                                  Connect
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="nearby">
                      <div className="h-[250px] flex items-center justify-center text-muted-foreground">
                        Find students at your location
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="search">
                      <div className="h-[250px] flex items-center justify-center text-muted-foreground">
                        Search for specific students
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setStudyPartnerDialogOpen(false)}>Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <CardDescription>Find and connect with compatible study partners</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="block text-sm font-medium">Available for Study Partners</label>
                <p className="text-xs text-muted-foreground">Let others know you're open to collaborate</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="border rounded-lg p-3">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 rounded-full bg-gold-400/10 flex items-center justify-center">
                  <UserCheck className="h-5 w-5 text-gold-400" />
                </div>
                <div>
                  <h3 className="font-medium">Your Study Partner Status</h3>
                  <p className="text-sm text-muted-foreground">Looking for partners in: Data Structures, AI</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Partner Preferences</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="block text-xs">Study Frequency</label>
                  <select className="w-full text-sm p-1.5 rounded-md border">
                    <option>Daily</option>
                    <option>2-3 times a week</option>
                    <option>Weekly</option>
                    <option>Occasionally</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-xs">Study Mode</label>
                  <select className="w-full text-sm p-1.5 rounded-md border">
                    <option>Virtual</option>
                    <option>In-person</option>
                    <option>Both</option>
                  </select>
                </div>
              </div>
            </div>
            
            <h4 className="text-sm font-medium pt-2">Matching Criteria</h4>
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Same Courses</span>
                  <span>High Priority</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Learning Style</span>
                  <span>Medium Priority</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Study Schedule</span>
                  <span>Medium Priority</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Geographic Location</span>
                  <span>Low Priority</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500 ml-auto">Save Preferences</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gold-400" />
              Social Notifications
            </CardTitle>
            <CardDescription>Manage community updates and alerts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Study Partner Requests</p>
                  <p className="text-xs text-muted-foreground">When someone wants to connect</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Achievement Comments</p>
                  <p className="text-xs text-muted-foreground">When others comment on your milestones</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Study Group Invitations</p>
                  <p className="text-xs text-muted-foreground">When you're invited to join a group</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Connection Milestones</p>
                  <p className="text-xs text-muted-foreground">When your connections achieve goals</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Community Announcements</p>
                  <p className="text-xs text-muted-foreground">Platform-wide updates and news</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto">Save Preferences</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SocialSettings;
