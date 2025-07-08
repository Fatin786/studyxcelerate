import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Star, Brain, Battery } from "lucide-react";

interface SessionCompletionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (energyLevelEnd: number, qualityRating: number, notes?: string) => void;
  sessionDuration: number; // in minutes
  focusScore: number;
}

const SessionCompletionDialog = ({
  open,
  onOpenChange,
  onSubmit,
  sessionDuration,
  focusScore,
}: SessionCompletionDialogProps) => {
  const [energyLevel, setEnergyLevel] = useState([5]);
  const [qualityRating, setQualityRating] = useState([7]);
  const [sessionNotes, setSessionNotes] = useState("");

  const handleSubmit = () => {
    onSubmit(energyLevel[0], qualityRating[0], sessionNotes || undefined);
    onOpenChange(false);
    
    // Reset for next time
    setEnergyLevel([5]);
    setQualityRating([7]);
    setSessionNotes("");
  };

  const handleSkip = () => {
    onSubmit(5, 7); // Default values
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-gold-400" />
            Session Complete!
          </DialogTitle>
          <DialogDescription>
            Great job on your {sessionDuration}-minute study session. 
            Help us improve your future sessions by sharing a quick reflection.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Session Summary */}
          <div className="flex items-center justify-between p-3 bg-charcoal-800/30 rounded-lg">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-gold-400" />
              <span className="text-sm font-medium">Focus Score</span>
            </div>
            <span className="text-lg font-bold text-gold-400">{focusScore}/100</span>
          </div>

          {/* Energy Level End */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Battery className="h-4 w-4 text-gold-400" />
              How do you feel now? (Energy Level)
            </Label>
            <div className="space-y-2">
              <Slider
                value={energyLevel}
                onValueChange={setEnergyLevel}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Exhausted (1)</span>
                <span className="font-medium">{energyLevel[0]}/10</span>
                <span>Energized (10)</span>
              </div>
            </div>
          </div>

          {/* Session Quality Rating */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold-400" />
              How effective was this session?
            </Label>
            <div className="space-y-2">
              <Slider
                value={qualityRating}
                onValueChange={setQualityRating}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Unproductive (1)</span>
                <span className="font-medium">{qualityRating[0]}/10</span>
                <span>Highly Effective (10)</span>
              </div>
            </div>
          </div>

          {/* Optional Notes */}
          <div className="space-y-2">
            <Label htmlFor="session-notes">Session Notes (Optional)</Label>
            <Textarea
              id="session-notes"
              placeholder="What went well? Any challenges? Key insights?"
              value={sessionNotes}
              onChange={(e) => setSessionNotes(e.target.value)}
              rows={3}
              className="resize-none"
            />
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={handleSkip}
            className="border-charcoal-800/30"
          >
            Skip
          </Button>
          <Button 
            onClick={handleSubmit}
            className="bg-gold-400 hover:bg-gold-500 text-navy-950"
          >
            Save & Complete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SessionCompletionDialog;