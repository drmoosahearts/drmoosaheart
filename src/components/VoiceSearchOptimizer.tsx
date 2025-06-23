
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface VoiceSearchOptimizerProps {
  pageType: 'home' | 'procedure' | 'location' | 'about' | 'contact';
  procedureName?: string;
  locationName?: string;
}

const VoiceSearchOptimizer: React.FC<VoiceSearchOptimizerProps> = ({
  pageType,
  procedureName,
  locationName
}) => {
  const generateVoiceSearchQueries = () => {
    const baseQueries = [
      "Who is the best cardiac surgeon in Chennai",
      "How much does heart surgery cost in India",
      "What is beating heart surgery",
      "Best hospital for heart surgery in India",
      "Dr Moosa Kunhi cardiac surgeon reviews",
      "Heart surgery for international patients India",
      "Emergency cardiac surgery Chennai",
      "Congenital heart disease treatment India"
    ];

    const procedureQueries = procedureName ? [
      `What is ${procedureName.toLowerCase()}`,
      `How much does ${procedureName.toLowerCase()} cost in India`,
      `Best doctor for ${procedureName.toLowerCase()} in Chennai`,
      `${procedureName.toLowerCase()} success rate Dr Moosa Kunhi`,
      `Recovery time for ${procedureName.toLowerCase()}`,
      `Risks of ${procedureName.toLowerCase()}`
    ] : [];

    const locationQueries = locationName ? [
      `Cardiac surgeon for ${locationName} patients`,
      `Heart surgery cost comparison ${locationName} vs India`,
      `Medical tourism ${locationName} to India cardiac surgery`,
      `Best cardiac surgeon in India for ${locationName} patients`
    ] : [];

    return [...baseQueries, ...procedureQueries, ...locationQueries];
  };

  const generateConversationalContent = () => {
    switch (pageType) {
      case 'home':
        return {
          speakableContent: `Dr. M.K. Moosa Kunhi is a leading cardiac surgeon in Chennai, India, with over 25 years of experience and 16,000 successful heart surgeries. He specializes in beating heart surgery, valve replacement, and pediatric cardiac surgery. International patients from over 50 countries trust Dr. Moosa Kunhi for world-class cardiac care at affordable costs.`,
          faqContent: [
            {
              question: "Who is Dr. M.K. Moosa Kunhi?",
              answer: "Dr. M.K. Moosa Kunhi is a world-renowned cardiac surgeon based in Chennai, India, with over 25 years of experience and 16,000 successful cardiac surgeries."
            },
            {
              question: "What makes Dr. Moosa Kunhi special?",
              answer: "Dr. Moosa Kunhi is a pioneer of beating heart surgery in India and has a 99.2% success rate in complex cardiac procedures."
            },
            {
              question: "Does Dr. Moosa Kunhi treat international patients?",
              answer: "Yes, Dr. Moosa Kunhi has treated patients from over 50 countries and provides comprehensive medical tourism services."
            }
          ]
        };
      
      case 'procedure':
        return {
          speakableContent: `${procedureName} is performed by Dr. M.K. Moosa Kunhi using advanced techniques with minimal invasive approaches. The procedure has a high success rate and faster recovery times compared to traditional methods.`,
          faqContent: [
            {
              question: `What is ${procedureName}?`,
              answer: `${procedureName} is a cardiac surgical procedure performed to treat specific heart conditions with advanced minimally invasive techniques.`
            },
            {
              question: `How much does ${procedureName} cost in India?`,
              answer: `${procedureName} costs significantly less in India compared to Western countries, typically 60-80% lower while maintaining world-class quality.`
            }
          ]
        };
      
      default:
        return {
          speakableContent: `Learn about Dr. M.K. Moosa Kunhi's cardiac surgery services, including consultation booking, treatment options, and patient care.`,
          faqContent: []
        };
    }
  };

  const content = generateConversationalContent();
  const voiceQueries = generateVoiceSearchQueries();

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": [".speakable-content", ".main-heading", ".procedure-description"]
  };

  const faqSchema = content.faqContent.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": content.faqContent.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <Helmet>
      {/* Voice Search Optimization Meta Tags */}
      <meta name="voice-search-queries" content={voiceQueries.join(', ')} />
      <meta name="speakable-content" content={content.speakableContent} />
      
      {/* Structured Data for Voice Search */}
      <script type="application/ld+json">
        {JSON.stringify(speakableSchema)}
      </script>
      
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default VoiceSearchOptimizer;
