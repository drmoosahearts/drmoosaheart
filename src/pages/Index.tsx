
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
      metaDescription.setAttribute("content", "Dr. M.K. Moosa Kunhi is a globally renowned cardiac surgeon, pioneer of beating heart bypass surgery in India with over 15,000 successful surgeries and 35+ years of experience.");
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
