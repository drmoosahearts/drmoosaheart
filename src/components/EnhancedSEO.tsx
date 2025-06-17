
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  schemaType?: 'MedicalBusiness' | 'MedicalOrganization' | 'Person' | 'Article' | 'WebPage';
  customSchema?: any;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title = "Dr. M.K. Moosa Kunhi - Premier Cardiac Surgeon | Chennai, India | 16,000+ Successful Heart Surgeries",
  description = "Dr. M.K. Moosa Kunhi - World-renowned cardiac surgeon specializing in beating heart surgery, valve replacement, and pediatric cardiac care. Serving international patients from 50+ countries with 99.2% success rate.",
  keywords = "cardiac surgeon Chennai, heart surgery India, beating heart surgery, Dr Moosa Kunhi, valve replacement, pediatric cardiac surgery, international medical tourism, emergency cardiac care, minimally invasive heart surgery",
  image = "/lovable-uploads/dr-moosa-kunhi-cardiac-surgeon.jpg",
  url = "https://drmoosakunhi.com",
  type = "website",
  locale = "en_US",
  siteName = "Dr. M.K. Moosa Kunhi - Cardiac Surgeon",
  author = "Dr. M.K. Moosa Kunhi",
  section = "Healthcare",
  tags = [],
  schemaType = 'MedicalBusiness',
  customSchema
}) => {
  const generateSchema = () => {
    if (customSchema) return customSchema;

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
    };

    switch (schemaType) {
      case 'MedicalBusiness':
        return {
          ...baseSchema,
          "name": "Dr. M.K. Moosa Kunhi - Cardiac Surgery Practice",
          "description": description,
          "url": url,
          "telephone": ["+91-44-2815-3769", "+91-9061693446"],
          "email": "appointments@drmoosakunhi.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kauvery Hospital, Alwarpet",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600018",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0351",
            "longitude": "80.2551"
          },
          "priceRange": "$$$$",
          "medicalSpecialty": ["Cardiothoracic Surgery", "Pediatric Cardiac Surgery", "Valve Repair", "Bypass Surgery"],
          "availableService": [
            {
              "@type": "MedicalProcedure",
              "name": "Beating Heart Surgery",
              "description": "Minimally invasive cardiac surgery without stopping the heart"
            },
            {
              "@type": "MedicalProcedure", 
              "name": "Valve Replacement Surgery",
              "description": "Heart valve repair and replacement procedures"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Pediatric Cardiac Surgery",
              "description": "Specialized heart surgery for children and infants"
            }
          ],
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
          ],
          "founder": {
            "@type": "Person",
            "name": "Dr. M.K. Moosa Kunhi",
            "jobTitle": "Chief Cardiac Surgeon",
            "worksFor": {
              "@type": "Hospital",
              "name": "Kauvery Hospital"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "500",
            "bestRating": "5"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "author": {
                "@type": "Person",
                "name": "International Patient"
              },
              "reviewBody": "Excellent care and successful heart surgery. Dr. Moosa Kunhi is truly world-class."
            }
          ]
        };

      case 'Person':
        return {
          ...baseSchema,
          "name": "Dr. M.K. Moosa Kunhi",
          "jobTitle": "Chief Cardiac Surgeon",
          "description": "World-renowned cardiac surgeon specializing in beating heart surgery and pediatric cardiac care",
          "url": url,
          "image": image,
          "sameAs": [
            "https://www.linkedin.com/in/dr-moosa-kunhi",
            "https://www.docdirectory.com/dr-moosa-kunhi"
          ],
          "worksFor": {
            "@type": "Hospital",
            "name": "Kauvery Hospital",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressCountry": "IN"
            }
          },
          "alumniOf": {
            "@type": "MedicalOrganization",
            "name": "Medical College"
          },
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Board Certification",
            "educationalLevel": "Professional"
          }
        };

      default:
        return {
          ...baseSchema,
          "name": title,
          "description": description,
          "url": url
        };
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Dr. M.K. Moosa Kunhi - Leading Cardiac Surgeon" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#00457C" />
      <meta name="msapplication-TileColor" content="#00457C" />
      <meta name="application-name" content="Dr. Moosa Kunhi" />
      <meta name="apple-mobile-web-app-title" content="Dr. Moosa Kunhi" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Medical/Healthcare Specific */}
      <meta name="medical-specialty" content="Cardiothoracic Surgery" />
      <meta name="healthcare-provider" content="Dr. M.K. Moosa Kunhi" />
      <meta name="location" content="Chennai, Tamil Nadu, India" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="13.0351;80.2551" />
      <meta name="ICBM" content="13.0351, 80.2551" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
      
      {/* Additional Medical Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is beating heart surgery?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Beating heart surgery is a minimally invasive cardiac surgery technique where the heart continues to beat during the procedure, eliminating the need for a heart-lung machine."
              }
            },
            {
              "@type": "Question", 
              "name": "How many heart surgeries has Dr. Moosa Kunhi performed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dr. M.K. Moosa Kunhi has successfully performed over 16,000 cardiac surgeries with a 99.2% success rate."
              }
            },
            {
              "@type": "Question",
              "name": "Does Dr. Moosa Kunhi treat international patients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Dr. Moosa Kunhi has treated patients from over 50 countries and provides comprehensive medical tourism services."
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default EnhancedSEO;
