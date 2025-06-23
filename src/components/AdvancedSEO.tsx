
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface AdvancedSEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
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
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqData?: Array<{ question: string; answer: string }>;
  reviewData?: Array<{ author: string; rating: number; review: string; date: string }>;
  procedureData?: {
    name: string;
    description: string;
    cost?: string;
    duration?: string;
    recovery?: string;
  };
  customSchema?: any;
}

const AdvancedSEO: React.FC<AdvancedSEOProps> = ({
  title = "Dr. M.K. Moosa Kunhi - Premier Cardiac Surgeon | Chennai, India",
  description = "World-renowned cardiac surgeon with 16,000+ successful surgeries. Pioneer of beating heart surgery. Expert in complex cardiac procedures for international patients.",
  keywords = [],
  image = "/lovable-uploads/dr-moosa-kunhi-cardiac-surgeon.jpg",
  url,
  type = "website",
  locale = "en_US",
  siteName = "Dr. M.K. Moosa Kunhi - Cardiac Surgeon",
  author = "Dr. M.K. Moosa Kunhi",
  section = "Healthcare",
  tags = [],
  breadcrumbs = [],
  faqData = [],
  reviewData = [],
  procedureData,
  customSchema
}) => {
  const location = useLocation();
  const currentUrl = url || `https://drmoosakunhi.com${location.pathname}`;

  const defaultKeywords = [
    'cardiac surgeon Chennai',
    'heart surgery India',
    'beating heart surgery',
    'Dr Moosa Kunhi',
    'valve replacement surgery',
    'pediatric cardiac surgery',
    'international medical tourism',
    'emergency cardiac care',
    'minimally invasive heart surgery',
    'congenital heart disease treatment'
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Dr. M.K. Moosa Kunhi Cardiac Surgery Practice",
    "url": "https://drmoosakunhi.com",
    "logo": "https://drmoosakunhi.com/logo.png",
    "description": "Leading cardiac surgery practice specializing in beating heart surgery and complex cardiac procedures",
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
    "founder": {
      "@type": "Person",
      "name": "Dr. M.K. Moosa Kunhi",
      "jobTitle": "Chief Cardiac Surgeon",
      "description": "World-renowned cardiac surgeon with 25+ years experience",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Medical Board Certification",
          "educationalLevel": "Professional"
        }
      ]
    },
    "medicalSpecialty": ["Cardiothoracic Surgery", "Pediatric Cardiac Surgery"],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Beating Heart Surgery",
        "description": "Off-pump cardiac surgery without stopping the heart"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Valve Replacement Surgery",
        "description": "Heart valve repair and replacement procedures"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Congenital Heart Surgery",
        "description": "Treatment of congenital heart defects in children and adults"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    }
  });

  const generateBreadcrumbSchema = () => {
    if (breadcrumbs.length === 0) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": breadcrumb.name,
        "item": breadcrumb.url
      }))
    };
  };

  const generateFAQSchema = () => {
    if (faqData.length === 0) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  const generateReviewSchema = () => {
    if (reviewData.length === 0) return null;
    
    return reviewData.map(review => ({
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "MedicalBusiness",
        "name": "Dr. M.K. Moosa Kunhi Cardiac Surgery"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.review,
      "datePublished": review.date
    }));
  };

  const generateProcedureSchema = () => {
    if (!procedureData) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": procedureData.name,
      "description": procedureData.description,
      "procedureType": "Surgical",
      "bodyLocation": "Heart",
      "performer": {
        "@type": "Person",
        "name": "Dr. M.K. Moosa Kunhi"
      },
      "cost": procedureData.cost ? {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": procedureData.cost
      } : undefined
    };
  };

  const schemas = [
    generateOrganizationSchema(),
    generateBreadcrumbSchema(),
    generateFAQSchema(),
    generateProcedureSchema(),
    ...(generateReviewSchema() || []),
    customSchema
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Enhanced Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dr. M.K. Moosa Kunhi - Leading Cardiac Surgeon" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      
      {/* Enhanced Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Dr. M.K. Moosa Kunhi - Leading Cardiac Surgeon" />
      <meta name="twitter:creator" content="@drmoosakunhi" />
      <meta name="twitter:site" content="@drmoosakunhi" />
      
      {/* Medical/Healthcare Specific Meta Tags */}
      <meta name="medical-specialty" content="Cardiothoracic Surgery" />
      <meta name="healthcare-provider" content="Dr. M.K. Moosa Kunhi" />
      <meta name="medical-condition" content="Heart Disease, Cardiac Surgery" />
      <meta name="treatment-type" content="Surgical" />
      <meta name="patient-demographic" content="International Patients" />
      
      {/* Geographic and Local SEO */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content="13.0351;80.2551" />
      <meta name="ICBM" content="13.0351, 80.2551" />
      <meta name="location" content="Chennai, Tamil Nadu, India" />
      
      {/* Enhanced Technical Meta Tags */}
      <meta name="theme-color" content="#00457C" />
      <meta name="msapplication-TileColor" content="#00457C" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Dr. Moosa Kunhi" />
      <meta name="application-name" content="Dr. Moosa Kunhi" />
      
      {/* Content and Language Tags */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      <meta name="content-type" content="text/html; charset=UTF-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternate Language Versions */}
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="hi" href={`${currentUrl}?lang=hi`} />
      <link rel="alternate" hrefLang="ta" href={`${currentUrl}?lang=ta`} />
      <link rel="alternate" hrefLang="ar" href={`${currentUrl}?lang=ar`} />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Structured Data Schemas */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default AdvancedSEO;
