
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import UnderConstruction from "@/pages/UnderConstruction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/planner" element={<UnderConstruction />} />
            <Route path="/focus" element={<UnderConstruction />} />
            <Route path="/materials" element={<UnderConstruction />} />
            <Route path="/progress" element={<UnderConstruction />} />
            <Route path="/ai-assistant" element={<UnderConstruction />} />
            <Route path="/profile" element={<UnderConstruction />} />
            <Route path="/settings" element={<UnderConstruction />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
