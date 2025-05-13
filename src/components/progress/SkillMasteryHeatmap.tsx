
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Generate sample skill mastery data
const skillCategories = [
  "Programming Fundamentals",
  "Data Structures",
  "Algorithms",
  "Web Development",
  "Database Systems",
];

const generateSkillsData = () => {
  const skillsByCategory: Record<string, any[]> = {};
  
  skillCategories.forEach(category => {
    const skills = [];
    // Generate 5-8 skills per category
    const numSkills = Math.floor(Math.random() * 4) + 5;
    
    for (let i = 1; i <= numSkills; i++) {
      const skill = {
        id: `${category.toLowerCase().replace(/\s+/g, '-')}-${i}`,
        name: `${category} ${i}`,
        mastery: Math.floor(Math.random() * 101), // 0-100
        tested: Math.random() > 0.3, // 70% of skills are tested
      };
      skills.push(skill);
    }
    
    skillsByCategory[category] = skills;
  });
  
  return skillsByCategory;
};

const skillsData = generateSkillsData();

const getMasteryColor = (level: number) => {
  if (level >= 90) return "bg-green-500";
  if (level >= 75) return "bg-green-400";
  if (level >= 60) return "bg-amber-400";
  if (level >= 40) return "bg-amber-300";
  if (level >= 20) return "bg-red-300";
  return "bg-red-500";
};

const getMasteryLabel = (level: number) => {
  if (level >= 90) return "Advanced";
  if (level >= 75) return "Proficient";
  if (level >= 60) return "Competent";
  if (level >= 40) return "Developing";
  if (level >= 20) return "Basic";
  return "Novice";
};

const SkillMasteryHeatmap = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        {skillCategories.map((category) => (
          <Button
            key={category}
            variant="outline"
            size="sm"
            className={cn(
              "text-xs whitespace-nowrap",
              selectedCategory === category &&
              "bg-gold-400/10 text-gold-400 border-gold-400/20"
            )}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 overflow-y-auto pb-2">
        {skillsData[selectedCategory].map((skill) => (
          <div
            key={skill.id}
            className="border border-border/50 rounded-md p-3 flex flex-col hover:border-gold-400/30 transition-all"
          >
            <div className="text-sm font-medium mb-2 truncate" title={skill.name}>
              {skill.name}
            </div>
            
            <div
              className={cn(
                "h-2 w-full rounded-full mb-2",
                "bg-muted/30"
              )}
            >
              <div
                className={cn(
                  "h-full rounded-full transition-all",
                  getMasteryColor(skill.mastery)
                )}
                style={{ width: `${skill.mastery}%` }}
              ></div>
            </div>
            
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                {skill.mastery}%
              </span>
              <Badge
                variant="outline"
                className="text-[10px] px-1 py-0"
              >
                {getMasteryLabel(skill.mastery)}
              </Badge>
            </div>
            
            {skill.tested && (
              <div className="mt-2 text-center">
                <Badge
                  variant="outline"
                  className="text-[10px] bg-blue-500/10 text-blue-400 border-blue-400/20"
                >
                  Tested
                </Badge>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMasteryHeatmap;
