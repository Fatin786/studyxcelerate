
import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { MoveHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DraggableDashboardProps {
  children: React.ReactNode[];
  initialLayouts?: {
    [key: string]: { i: string; x: number; y: number; w: number; h: number; minW?: number; minH?: number }[];
  };
  onLayoutChange?: (layout: any, layouts: any) => void;
}

const DraggableDashboard = ({
  children,
  initialLayouts,
  onLayoutChange,
}: DraggableDashboardProps) => {
  // Default layouts for different breakpoints
  const defaultLayouts = {
    lg: [
      { i: '0', x: 0, y: 0, w: 8, h: 2 }, // WelcomeCard
      { i: '1', x: 0, y: 2, w: 12, h: 2 }, // QuickStats
      { i: '2', x: 0, y: 4, w: 12, h: 2 }, // QuickGlance
      { i: '3', x: 0, y: 6, w: 4, h: 4 }, // StudyStreak
      { i: '4', x: 4, y: 6, w: 4, h: 4 }, // StudyStats
      { i: '5', x: 8, y: 6, w: 4, h: 4 }, // FocusSession
      { i: '6', x: 0, y: 10, w: 4, h: 4 }, // UpcomingTasks
      { i: '7', x: 4, y: 10, w: 4, h: 4 }, // RecommendedCard
      { i: '8', x: 8, y: 10, w: 4, h: 4 }, // StudyResourcesCard
    ],
    md: [
      { i: '0', x: 0, y: 0, w: 6, h: 2 },
      { i: '1', x: 0, y: 2, w: 8, h: 2 },
      { i: '2', x: 0, y: 4, w: 8, h: 2 },
      { i: '3', x: 0, y: 6, w: 4, h: 4 },
      { i: '4', x: 4, y: 6, w: 4, h: 4 },
      { i: '5', x: 0, y: 10, w: 4, h: 4 },
      { i: '6', x: 4, y: 10, w: 4, h: 4 },
      { i: '7', x: 0, y: 14, w: 4, h: 4 },
      { i: '8', x: 4, y: 14, w: 4, h: 4 },
    ],
    sm: [
      { i: '0', x: 0, y: 0, w: 4, h: 2 },
      { i: '1', x: 0, y: 2, w: 4, h: 2 },
      { i: '2', x: 0, y: 4, w: 4, h: 2 },
      { i: '3', x: 0, y: 6, w: 4, h: 4 },
      { i: '4', x: 0, y: 10, w: 4, h: 4 },
      { i: '5', x: 0, y: 14, w: 4, h: 4 },
      { i: '6', x: 0, y: 18, w: 4, h: 4 },
      { i: '7', x: 0, y: 22, w: 4, h: 4 },
      { i: '8', x: 0, y: 26, w: 4, h: 4 },
    ],
  };

  // State for layouts and edit mode
  const [layouts, setLayouts] = useState(() => {
    const savedLayouts = localStorage.getItem('dashboardLayouts');
    return savedLayouts ? JSON.parse(savedLayouts) : initialLayouts || defaultLayouts;
  });
  
  const [isEditMode, setIsEditMode] = useState(false);

  // Save layouts to localStorage when they change
  useEffect(() => {
    localStorage.setItem('dashboardLayouts', JSON.stringify(layouts));
  }, [layouts]);

  // Handle layout changes
  const handleLayoutChange = (currentLayout: any, allLayouts: any) => {
    if (isEditMode) {
      setLayouts(allLayouts);
      if (onLayoutChange) {
        onLayoutChange(currentLayout, allLayouts);
      }
    }
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    toast({
      title: isEditMode ? "Widget editing disabled" : "Widget editing enabled",
      description: isEditMode ? "Your layout has been saved" : "Drag and drop widgets to rearrange your dashboard",
      duration: 3000,
    });
  };

  // Reset layouts to default
  const resetLayouts = () => {
    setLayouts(defaultLayouts);
    localStorage.setItem('dashboardLayouts', JSON.stringify(defaultLayouts));
    toast({
      title: "Dashboard reset",
      description: "All widgets have been restored to their default positions",
      duration: 3000,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex gap-2">
          <Button 
            variant={isEditMode ? "default" : "outline"} 
            onClick={toggleEditMode}
            className={isEditMode ? "bg-gold-400 text-navy-950 hover:bg-gold-500" : ""}
          >
            <MoveHorizontal className="mr-2 h-4 w-4" />
            {isEditMode ? "Save Layout" : "Edit Layout"}
          </Button>
          {isEditMode && (
            <Button 
              variant="outline" 
              onClick={resetLayouts}
              className="border-destructive text-destructive hover:bg-destructive/10"
            >
              Reset
            </Button>
          )}
        </div>
      </div>

      <ResponsiveGridLayout
        className={`layout ${isEditMode ? 'edit-mode' : ''}`}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 8, sm: 4, xs: 2, xxs: 1 }}
        rowHeight={80}
        margin={[16, 16]}
        isDraggable={isEditMode}
        isResizable={false}
        onLayoutChange={handleLayoutChange}
        draggableHandle=".drag-handle"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index.toString()} className={`dashboard-item ${isEditMode ? 'dashboard-item-edit' : ''}`}>
            {isEditMode && (
              <div className="drag-handle">
                <div className="drag-indicator">
                  <MoveHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            )}
            {child}
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default DraggableDashboard;
