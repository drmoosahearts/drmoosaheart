
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import CallToAction from "@/components/CallToAction";
import ContactInfo from "@/components/ContactInfo";
import MediaCoverage from "@/components/MediaCoverage";
import SurgicalGallery from "@/components/SurgicalGallery";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Plane } from "lucide-react";

const Index: React.FC = () => {
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
      <MediaCoverage />
      <SurgicalGallery />
      <Achievements />
      
      {/* International Patients Banner */}
      <section className="py-12 bg-medical-teal text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">International Patients from GCC Countries</h2>
              <p className="text-gray-100">
                Dr. Moosa Kunhi provides specialized cardiac care for patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Learn more about our international patient services, cost advantages, and dedicated coordinator.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/international" 
                  className="inline-flex items-center gap-2 bg-white text-medical-teal px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors font-medium"
                >
                  <Globe size={20} />
                  GCC Patient Info
                </Link>
                <Link 
                  to="/medical-tourism" 
                  className="inline-flex items-center gap-2 bg-medical-blue text-white px-6 py-3 rounded-sm hover:bg-medical-blue-dark transition-colors font-medium"
                >
                  <Plane size={20} />
                  Medical Tourism
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default Index;
