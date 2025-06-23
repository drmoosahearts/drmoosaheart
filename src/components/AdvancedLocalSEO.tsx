
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Clock, Star, Award } from 'lucide-react';

interface LocalSEOProps {
  hospitalName?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  coordinates?: {
    latitude: string;
    longitude: string;
  };
  contactInfo?: {
    phone: string;
    emergency: string;
    email: string;
  };
}

const AdvancedLocalSEO: React.FC<LocalSEOProps> = ({
  hospitalName = "Kauvery Hospital",
  address = {
    street: "Alwarpet",
    city: "Chennai",
    state: "Tamil Nadu",
    postalCode: "600018",
    country: "IN"
  },
  coordinates = {
    latitude: "13.0351",
    longitude: "80.2551"
  },
  contactInfo = {
    phone: "+91-44-2815-3769",
    emergency: "+91-9061693446",
    email: "appointments@drmoosakunhi.com"
  }
}) => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. M.K. Moosa Kunhi - Cardiac Surgery Practice",
    "image": "https://drmoosakunhi.com/lovable-uploads/dr-moosa-kunhi-cardiac-surgeon.jpg",
    "description": "Leading cardiac surgery practice in Chennai specializing in beating heart surgery and complex cardiac procedures",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.latitude,
      "longitude": coordinates.longitude
    },
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "url": "https://drmoosakunhi.com",
    "priceRange": "$$$$",
    "currenciesAccepted": "INR, USD, EUR, AED",
    "paymentAccepted": "Cash, Credit Card, Insurance, Bank Transfer",
    "medicalSpecialty": [
      "Cardiothoracic Surgery",
      "Pediatric Cardiac Surgery", 
      "Valve Repair Surgery",
      "Coronary Bypass Surgery"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Beating Heart Surgery",
        "description": "Off-pump cardiac surgery without stopping the heart",
        "procedureType": "Surgical"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Valve Replacement Surgery",
        "description": "Heart valve repair and replacement procedures",
        "procedureType": "Surgical"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Congenital Heart Surgery",
        "description": "Treatment of congenital heart defects",
        "procedureType": "Surgical"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Emergency Cardiac Surgery",
        "description": "24/7 emergency cardiac surgical services",
        "procedureType": "Emergency"
      }
    ],
    "openingHours": [
      "Mo-Fr 09:00-17:00",
      "Sa 09:00-13:00",
      "Su Emergency Only"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.phone,
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi", "Tamil", "Malayalam", "Arabic"],
        "hoursAvailable": "Mo-Fr 09:00-17:00, Sa 09:00-13:00"
      },
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.emergency,
        "contactType": "emergency",
        "availableLanguage": ["English", "Hindi", "Tamil"],
        "hoursAvailable": "24/7"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. M.K. Moosa Kunhi",
      "jobTitle": "Chief Cardiac Surgeon",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Medical Degree",
          "educationalLevel": "Professional",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Medical Council of India"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "JCI Hospital Accreditation",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Joint Commission International"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "NABH Accreditation",
        "recognizedBy": {
          "@type": "Organization",
          "name": "National Accreditation Board for Hospitals"
        }
      }
    ],
    "knowsAbout": [
      "Cardiac Surgery",
      "Heart Disease Treatment",
      "Medical Tourism",
      "International Patient Care",
      "Emergency Cardiac Care",
      "Pediatric Cardiac Surgery"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Country", 
        "name": "United Arab Emirates"
      },
      {
        "@type": "Country",
        "name": "Saudi Arabia"
      },
      {
        "@type": "Country",
        "name": "Oman"
      },
      {
        "@type": "Country",
        "name": "Kuwait"
      },
      {
        "@type": "Country",
        "name": "Qatar"
      }
    ]
  };

  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": hospitalName,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.postalCode,
      "addressCountry": address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.latitude,
      "longitude": coordinates.longitude
    },
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "medicalSpecialty": ["Cardiology", "Cardiac Surgery", "Emergency Medicine"],
    "availableService": [
      "Emergency Care",
      "Cardiac Surgery", 
      "Diagnostic Services",
      "Patient Accommodation"
    ]
  };

  return (
    <>
      <Helmet>
        {/* Local Business Meta Tags */}
        <meta name="geo.region" content={`${address.country}-${address.state.substring(0, 2).toUpperCase()}`} />
        <meta name="geo.placename" content={address.city} />
        <meta name="geo.position" content={`${coordinates.latitude};${coordinates.longitude}`} />
        <meta name="ICBM" content={`${coordinates.latitude}, ${coordinates.longitude}`} />
        
        {/* Local SEO Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(hospitalSchema)}
        </script>
      </Helmet>

      {/* Local SEO Information Display */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-medical-blue/10 p-2 rounded-lg">
            <MapPin className="h-6 w-6 text-medical-blue" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Location & Contact Information</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-coral-500" />
              <h4 className="font-semibold text-gray-800">Address</h4>
            </div>
            <div className="text-sm text-gray-600">
              <p>{hospitalName}</p>
              <p>{address.street}</p>
              <p>{address.city}, {address.state}</p>
              <p>{address.postalCode}, India</p>
            </div>
          </div>

          {/* Contact Numbers */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-coral-500" />
              <h4 className="font-semibold text-gray-800">Contact</h4>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Hospital: {contactInfo.phone}</p>
              <p>Emergency: {contactInfo.emergency}</p>
              <p>Email: {contactInfo.email}</p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-coral-500" />
              <h4 className="font-semibold text-gray-800">Hours</h4>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
              <p>Emergency: 24/7 Available</p>
            </div>
          </div>

          {/* Accreditations */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-coral-500" />
              <h4 className="font-semibold text-gray-800">Accreditations</h4>
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>JCI Accredited</p>
              <p>NABH Certified</p>
              <p>ISO 9001:2015</p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t pt-6 mt-6">
          <h4 className="font-semibold text-gray-800 mb-3">Service Areas</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {[
              'Chennai', 'Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'India',
              'UAE', 'Saudi Arabia', 'Oman', 'Kuwait', 'Qatar', 'International'
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 px-3 py-1 rounded text-sm text-gray-700 text-center">
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* Rating Display */}
        <div className="border-t pt-6 mt-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-xl font-bold text-gray-800">4.9</span>
              <span className="text-gray-600">/ 5.0</span>
            </div>
            <div className="text-sm text-gray-600">
              Based on 500+ patient reviews
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedLocalSEO;
