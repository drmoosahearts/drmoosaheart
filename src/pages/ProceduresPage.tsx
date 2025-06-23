
import React from 'react';
import { Heart, Stethoscope, Activity, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdvancedSEO from '@/components/AdvancedSEO';
import VoiceSearchOptimizer from '@/components/VoiceSearchOptimizer';
import SEOContentOptimizer from '@/components/SEOContentOptimizer';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';

const ProceduresPage: React.FC = () => {
  const { seoData, isLoading } = useSEOOptimization();

  const procedures = [
    {
      id: 'beating-heart-surgery',
      title: 'Beating Heart Surgery',
      description: 'Revolutionary cardiac surgery performed without stopping the heart',
      icon: Heart,
      features: ['No heart-lung machine', 'Faster recovery', 'Lower complications', 'Suitable for high-risk patients'],
      image: '/lovable-uploads/371c975d-3f6b-492b-9a6c-01c04b81a4a7.jpg'
    },
    {
      id: 'valve-replacement',
      title: 'Valve Replacement & Repair',
      description: 'Advanced techniques for heart valve disorders',
      icon: Activity,
      features: ['Minimally invasive options', 'Tissue and mechanical valves', 'Transcatheter procedures', 'Long-term durability'],
      image: '/lovable-uploads/371c975d-3f6b-492b-9a6c-01c04b81a4a7.jpg'
    },
    {
      id: 'bypass-surgery',
      title: 'Coronary Bypass Surgery',
      description: 'CABG procedures for coronary artery disease',
      icon: Stethoscope,
      features: ['Multiple vessel treatment', 'Arterial grafts preferred', 'Off-pump options', 'Excellent outcomes'],
      image: '/lovable-uploads/371c975d-3f6b-492b-9a6c-01c04b81a4a7.jpg'
    },
    {
      id: 'congenital-surgery',
      title: 'Congenital Heart Surgery',
      description: 'Specialized care for congenital heart defects',
      icon: Shield,
      features: ['Pediatric and adult CHD', 'Complex reconstructions', 'Single-stage repairs', 'Family-centered care'],
      image: '/lovable-uploads/371c975d-3f6b-492b-9a6c-01c04b81a4a7.jpg'
    }
  ];

  const faqData = [
    {
      question: "What is beating heart surgery?",
      answer: "Beating heart surgery is a minimally invasive cardiac surgery technique where the heart continues to beat during the procedure, eliminating the need for a heart-lung machine."
    },
    {
      question: "How long does valve replacement surgery take?",
      answer: "Valve replacement surgery typically takes 2-4 hours depending on the complexity of the case and whether multiple valves need replacement."
    },
    {
      question: "What is the recovery time for cardiac surgery?",
      answer: "Recovery time varies by procedure, but most patients return to normal activities within 6-8 weeks for bypass surgery and 4-6 weeks for valve procedures."
    }
  ];

  const pageContent = `
    Dr. M.K. Moosa Kunhi offers comprehensive cardiac surgery procedures including beating heart surgery, valve replacement, coronary bypass surgery, and congenital heart surgery. 
    With over 16,000 successful surgeries and a 99.2% success rate, Dr. Moosa Kunhi uses advanced minimally invasive techniques for optimal patient outcomes.
    Our cardiac surgery procedures are performed at JCI-accredited hospitals with state-of-the-art technology and internationally trained medical staff.
  `;

  const targetKeywords = [
    'cardiac surgery procedures',
    'beating heart surgery',
    'valve replacement surgery',
    'coronary bypass surgery',
    'congenital heart surgery',
    'Dr Moosa Kunhi',
    'heart surgery Chennai',
    'minimally invasive cardiac surgery'
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdvancedSEO
        title={seoData?.title}
        description={seoData?.description}
        keywords={seoData?.keywords}
        url={seoData?.canonicalUrl}
        breadcrumbs={seoData?.breadcrumbs}
        faqData={faqData}
        procedureData={{
          name: "Cardiac Surgery Procedures",
          description: "Comprehensive cardiac surgery procedures including beating heart surgery, valve replacement, and bypass surgery",
          cost: "60-80% less than Western countries",
          duration: "2-6 hours depending on procedure",
          recovery: "4-8 weeks typical recovery time"
        }}
      />
      
      <VoiceSearchOptimizer pageType="procedure" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Cardiac Surgery Procedures
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              World-class cardiac surgery procedures performed with precision, innovation, and exceptional patient care
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-coral-300">16,000+</div>
                <div className="text-sm text-gray-200">Successful Surgeries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral-300">98%</div>
                <div className="text-sm text-gray-200">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral-300">50+</div>
                <div className="text-sm text-gray-200">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral-300">25+</div>
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Optimizer */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <SEOContentOptimizer
            content={pageContent}
            targetKeywords={targetKeywords}
          />
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {procedures.map((procedure) => {
              const IconComponent = procedure.icon;
              return (
                <div key={procedure.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={procedure.image}
                      alt={procedure.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-coral-100 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-coral-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {procedure.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {procedure.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {procedure.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-medical-blue text-white px-6 py-3 rounded-lg hover:bg-medical-blue-dark transition-colors font-medium"
                    >
                      Learn More About {procedure.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coral-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Need a Cardiac Surgery Consultation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Dr. M.K. Moosa Kunhi to discuss the best treatment options for your cardiac condition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-coral-500 text-white px-8 py-3 rounded-lg hover:bg-coral-600 transition-colors font-semibold"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+919061693446"
              className="bg-white text-coral-600 border-2 border-coral-500 px-8 py-3 rounded-lg hover:bg-coral-50 transition-colors font-semibold"
            >
              Call Now: +91-9061693446
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProceduresPage;
