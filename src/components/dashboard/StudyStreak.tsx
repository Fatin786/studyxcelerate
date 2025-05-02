
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame } from "lucide-react";

const StudyStreak = () => {
  const currentStreak = 7;
  const bestStreak = 14;

  return (
    <Card className="bento-card">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-gold-400 animate-pulse-gold" />
          <CardTitle className="text-xl font-semibold">Study Streak</CardTitle>
        </div>
        <CardDescription>Keep your momentum going!</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-center justify-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-gold">{currentStreak}</div>
            <p className="text-xs text-muted-foreground mt-1">Current Streak</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{bestStreak}</div>
            <p className="text-xs text-muted-foreground mt-1">Best Streak</p>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded ${
                i < 5 ? "bg-gold-400" : "bg-charcoal-800/50"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Study 2 more days to beat your record!
        </p>
      </CardContent>
    </Card>
  );
};

export default StudyStreak;
