
import React from 'react';
import { Calculator, TrendingDown, Shield, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import IntelligentCostCalculator from '@/components/IntelligentCostCalculator';

const CostCalculatorPage: React.FC = () => {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cardiac Surgery Cost Calculator | Dr. M.K. Moosa Kunhi",
    "description": "Calculate accurate costs for cardiac surgery procedures in India. Compare prices with international alternatives and get instant estimates.",
    "url": "https://drmoosakunhi.com/cost-calculator"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Cardiac Surgery Cost Calculator | Dr. M.K. Moosa Kunhi"
        description="Calculate accurate costs for cardiac surgery procedures in India. Compare prices with international alternatives and get instant estimates for bypass surgery, valve replacement, and more."
        keywords="cardiac surgery cost, heart surgery price India, bypass surgery cost, valve replacement cost, medical tourism pricing"
        url="https://drmoosakunhi.com/cost-calculator"
        schemaData={pageSchema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Cardiac Surgery Pricing
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Get accurate cost estimates for world-class cardiac surgery procedures in India
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <TrendingDown className="h-8 w-8 text-coral-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Save 60-70%</h3>
                <p className="text-sm text-gray-200">Compared to US/UK prices</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Shield className="h-8 w-8 text-coral-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">No Hidden Costs</h3>
                <p className="text-sm text-gray-200">Transparent pricing structure</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Globe className="h-8 w-8 text-coral-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Multi-Currency</h3>
                <p className="text-sm text-gray-200">Prices in your local currency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <IntelligentCostCalculator />
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-medical-blue mb-12">
              Why Choose India for Cardiac Surgery?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-coral-100 p-3 rounded-lg flex-shrink-0">
                    <Calculator className="h-6 w-6 text-coral-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Cost-Effective Excellence</h3>
                    <p className="text-gray-600">
                      Receive world-class cardiac care at a fraction of the cost in Western countries, 
                      without compromising on quality or safety standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-coral-100 p-3 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-coral-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">International Standards</h3>
                    <p className="text-gray-600">
                      All procedures are performed in JCI-accredited hospitals with state-of-the-art 
                      technology and internationally trained medical staff.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-coral-100 p-3 rounded-lg flex-shrink-0">
                    <Globe className="h-6 w-6 text-coral-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Medical Tourism Support</h3>
                    <p className="text-gray-600">
                      Comprehensive support including visa assistance, airport transfers, 
                      accommodation arrangements, and dedicated patient coordinators.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-coral-100 p-3 rounded-lg flex-shrink-0">
                    <TrendingDown className="h-6 w-6 text-coral-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Quick Turnaround</h3>
                    <p className="text-gray-600">
                      No waiting lists - immediate scheduling available for most procedures, 
                      with faster recovery times using advanced surgical techniques.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostCalculatorPage;
