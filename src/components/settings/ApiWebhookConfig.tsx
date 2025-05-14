
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Key } from "lucide-react";

const ApiWebhookConfig = () => {
  const { toast } = useToast();

  const handleGenerateKey = () => {
    toast({
      title: "API key generated",
      description: "A new API key has been created for your account.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Key className="h-5 w-5 text-gold-400" />
          <CardTitle>API & Webhook Configuration</CardTitle>
        </div>
        <CardDescription>
          Manage API keys and configure webhooks for integration with other tools
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">API Keys</h3>
          
          <div className="grid gap-2">
            <Label htmlFor="api-key">Current API Key</Label>
            <div className="flex gap-2">
              <Input
                id="api-key"
                type="password"
                value="sk_test_51Hb6NGK..."
                readOnly
                className="font-mono"
              />
              <Button variant="outline">Show</Button>
              <Button variant="outline">Copy</Button>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleGenerateKey}
              variant="outline"
              className="flex-1"
            >
              Generate New Key
            </Button>
            <Button variant="outline" className="flex-1">
              Revoke All Keys
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Webhook Configuration</h3>
          <p className="text-sm text-muted-foreground">
            Webhooks allow external services to receive notifications about events in your account.
          </p>
          
          <Button className="w-full bg-gold-400 text-navy-950 hover:bg-gold-500">
            Configure Webhooks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApiWebhookConfig;
