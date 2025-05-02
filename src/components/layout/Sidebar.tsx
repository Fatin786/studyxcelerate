
import React from "react";
import { Link } from "react-router-dom";
import { 
  CalendarDays, 
  BarChart, 
  BookOpen, 
  Clock, 
  Settings, 
  User, 
  Target, 
  BrainCircuit,
  Flame
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={cn(
        "h-screen sticky top-0 z-30 flex flex-col border-r border-charcoal-800/30 bg-navy-950 transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center border-b border-charcoal-800/30 px-3 py-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold transition-all"
        >
          {!collapsed && (
            <span className="text-gradient-gold text-xl font-bold">
              StudyXcelerate
            </span>
          )}
          {collapsed && (
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-md bg-gold-400/10">
              <Flame className="h-5 w-5 text-gold-400" />
            </div>
          )}
        </Link>
      </div>

      <nav className="flex-1 overflow-auto py-4">
        <div className="px-3">
          <div className="space-y-1">
            <NavItem
              to="/"
              icon={<BarChart className="h-5 w-5" />}
              label="Dashboard"
              collapsed={collapsed}
            />
            <NavItem
              to="/planner"
              icon={<CalendarDays className="h-5 w-5" />}
              label="Study Planner"
              collapsed={collapsed}
            />
            <NavItem
              to="/focus"
              icon={<Target className="h-5 w-5" />}
              label="Focus Mode"
              collapsed={collapsed}
            />
            <NavItem
              to="/materials"
              icon={<BookOpen className="h-5 w-5" />}
              label="Study Materials"
              collapsed={collapsed}
            />
            <NavItem
              to="/progress"
              icon={<BarChart className="h-5 w-5" />}
              label="Progress Tracker"
              collapsed={collapsed}
            />
            <NavItem
              to="/ai-assistant"
              icon={<BrainCircuit className="h-5 w-5" />}
              label="AI Assistant"
              collapsed={collapsed}
            />
          </div>

          <div className="mt-8">
            <p
              className={cn(
                "mb-2 text-xs font-medium text-muted-foreground",
                collapsed && "sr-only"
              )}
            >
              Personal
            </p>
            <div className="space-y-1">
              <NavItem
                to="/profile"
                icon={<User className="h-5 w-5" />}
                label="My Profile"
                collapsed={collapsed}
              />
              <NavItem
                to="/settings"
                icon={<Settings className="h-5 w-5" />}
                label="Settings"
                collapsed={collapsed}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="border-t border-charcoal-800/30 p-3">
        <Button
          onClick={toggleSidebar}
          size="icon"
          variant="ghost"
          className={cn(
            "h-9 w-9 rounded-md transition-all",
            !collapsed && "ml-auto"
          )}
        >
          <Clock className="h-5 w-5 text-muted-foreground rotate-180" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
    </aside>
  );
};

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
};

const NavItem = ({ to, icon, label, collapsed }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-charcoal-800/20 hover:text-gold-400 transition-colors",
        collapsed && "justify-center px-0"
      )}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
};

export default Sidebar;
