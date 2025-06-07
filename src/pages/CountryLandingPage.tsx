
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Plane, Clock, MapPin, DollarSign, Heart, Users, Shield, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import SEOSchema from '@/components/SEOSchema';
import { getCountryBySlug } from '@/data/countryPages';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CountryLandingPage: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  
  if (!country) {
    return <Navigate to="/international" replace />;
  }

  const countryData = getCountryBySlug(country);
  
  if (!countryData) {
    return <Navigate to="/international" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={`Cardiac Surgery for ${countryData.name} Patients | Dr. M.K. Moosa Kunhi`}
        description={countryData.metaDescription}
        keywords={countryData.keywords.join(', ')}
        url={`https://drmoosakunhi.com/international/${countryData.slug}`}
      />
      
      <SEOSchema
        type="webpage"
        data={{
          title: `Cardiac Surgery for ${countryData.name} Patients`,
          description: countryData.metaDescription,
          url: `https://drmoosakunhi.com/international/${countryData.slug}`
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-4">{countryData.flag}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cardiac Surgery for {countryData.name} Patients
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              {countryData.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <DollarSign className="h-8 w-8 text-coral-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Save 60-80%</h3>
                <p className="text-sm text-gray-200">Compared to local costs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Clock className="h-8 w-8 text-coral-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">No Waiting</h3>
                <p className="text-sm text-gray-200">Immediate scheduling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Shield className="h-8 w-8 text-coral-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">World-Class Care</h3>
                <p className="text-sm text-gray-200">JCI accredited hospitals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose India Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-blue mb-12">
            Why {countryData.name} Patients Choose India
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryData.whyChooseIndia.map((reason, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-coral-100 p-3 rounded-lg flex-shrink-0">
                  <Heart className="h-6 w-6 text-coral-600" />
                </div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-blue mb-12">
            Cost Comparison: {countryData.name} vs India
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryData.costComparison.map((comparison, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{comparison.procedure}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">In {countryData.name}</p>
                      <p className="text-lg font-semibold text-red-600">{comparison.localCost}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">In India</p>
                      <p className="text-lg font-semibold text-green-600">{comparison.indiaCost}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-600">Your Savings</p>
                      <p className="text-xl font-bold text-coral-600">{comparison.savings}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-blue mb-12">
            Travel & Logistics Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-coral-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Plane className="h-8 w-8 text-coral-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flight Duration</h3>
              <p className="text-gray-600">{countryData.logistics.flightDuration}</p>
            </div>
            <div className="text-center">
              <div className="bg-coral-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-coral-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visa Information</h3>
              <p className="text-gray-600">{countryData.logistics.visaInfo}</p>
            </div>
            <div className="text-center">
              <div className="bg-coral-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-coral-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Time to Visit</h3>
              <p className="text-gray-600">{countryData.logistics.bestTimeToVisit}</p>
            </div>
            <div className="text-center">
              <div className="bg-coral-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-coral-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Accommodation</h3>
              <p className="text-gray-600">{countryData.logistics.accommodation}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Tourism Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-blue mb-12">
            Comprehensive Medical Tourism Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryData.medicalTourismSupport.map((service, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <Globe className="h-5 w-5 text-coral-600 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-medical-blue mb-12">
            Success Stories from {countryData.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryData.testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-4xl mb-2">{countryData.flag}</div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-sm text-coral-600">{testimonial.procedure}</p>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-coral-500 to-coral-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Cardiac Surgery Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of {countryData.name} patients who have received world-class cardiac care in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-coral-600 hover:bg-gray-100">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-coral-600">
              Download Cost Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryLandingPage;
