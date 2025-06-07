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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import SymptomChecker from "./components/SymptomChecker";
import MedicalTourismPackages from "./components/MedicalTourismPackages";
import InteractiveHeartModel from "./components/InteractiveHeartModel";
import VirtualHospitalTour from "./components/VirtualHospitalTour";
import TelemedicineConsultation from "./components/TelemedicineConsultation";
import { useState, useEffect } from 'react';

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <ErrorBoundary>
            <BrowserRouter>
              <div className="min-h-screen flex flex-col">
                <Navbar />
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
              </div>
            </BrowserRouter>
          </ErrorBoundary>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
