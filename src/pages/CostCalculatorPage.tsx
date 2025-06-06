
import React, { useState } from 'react';
import { Calculator, DollarSign, Info, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';

const CostCalculatorPage: React.FC = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [complications, setComplications] = useState('none');
  const [hospitalStay, setHospitalStay] = useState('standard');
  const [showResults, setShowResults] = useState(false);

  const procedures = [
    { id: 'cabg', name: 'Coronary Artery Bypass (CABG)', basePrice: 5000, currency: 'USD' },
    { id: 'valve-replacement', name: 'Valve Replacement Surgery', basePrice: 6000, currency: 'USD' },
    { id: 'valve-repair', name: 'Valve Repair Surgery', basePrice: 5500, currency: 'USD' },
    { id: 'beating-heart', name: 'Beating Heart Surgery', basePrice: 5500, currency: 'USD' },
    { id: 'congenital', name: 'Congenital Heart Surgery', basePrice: 7000, currency: 'USD' },
    { id: 'asd-closure', name: 'ASD Closure', basePrice: 4000, currency: 'USD' },
    { id: 'vsd-closure', name: 'VSD Closure', basePrice: 4500, currency: 'USD' }
  ];

  const calculateCost = () => {
    const procedure = procedures.find(p => p.id === selectedProcedure);
    if (!procedure) return null;

    let basePrice = procedure.basePrice;
    
    // Age factor
    if (parseInt(patientAge) > 70) {
      basePrice *= 1.15; // 15% increase for elderly patients
    }
    
    // Complications factor
    if (complications === 'mild') {
      basePrice *= 1.1; // 10% increase
    } else if (complications === 'moderate') {
      basePrice *= 1.25; // 25% increase
    } else if (complications === 'severe') {
      basePrice *= 1.4; // 40% increase
    }
    
    // Hospital stay factor
    if (hospitalStay === 'extended') {
      basePrice *= 1.2; // 20% increase
    } else if (hospitalStay === 'icu') {
      basePrice *= 1.3; // 30% increase
    }

    return {
      procedure: procedure.name,
      estimatedCost: Math.round(basePrice),
      currency: procedure.currency,
      breakdown: {
        surgery: Math.round(basePrice * 0.6),
        hospital: Math.round(basePrice * 0.25),
        tests: Math.round(basePrice * 0.1),
        misc: Math.round(basePrice * 0.05)
      }
    };
  };

  const handleCalculate = () => {
    if (selectedProcedure && patientAge) {
      setShowResults(true);
    }
  };

  const result = calculateCost();

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Cardiac Surgery Cost Calculator",
    "description": "Calculate estimated costs for cardiac surgery procedures in India",
    "url": "https://drmoosakunhi.com/cost-calculator",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Cardiac Surgery Cost Calculator | Dr. M.K. Moosa Kunhi"
        description="Calculate estimated costs for cardiac surgery procedures in India. Get transparent pricing for heart surgery, valve replacement, bypass surgery and more."
        keywords="cardiac surgery cost calculator, heart surgery price India, bypass surgery cost, valve replacement cost, medical tourism calculator"
        url="https://drmoosakunhi.com/cost-calculator"
        schemaData={calculatorSchema}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-coral-500 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Cardiac Surgery Cost Calculator
            </h1>
            <p className="text-xl text-gray-600">
              Get an estimated cost for your cardiac surgery procedure in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Calculate Your Treatment Cost
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Procedure *
                  </label>
                  <select
                    value={selectedProcedure}
                    onChange={(e) => setSelectedProcedure(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  >
                    <option value="">Choose a procedure</option>
                    {procedures.map((procedure) => (
                      <option key={procedure.id} value={procedure.id}>
                        {procedure.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Age *
                  </label>
                  <input
                    type="number"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    placeholder="Enter age"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Complications Level
                  </label>
                  <select
                    value={complications}
                    onChange={(e) => setComplications(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  >
                    <option value="none">No complications expected</option>
                    <option value="mild">Mild complications</option>
                    <option value="moderate">Moderate complications</option>
                    <option value="severe">Severe complications</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Hospital Stay
                  </label>
                  <select
                    value={hospitalStay}
                    onChange={(e) => setHospitalStay(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                  >
                    <option value="standard">Standard stay (5-7 days)</option>
                    <option value="extended">Extended stay (8-14 days)</option>
                    <option value="icu">Extended ICU stay (15+ days)</option>
                  </select>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={!selectedProcedure || !patientAge}
                  className="w-full bg-coral-500 text-white py-3 px-6 rounded-lg hover:bg-coral-600 transition-colors font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Calculate Cost
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {showResults && result ? (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <h2 className="text-2xl font-bold text-slate-800">
                      Cost Estimate
                    </h2>
                  </div>

                  <div className="bg-coral-50 p-6 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {result.procedure}
                    </h3>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-coral-600" />
                      <span className="text-3xl font-bold text-coral-600">
                        ${result.estimatedCost.toLocaleString()}
                      </span>
                      <span className="text-gray-600">{result.currency}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-800">Cost Breakdown:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Surgery & Surgeon Fees</span>
                        <span>${result.breakdown.surgery.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hospital Stay</span>
                        <span>${result.breakdown.hospital.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tests & Diagnostics</span>
                        <span>${result.breakdown.tests.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Miscellaneous</span>
                        <span>${result.breakdown.misc.toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-2 font-semibold flex justify-between">
                        <span>Total Estimated Cost</span>
                        <span>${result.estimatedCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Important Notes:</p>
                        <ul className="space-y-1 text-xs">
                          <li>• This is an estimated cost and may vary based on individual case complexity</li>
                          <li>• Final costs will be confirmed after medical evaluation</li>
                          <li>• Includes hospital stay, surgery, and basic care</li>
                          <li>• Does not include travel and accommodation costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-12">
                  <Calculator className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                  <p>Fill in the form to calculate your estimated treatment cost</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us for a detailed consultation and personalized treatment plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@drmoosakunhi.com"
                className="bg-coral-500 text-white px-8 py-3 rounded-lg hover:bg-coral-600 transition-colors font-semibold"
              >
                Send Medical Reports
              </a>
              <a
                href="tel:+919061693446"
                className="bg-white text-coral-600 border-2 border-coral-500 px-8 py-3 rounded-lg hover:bg-coral-50 transition-colors font-semibold"
              >
                Call for Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCalculatorPage;
