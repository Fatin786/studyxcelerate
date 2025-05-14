
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { History } from "lucide-react";

const SessionHistoryRetention = () => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-gold-400" />
          <CardTitle>Session History Retention</CardTitle>
        </div>
        <CardDescription>
          Configure how long your study session data is stored
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Data Retention Period</Label>
            <Select defaultValue="1year">
              <SelectTrigger>
                <SelectValue placeholder="Select retention period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">3 months</SelectItem>
                <SelectItem value="6months">6 months</SelectItem>
                <SelectItem value="1year">1 year</SelectItem>
                <SelectItem value="forever">Forever</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              Older data will be automatically archived after this period
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            <Button variant="outline">Export All History</Button>
            <Button variant="outline" className="text-destructive hover:text-destructive">
              Clear History
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SessionHistoryRetention;
