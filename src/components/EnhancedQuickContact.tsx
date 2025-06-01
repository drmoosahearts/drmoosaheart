
import React, { useState } from 'react';
import { Phone, MessageCircle, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedQuickContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

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
      {/* Enhanced Floating Action Buttons - Desktop Only */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col gap-3"
        >
          {/* WhatsApp */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 relative group"
            title="WhatsApp Consultation"
          >
            <MessageCircle className="h-6 w-6" />
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              WhatsApp Chat
            </div>
          </motion.button>

          {/* Emergency Call */}
          <motion.button
            onClick={handleQuickCall}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-coral-500 hover:bg-coral-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 relative group animate-pulse"
            title="Emergency Call"
          >
            <Phone className="h-6 w-6" />
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Emergency Call
            </div>
          </motion.button>

          {/* Book Appointment */}
          <motion.button
            onClick={handleAppointment}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-slate-800 hover:bg-slate-900 text-white p-4 rounded-full shadow-xl transition-all duration-300 relative group"
            title="Book Appointment"
          >
            <Calendar className="h-6 w-6" />
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Book Appointment
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Bottom Contact Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur-sm border-t border-gray-200 shadow-2xl z-40 md:hidden">
        <div className="safe-area-inset-bottom">
          <div className="grid grid-cols-3 gap-1 p-3">
            <button
              onClick={handleQuickCall}
              className="flex flex-col items-center gap-2 p-3 text-coral-600 hover:bg-coral-50 rounded-xl transition-all duration-300 min-h-[64px] active:scale-95"
            >
              <Phone className="h-6 w-6" />
              <span className="text-xs font-medium">Emergency</span>
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="flex flex-col items-center gap-2 p-3 text-green-600 hover:bg-green-50 rounded-xl transition-all duration-300 min-h-[64px] active:scale-95"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="text-xs font-medium">WhatsApp</span>
            </button>
            
            <button
              onClick={handleAppointment}
              className="flex flex-col items-center gap-2 p-3 text-slate-800 hover:bg-slate-50 rounded-xl transition-all duration-300 min-h-[64px] active:scale-95"
            >
              <Calendar className="h-6 w-6" />
              <span className="text-xs font-medium">Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Emergency Banner */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-0 right-0 bg-gradient-to-r from-coral-600 to-coral-500 text-white z-40 shadow-lg"
          >
            <div className="container mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="animate-pulse">
                  <Phone className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-semibold text-xs md:text-base">
                    Cardiac Emergency?
                  </span>
                  <a 
                    href="tel:+919061693446" 
                    className="md:ml-2 font-bold underline hover:no-underline text-xs md:text-base"
                  >
                    Call: +91-9061693446
                  </a>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-coral-700 rounded-full transition-colors"
              >
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedQuickContact;
