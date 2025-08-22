import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import IndustrySolutions from "./pages/IndustrySolutions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/leistungen" element={<Services />} />
            <Route path="/branchenloesungen" element={<IndustrySolutions />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/datenschutz" element={<Privacy />} />
            <Route path="/impressum" element={<Imprint />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
