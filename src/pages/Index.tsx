
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import CallToAction from "@/components/CallToAction";
import ContactInfo from "@/components/ContactInfo";
import { useEffect } from "react";

const Index = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Dr. M.K. Moosa Kunhi - Renowned Cardiac Surgeon in India";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Dr. M.K. Moosa Kunhi is a globally renowned cardiac surgeon with 16,000+ successful surgeries, pioneer of beating heart bypass surgery in India, and the first Indian heart surgeon trained in artificial heart technology.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <Services />
      <Achievements />
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default Index;
