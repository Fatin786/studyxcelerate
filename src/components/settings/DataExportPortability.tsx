
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Download } from "lucide-react";

const DataExportPortability = () => {
  const { toast } = useToast();

  const handleExport = (format) => {
    toast({
      title: `${format.toUpperCase()} export initiated`,
      description: `Your data is being prepared for export in ${format.toUpperCase()} format.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Download className="h-5 w-5 text-gold-400" />
          <CardTitle>Data Export & Portability</CardTitle>
        </div>
        <CardDescription>
          Export your study data in various formats for backup or migration
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Quick Export</h3>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              onClick={() => handleExport('csv')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export as CSV
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleExport('pdf')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export as PDF
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleExport('json')}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Export as JSON
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Custom Export</h3>
          
          <div className="space-y-4">
            <div>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select data to export" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Data</SelectItem>
                  <SelectItem value="notes">Notes Only</SelectItem>
                  <SelectItem value="progress">Progress Reports Only</SelectItem>
                  <SelectItem value="analytics">Analytics Only</SelectItem>
                  <SelectItem value="goals">Goals Only</SelectItem>
                  <SelectItem value="sessions">Study Sessions Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col md:flex-row gap-2">
              <Button variant="outline" className="flex-1">Advanced Options</Button>
              <Button className="flex-1 bg-gold-400 text-navy-950 hover:bg-gold-500">
                Start Custom Export
              </Button>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Data Portability</h3>
          
          <div className="space-y-2">
            <p className="text-sm">
              Transfer your data directly to another platform or service
            </p>
            <Select defaultValue="">
              <SelectTrigger>
                <SelectValue placeholder="Select destination platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Select destination...</SelectItem>
                <SelectItem value="google-drive">Google Drive</SelectItem>
                <SelectItem value="dropbox">Dropbox</SelectItem>
                <SelectItem value="onedrive">Microsoft OneDrive</SelectItem>
                <SelectItem value="evernote">Evernote</SelectItem>
                <SelectItem value="notion">Notion</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="w-full mt-2" variant="outline">
              Connect & Transfer
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataExportPortability;
