
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalInfo from "@/components/profile/PersonalInfo";
import AcademicProgress from "@/components/profile/AcademicProgress";
import GoalManagement from "@/components/profile/GoalManagement";
import ConnectedApps from "@/components/profile/ConnectedApps";
import SocialSettings from "@/components/profile/SocialSettings";
import CommunicationCenter from "@/components/profile/CommunicationCenter";
import PrivacySettings from "@/components/profile/PrivacySettings";
import AccountManagement from "@/components/profile/AccountManagement";
import AccessibilityPreferences from "@/components/profile/AccessibilityPreferences";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  
  return (
    <div className="space-y-6">
      <ProfileHeader />
      
      <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-10">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="apps">Connected Apps</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="py-4">
          <PersonalInfo />
        </TabsContent>
        
        <TabsContent value="academic" className="py-4">
          <AcademicProgress />
        </TabsContent>
        
        <TabsContent value="goals" className="py-4">
          <GoalManagement />
        </TabsContent>
        
        <TabsContent value="apps" className="py-4">
          <ConnectedApps />
        </TabsContent>
        
        <TabsContent value="social" className="py-4">
          <SocialSettings />
        </TabsContent>
        
        <TabsContent value="communication" className="py-4">
          <CommunicationCenter />
        </TabsContent>
        
        <TabsContent value="privacy" className="py-4">
          <PrivacySettings />
        </TabsContent>
        
        <TabsContent value="account" className="py-4">
          <AccountManagement />
        </TabsContent>
        
        <TabsContent value="accessibility" className="py-4">
          <AccessibilityPreferences />
        </TabsContent>
        
        <TabsContent value="notifications" className="py-4">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Notification settings coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
