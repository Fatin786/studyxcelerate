
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DynamicThemeLayout from "@/components/settings/DynamicThemeLayout";
import NotificationCustomizer from "@/components/settings/NotificationCustomizer";
import FocusModePreferences from "@/components/settings/FocusModePreferences";
import CalendarSyncControl from "@/components/settings/CalendarSyncControl";
import PrivacyVisibility from "@/components/settings/PrivacyVisibility";
import DataExportPortability from "@/components/settings/DataExportPortability";
import LanguageRegion from "@/components/settings/LanguageRegion";
import AccessibilityModes from "@/components/settings/AccessibilityModes";
import ApiWebhookConfig from "@/components/settings/ApiWebhookConfig";
import AccountSecurity from "@/components/settings/AccountSecurity";
import StudyCoinWallet from "@/components/settings/StudyCoinWallet";
import GoalQuestManagement from "@/components/settings/GoalQuestManagement";
import MentorPeerConnections from "@/components/settings/MentorPeerConnections";
import ContentSourceControl from "@/components/settings/ContentSourceControl";
import MoodWellnessTracking from "@/components/settings/MoodWellnessTracking";
import NotificationDigest from "@/components/settings/NotificationDigest";
import SessionHistoryRetention from "@/components/settings/SessionHistoryRetention";
import CollaborativeStudySettings from "@/components/settings/CollaborativeStudySettings";
import ResourceUploadPreferences from "@/components/settings/ResourceUploadPreferences";
import BetaFeatureOptIn from "@/components/settings/BetaFeatureOptIn";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("appearance");

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been successfully updated.",
    });
  };

  return (
    <div className="container py-8 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">
            Customize your learning experience and application preferences
          </p>
          <Separator className="my-4" />
        </div>
        
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="mb-8 overflow-x-auto">
            <TabsList className="h-auto p-1 w-full flex flex-wrap gap-2">
              <TabsTrigger value="appearance">Appearance & Layout</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="focus">Focus & Sessions</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
              <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
              <TabsTrigger value="social">Social & Collaboration</TabsTrigger>
              <TabsTrigger value="content">Content & Resources</TabsTrigger>
              <TabsTrigger value="account">Account & Goals</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="appearance" className="space-y-6">
            <DynamicThemeLayout />
          </TabsContent>
          
          <TabsContent value="notifications" className="space-y-6">
            <NotificationCustomizer />
            <NotificationDigest />
          </TabsContent>
          
          <TabsContent value="focus" className="space-y-6">
            <FocusModePreferences />
            <SessionHistoryRetention />
          </TabsContent>
          
          <TabsContent value="integrations" className="space-y-6">
            <CalendarSyncControl />
            <ApiWebhookConfig />
          </TabsContent>
          
          <TabsContent value="privacy" className="space-y-6">
            <PrivacyVisibility />
            <AccountSecurity />
          </TabsContent>
          
          <TabsContent value="accessibility" className="space-y-6">
            <LanguageRegion />
            <AccessibilityModes />
          </TabsContent>
          
          <TabsContent value="social" className="space-y-6">
            <MentorPeerConnections />
            <CollaborativeStudySettings />
          </TabsContent>
          
          <TabsContent value="content" className="space-y-6">
            <ContentSourceControl />
            <ResourceUploadPreferences />
          </TabsContent>
          
          <TabsContent value="account" className="space-y-6">
            <StudyCoinWallet />
            <GoalQuestManagement />
            <DataExportPortability />
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-6">
            <MoodWellnessTracking />
            <BetaFeatureOptIn />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
