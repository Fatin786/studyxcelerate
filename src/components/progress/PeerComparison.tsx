
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Medal, Star, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Sample peer comparison data
const peerData = [
  {
    rank: 1,
    label: "Top Performer",
    taskCompletion: 98,
    quizAverage: 97,
    studyHours: 24,
    points: 1250,
    isYou: false,
  },
  {
    rank: 2,
    label: null,
    taskCompletion: 95,
    quizAverage: 92,
    studyHours: 22,
    points: 1180,
    isYou: false,
  },
  {
    rank: 3,
    label: null,
    taskCompletion: 90,
    quizAverage: 88,
    studyHours: 20,
    points: 1050,
    isYou: false,
  },
  {
    rank: 4,
    label: "You",
    taskCompletion: 85,
    quizAverage: 82,
    studyHours: 18,
    points: 950,
    isYou: true,
  },
  {
    rank: 5,
    label: null,
    taskCompletion: 80,
    quizAverage: 78,
    studyHours: 15,
    points: 850,
    isYou: false,
  },
  {
    rank: 6,
    label: "Class Average",
    taskCompletion: 75,
    quizAverage: 76,
    studyHours: 12,
    points: 750,
    isYou: false,
  },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Medal className="h-4 w-4 text-gold-400" />;
    case 2:
      return <Medal className="h-4 w-4 text-gray-400" />;
    case 3:
      return <Medal className="h-4 w-4 text-amber-700" />;
    default:
      return null;
  }
};

const PeerComparison = () => {
  return (
    <div className="w-full h-full">
      <div className="text-sm text-muted-foreground mb-4">
        <p>Anonymous comparison with your peers. Names are hidden for privacy.</p>
      </div>
      
      <div className="overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">Rank</TableHead>
              <TableHead>Stats</TableHead>
              <TableHead className="text-right">XP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {peerData.map((peer) => (
              <TableRow
                key={peer.rank}
                className={cn(
                  peer.isYou && "bg-gold-400/10",
                  peer.rank <= 3 && "font-medium"
                )}
              >
                <TableCell className="py-2">
                  <div className="flex items-center">
                    {getRankIcon(peer.rank) || <span>{peer.rank}</span>}
                  </div>
                </TableCell>
                <TableCell className="py-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {peer.isYou && (
                          <Badge className="bg-gold-400 text-navy-950 text-xs">You</Badge>
                        )}
                        {peer.label && !peer.isYou && (
                          <Badge variant="outline" className="text-xs">
                            {peer.label}
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {peer.studyHours} hrs/week
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs">Tasks</span>
                          <span className="text-xs">{peer.taskCompletion}%</span>
                        </div>
                        <Progress 
                          value={peer.taskCompletion} 
                          className="h-1"
                          indicatorClassName={peer.isYou ? "bg-gold-400" : ""}
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs">Quizzes</span>
                          <span className="text-xs">{peer.quizAverage}%</span>
                        </div>
                        <Progress 
                          value={peer.quizAverage} 
                          className="h-1"
                          indicatorClassName={peer.isYou ? "bg-gold-400" : ""}
                        />
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right py-2">
                  <div className="flex items-center justify-end gap-1">
                    <Star className="h-3 w-3 text-gold-400" />
                    <span className={peer.isYou ? "font-bold" : ""}>
                      {peer.points.toLocaleString()}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PeerComparison;
