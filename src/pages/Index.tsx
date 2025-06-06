
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Plane, Heart, Award, Users, Clock } from "lucide-react";
import ModernHero from "@/components/ModernHero";
import SuccessStories from "@/components/SuccessStories";
import VideoLibrary from "@/components/VideoLibrary";
import TrustCredibility from "@/components/TrustCredibility";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import CallToAction from "@/components/CallToAction";
import ContactInfo from "@/components/ContactInfo";
import MediaCoverage from "@/components/MediaCoverage";
import SurgicalGallery from "@/components/SurgicalGallery";
import PatientTestimonials from "@/components/PatientTestimonials";
import TrustSignals from "@/components/TrustSignals";
import FAQ from "@/components/FAQ";

const Index: React.FC = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Dr. M.K. Moosa Kunhi - World-Class Cardiac Surgeon | Chennai, India";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Dr. M.K. Moosa Kunhi - Leading cardiac surgeon with 16,000+ successful surgeries. Pioneer of beating heart surgery in India. Expert in complex cardiac procedures for international patients.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <ModernHero />
      <TrustCredibility />
      <SuccessStories />
      <VideoLibrary />
      <TrustSignals />
      <Introduction />
      
      {/* Quick Stats Section - Fixed contrast */}
      <section className="py-12 bg-medical-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="h-8 w-8 mx-auto mb-2 text-coral-300" />
              <div className="text-3xl font-bold mb-1 text-white">16,000+</div>
              <div className="text-sm text-gray-200">Successful Surgeries</div>
            </div>
            <div>
              <Globe className="h-8 w-8 mx-auto mb-2 text-coral-300" />
              <div className="text-3xl font-bold mb-1 text-white">50+</div>
              <div className="text-sm text-gray-200">Countries Served</div>
            </div>
            <div>
              <Award className="h-8 w-8 mx-auto mb-2 text-coral-300" />
              <div className="text-3xl font-bold mb-1 text-white">25+</div>
              <div className="text-sm text-gray-200">Years Experience</div>
            </div>
            <div>
              <Clock className="h-8 w-8 mx-auto mb-2 text-coral-300" />
              <div className="text-3xl font-bold mb-1 text-white">24/7</div>
              <div className="text-sm text-gray-200">Emergency Care</div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <PatientTestimonials />
      <MediaCoverage />
      <SurgicalGallery />
      <Achievements />
      
      {/* Enhanced Specialized Care Section - Fixed text contrast */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Specialized Cardiac Care Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive treatment programs designed for specific patient needs and conditions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* CHD Program */}
            <div className="bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-10 w-10 mr-4 text-coral-300" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Congenital Heart Disease</h3>
                    <p className="text-gray-200">Pediatric & Adult CHD Program</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral-300 rounded-full"></div>
                    <span className="text-white">Comprehensive evaluation and treatment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral-300 rounded-full"></div>
                    <span className="text-white">Family counseling and support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral-300 rounded-full"></div>
                    <span className="text-white">Minimally invasive surgical techniques</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-coral-300 rounded-full"></div>
                    <span className="text-white">Long-term follow-up care</span>
                  </div>
                </div>
                <Link 
                  to="/congenital-heart-disease" 
                  className="inline-flex items-center gap-2 bg-white text-medical-blue px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors font-medium"
                >
                  Learn More About CHD Care
                </Link>
              </div>
            </div>
            
            {/* International Program */}
            <div className="bg-gradient-to-br from-medical-teal to-medical-teal-dark text-white rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Globe className="h-10 w-10 mr-4 text-white" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">International Patient Program</h3>
                    <p className="text-gray-200">Complete Medical Tourism Solutions</p>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white">Virtual pre-consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white">Visa and travel assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white">Airport pickup and accommodation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white">24/7 patient coordination</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/international" 
                    className="inline-flex items-center gap-2 bg-white text-medical-teal px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors font-medium"
                  >
                    <Globe size={20} />
                    International Services
                  </Link>
                  <Link 
                    to="/medical-tourism" 
                    className="inline-flex items-center gap-2 bg-medical-blue text-white px-6 py-3 rounded-sm hover:bg-medical-blue-dark transition-colors font-medium"
                  >
                    <Plane size={20} />
                    Why Choose India
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Banner - Enhanced design */}
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-lg p-6 text-center shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-white">Cardiac Emergency?</h3>
            <p className="mb-4 text-coral-100">Don't wait - immediate care can save lives</p>
            <a 
              href="tel:+919061693446" 
              className="bg-white text-coral-600 px-8 py-3 rounded-sm font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-md"
            >
              <Clock className="h-5 w-5" />
              Call Emergency: +91-9061693446
            </a>
          </div>
        </div>
      </section>
      
      <FAQ />
      <CallToAction />
      <ContactInfo />
    </div>
  );
};

export default Index;
