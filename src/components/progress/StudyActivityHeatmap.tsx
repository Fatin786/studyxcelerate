
import React from "react";
import { Card } from "@/components/ui/card";

// Generate sample data for the activity heatmap
const generateHeatmapData = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 8 PM
  
  const data = [];
  for (const day of days) {
    for (const hour of hours) {
      const intensity = Math.floor(Math.random() * 5); // 0 to 4
      data.push({
        day,
        hour: hour > 12 ? `${hour - 12} PM` : hour === 12 ? "12 PM" : `${hour} AM`,
        intensity,
      });
    }
  }
  return data;
};

const heatmapData = generateHeatmapData();

// Function to get color based on intensity
const getColorByIntensity = (intensity: number) => {
  const colors = [
    "bg-charcoal-800/20", // Very low
    "bg-gold-400/20",     // Low
    "bg-gold-400/50",     // Medium
    "bg-gold-400/80",     // High
    "bg-gold-400",        // Very high
  ];
  return colors[intensity];
};

const StudyActivityHeatmap = () => {
  // Get unique days and hours for axes
  const days = Array.from(new Set(heatmapData.map(item => item.day)));
  const hours = Array.from(new Set(heatmapData.map(item => item.hour)));

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm text-muted-foreground">Your study intensity by day and time</p>
        <div className="flex items-center space-x-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div 
              key={level} 
              className={`h-2 w-2 ${getColorByIntensity(level)} rounded-sm`}
              title={`Intensity level ${level + 1}`}
            />
          ))}
          <span className="text-xs ml-1 text-muted-foreground">Intensity</span>
        </div>
      </div>
      
      <div className="flex grow mt-2">
        <div className="flex flex-col justify-between pr-2">
          {days.map((day) => (
            <div key={day} className="text-xs text-muted-foreground h-8 flex items-center">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-flow-row grid-rows-7 grid-cols-12 gap-1 flex-grow">
          {heatmapData.map((cell, index) => (
            <div
              key={index}
              className={`h-8 rounded-sm ${getColorByIntensity(cell.intensity)} transition-colors hover:opacity-80`}
              title={`${cell.day} at ${cell.hour}: ${['Very Low', 'Low', 'Medium', 'High', 'Very High'][cell.intensity]} activity`}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="flex mt-2 ml-6">
        <div className="grid grid-flow-col grid-cols-12 gap-1 flex-grow">
          {hours.map((hour) => (
            <div key={hour} className="text-xs text-muted-foreground text-center">
              {hour.includes("AM") || hour.includes("PM") ? hour.split(" ")[0] : hour}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyActivityHeatmap;
