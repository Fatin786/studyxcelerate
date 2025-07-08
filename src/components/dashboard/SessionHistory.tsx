import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, Clock, Brain, Star, MoreHorizontal } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface SessionRecord {
  id: string;
  session_date: string;
  total_study_time: number;
  focus_score: number;
  session_quality_rating: number;
  subjects_studied: string[];
  study_location: string;
}

const SessionHistory = () => {
  const { data: sessions, isLoading } = useQuery({
    queryKey: ['session-history'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return [];

      const { data, error } = await supabase
        .from('study_session_analytics')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      return data as SessionRecord[];
    },
  });

  const formatDuration = (hours: number) => {
    const totalMinutes = Math.round(hours * 60);
    const hrs = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    
    if (hrs > 0) {
      return `${hrs}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const getQualityBadge = (rating: number) => {
    if (rating >= 8) return { label: "Excellent", className: "bg-green-500/20 text-green-400 border-green-400/30" };
    if (rating >= 6) return { label: "Good", className: "bg-blue-500/20 text-blue-400 border-blue-400/30" };
    if (rating >= 4) return { label: "Fair", className: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30" };
    return { label: "Poor", className: "bg-red-500/20 text-red-400 border-red-400/30" };
  };

  return (
    <Card className="bento-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <History className="h-5 w-5 text-gold-400" />
          Recent Sessions
        </CardTitle>
        <CardDescription>Your last 10 study sessions</CardDescription>
      </CardHeader>
      
      <CardContent>
        <ScrollArea className="h-[300px]">
          {isLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-3 rounded-lg bg-charcoal-800/30 animate-pulse">
                  <div className="h-4 bg-charcoal-700/50 rounded mb-2" />
                  <div className="h-3 bg-charcoal-700/50 rounded w-2/3" />
                </div>
              ))}
            </div>
          ) : sessions && sessions.length > 0 ? (
            <div className="space-y-3">
              {sessions.map((session) => {
                const qualityBadge = getQualityBadge(session.session_quality_rating || 5);
                
                return (
                  <div
                    key={session.id}
                    className="p-3 rounded-lg bg-charcoal-800/30 hover:bg-charcoal-800/50 transition-colors border border-charcoal-700/30"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium">
                            {format(new Date(session.session_date), 'MMM d')}
                          </span>
                          <Badge className={qualityBadge.className}>
                            {qualityBadge.label}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatDuration(session.total_study_time)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Brain className="h-3 w-3" />
                            {session.focus_score}%
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {session.session_quality_rating || 'N/A'}/10
                          </div>
                        </div>
                        
                        {session.subjects_studied && session.subjects_studied.length > 0 && (
                          <div className="mt-2">
                            <div className="flex flex-wrap gap-1">
                              {session.subjects_studied.slice(0, 2).map((subject, idx) => (
                                <Badge
                                  key={idx}
                                  variant="outline"
                                  className="text-xs border-gold-400/30 text-gold-400"
                                >
                                  {subject}
                                </Badge>
                              ))}
                              {session.subjects_studied.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{session.subjects_studied.length - 2} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <History className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No study sessions yet</p>
              <p className="text-xs">Start your first session to see it here!</p>
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SessionHistory;