
import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "General",
      question: "What makes Dr. Moosa different from other cardiac surgeons?",
      answer: "Dr. Moosa is a pioneer in beating heart surgery in India, with over 16,000 successful procedures. He's trained in artificial heart technology and specializes in complex cases that other surgeons might consider inoperable. His patient-centric approach and international experience make him a preferred choice for patients worldwide."
    },
    {
      category: "International Patients",
      question: "How do I get started as an international patient?",
      answer: "Simply contact our international patient coordinator at +971506505422 or email 6505422@gmail.com. We'll guide you through medical record submission, virtual consultation scheduling, visa assistance, and treatment planning. Our English-speaking team ensures smooth communication throughout your journey."
    },
    {
      category: "Procedures",
      question: "What is beating heart surgery and how is it different?",
      answer: "Beating heart surgery (off-pump bypass) is performed while the heart continues beating, without using a heart-lung machine. This reduces complications, shortens recovery time, and minimizes blood loss. Dr. Moosa pioneered this technique in India and has extensive experience with complex cases."
    },
    {
      category: "Cost & Insurance",
      question: "What are the costs for cardiac surgery in India?",
      answer: "Cardiac surgery costs in India are 60-80% lower than Western countries while maintaining world-class quality. Exact costs vary by procedure complexity. We provide detailed cost estimates during consultation and assist with insurance pre-authorization if applicable."
    },
    {
      category: "International Patients",
      question: "What support do you provide for international patients?",
      answer: "We offer comprehensive support including airport pickup, hotel accommodation, visa assistance, language interpretation, 24/7 patient coordination, medical tourism packages, and post-treatment follow-up via telemedicine."
    },
    {
      category: "Emergency",
      question: "Do you handle emergency cardiac cases?",
      answer: "Yes, we provide 24/7 emergency cardiac care. For urgent cases, contact +91-9061693446 immediately. Our emergency team is equipped to handle acute myocardial infarction, cardiac arrest, and other life-threatening conditions with immediate intervention capabilities."
    },
    {
      category: "Pediatric",
      question: "Does Dr. Moosa treat children with heart conditions?",
      answer: "Yes, Dr. Moosa has extensive experience in pediatric cardiac surgery, particularly congenital heart defects. He uses child-friendly approaches and works closely with pediatric cardiologists to ensure comprehensive care for young patients."
    },
    {
      category: "Technology",
      question: "What advanced technologies are available?",
      answer: "Our facility features state-of-the-art technology including robotic surgery systems, advanced imaging (3D echocardiography, CT angiography), minimally invasive surgical techniques, artificial heart devices, and comprehensive cardiac catheterization labs."
    },
    {
      category: "Recovery",
      question: "What is the typical recovery time?",
      answer: "Recovery varies by procedure and patient health. Minimally invasive procedures typically require 3-5 days hospitalization with 2-4 weeks recovery. Traditional surgeries may need 7-10 days hospitalization. Dr. Moosa's beating heart technique often results in faster recovery compared to conventional methods."
    },
    {
      category: "Follow-up",
      question: "How do you handle post-surgery follow-up for international patients?",
      answer: "We provide comprehensive follow-up through telemedicine consultations, coordination with your local cardiologist, detailed discharge planning, and 24/7 access to our medical team for any concerns. Regular check-ins are scheduled based on your specific needs."
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Get answers to common questions about cardiac procedures, international patient services, and Dr. Moosa's expertise
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-blue focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-medical-blue text-white rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-medical-blue bg-medical-blue bg-opacity-10 px-2 py-1 rounded">
                      {faq.category}
                    </span>
                    <h3 className="font-semibold text-medical-blue-dark">
                      {faq.question}
                    </h3>
                  </div>
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-medical-blue flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-medical-blue flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="px-6 py-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No FAQs found matching your search. Try different keywords or contact us directly.
              </p>
            </div>
          )}
        </div>

        {/* Contact for More Questions */}
        <div className="text-center mt-12">
          <div className="bg-medical-blue text-white rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">
              Didn't Find Your Answer?
            </h3>
            <p className="mb-6 text-gray-200">
              Our patient coordinators are available 24/7 to answer your specific questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919061693446" 
                className="bg-white text-medical-blue px-6 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Call: +91-9061693446
              </a>
              <a 
                href="mailto:doctormoosa@yahoo.com" 
                className="bg-medical-teal hover:bg-medical-teal-dark text-white px-6 py-3 rounded-sm font-medium transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
