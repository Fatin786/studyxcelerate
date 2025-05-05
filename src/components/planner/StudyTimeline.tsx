
import { Progress } from "@/components/ui/progress";

const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

interface StudyBlock {
  id: number;
  subject: string;
  start: string;
  end: string;
  type: 'study' | 'calendar' | 'break';
  focusLevel: number;
  energyLevel: number;
  color: string;
}

const StudyTimeline = () => {
  // Sample data
  const studyBlocks: StudyBlock[] = [
    { 
      id: 1, 
      subject: 'Physics - Quantum Mechanics', 
      start: '9:00', 
      end: '10:30', 
      type: 'study',
      focusLevel: 85,
      energyLevel: 90,
      color: 'bg-blue-500'
    },
    { 
      id: 2, 
      subject: 'Break', 
      start: '10:30', 
      end: '11:00', 
      type: 'break',
      focusLevel: 0,
      energyLevel: 85,
      color: 'bg-green-500'
    },
    { 
      id: 3, 
      subject: 'Chemistry Lab Prep', 
      start: '11:00', 
      end: '12:30', 
      type: 'study',
      focusLevel: 75,
      energyLevel: 80,
      color: 'bg-purple-500'
    },
    { 
      id: 4, 
      subject: 'Lunch', 
      start: '12:30', 
      end: '13:30', 
      type: 'break',
      focusLevel: 0,
      energyLevel: 70,
      color: 'bg-emerald-500'
    },
    { 
      id: 5, 
      subject: 'Mathematics Class', 
      start: '14:00', 
      end: '15:30', 
      type: 'calendar',
      focusLevel: 60,
      energyLevel: 65,
      color: 'bg-amber-500'
    },
    { 
      id: 6, 
      subject: 'Literature Review', 
      start: '16:00', 
      end: '17:30', 
      type: 'study',
      focusLevel: 70,
      energyLevel: 60,
      color: 'bg-rose-500'
    },
    { 
      id: 7, 
      subject: 'Computer Science Project', 
      start: '18:00', 
      end: '20:00', 
      type: 'study',
      focusLevel: 75,
      energyLevel: 55,
      color: 'bg-cyan-500'
    },
  ];

  const getPosition = (timeString: string) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes;
    const startMinutes = 9 * 60; // 9 AM
    const endMinutes = 21 * 60; // 9 PM
    const totalTimelineMinutes = endMinutes - startMinutes;
    
    return ((totalMinutes - startMinutes) / totalTimelineMinutes) * 100;
  };

  const getWidth = (start: string, end: string) => {
    const startPosition = getPosition(start);
    const endPosition = getPosition(end);
    return endPosition - startPosition;
  };

  const getTypeStyles = (type: string, color: string) => {
    switch (type) {
      case 'study':
        return `${color}/90 border-l-4 border-l-${color}`;
      case 'calendar':
        return `${color}/70 border border-${color}`;
      case 'break':
        return `${color}/40 border border-${color}/60 border-dashed`;
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="w-full">
      {/* Energy level indicator */}
      <div className="mb-6 space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Energy Level</span>
          <span>70% - Optimal for complex tasks</span>
        </div>
        <Progress value={70} className="h-2" />
      </div>
      
      {/* Timeline header */}
      <div className="flex mb-2">
        {HOURS.map(hour => (
          <div key={hour} className="flex-1 text-center text-xs text-muted-foreground">
            {hour > 12 ? `${hour - 12} PM` : hour === 12 ? '12 PM' : `${hour} AM`}
          </div>
        ))}
      </div>

      {/* Timeline grid */}
      <div className="h-[400px] relative border-t border-charcoal-800/30">
        {/* Hour markers */}
        <div className="absolute inset-0 flex">
          {HOURS.map(hour => (
            <div key={hour} className="flex-1 border-r border-charcoal-800/30"></div>
          ))}
        </div>

        {/* Current time indicator */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-gold-400 z-10"
          style={{ left: `${getPosition('14:30')}%` }}
        >
          <div className="absolute -top-1 -ml-1.5 h-3 w-3 rounded-full bg-gold-400"></div>
          <div className="absolute -top-7 -ml-8 bg-gold-400 text-navy-950 text-xs px-2 py-0.5 rounded">
            Current Time
          </div>
        </div>

        {/* Study blocks */}
        {studyBlocks.map(block => (
          <div
            key={block.id}
            className={`absolute rounded-md p-2 ${getTypeStyles(block.type, block.color)} hover:ring-2 hover:ring-gold-400/50 transition-all cursor-move`}
            style={{
              left: `${getPosition(block.start)}%`,
              width: `${getWidth(block.start, block.end)}%`,
              top: block.type === 'calendar' ? '10%' : block.type === 'break' ? '40%' : '70%',
              height: block.type === 'calendar' ? '25%' : block.type === 'break' ? '15%' : '25%',
            }}
          >
            <div className="text-xs font-medium truncate">{block.subject}</div>
            <div className="text-xs opacity-80">{block.start} - {block.end}</div>
            {block.type === 'study' && (
              <div className="mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gold-400"></span>
                <span className="text-xs">Focus: {block.focusLevel}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="flex justify-between mt-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500/90 rounded"></div>
          <span>Study Blocks</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-amber-500/70 border border-amber-500 rounded"></div>
          <span>Calendar Events</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500/40 border border-green-500/60 border-dashed rounded"></div>
          <span>Breaks</span>
        </div>
      </div>
    </div>
  );
};

export default StudyTimeline;
