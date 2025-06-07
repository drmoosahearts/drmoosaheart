import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, CreditCard, Globe, Info, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

interface CostEstimate {
  baseCost: number;
  hospitalStay: number;
  anesthesia: number;
  medications: number;
  investigations: number;
  accommodation: number;
  total: number;
  savings: number;
}

interface ProcedureData {
  name: string;
  baseCost: number;
  duration: number;
  hospitalStay: number;
  complexity: 'low' | 'medium' | 'high';
}

const procedures: Record<string, ProcedureData> = {
  'bypass': {
    name: 'Coronary Bypass Surgery (CABG)',
    baseCost: 350000,
    duration: 4,
    hospitalStay: 7,
    complexity: 'high'
  },
  'valve-replacement': {
    name: 'Valve Replacement',
    baseCost: 400000,
    duration: 5,
    hospitalStay: 8,
    complexity: 'high'
  },
  'beating-heart': {
    name: 'Beating Heart Surgery',
    baseCost: 450000,
    duration: 3,
    hospitalStay: 5,
    complexity: 'high'
  },
  'angioplasty': {
    name: 'Angioplasty',
    baseCost: 150000,
    duration: 1,
    hospitalStay: 2,
    complexity: 'low'
  },
  'pediatric': {
    name: 'Pediatric Heart Surgery',
    baseCost: 500000,
    duration: 6,
    hospitalStay: 10,
    complexity: 'high'
  }
};

const countries = {
  'USD': { name: 'United States', rate: 83, flag: '🇺🇸', savings: 70 },
  'EUR': { name: 'Europe', rate: 90, flag: '🇪🇺', savings: 65 },
  'GBP': { name: 'United Kingdom', rate: 104, flag: '🇬🇧', savings: 68 },
  'AED': { name: 'UAE', rate: 23, flag: '🇦🇪', savings: 40 },
  'SAR': { name: 'Saudi Arabia', rate: 22, flag: '🇸🇦', savings: 45 },
  'INR': { name: 'India', rate: 1, flag: '🇮🇳', savings: 0 }
};

const IntelligentCostCalculator = () => {
  const [selectedProcedure, setSelectedProcedure] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('INR');
  const [patientAge, setPatientAge] = useState<string>('');
  const [hasInsurance, setHasInsurance] = useState<boolean>(false);
  const [needsAccommodation, setNeedsAccommodation] = useState<boolean>(false);
  const [companionCount, setCompanionCount] = useState<string>('0');
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);

  const calculateCost = () => {
    if (!selectedProcedure) {
      toast.error('Please select a procedure');
      return;
    }

    const procedure = procedures[selectedProcedure];
    const currency = countries[selectedCurrency as keyof typeof countries];
    
    let baseCost = procedure.baseCost;
    
    // Age factor
    const age = parseInt(patientAge) || 50;
    if (age > 70) baseCost *= 1.15;
    if (age < 18) baseCost *= 1.25;
    
    // Complexity factor
    const complexityMultiplier = {
      'low': 1,
      'medium': 1.2,
      'high': 1.4
    };
    baseCost *= complexityMultiplier[procedure.complexity];
    
    const hospitalStay = baseCost * 0.2;
    const anesthesia = baseCost * 0.1;
    const medications = baseCost * 0.15;
    const investigations = baseCost * 0.08;
    
    let accommodation = 0;
    if (needsAccommodation) {
      const companions = parseInt(companionCount) || 0;
      accommodation = (procedure.hospitalStay * 2000) * (1 + companions);
    }
    
    const total = baseCost + hospitalStay + anesthesia + medications + investigations + accommodation;
    
    // Insurance discount
    const finalTotal = hasInsurance ? total * 0.8 : total;
    
    // Calculate savings compared to other countries
    const savings = selectedCurrency !== 'INR' ? 
      (finalTotal * currency.rate * currency.savings / 100) : 0;
    
    setEstimate({
      baseCost,
      hospitalStay,
      anesthesia,
      medications,
      investigations,
      accommodation,
      total: finalTotal,
      savings
    });
  };

  const formatCurrency = (amount: number) => {
    const currency = countries[selectedCurrency as keyof typeof countries];
    const convertedAmount = selectedCurrency === 'INR' ? amount : amount / currency.rate;
    
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: selectedCurrency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(convertedAmount);
  };

  const generateReport = () => {
    if (!estimate) return;
    
    const reportData = {
      procedure: procedures[selectedProcedure].name,
      currency: selectedCurrency,
      estimate,
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cost-estimate.json';
    a.click();
    URL.revokeObjectURL(url);
    
    toast.success('Cost estimate report downloaded!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-medical-blue">
            <Calculator className="h-6 w-6" />
            Intelligent Cost Calculator
          </CardTitle>
          <p className="text-gray-600">
            Get an accurate estimate for your cardiac surgery with our advanced calculator
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Procedure *
              </label>
              <Select onValueChange={setSelectedProcedure}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your procedure" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(procedures).map(([key, procedure]) => (
                    <SelectItem key={key} value={key}>
                      {procedure.name}
                      <Badge variant="outline" className="ml-2">
                        {procedure.complexity}
                      </Badge>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Globe className="inline h-4 w-4 mr-1" />
                Currency & Location
              </label>
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(countries).map(([code, country]) => (
                    <SelectItem key={code} value={code}>
                      {country.flag} {country.name} ({code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient Age
              </label>
              <Input
                type="number"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
                placeholder="Enter age"
                min="0"
                max="120"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Companions
              </label>
              <Select value={companionCount} onValueChange={setCompanionCount}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4].map(count => (
                    <SelectItem key={count} value={count.toString()}>
                      {count} companion{count !== 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4 pt-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="insurance"
                  checked={hasInsurance}
                  onCheckedChange={(checked) => setHasInsurance(checked === true)}
                />
                <label htmlFor="insurance" className="text-sm font-medium">
                  I have medical insurance
                </label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="accommodation"
                  checked={needsAccommodation}
                  onCheckedChange={(checked) => setNeedsAccommodation(checked === true)}
                />
                <label htmlFor="accommodation" className="text-sm font-medium">
                  Need accommodation
                </label>
              </div>
            </div>
          </div>
          
          <Button onClick={calculateCost} className="w-full bg-medical-blue hover:bg-medical-blue-dark">
            <Calculator className="h-4 w-4 mr-2" />
            Calculate Cost Estimate
          </Button>
        </CardContent>
      </Card>
      
      {estimate && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-medical-blue">
              <DollarSign className="h-5 w-5" />
              Cost Breakdown
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Surgery Cost:</span>
                    <span className="font-medium">{formatCurrency(estimate.baseCost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hospital Stay:</span>
                    <span className="font-medium">{formatCurrency(estimate.hospitalStay)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Anesthesia:</span>
                    <span className="font-medium">{formatCurrency(estimate.anesthesia)}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Medications:</span>
                    <span className="font-medium">{formatCurrency(estimate.medications)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Investigations:</span>
                    <span className="font-medium">{formatCurrency(estimate.investigations)}</span>
                  </div>
                  {estimate.accommodation > 0 && (
                    <div className="flex justify-between">
                      <span>Accommodation:</span>
                      <span className="font-medium">{formatCurrency(estimate.accommodation)}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Estimated Cost:</span>
                  <span className="text-medical-blue">{formatCurrency(estimate.total)}</span>
                </div>
                
                {estimate.savings > 0 && (
                  <div className="mt-2 p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-between text-green-800 font-medium">
                      <span>Potential Savings vs Local Cost:</span>
                      <span>{formatCurrency(estimate.savings)}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex gap-4 mt-6">
                <Button onClick={generateReport} variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button className="flex-1 bg-coral-500 hover:bg-coral-600">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Book Consultation
                </Button>
              </div>
              
              <div className="text-xs text-gray-500 mt-4 p-3 bg-gray-50 rounded">
                <Info className="inline h-3 w-3 mr-1" />
                This is an estimate only. Actual costs may vary based on individual medical conditions and requirements. 
                Final pricing will be confirmed during consultation.
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default IntelligentCostCalculator;
