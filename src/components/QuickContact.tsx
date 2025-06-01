
import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleQuickCall = () => {
    window.open('tel:+919061693446', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919061693446?text=Hi, I would like to inquire about cardiac consultation with Dr. Moosa Kunhi', '_blank');
  };

  const handleAppointment = () => {
    window.location.href = '/contact#appointment';
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Quick Contact Options */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col gap-2"
        >
          {/* WhatsApp */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
            title="WhatsApp Consultation"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>

          {/* Emergency Call */}
          <motion.button
            onClick={handleQuickCall}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors"
            title="Emergency Call"
          >
            <Phone className="h-6 w-6" />
          </motion.button>

          {/* Book Appointment */}
          <motion.button
            onClick={handleAppointment}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-medical-blue hover:bg-medical-blue-dark text-white p-3 rounded-full shadow-lg transition-colors"
            title="Book Appointment"
          >
            <Calendar className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Contact Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40 md:hidden">
        <div className="grid grid-cols-3 gap-1 p-2">
          <button
            onClick={handleQuickCall}
            className="flex flex-col items-center gap-1 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs font-medium">Emergency</span>
          </button>
          
          <button
            onClick={handleWhatsApp}
            className="flex flex-col items-center gap-1 p-3 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs font-medium">WhatsApp</span>
          </button>
          
          <button
            onClick={handleAppointment}
            className="flex flex-col items-center gap-1 p-3 text-medical-blue hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-xs font-medium">Appointment</span>
          </button>
        </div>
      </div>

      {/* Emergency Banner (Conditional) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 bg-red-600 text-white z-40"
          >
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Cardiac Emergency? Call immediately: +91-9061693446
                </span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-red-700 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default QuickContact;
