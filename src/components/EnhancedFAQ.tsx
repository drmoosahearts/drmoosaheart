
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

const EnhancedFAQ: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'What is beating heart surgery and how is it different from traditional heart surgery?',
      answer: 'Beating heart surgery is a revolutionary technique where cardiac procedures are performed while the heart continues to beat naturally, without using a heart-lung machine. This reduces complications, shortens recovery time, and is particularly beneficial for high-risk patients. Dr. Moosa Kunhi is a pioneer of this technique in India.',
      category: 'Procedures',
      keywords: ['beating heart surgery', 'cardiac surgery without stopping heart', 'revolutionary heart surgery']
    },
    {
      id: '2',
      question: 'How much does cardiac surgery cost in India compared to other countries?',
      answer: 'Cardiac surgery in India costs 60-80% less than in the US or UK while maintaining world-class quality. Complex procedures like bypass surgery range from $3,000-$8,000 in India compared to $30,000-$100,000 in Western countries. Dr. Moosa Kunhi provides transparent pricing with no hidden costs.',
      category: 'Cost & Insurance',
      keywords: ['cardiac surgery cost India', 'heart surgery price comparison', 'affordable cardiac surgery']
    },
    {
      id: '3',
      question: 'What is the success rate of Dr. Moosa Kunhi\'s cardiac surgeries?',
      answer: 'Dr. Moosa Kunhi has achieved a success rate of over 98% across 16,000+ cardiac surgeries. His expertise in beating heart surgery and minimally invasive techniques has resulted in lower complication rates and faster patient recovery compared to traditional methods.',
      category: 'Success Rates',
      keywords: ['cardiac surgery success rate', 'Dr Moosa Kunhi success rate', 'heart surgery outcomes']
    },
    {
      id: '4',
      question: 'How long is the recovery time after cardiac surgery?',
      answer: 'Recovery time varies by procedure type. Minimally invasive and beating heart surgeries typically require 2-4 weeks for initial recovery, while traditional open-heart surgery may take 6-8 weeks. Dr. Moosa Kunhi\'s advanced techniques often result in 50% faster recovery times.',
      category: 'Recovery',
      keywords: ['cardiac surgery recovery time', 'heart surgery healing', 'post surgery recovery']
    },
    {
      id: '5',
      question: 'Can international patients get visa assistance for medical treatment in India?',
      answer: 'Yes, we provide comprehensive visa assistance for medical tourism. Our international patient coordinators help with medical visa applications, travel arrangements, accommodation booking, and airport transfers. We have successfully treated patients from 50+ countries.',
      category: 'International Patients',
      keywords: ['medical visa India', 'international patient services', 'medical tourism assistance']
    },
    {
      id: '6',
      question: 'What types of congenital heart defects can be treated?',
      answer: 'Dr. Moosa Kunhi treats all types of congenital heart defects including ASD, VSD, Tetralogy of Fallot, Patent Ductus Arteriosus, and complex single ventricle conditions. Both pediatric and adult congenital heart diseases are expertly managed with high success rates.',
      category: 'Congenital Heart Disease',
      keywords: ['congenital heart defects treatment', 'pediatric cardiac surgery', 'adult congenital heart disease']
    }
  ];

  const categories = ['All', ...Array.from(new Set(faqData.map(faq => faq.category)))];

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  // Generate FAQ Schema
  const faqSchema = {
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

  return (
    <section className="py-16 bg-gray-50">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get answers to common questions about cardiac surgery, procedures, costs, and international patient services
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-coral-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-coral-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="mb-4">
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-800 pr-4">
                    {faq.question}
                  </h3>
                  {activeId === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-coral-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-coral-600 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {activeId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 bg-white border-x border-b border-gray-200 rounded-b-lg">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {faq.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No FAQs found matching your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedFAQ;
