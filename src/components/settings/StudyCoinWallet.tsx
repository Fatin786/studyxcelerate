
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Wallet } from "lucide-react";

const StudyCoinWallet = () => {
  const { toast } = useToast();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Wallet className="h-5 w-5 text-gold-400" />
          <CardTitle>StudyCoin Wallet</CardTitle>
        </div>
        <CardDescription>
          Manage your StudyCoin balance and transaction history
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gold-400/10 rounded-lg p-4 text-center">
          <p className="text-sm text-muted-foreground">Current Balance</p>
          <h2 className="text-3xl font-bold text-gold-400">750 SC</h2>
          <p className="text-sm mt-2">Next reward: +25 SC (Complete daily streak)</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="flex-1">View History</Button>
          <Button variant="outline" className="flex-1">Redeem</Button>
          <Button className="flex-1 bg-gold-400 text-navy-950 hover:bg-gold-500">Earn More</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyCoinWallet;
