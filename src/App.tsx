import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HowToPlay from "./pages/HowToPlay";
import Donate from "./pages/Donate";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Support from "./pages/Support";
import AdminDashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/support" element={<Support />} />
          
          {/* Админ панель */}
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="users" element={<AdminDashboard />} />
            <Route path="tickets" element={<AdminDashboard />} />
            <Route path="profile" element={<AdminDashboard />} />
            <Route path="settings" element={<AdminDashboard />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;