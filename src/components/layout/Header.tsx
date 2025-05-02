
import { Link } from "react-router-dom";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center border-b border-charcoal-800/30 bg-navy-950/80 backdrop-blur-md px-4 lg:px-6">
      <div className="flex flex-1 items-center gap-4">
        <form className="hidden md:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 bg-charcoal-800/20 border-none pl-8 rounded-full focus:ring-gold-400/50"
            />
          </div>
        </form>
      </div>
      
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-muted-foreground hover:text-gold-400"
        >
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>

        <div className="relative">
          <Button variant="ghost" size="sm" className="rounded-full overflow-hidden border border-charcoal-800/30 hover:border-gold-400/50">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-charcoal-800">ST</span>
            </span>
            <span className="ml-2 hidden lg:block">Student</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
