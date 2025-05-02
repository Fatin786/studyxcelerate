
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, ExternalLink, Star } from "lucide-react";

interface StudyResource {
  title: string;
  type: string;
  subject: string;
  rating: number;
  isNew?: boolean;
  url: string;
}

const StudyResourcesCard = () => {
  const resources: StudyResource[] = [
    {
      title: "Quantum Physics Fundamentals",
      type: "Video",
      subject: "Physics",
      rating: 4.8,
      isNew: true,
      url: "#"
    },
    {
      title: "Literary Analysis Guide",
      type: "Document",
      subject: "Literature",
      rating: 4.5,
      url: "#"
    },
    {
      title: "Calculus Problem Sets",
      type: "Practice",
      subject: "Math",
      rating: 4.7,
      url: "#"
    }
  ];

  const typeColors = {
    "Video": "bg-blue-500/20 text-blue-400",
    "Document": "bg-amber-500/20 text-amber-400",
    "Practice": "bg-green-500/20 text-green-400"
  };

  return (
    <Card className="bento-card">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Book className="h-5 w-5 text-gold-400" />
          <CardTitle className="text-xl font-semibold">Study Resources</CardTitle>
        </div>
        <CardDescription>Curated materials for your subjects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <div key={index} className="flex items-center justify-between border-b border-charcoal-800/30 pb-3 last:border-0 last:pb-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium">{resource.title}</h3>
                  {resource.isNew && (
                    <Badge className="bg-gold-400/20 text-gold-400 text-[10px]">NEW</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Badge className={`${typeColors[resource.type as keyof typeof typeColors]} border-none`}>
                    {resource.type}
                  </Badge>
                  <span className="text-muted-foreground">{resource.subject}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-gold-400" />
                    <span className="text-gold-400">{resource.rating}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-gold-400 hover:bg-gold-400/10">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Open resource</span>
              </Button>
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full mt-2 border-charcoal-800/30 hover:border-gold-400/50 text-gold-400">
            Browse All Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyResourcesCard;
