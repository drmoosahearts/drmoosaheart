
import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Play, Award, Users, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const ModernHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: 25, suffix: '+', label: 'Years Experience', icon: <Clock className="h-6 w-6" /> },
    { number: 16000, suffix: '+', label: 'Successful Surgeries', icon: <Heart className="h-6 w-6" /> },
    { number: 99.7, suffix: '%', label: 'Success Rate', icon: <Award className="h-6 w-6" /> },
    { number: 50, suffix: '+', label: 'Countries Served', icon: <Users className="h-6 w-6" /> }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-coral-500/20 text-coral-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Heart className="h-4 w-4" />
                World-Class Cardiac Surgeon
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Expert Heart Care
                <span className="block text-coral-400">You Can Trust</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Dr. M.K. Moosa Kunhi - Pioneer of beating heart surgery in India with over 16,000+ successful procedures and patients from 50+ countries.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-coral-500/25"
              >
                <Calendar className="h-6 w-6" />
                Book Consultation
              </motion.button>
              
              <motion.a
                href="tel:+919061693446"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300"
              >
                <Phone className="h-6 w-6" />
                Emergency: +91-9061693446
              </motion.a>
            </div>

            {/* Live Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-coral-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold">
                    {isVisible && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/05d7320c-e4e0-491d-9894-1d69ac45d77f.png"
                alt="Dr. M.K. Moosa Kunhi"
                className="w-full h-auto"
              />
              
              {/* Overlay with credentials */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-1">Dr. M.K. Moosa Kunhi</h3>
                <p className="text-gray-300 text-sm">Senior Consultant Cardiovascular Surgeon</p>
                <p className="text-coral-400 text-sm">Board Certified • Pioneer in Beating Heart Surgery</p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-coral-500 text-white p-4 rounded-full shadow-lg"
            >
              <Award className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
