
import { Link } from "react-router-dom";
import { PhoneCall, Calendar, Globe, ExternalLink, Mail, Phone, Heart, ArrowRight, Sparkles } from "lucide-react";
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-medical-blue to-slate-800 text-white relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-coral-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-medical-teal/20 rounded-full blur-xl"
        />
        
        {/* Floating Medical Icons */}
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-8 h-8 text-coral-300" />
          </motion.div>
        ))}

        {/* Gradient Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div style={{
            backgroundImage: 'radial-gradient(circle at 25% 75%, rgba(255, 107, 107, 0.2) 2px, transparent 2px)',
            backgroundSize: '50px 50px'
          }} className="w-full h-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main CTA Section - Asymmetrical positioning */}
          <motion.div 
            className="lg:col-span-7 lg:col-start-1 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500/20 to-coral-600/20 backdrop-blur-md text-coral-300 px-6 py-3 rounded-full text-sm font-medium border border-coral-400/30 shadow-lg mb-6"
              >
                <Sparkles className="h-4 w-4" />
                Ready to Get Started?
                <ArrowRight className="h-4 w-4" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Schedule Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-coral-400 via-coral-500 to-coral-600 bg-clip-text text-transparent">
                  Expert Consultation
                </span>
              </h2>
              
              <div className="w-32 h-1.5 bg-gradient-to-r from-coral-500 to-coral-600 rounded-full mb-8"></div>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light mb-8">
                Take the first step towards expert cardiac care with 
                <span className="font-semibold text-coral-300"> Dr. M.K. Moosa Kunhi</span>.
                Join thousands of patients who have trusted their hearts to our care.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a 
                  href="tel:+919061693446"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-coral-500/25 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <PhoneCall className="h-6 w-6 relative z-10" />
                  <span className="relative z-10">Call Now</span>
                </motion.a>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact#appointment" 
                    className="group border-2 border-white/30 hover:border-white backdrop-blur-md text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Calendar className="h-6 w-6 relative z-10" />
                    <span className="relative z-10">Book Appointment</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats Section - Asymmetrical positioning */}
          <motion.div 
            className="lg:col-span-4 lg:col-start-9 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { number: "35+", label: "Years Experience", icon: <Heart className="h-6 w-6" /> },
              { number: "16,000+", label: "Successful Surgeries", icon: <Calendar className="h-6 w-6" /> },
              { number: "50+", label: "Countries Served", icon: <Globe className="h-6 w-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-coral-400 group-hover:text-coral-300 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* International Relations Section with modern asymmetrical layout */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Icon Section */}
            <div className="lg:col-span-1 flex justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-medical-gold/20 to-coral-500/20 rounded-full blur opacity-60"></div>
                <div className="relative bg-gradient-to-r from-medical-gold to-medical-gold-dark p-6 rounded-2xl">
                  <Globe className="h-12 w-12 text-white" />
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-4 bg-gradient-to-r from-medical-blue-dark/80 to-medical-blue/60 backdrop-blur-md p-8 lg:p-12 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} className="w-full h-full"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-medical-gold to-medical-gold-dark bg-clip-text text-transparent">
                  International Relations & Inquiries
                </h3>
                <p className="mb-8 text-gray-200 text-lg leading-relaxed">
                  For all inquiries originating from outside India, including prospective patients, 
                  international referrers, potential partners, or collaboration requests, please contact:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-2xl text-medical-gold">Dr. PT Abdul Rahman</h4>
                    <div className="space-y-3">
                      {[
                        { icon: <ExternalLink className="h-5 w-5" />, content: "www.ptabdulrahman.com", href: "http://www.ptabdulrahman.com", type: "link" },
                        { icon: <Mail className="h-5 w-5" />, content: "6505422@gmail.com", href: "mailto:6505422@gmail.com", type: "email" },
                        { icon: <Phone className="h-5 w-5" />, content: "+971506505422", href: "tel:+971506505422", type: "phone" }
                      ].map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          target={item.type === 'link' ? '_blank' : undefined}
                          rel={item.type === 'link' ? 'noopener noreferrer' : undefined}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-white hover:text-medical-gold transition-colors duration-300 group"
                        >
                          <div className="text-medical-gold group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <span className="group-hover:underline">{item.content}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-200">
                      Please specify the nature of your inquiry in your communication.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                      <h5 className="font-semibold mb-3 text-medical-gold text-lg">Office Hours:</h5>
                      <p className="text-white leading-relaxed">
                        Monday - Saturday<br />
                        9:00 AM - 5:00 PM UAE Time (GMT+4)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
