
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOSchemaProps {
  type: 'article' | 'webpage' | 'organization' | 'medicalBusiness' | 'procedure';
  data: any;
}

const SEOSchema: React.FC<SEOSchemaProps> = ({ type, data }) => {
  const generateSchema = () => {
    switch (type) {
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Person",
            "name": data.author || "Dr. M.K. Moosa Kunhi",
            "url": "https://drmoosakunhi.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dr. M.K. Moosa Kunhi",
            "logo": {
              "@type": "ImageObject",
              "url": "https://drmoosakunhi.com/logo.png"
            }
          },
          "datePublished": data.publishDate,
          "dateModified": data.publishDate,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          },
          "articleSection": data.category,
          "keywords": data.keywords?.join(', ')
        };

      case 'medicalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. M.K. Moosa Kunhi - Cardiac Surgeon",
          "description": "Leading cardiac surgeon specializing in beating heart surgery, valve replacement, and congenital heart disease treatment",
          "url": "https://drmoosakunhi.com",
          "telephone": "+91-44-2815-3769",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Apollo Hospitals, Greams Road",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600006",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0827",
            "longitude": "80.2707"
          },
          "priceRange": "$$$$",
          "medicalSpecialty": "Cardiothoracic Surgery",
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Medical Degree",
              "educationalLevel": "Professional"
            }
          ]
        };

      case 'procedure':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          "name": data.name,
          "description": data.description,
          "procedureType": "Surgical",
          "bodyLocation": "Heart",
          "preparation": data.preparation,
          "followup": data.followup,
          "howPerformed": data.howPerformed,
          "typicalTest": data.tests,
          "cost": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": data.cost
          }
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Dr. M.K. Moosa Kunhi Cardiac Surgery Practice",
          "url": "https://drmoosakunhi.com",
          "logo": "https://drmoosakunhi.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-44-2815-3769",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Tamil", "Malayalam", "Arabic"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Apollo Hospitals, Greams Road",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600006",
            "addressCountry": "IN"
          },
          "founder": {
            "@type": "Person",
            "name": "Dr. M.K. Moosa Kunhi"
          }
        };

      default:
        return {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.title,
          "description": data.description,
          "url": data.url
        };
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
};

export default SEOSchema;
