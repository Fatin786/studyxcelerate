
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, BookOpen, FileText, FileAudio, FileVideo, Search, Tag } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const StudyMaterials = () => {
  return (
    <div className="container mx-auto space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-gradient-gold">Study Materials Library</h1>
        <p className="text-muted-foreground">Access all your learning resources in one place</p>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search across all materials..." 
            className="pl-10" 
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Tag className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500">
            <BookOpen className="mr-2 h-4 w-4" />
            Upload New
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-4 md:grid-cols-7 mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="audio">Audio</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example content items */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <MaterialCard key={item} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="books" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <BookCard key={item} />
            ))}
          </div>
        </TabsContent>

        {/* Placeholder content for other tabs */}
        {['articles', 'videos', 'audio', 'notes', 'bookmarks'].map((tab) => (
          <TabsContent key={tab} value={tab} className="p-4 bg-navy-900/30 rounded-lg">
            <div className="text-center py-8">
              <h3 className="text-xl font-medium mb-2">
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Coming Soon
              </h3>
              <p className="text-muted-foreground">
                This section is under active development
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

// Material Card Component
const MaterialCard = () => {
  const types = ["Book", "Article", "Video", "Audio"];
  const type = types[Math.floor(Math.random() * types.length)];
  
  const getIcon = (type: string) => {
    switch(type) {
      case "Book": return <Book className="h-4 w-4" />;
      case "Article": return <FileText className="h-4 w-4" />;
      case "Video": return <FileVideo className="h-4 w-4" />;
      case "Audio": return <FileAudio className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getColor = (type: string) => {
    switch(type) {
      case "Book": return "bg-blue-500/20 text-blue-400";
      case "Article": return "bg-amber-500/20 text-amber-400";
      case "Video": return "bg-green-500/20 text-green-400";
      case "Audio": return "bg-purple-500/20 text-purple-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="w-full h-40 bg-gradient-to-br from-navy-800 to-navy-900 relative">
        {type === "Video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-navy-950/60 p-4">
              <FileVideo className="h-12 w-12 text-gold-400" />
            </div>
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <Badge className={getColor(type)} variant="outline">
            <span className="flex items-center gap-1">
              {getIcon(type)} {type}
            </span>
          </Badge>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <BookOpen className="h-4 w-4 text-gold-400" />
          </Button>
        </div>
        <CardTitle className="text-base font-medium line-clamp-1">
          Introduction to {type} Format Learning
        </CardTitle>
        <CardDescription className="line-clamp-1">
          Learn how to effectively use {type.toLowerCase()} materials for study
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>Added 3 days ago</span>
          <span>5 min read</span>
        </div>
      </CardContent>
    </Card>
  );
};

// Book Card Component
const BookCard = () => {
  return (
    <Card className="flex overflow-hidden transition-all hover:shadow-md">
      <div className="w-1/3 bg-gradient-to-br from-navy-800 to-navy-900 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Book className="h-10 w-10 text-gold-400" />
        </div>
      </div>
      <div className="w-2/3">
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <Badge className="bg-blue-500/20 text-blue-400" variant="outline">
              <span className="flex items-center gap-1">
                <Book className="h-3 w-3" /> Textbook
              </span>
            </Badge>
          </div>
          <CardTitle className="text-base font-medium line-clamp-1">
            Advanced Concepts in Learning
          </CardTitle>
          <CardDescription className="line-clamp-1">
            By Prof. Jane Smith
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>400 pages</span>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <BookOpen className="h-4 w-4 text-gold-400" />
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default StudyMaterials;
