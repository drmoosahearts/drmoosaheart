import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Plane, Heart, Award, Users, Clock } from "lucide-react";
import ModernHero from "@/components/ModernHero";
import SuccessStories from "@/components/SuccessStories";
import VideoLibrary from "@/components/VideoLibrary";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import CallToAction from "@/components/CallToAction";
import ContactInfo from "@/components/ContactInfo";
import MediaCoverage from "@/components/MediaCoverage";
import SurgicalGallery from "@/components/SurgicalGallery";
import PatientTestimonials from "@/components/PatientTestimonials";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import EnhancedFAQ from "@/components/EnhancedFAQ";
import EnhancedTrustSignals from "@/components/EnhancedTrustSignals";
import AdvancedSEO from "@/components/AdvancedSEO";
import VoiceSearchOptimizer from "@/components/VoiceSearchOptimizer";
import AdvancedLocalSEO from "@/components/AdvancedLocalSEO";
import { useSEOOptimization } from "@/hooks/useSEOOptimization";

const Index: React.FC = () => {
  const { seoData, isLoading } = useSEOOptimization();

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Dr. M.K. Moosa Kunhi - Premier Cardiac Surgeon | Chennai, India | 16,000+ Successful Heart Surgeries";
  }, []);

  const faqData = [
    {
      question: "Who is Dr. M.K. Moosa Kunhi?",
      answer: "Dr. M.K. Moosa Kunhi is a world-renowned cardiac surgeon based in Chennai, India, with over 25 years of experience and 16,000+ successful cardiac surgeries. He is a pioneer of beating heart surgery in India."
    },
    {
      question: "What makes Dr. Moosa Kunhi special?",
      answer: "Dr. Moosa Kunhi is a pioneer of beating heart surgery in India and has a 99.2% success rate in complex cardiac procedures. He treats international patients from 50+ countries."
    },
    {
      question: "Does Dr. Moosa Kunhi treat international patients?",
      answer: "Yes, Dr. Moosa Kunhi has treated patients from over 50 countries and provides comprehensive medical tourism services including visa assistance and accommodation."
    },
    {
      question: "What is the cost of cardiac surgery in India?",
      answer: "Cardiac surgery in India costs 60-80% less than similar procedures in the US, UK, or Gulf countries, while maintaining world-class quality standards."
    }
  ];

  const reviewData = [
    {
      author: "Ahmed Hassan",
      rating: 5,
      review: "Excellent care and successful heart surgery. Dr. Moosa Kunhi is truly world-class. Saved my life with beating heart surgery.",
      date: "2024-01-15"
    },
    {
      author: "Sarah Johnson",
      rating: 5,
      review: "Outstanding medical care and support throughout my valve replacement surgery. The international patient services were exceptional.",
      date: "2024-02-20"
    }
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* SEO Components - These don't render visible content */}
      <AdvancedSEO
        title={seoData?.title}
        description={seoData?.description}
        keywords={seoData?.keywords}
        url={seoData?.canonicalUrl}
        breadcrumbs={seoData?.breadcrumbs}
        faqData={faqData}
        reviewData={reviewData}
      />
      <VoiceSearchOptimizer pageType="home" />
      <AdvancedLocalSEO />
      
      {/* Main Content Sections in Correct Order */}
      <ModernHero />
      <EnhancedTrustSignals />
      <Introduction />
      <SuccessStories />
      
      {/* Enhanced Quick Stats Section */}
      <section className="py-16 bg-gradient-to-br from-medical-blue via-medical-blue-dark to-slate-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Excellence in Numbers
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Trusted by thousands of patients worldwide for life-saving cardiac care
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Users className="h-12 w-12 mx-auto mb-4 text-coral-300" />
              <div className="text-4xl font-bold mb-2 text-white">16,000+</div>
              <div className="text-sm text-blue-200 font-medium">Successful Surgeries</div>
              <div className="text-xs text-blue-300 mt-1">25+ Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Globe className="h-12 w-12 mx-auto mb-4 text-coral-300" />
              <div className="text-4xl font-bold mb-2 text-white">50+</div>
              <div className="text-sm text-blue-200 font-medium">Countries Served</div>
              <div className="text-xs text-blue-300 mt-1">International Patients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Award className="h-12 w-12 mx-auto mb-4 text-coral-300" />
              <div className="text-4xl font-bold mb-2 text-white">99.2%</div>
              <div className="text-sm text-blue-200 font-medium">Success Rate</div>
              <div className="text-xs text-blue-300 mt-1">Complex Procedures</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Clock className="h-12 w-12 mx-auto mb-4 text-coral-300" />
              <div className="text-4xl font-bold mb-2 text-white">24/7</div>
              <div className="text-sm text-blue-200 font-medium">Emergency Care</div>
              <div className="text-xs text-blue-300 mt-1">Always Available</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Link 
              to="/contact#appointment"
              className="inline-flex items-center gap-3 bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Heart className="h-6 w-6" />
              Book Your Consultation Today
            </Link>
          </div>
        </div>
      </section>

      <VideoLibrary />
      <Services />
      <PatientTestimonials />
      <MediaCoverage />
      <SurgicalGallery />
      <BlogSection />
      <Achievements />
      
      {/* Enhanced Specialized Care Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Specialized Cardiac Care Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive treatment programs designed for specific patient needs and conditions, 
              backed by world-class expertise and cutting-edge technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* CHD Program */}
            <div className="bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Heart className="h-16 w-16 mr-6 text-coral-300" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Congenital Heart Disease</h3>
                    <p className="text-blue-200 text-lg">Pediatric & Adult CHD Program</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-coral-300 rounded-full flex-shrink-0"></div>
                    <span className="text-white text-lg">Comprehensive evaluation and treatment</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-coral-300 rounded-full flex-shrink-0"></div>
                    <span className="text-white text-lg">Family counseling and support</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-coral-300 rounded-full flex-shrink-0"></div>
                    <span className="text-white text-lg">Minimally invasive surgical techniques</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-coral-300 rounded-full flex-shrink-0"></div>
                    <span className="text-white text-lg">Long-term follow-up care</span>
                  </div>
                </div>
                <Link 
                  to="/congenital-heart-disease" 
                  className="inline-flex items-center gap-3 bg-white text-medical-blue px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
                >
                  Learn More About CHD Care
                </Link>
              </div>
            </div>
            
            {/* International Program */}
            <div className="bg-gradient-to-br from-medical-teal to-medical-teal-dark text-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-8">
                  <Globe className="h-16 w-16 mr-6 text-white" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">International Patient Program</h3>
                    <p className="text-teal-200 text-lg">Complete Medical Tourism Solutions</p>
                  </div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-white text-lg">Virtual pre-consultation</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-white text-lg">Visa and travel assistance</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-white text-lg">Airport pickup and accommodation</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-white rounded-full flex-shrink-0"></div>
                    <span className="text-white text-lg">24/7 patient coordination</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/international" 
                    className="inline-flex items-center gap-3 bg-white text-medical-teal px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    <Globe size={24} />
                    International Services
                  </Link>
                  <Link 
                    to="/medical-tourism" 
                    className="inline-flex items-center gap-3 bg-medical-blue text-white px-8 py-4 rounded-2xl hover:bg-medical-blue-dark transition-colors font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    <Plane size={24} />
                    Why Choose India
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Banner */}
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Cardiac Emergency?</h3>
            <p className="mb-8 text-coral-100 text-lg max-w-2xl mx-auto">
              Don't wait - immediate care can save lives. Our emergency team is available 24/7 for urgent cardiac situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+919061693446" 
                className="bg-white text-coral-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-3 shadow-xl hover:shadow-2xl text-lg"
              >
                <Clock className="h-6 w-6" />
                Call Emergency: +91-9061693446
              </a>
              <a 
                href="https://wa.me/919061693446?text=Cardiac Emergency - Need immediate assistance" 
                className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-colors inline-flex items-center gap-3 shadow-xl hover:shadow-2xl text-lg"
              >
                <Globe className="h-6 w-6" />
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <EnhancedFAQ />
      <CallToAction />
      
      {/* Contact Info should be at the very end */}
      <ContactInfo />
    </div>
  );
};

export default Index;
