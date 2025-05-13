
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const LearningStyleCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Style Preferences</CardTitle>
        <CardDescription>
          Help us personalize your learning experience
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Primary Learning Style</Label>
          <RadioGroup defaultValue="visual" className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="visual" id="visual" />
              <Label htmlFor="visual" className="font-normal">Visual (learn by seeing)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="auditory" id="auditory" />
              <Label htmlFor="auditory" className="font-normal">Auditory (learn by hearing)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reading" id="reading" />
              <Label htmlFor="reading" className="font-normal">Reading/Writing (learn by reading and taking notes)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kinesthetic" id="kinesthetic" />
              <Label htmlFor="kinesthetic" className="font-normal">Kinesthetic (learn by doing)</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label>Preferred Study Time</Label>
          <Select defaultValue="evening">
            <SelectTrigger>
              <SelectValue placeholder="Select preferred time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Time of Day</SelectLabel>
                <SelectItem value="early-morning">Early Morning (5am-8am)</SelectItem>
                <SelectItem value="morning">Morning (8am-12pm)</SelectItem>
                <SelectItem value="afternoon">Afternoon (12pm-5pm)</SelectItem>
                <SelectItem value="evening">Evening (5pm-9pm)</SelectItem>
                <SelectItem value="night">Night (9pm-12am)</SelectItem>
                <SelectItem value="late-night">Late Night (12am-5am)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Study Environment</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="quiet" />
              <Label htmlFor="quiet" className="font-normal">Quiet environment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="music" />
              <Label htmlFor="music" className="font-normal">Background music</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ambient" />
              <Label htmlFor="ambient" className="font-normal">Ambient noise</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="group" />
              <Label htmlFor="group" className="font-normal">Group setting</Label>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Study Session Duration</Label>
          <Select defaultValue="medium">
            <SelectTrigger>
              <SelectValue placeholder="Select session length" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Short (15-30 minutes)</SelectItem>
              <SelectItem value="medium">Medium (30-60 minutes)</SelectItem>
              <SelectItem value="long">Long (60-90 minutes)</SelectItem>
              <SelectItem value="extended">Extended (90+ minutes)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500 ml-auto">Save Preferences</Button>
      </CardFooter>
    </Card>
  );
};

const PersonalInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your personal details
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Doe" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="john.doe@example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="institution">Educational Institution</Label>
            <Input id="institution" defaultValue="State University" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="program">Program/Major</Label>
            <Input id="program" defaultValue="Computer Science" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="yearLevel">Year Level</Label>
            <Select defaultValue="3">
              <SelectTrigger id="yearLevel">
                <SelectValue placeholder="Select year level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">First Year</SelectItem>
                <SelectItem value="2">Second Year</SelectItem>
                <SelectItem value="3">Third Year</SelectItem>
                <SelectItem value="4">Fourth Year</SelectItem>
                <SelectItem value="5">Fifth Year</SelectItem>
                <SelectItem value="graduate">Graduate Student</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="mr-2">Cancel</Button>
          <Button className="bg-gold-400 text-navy-950 hover:bg-gold-500">Save Changes</Button>
        </CardFooter>
      </Card>
      
      <LearningStyleCard />
    </div>
  );
};

export default PersonalInfo;
