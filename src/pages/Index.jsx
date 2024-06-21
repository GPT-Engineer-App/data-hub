import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <Tabs defaultValue="overview" className="w-full max-w-4xl">
        <TabsList className="flex justify-center mb-4">
          <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
            Overview
          </TabsTrigger>
          <TabsTrigger value="details" onClick={() => setActiveTab("details")}>
            Details
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the overview section of the dashboard.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p>This is the details section of the dashboard.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Button variant="outline" onClick={() => alert("Button clicked!")}>
        Click Me
      </Button>
    </div>
  );
};

export default Index;