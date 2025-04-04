
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import CallToAction from "@/components/CallToAction";
import ContactInfo from "@/components/ContactInfo";
import { useEffect } from "react";
import { Quote } from "lucide-react";

// New component for Testimonials section
const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Recognition & Leadership</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. Moosa Kunhi has been recognized for his trailblazing contributions to cardiac surgery and continues to lead prestigious medical institutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/5750b90d-5c04-455d-98cd-b9e238cb4bfa.png" 
                alt="Dr. Moosa Kunhi in professional setting" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="bg-medical-gray rounded-lg p-8 relative">
              <Quote className="absolute top-4 left-4 h-12 w-12 text-medical-teal opacity-20" />
              <div className="ml-10">
                <p className="text-xl text-gray-700 italic mb-6">
                  "At SIMS Hospital, Nungambakkam, Dr. Moosa leads the Cardiothoracic Surgery & Heart Transplant Centre. 
                  With his clinical expertise and meticulous treatment planning ability, he aims to make Cardiac surgery 
                  affordable to masses and turn the centre into a preferred choice for a wide range of Cardiac procedures."
                </p>
                <div>
                  <p className="font-bold text-medical-blue-dark">SIMS Hospitals, Nungambakkam</p>
                  <p className="text-medical-teal">Cardiothoracic Surgery & Heart Transplant Centre</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Awards & Recognitions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-start">
                  <span className="text-medical-gold mr-2">●</span>
                  <span>Bharat Excellence Award (India), 2011</span>
                </div>
                <div className="flex items-start">
                  <span className="text-medical-gold mr-2">●</span>
                  <span>The Red Cross Society Award (India), 2003</span>
                </div>
                <div className="flex items-start">
                  <span className="text-medical-gold mr-2">●</span>
                  <span>Mother Teresa Award (India), 2003</span>
                </div>
                <div className="flex items-start">
                  <span className="text-medical-gold mr-2">●</span>
                  <span>N. S. Das Puraskaram (India), 2001</span>
                </div>
                <div className="flex items-start">
                  <span className="text-medical-gold mr-2">●</span>
                  <span>Lifetime Achievement Award, 2011</span>
                </div>
                <div className="flex items-start">
                  <span className="text-medical-gold mr-2">●</span>
                  <span>Certificate of Excellence, 2017</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
      <Testimonials />
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default Index;
