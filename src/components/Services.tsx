
import React from 'react';
import { Heart, Stethoscope, Users, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ModernCard from './ModernCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Heart,
      title: "Beating Heart Surgery",
      description: "Revolutionary cardiac surgery performed without stopping the heart, reducing complications and recovery time.",
      gradient: "from-coral-50 to-coral-100",
      features: ["No heart-lung machine", "Faster recovery", "Lower complications"]
    },
    {
      icon: Stethoscope,
      title: "Valve Replacement",
      description: "Advanced heart valve procedures using the latest minimally invasive techniques and premium valve options.",
      gradient: "from-medical-blue/10 to-medical-blue/20",
      features: ["Minimally invasive", "Long-lasting results", "Quick recovery"]
    },
    {
      icon: Users,
      title: "Congenital Heart Disease",
      description: "Specialized care for children and adults with congenital heart defects, from simple to complex cases.",
      gradient: "from-medical-teal/10 to-medical-teal/20",
      features: ["Pediatric expertise", "Family support", "Comprehensive care"]
    },
    {
      icon: Globe,
      title: "International Patients",
      description: "Complete medical tourism package with visa assistance, accommodation, and 24/7 patient coordination.",
      gradient: "from-medical-gold/20 to-medical-gold/30",
      features: ["Visa assistance", "Airport pickup", "24/7 support"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 25% 75%, rgba(0, 69, 124, 0.1) 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }} className="w-full h-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-100 to-coral-200 text-coral-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg"
          >
            <Heart className="h-4 w-4" />
            World-Class Cardiac Services
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent mb-6">
            Comprehensive Heart Care
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine procedures to complex cardiac surgeries, we provide 
            <span className="font-semibold text-coral-600"> world-class treatment</span> with 
            <span className="font-semibold text-coral-600"> personalized care</span> for every patient.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ModernCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                className="h-full"
              >
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-coral-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-coral-600 font-semibold text-sm group cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </ModernCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-medical-blue via-medical-blue-dark to-medical-blue text-white rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-coral-500/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-medical-teal/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need Expert Cardiac Care?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. M.K. Moosa Kunhi and experience world-class cardiac treatment
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-coral-500/25 transition-all duration-300"
                >
                  <Heart className="h-6 w-6" />
                  Book Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+919061693446"
                  className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300"
                >
                  Emergency: +91-9061693446
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
