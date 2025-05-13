import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lock, CreditCard, Wallet, Calendar, Clock, CheckCircle2, AlertCircle, Shield, Star, Users, Zap, KeySquare, ExternalLink, AlertTriangle } from "lucide-react";

const AccountManagement = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      <div className="lg:col-span-4 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-gold-400" />
              Account Security
            </CardTitle>
            <CardDescription>Manage your account credentials and security options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Email Address</h3>
                <Badge variant="outline">Verified</Badge>
              </div>
              <div className="flex gap-4 items-end">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="email">Primary Email</Label>
                  <Input id="email" type="email" value="john.doe@example.com" disabled />
                </div>
                <Button variant="outline" className="h-10">Change Email</Button>
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <h3 className="text-sm font-medium">Password</h3>
                <div className="flex gap-4 items-end">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm">Password Strength</Label>
                  <div className="space-y-2">
                    <Progress value={70} className="h-2" />
                    <p className="text-xs text-muted-foreground">Strong password</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                  <Badge className="bg-amber-500 text-white">Recommended</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account by requiring more than just a password to sign in.
                </p>
                <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500">Enable 2FA</Button>
              </div>
              
              <div className="border-t pt-4 space-y-3">
                <h3 className="text-sm font-medium">Login Sessions</h3>
                <p className="text-sm text-muted-foreground">
                  You're currently logged in on 3 devices.
                </p>
                <Button variant="outline">Manage Sessions</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="ml-auto bg-gold-400 text-navy-950 hover:bg-gold-500">Save Security Settings</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-gold-400" />
              Subscription & Billing
            </CardTitle>
            <CardDescription>Manage your plan and payment details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 bg-gold-400/5 border-gold-400/30">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <h3 className="font-medium">Premium Plan</h3>
                    <Badge className="bg-gold-400 text-navy-950">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    $9.99/month • Renewed on June 15, 2024
                  </p>
                </div>
                <Button variant="outline">Manage Plan</Button>
              </div>
              
              <div className="flex items-center gap-3 pt-3 border-t border-gold-400/20">
                <div className="h-10 w-10 rounded-md bg-white flex items-center justify-center">
                  <img src="/placeholder.svg" alt="Visa" className="h-5" />
                </div>
                <div>
                  <p className="text-sm">Visa ending in 4242</p>
                  <p className="text-xs text-muted-foreground">Expires 05/2025</p>
                </div>
                <Button variant="link" className="ml-auto px-0 h-auto">Change payment method</Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium">Billing History</h3>
              
              <div className="border rounded-lg divide-y">
                {[
                  { date: "May 15, 2024", amount: "$9.99", status: "Paid", invoice: "INV-2024-0512" },
                  { date: "April 15, 2024", amount: "$9.99", status: "Paid", invoice: "INV-2024-0412" },
                  { date: "March 15, 2024", amount: "$9.99", status: "Paid", invoice: "INV-2024-0312" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3">
                    <div>
                      <p className="text-sm">{item.date}</p>
                      <p className="text-xs text-muted-foreground">Premium Plan</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{item.amount}</p>
                      <div className="flex items-center gap-1 justify-end">
                        <span className="text-xs text-green-500">{item.status}</span>
                        <Button variant="link" className="p-0 h-auto text-xs">
                          Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="lg:col-span-3 space-y-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-gold-400" />
              Usage & Limits
            </CardTitle>
            <CardDescription>Monitor your resource utilization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Cloud Storage</span>
                <span>3.2 GB / 50 GB</span>
              </div>
              <Progress value={6.4} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Used for documents, notes, and uploads
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>StudyCoins Balance</span>
                <span className="text-gold-400">1,250 coins</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-gold-400 to-amber-500" style={{ width: '80%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground">
                Earn coins by completing study goals and use them for premium features
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>AI Assistance Quota</span>
                <span>45 / 100 queries</span>
              </div>
              <Progress value={45} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Monthly limit for AI-powered summaries and answers
              </p>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="text-sm font-medium mb-3">Premium Features</h3>
              
              <div className="space-y-2">
                {[
                  { feature: "Unlimited AI Assistance", icon: Zap, enabled: true },
                  { feature: "Advanced Analytics", icon: Calendar, enabled: true },
                  { feature: "Mentor Sessions", icon: Users, enabled: true },
                  { feature: "Priority Support", icon: Star, enabled: true },
                  { feature: "API Access", icon: KeySquare, enabled: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <item.icon className={`h-4 w-4 ${item.enabled ? 'text-gold-400' : 'text-muted-foreground'}`} />
                      <span className={`text-sm ${!item.enabled && 'text-muted-foreground'}`}>{item.feature}</span>
                    </div>
                    {item.enabled ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : (
                      <Button variant="outline" size="sm" className="h-7 text-xs">Upgrade</Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-gold-400" />
              Academic License
            </CardTitle>
            <CardDescription>Linked institutional account status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">State University</p>
                  <p className="text-xs text-muted-foreground">Institutional License</p>
                </div>
                <Badge className="ml-auto bg-green-500 text-white">Active</Badge>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Student ID:</span>
                  <span>ST2024-8842</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valid Until:</span>
                  <span>August 31, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">License Type:</span>
                  <span>Full Academic Access</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium">License Benefits</h3>
              
              <div className="space-y-2">
                {[
                  "Access to university-specific materials",
                  "Integration with campus LMS",
                  "Departmental study groups",
                  "Professor office hours booking",
                  "Campus library resources"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Button className="w-full gap-1 mt-2">
              <ExternalLink className="h-4 w-4" />
              Access University Portal
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-gold-400" />
              Account Actions
            </CardTitle>
            <CardDescription>Important account management options</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="support">
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="support">Support</TabsTrigger>
                <TabsTrigger value="actions">Actions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="support" className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our support team is here to assist you with any account-related questions.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      Chat Support
                    </Button>
                    <Button variant="outline" className="gap-1">
                      <Mail className="h-4 w-4" />
                      Email Support
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">FAQ</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Button variant="link" className="h-auto p-0">How do I change my email address?</Button>
                    </li>
                    <li>
                      <Button variant="link" className="h-auto p-0">Can I transfer my subscription?</Button>
                    </li>
                    <li>
                      <Button variant="link" className="h-auto p-0">How to cancel my premium plan?</Button>
                    </li>
                    <li>
                      <Button variant="link" className="h-auto p-0">Where can I find my invoices?</Button>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="actions" className="space-y-4">
                <div className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <Lock className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Deactivate Account</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Temporarily disable your account and pause subscription
                      </p>
                      <Button variant="outline" className="h-8 text-xs">Deactivate</Button>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 border-red-500/20 space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-red-500">Delete Account</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Permanently remove your account and all data
                      </p>
                      <Button variant="destructive" className="h-8 text-xs">Delete Account</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountManagement;

function MessageSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
