
import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Award, Users, Heart, Clock, ArrowRight } from 'lucide-react';
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

  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    duration: 3 + i * 0.5,
    size: 20 + i * 10,
    x: 10 + i * 15,
    y: 10 + i * 12
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Floating Medical Icons */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute opacity-10"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: element.size,
              height: element.size
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-full h-full text-coral-300" />
          </motion.div>
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-coral-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-medical-blue/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Enhanced Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-coral-500/20 to-coral-600/20 backdrop-blur-md text-coral-300 px-6 py-3 rounded-full text-sm font-medium border border-coral-400/30 shadow-lg"
              >
                <div className="w-2 h-2 bg-coral-400 rounded-full animate-pulse"></div>
                World-Class Cardiac Surgeon
                <ArrowRight className="h-4 w-4" />
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Expert Heart Care
                </span>
                <span className="block bg-gradient-to-r from-coral-400 via-coral-500 to-coral-600 bg-clip-text text-transparent mt-2">
                  You Can Trust
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light">
                Dr. M.K. Moosa Kunhi - Pioneer of beating heart surgery in India with over 
                <span className="font-semibold text-coral-300"> 16,000+ successful procedures</span> and 
                patients from <span className="font-semibold text-coral-300">50+ countries</span>.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/contact#appointment"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-coral-500/25 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="h-6 w-6 relative z-10" />
                <span className="relative z-10">Book Consultation</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="tel:+919061693446"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/30 hover:border-white backdrop-blur-md text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Phone className="h-6 w-6 relative z-10" />
                <span className="relative z-10">Emergency: +91-9061693446</span>
              </motion.a>
            </div>

            {/* Enhanced Statistics with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="flex justify-center mb-3 text-coral-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {isVisible && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="/lovable-uploads/05d7320c-e4e0-491d-9894-1d69ac45d77f.png"
                alt="Dr. M.K. Moosa Kunhi"
                className="w-full h-auto"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* Enhanced overlay with credentials */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 z-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <h3 className="text-white text-2xl font-bold mb-2">Dr. M.K. Moosa Kunhi</h3>
                  <p className="text-gray-200 text-base mb-1">Senior Consultant Cardiovascular Surgeon</p>
                  <p className="text-coral-400 text-sm font-medium">Board Certified • Pioneer in Beating Heart Surgery</p>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{ 
                y: [-15, 15, -15],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-coral-500 to-coral-600 text-white p-6 rounded-2xl shadow-2xl"
            >
              <Award className="h-10 w-10" />
            </motion.div>

            <motion.div
              animate={{ 
                y: [15, -15, 15],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-br from-medical-blue to-medical-blue-dark text-white p-4 rounded-xl shadow-xl"
            >
              <Heart className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-1 h-8 bg-gradient-to-b from-coral-400 to-transparent rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ModernHero;
