import React, { useEffect, useState, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import InternationalPage from "./pages/InternationalPage";
import MedicalTourismPage from "./pages/MedicalTourismPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);

    const handleLoad = (): void => {
      setIsPageLoaded(true);
    };
    
    window.addEventListener('load', handleLoad);

    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    }

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash && isPageLoaded && <SplashScreen onComplete={() => setShowSplash(false)} />}
        <div className={showSplash && isPageLoaded ? 'invisible' : 'visible'}>
          <BrowserRouter>
            <Navbar />
            <main className="min-h-screen pt-16">
              <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/achievements" element={<AchievementsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/international" element={<InternationalPage />} />
                  <Route path="/medical-tourism" element={<MedicalTourismPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
