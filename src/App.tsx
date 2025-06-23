import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import CongenitalHeartDiseasePage from "./pages/CongenitalHeartDiseasePage";
import MedicalTourismPage from "./pages/MedicalTourismPage";
import InternationalPage from "./pages/InternationalPage";
import CountryLandingPage from "./pages/CountryLandingPage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogListPage from "./pages/BlogListPage";
import ProceduresPage from "./pages/ProceduresPage";
import CostCalculatorPage from "./pages/CostCalculatorPage";
import NotFound from "./pages/NotFound";
import StickyNavigation from "./components/StickyNavigation";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import SymptomChecker from "./components/SymptomChecker";
import MedicalTourismPackages from "./components/MedicalTourismPackages";
import InteractiveHeartModel from "./components/InteractiveHeartModel";
import VirtualHospitalTour from "./components/VirtualHospitalTour";
import TelemedicineConsultation from "./components/TelemedicineConsultation";
import AdvancedAppointmentBooking from "./components/AdvancedAppointmentBooking";
import IntelligentCostCalculator from "./components/IntelligentCostCalculator";
import ComprehensiveContactSystem from "./components/ComprehensiveContactSystem";
import { ProgressIndicator } from "./components/PerformanceOptimizer";
import EnhancedQuickContact from "./components/EnhancedQuickContact";
import { useState, useEffect } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (renamed from cacheTime)
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsLoading(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#fff',
                color: '#333',
                border: '1px solid #e2e8f0',
              },
            }}
          />
          <ErrorBoundary>
            <BrowserRouter>
              <div className="min-h-screen flex flex-col bg-white">
                <ProgressIndicator />
                <StickyNavigation />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/procedures" element={<ProceduresPage />} />
                    <Route path="/congenital-heart-disease" element={<CongenitalHeartDiseasePage />} />
                    <Route path="/medical-tourism" element={<MedicalTourismPage />} />
                    <Route path="/international" element={<InternationalPage />} />
                    <Route path="/international/:country" element={<CountryLandingPage />} />
                    <Route path="/achievements" element={<AchievementsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogListPage />} />
                    <Route path="/blog/:slug" element={<BlogPage />} />
                    <Route path="/cost-calculator" element={<CostCalculatorPage />} />
                    <Route path="/symptom-checker" element={<SymptomChecker />} />
                    <Route path="/medical-packages" element={<MedicalTourismPackages />} />
                    <Route path="/heart-anatomy" element={<InteractiveHeartModel />} />
                    <Route path="/virtual-tour" element={<VirtualHospitalTour />} />
                    <Route path="/telemedicine" element={<TelemedicineConsultation />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                <EnhancedQuickContact />
              </div>
            </BrowserRouter>
          </ErrorBoundary>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
