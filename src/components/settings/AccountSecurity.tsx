
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Key } from "lucide-react";

const AccountSecurity = () => {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Security settings saved",
      description: "Your account security preferences have been updated.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Key className="h-5 w-5 text-gold-400" />
          <CardTitle>Account Security</CardTitle>
        </div>
        <CardDescription>
          Manage security settings to protect your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="enable-2fa">Enable Two-Factor Auth</Label>
              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
            </div>
            <Switch id="enable-2fa" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="2fa-method">2FA Method</Label>
            <Select defaultValue="app">
              <SelectTrigger>
                <SelectValue placeholder="Select method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="app">Authenticator App</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="security-key">Security Key</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button variant="outline" className="w-full">
            Set Up Two-Factor Authentication
          </Button>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Login Security</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="login-notifications">Login Notifications</Label>
              <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
            </div>
            <Switch id="login-notifications" defaultChecked />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="session-timeout">Session Timeout</Label>
            <Select defaultValue="30">
              <SelectTrigger>
                <SelectValue placeholder="Select timeout" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">1 hour</SelectItem>
                <SelectItem value="120">2 hours</SelectItem>
                <SelectItem value="never">Never</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Device Management</h3>
          
          <Button variant="outline" className="w-full">
            View Active Sessions
          </Button>
          
          <Button variant="destructive" className="w-full">
            Sign Out All Devices
          </Button>
        </div>

        <div className="flex justify-end">
          <Button 
            onClick={handleSaveSettings}
            className="bg-gold-400 text-navy-950 hover:bg-gold-500"
          >
            Save Security Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountSecurity;
