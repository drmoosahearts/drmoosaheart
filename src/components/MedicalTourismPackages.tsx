
import React, { useState } from 'react';
import { Plane, Hotel, Car, Heart, Shield, Globe, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TourismPackage {
  id: string;
  name: string;
  procedure: string;
  duration: string;
  price: {
    basic: number;
    premium: number;
    luxury: number;
  };
  includes: string[];
  accommodation: {
    basic: string;
    premium: string;
    luxury: string;
  };
  features: string[];
  popular: boolean;
}

const MedicalTourismPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('bypass');
  const [selectedTier, setSelectedTier] = useState<'basic' | 'premium' | 'luxury'>('premium');

  const packages: TourismPackage[] = [
    {
      id: 'bypass',
      name: 'Coronary Bypass Surgery Package',
      procedure: 'CABG (Coronary Artery Bypass Grafting)',
      duration: '14-21 days',
      price: { basic: 8500, premium: 12000, luxury: 18000 },
      includes: [
        'Pre-operative consultations and tests',
        'Surgery by Dr. Moosa Kunhi',
        'Hospital stay (5-7 days)',
        'Post-operative care and monitoring',
        'Medications during stay',
        'Airport transfers',
        'Accommodation for 1 companion'
      ],
      accommodation: {
        basic: '3-star hotel near hospital',
        premium: '4-star hotel with medical facilities',
        luxury: '5-star resort with recovery suites'
      },
      features: ['24/7 medical support', 'Dedicated patient coordinator', 'Insurance assistance'],
      popular: true
    },
    {
      id: 'valve',
      name: 'Heart Valve Replacement Package',
      procedure: 'Mitral/Aortic Valve Replacement',
      duration: '10-14 days',
      price: { basic: 9500, premium: 13500, luxury: 20000 },
      includes: [
        'Comprehensive cardiac evaluation',
        'Valve replacement surgery',
        'ICU and ward care',
        'Echocardiogram follow-ups',
        'Rehabilitation guidance',
        'Medical visa assistance',
        'Local transportation'
      ],
      accommodation: {
        basic: 'Hospital guest house',
        premium: 'Business hotel with medical concierge',
        luxury: 'Luxury hotel with spa facilities'
      },
      features: ['Advanced surgical techniques', 'International standards', 'Follow-up care'],
      popular: false
    },
    {
      id: 'angioplasty',
      name: 'Angioplasty & Stenting Package',
      procedure: 'Percutaneous Coronary Intervention',
      duration: '5-7 days',
      price: { basic: 4500, premium: 6500, luxury: 9500 },
      includes: [
        'Coronary angiography',
        'Angioplasty with stent placement',
        'Overnight monitoring',
        'Discharge medications',
        'Follow-up consultation',
        'Emergency contact support'
      ],
      accommodation: {
        basic: 'Standard hotel accommodation',
        premium: 'Premium hotel with medical support',
        luxury: 'Resort accommodation with wellness center'
      },
      features: ['Minimally invasive', 'Quick recovery', 'Latest stent technology'],
      popular: false
    }
  ];

  const selectedPkg = packages.find(pkg => pkg.id === selectedPackage);

  const tierBenefits = {
    basic: ['Standard accommodation', 'Basic medical support', 'Airport transfers'],
    premium: ['Premium accommodation', 'Dedicated coordinator', 'Concierge services', 'Medical interpreter'],
    luxury: ['Luxury accommodation', 'VIP treatment', 'Spa services', 'Private transportation', 'Family support']
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-medical-blue mb-4">
          Complete Medical Tourism Packages
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive cardiac surgery packages including treatment, accommodation, and support services
        </p>
      </div>

      <Tabs value={selectedPackage} onValueChange={setSelectedPackage}>
        <TabsList className="grid w-full grid-cols-3">
          {packages.map((pkg) => (
            <TabsTrigger key={pkg.id} value={pkg.id} className="relative">
              {pkg.popular && (
                <Badge className="absolute -top-2 -right-2 bg-coral-500 text-xs">
                  Popular
                </Badge>
              )}
              {pkg.name.split(' ')[0]} {pkg.name.split(' ')[1]}
            </TabsTrigger>
          ))}
        </TabsList>

        {packages.map((pkg) => (
          <TabsContent key={pkg.id} value={pkg.id}>
            <div className="grid lg:grid-cols-3 gap-6 mt-6">
              {/* Package Details */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-6 w-6 text-coral-500" />
                      {pkg.name}
                    </CardTitle>
                    <p className="text-gray-600">{pkg.procedure}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-green-600" />
                          Package Includes
                        </h4>
                        <ul className="space-y-2">
                          {pkg.includes.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-medical-blue rounded-full mt-2 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Globe className="h-5 w-5 text-blue-600" />
                          Key Features
                        </h4>
                        <div className="space-y-2">
                          {pkg.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="mr-2 mb-2">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-sm text-gray-600 flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Duration: {pkg.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing Tiers */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-600" />
                      Package Pricing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={selectedTier} onValueChange={(value: any) => setSelectedTier(value)}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="basic">Basic</TabsTrigger>
                        <TabsTrigger value="premium">Premium</TabsTrigger>
                        <TabsTrigger value="luxury">Luxury</TabsTrigger>
                      </TabsList>
                      
                      <div className="mt-4 text-center">
                        <div className="text-3xl font-bold text-medical-blue mb-2">
                          ${pkg.price[selectedTier].toLocaleString()}
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                          {pkg.accommodation[selectedTier]}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                          {tierBenefits[selectedTier].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              {benefit}
                            </div>
                          ))}
                        </div>
                        
                        <Button className="w-full bg-coral-500 hover:bg-coral-600 mb-3">
                          Book This Package
                        </Button>
                        <Button variant="outline" className="w-full">
                          Get Quote
                        </Button>
                      </div>
                    </Tabs>
                  </CardContent>
                </Card>
                
                {/* Additional Services */}
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Additional Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm">
                        <Plane className="h-4 w-4" />
                        Flight booking assistance
                      </span>
                      <span className="text-sm text-green-600">Free</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm">
                        <Car className="h-4 w-4" />
                        Private car service
                      </span>
                      <span className="text-sm">$200</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm">
                        <Hotel className="h-4 w-4" />
                        Extended stay (per day)
                      </span>
                      <span className="text-sm">$80</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MedicalTourismPackages;
