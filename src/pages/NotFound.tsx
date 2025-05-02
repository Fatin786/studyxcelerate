
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-950">
      <div className="container px-4 py-16 text-center">
        <h1 className="text-gradient-gold text-7xl font-bold">404</h1>
        <p className="mt-4 text-2xl font-medium text-gold-400/80">Page Not Found</p>
        <p className="mt-6 text-muted-foreground">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Button asChild className="mt-8 bg-gold-400 text-navy-950 hover:bg-gold-500">
          <Link to="/">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
