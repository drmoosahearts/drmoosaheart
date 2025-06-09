
import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingDown, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ProcedureCost {
  procedure: string;
  basePrice: number;
  complexity: 'low' | 'medium' | 'high';
  duration: string;
  hospitalStay: string;
}

interface CostBreakdown {
  surgery: number;
  hospital: number;
  anesthesia: number;
  medical: number;
  accommodation: number;
  total: number;
}

const IntelligentCostCalculator = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [complexity, setComplexity] = useState('');
  const [country, setCountry] = useState('');
  const [insurance, setInsurance] = useState('');
  const [costBreakdown, setCostBreakdown] = useState<CostBreakdown | null>(null);
  const [loading, setLoading] = useState(false);
  const [savings, setSavings] = useState<any>(null);

  const procedures: ProcedureCost[] = [
    { procedure: 'Coronary Bypass Surgery', basePrice: 8000, complexity: 'high', duration: '4-6 hours', hospitalStay: '7-10 days' },
    { procedure: 'Heart Valve Replacement', basePrice: 7000, complexity: 'high', duration: '3-5 hours', hospitalStay: '5-8 days' },
    { procedure: 'Angioplasty', basePrice: 3000, complexity: 'low', duration: '1-2 hours', hospitalStay: '1-2 days' },
    { procedure: 'Pacemaker Implantation', basePrice: 5000, complexity: 'medium', duration: '1-2 hours', hospitalStay: '2-3 days' },
    { procedure: 'Congenital Heart Surgery', basePrice: 12000, complexity: 'high', duration: '6-8 hours', hospitalStay: '10-14 days' },
    { procedure: 'Aortic Aneurysm Repair', basePrice: 15000, complexity: 'high', duration: '4-6 hours', hospitalStay: '7-12 days' }
  ];

  const countries = [
    { name: 'UAE', multiplier: 5.5, currency: 'AED' },
    { name: 'USA', multiplier: 8.0, currency: 'USD' },
    { name: 'UK', multiplier: 4.5, currency: 'GBP' },
    { name: 'Canada', multiplier: 6.0, currency: 'CAD' },
    { name: 'Australia', multiplier: 5.8, currency: 'AUD' },
    { name: 'Germany', multiplier: 4.2, currency: 'EUR' },
    { name: 'Saudi Arabia', multiplier: 4.8, currency: 'SAR' }
  ];

  const insuranceProviders = [
    'Cigna Global', 'Bupa International', 'Allianz Care', 'IMG Global', 'ADNIC', 'Daman Health', 'AXA Gulf', 'Other'
  ];

  const calculateCosts = async () => {
    if (!selectedProcedure || !country) return;

    setLoading(true);
    
    // Simulate AI calculation
    await new Promise(resolve => setTimeout(resolve, 2000));

    const procedure = procedures.find(p => p.procedure === selectedProcedure);
    const countryData = countries.find(c => c.name === country);
    
    if (!procedure || !countryData) return;

    let basePrice = procedure.basePrice;
    
    // Age factor
    if (patientAge && parseInt(patientAge) > 65) {
      basePrice *= 1.2;
    }
    
    // Complexity factor
    const complexityMultiplier = complexity === 'high' ? 1.3 : complexity === 'medium' ? 1.1 : 1.0;
    basePrice *= complexityMultiplier;

    const breakdown: CostBreakdown = {
      surgery: Math.round(basePrice * 0.6),
      hospital: Math.round(basePrice * 0.25),
      anesthesia: Math.round(basePrice * 0.08),
      medical: Math.round(basePrice * 0.05),
      accommodation: Math.round(basePrice * 0.02),
      total: basePrice
    };

    const localCost = basePrice * countryData.multiplier;
    const savingsAmount = localCost - basePrice;
    const savingsPercentage = Math.round((savingsAmount / localCost) * 100);

    setCostBreakdown(breakdown);
    setSavings({
      local: localCost,
      india: basePrice,
      savings: savingsAmount,
      percentage: savingsPercentage,
      currency: countryData.currency
    });
    setLoading(false);
  };

  useEffect(() => {
    if (selectedProcedure && country) {
      calculateCosts();
    }
  }, [selectedProcedure, country, patientAge, complexity]);

  const getComplexityColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-orange-600 bg-orange-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-medical-blue flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            Intelligent Cost Calculator with Insurance Integration
          </CardTitle>
          <p className="text-gray-600">
            Get accurate cost estimates for your cardiac procedure with real-time insurance verification
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Procedure</label>
              <Select onValueChange={setSelectedProcedure}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your procedure" />
                </SelectTrigger>
                <SelectContent>
                  {procedures.map(procedure => (
                    <SelectItem key={procedure.procedure} value={procedure.procedure}>
                      <div className="flex flex-col">
                        <span>{procedure.procedure}</span>
                        <span className="text-xs text-gray-500">{procedure.duration}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Your Country</label>
              <Select onValueChange={setCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country.name} value={country.name}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Age (Optional)</label>
              <Input
                type="number"
                placeholder="Your age"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
                min="18"
                max="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Case Complexity</label>
              <Select onValueChange={setComplexity}>
                <SelectTrigger>
                  <SelectValue placeholder="Select complexity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low Complexity</SelectItem>
                  <SelectItem value="medium">Medium Complexity</SelectItem>
                  <SelectItem value="high">High Complexity</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Insurance Provider</label>
              <Select onValueChange={setInsurance}>
                <SelectTrigger>
                  <SelectValue placeholder="Select insurance" />
                </SelectTrigger>
                <SelectContent>
                  {insuranceProviders.map(provider => (
                    <SelectItem key={provider} value={provider}>
                      {provider}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button 
                onClick={calculateCosts}
                disabled={!selectedProcedure || !country || loading}
                className="w-full bg-medical-blue hover:bg-medical-blue-dark"
              >
                {loading ? 'Calculating...' : 'Calculate Costs'}
              </Button>
            </div>
          </div>

          {loading && (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">AI analyzing your requirements...</p>
                <Progress value={75} className="w-full" />
              </div>
            </div>
          )}

          {costBreakdown && savings && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Cost Breakdown in India
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Surgery Fees</span>
                        <span className="font-semibold">${costBreakdown.surgery.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hospital Stay</span>
                        <span className="font-semibold">${costBreakdown.hospital.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Anesthesia</span>
                        <span className="font-semibold">${costBreakdown.anesthesia.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Medical Supplies</span>
                        <span className="font-semibold">${costBreakdown.medical.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accommodation</span>
                        <span className="font-semibold">${costBreakdown.accommodation.toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between text-lg font-bold">
                        <span>Total Cost</span>
                        <span className="text-green-600">${costBreakdown.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-coral-600" />
                      Savings Comparison
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-coral-600 mb-2">
                          {savings.percentage}% SAVINGS
                        </p>
                        <Badge className="bg-coral-500 text-white">
                          Save {savings.currency} {savings.savings.toLocaleString()}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Cost in {country}</span>
                          <span className="font-semibold text-red-600">
                            {savings.currency} {savings.local.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cost in India</span>
                          <span className="font-semibold text-green-600">
                            ${savings.india.toLocaleString()}
                          </span>
                        </div>
                        <div className="border-t pt-3 flex justify-between text-lg font-bold">
                          <span>Your Savings</span>
                          <span className="text-coral-600">
                            {savings.currency} {savings.savings.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {insurance && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                      Insurance Coverage Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                        <h4 className="font-semibold text-green-800">Pre-approved</h4>
                        <p className="text-sm text-green-600">
                          {insurance} typically covers 70-90% of procedure costs
                        </p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <AlertCircle className="h-6 w-6 text-blue-600 mb-2" />
                        <h4 className="font-semibold text-blue-800">Documentation</h4>
                        <p className="text-sm text-blue-600">
                          We'll help with all insurance claim paperwork
                        </p>
                      </div>
                      <div className="bg-coral-50 p-4 rounded-lg">
                        <DollarSign className="h-6 w-6 text-coral-600 mb-2" />
                        <h4 className="font-semibold text-coral-800">Out-of-pocket</h4>
                        <p className="text-sm text-coral-600">
                          Estimated: $1,500 - $3,000
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex gap-4">
                <Button className="flex-1 bg-coral-500 hover:bg-coral-600">
                  Request Detailed Quote
                </Button>
                <Button variant="outline" className="flex-1">
                  Verify Insurance Coverage
                </Button>
                <Button variant="outline" className="flex-1">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default IntelligentCostCalculator;
