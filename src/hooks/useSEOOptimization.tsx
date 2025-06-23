
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  breadcrumbs: Array<{ name: string; url: string }>;
  structuredData: any;
}

export const useSEOOptimization = () => {
  const location = useLocation();
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    generateSEOData();
  }, [location.pathname]);

  const generateSEOData = () => {
    setIsLoading(true);
    
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const currentPath = location.pathname;

    let title = '';
    let description = '';
    let keywords: string[] = [];
    let breadcrumbs: Array<{ name: string; url: string }> = [
      { name: 'Home', url: '/' }
    ];

    // Generate SEO data based on current route
    switch (currentPath) {
      case '/':
        title = 'Dr. M.K. Moosa Kunhi - Premier Cardiac Surgeon | Chennai, India | 16,000+ Successful Heart Surgeries';
        description = 'Dr. M.K. Moosa Kunhi - World-renowned cardiac surgeon specializing in beating heart surgery, valve replacement, and pediatric cardiac care. Serving international patients from 50+ countries with 99.2% success rate.';
        keywords = [
          'cardiac surgeon Chennai',
          'heart surgery India',
          'beating heart surgery',
          'Dr Moosa Kunhi',
          'valve replacement',
          'pediatric cardiac surgery',
          'international medical tourism',
          'emergency cardiac care'
        ];
        break;

      case '/about':
        title = 'About Dr. M.K. Moosa Kunhi - Leading Cardiac Surgeon | 25+ Years Experience';
        description = 'Learn about Dr. M.K. Moosa Kunhi\'s extensive experience, qualifications, and pioneering work in cardiac surgery. 16,000+ successful surgeries and international recognition.';
        keywords = [
          'Dr Moosa Kunhi biography',
          'cardiac surgeon credentials',
          'heart surgery experience',
          'medical qualifications',
          'cardiac surgery awards'
        ];
        breadcrumbs.push({ name: 'About Dr. Moosa Kunhi', url: '/about' });
        break;

      case '/services':
        title = 'Cardiac Surgery Services | Dr. M.K. Moosa Kunhi | Chennai, India';
        description = 'Comprehensive cardiac surgery services including beating heart surgery, valve replacement, CABG, and congenital heart disease treatment by Dr. M.K. Moosa Kunhi.';
        keywords = [
          'cardiac surgery services',
          'heart surgery types',
          'valve replacement surgery',
          'coronary bypass surgery',
          'congenital heart surgery'
        ];
        breadcrumbs.push({ name: 'Services', url: '/services' });
        break;

      case '/contact':
        title = 'Contact Dr. M.K. Moosa Kunhi | Book Cardiac Surgery Consultation | Chennai';
        description = 'Contact Dr. M.K. Moosa Kunhi for cardiac surgery consultation. 24/7 emergency care, international patient services, and appointment booking available.';
        keywords = [
          'contact cardiac surgeon',
          'book heart surgery consultation',
          'cardiac surgery appointment',
          'emergency cardiac care',
          'international patient services'
        ];
        breadcrumbs.push({ name: 'Contact', url: '/contact' });
        break;

      case '/procedures':
        title = 'Cardiac Surgery Procedures | Advanced Heart Surgery | Dr. M.K. Moosa Kunhi';
        description = 'Advanced cardiac surgery procedures including beating heart surgery, valve replacement, bypass surgery, and congenital heart surgery with high success rates.';
        keywords = [
          'cardiac surgery procedures',
          'heart surgery types',
          'minimally invasive cardiac surgery',
          'cardiac surgery techniques'
        ];
        breadcrumbs.push({ name: 'Procedures', url: '/procedures' });
        break;

      case '/international':
        title = 'International Patients | Medical Tourism | Cardiac Surgery India | Dr. M.K. Moosa Kunhi';
        description = 'Comprehensive medical tourism services for international patients seeking cardiac surgery in India. Visa assistance, accommodation, and world-class care.';
        keywords = [
          'medical tourism India',
          'international cardiac surgery',
          'heart surgery for overseas patients',
          'medical tourism services',
          'cardiac surgery cost India'
        ];
        breadcrumbs.push({ name: 'International Patients', url: '/international' });
        break;

      default:
        // Handle dynamic routes
        if (currentPath.startsWith('/international/')) {
          const country = pathSegments[1];
          title = `Cardiac Surgery for ${country.charAt(0).toUpperCase() + country.slice(1)} Patients | Dr. M.K. Moosa Kunhi`;
          description = `Specialized cardiac surgery services for ${country} patients in India. Save 60-80% on heart surgery costs with world-class care.`;
          keywords = [
            `cardiac surgery ${country}`,
            `heart surgery for ${country} patients`,
            `medical tourism ${country} India`,
            `cardiac surgery cost comparison ${country}`
          ];
          breadcrumbs.push(
            { name: 'International Patients', url: '/international' },
            { name: country.charAt(0).toUpperCase() + country.slice(1), url: currentPath }
          );
        }
        break;
    }

    const structuredData = generateStructuredData(currentPath, title, description);

    setSeoData({
      title,
      description,
      keywords,
      canonicalUrl: `https://drmoosakunhi.com${currentPath}`,
      breadcrumbs,
      structuredData
    });

    setIsLoading(false);
  };

  const generateStructuredData = (path: string, title: string, description: string) => {
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": `https://drmoosakunhi.com${path}`,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "WebSite",
        "name": "Dr. M.K. Moosa Kunhi - Cardiac Surgeon",
        "url": "https://drmoosakunhi.com"
      }
    };

    // Add specific structured data based on page type
    if (path === '/') {
      return {
        ...baseStructuredData,
        "@type": "MedicalBusiness",
        "name": "Dr. M.K. Moosa Kunhi Cardiac Surgery Practice",
        "medicalSpecialty": "Cardiothoracic Surgery"
      };
    }

    return baseStructuredData;
  };

  const updateSEOData = (newData: Partial<SEOData>) => {
    setSeoData(prev => prev ? { ...prev, ...newData } : null);
  };

  return {
    seoData,
    isLoading,
    updateSEOData,
    generateSEOData
  };
};
