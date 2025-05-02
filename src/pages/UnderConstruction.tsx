
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gold-400/10 mb-6">
        <Construction className="h-10 w-10 text-gold-400" />
      </div>
      <h1 className="text-gradient-gold text-3xl font-bold mb-3">Coming Soon</h1>
      <p className="text-muted-foreground max-w-md mb-6">
        We're working hard to bring you this feature. Please check back later!
      </p>
      <Button asChild className="bg-gold-400 text-navy-950 hover:bg-gold-500">
        <Link to="/">Return to Dashboard</Link>
      </Button>
    </div>
  );
};

export default UnderConstruction;
