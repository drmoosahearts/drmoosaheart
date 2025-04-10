
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
import { Globe, Plane, Heart } from "lucide-react";

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
      
      {/* Specialized Care Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* CHD Banner */}
            <div className="bg-medical-blue text-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 mr-3 text-medical-teal-light" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Congenital Heart Disease</h2>
                </div>
                <p className="mb-6 text-gray-100">
                  Learn about Congenital Heart Disease in children, its impact in India, and the specialized care provided by Dr. Moosa Kunhi for pediatric cardiac patients.
                </p>
                <Link 
                  to="/congenital-heart-disease" 
                  className="inline-flex items-center gap-2 bg-white text-medical-blue px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors font-medium"
                >
                  Learn More About CHD
                </Link>
              </div>
            </div>
            
            {/* International Patients Banner */}
            <div className="bg-medical-teal text-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 mr-3 text-white" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">International Patients</h2>
                </div>
                <p className="mb-6 text-gray-100">
                  Dr. Moosa Kunhi provides specialized cardiac care for patients from Europe, Africa, Asia, and the Middle East. Learn more about our international patient services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/international" 
                    className="inline-flex items-center gap-2 bg-white text-medical-teal px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors font-medium"
                  >
                    <Globe size={20} />
                    International Patient Info
                  </Link>
                  <Link 
                    to="/medical-tourism" 
                    className="inline-flex items-center gap-2 bg-medical-blue text-white px-6 py-3 rounded-sm hover:bg-medical-blue-dark transition-colors font-medium"
                  >
                    <Plane size={20} />
                    10 Reasons to Choose India
                  </Link>
                </div>
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

