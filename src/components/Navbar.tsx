
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, Globe, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-2 h-2 bg-coral-400/20 rounded-full"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 right-20 w-3 h-3 bg-medical-blue/10 rounded-full"
        />
      </div>

      {/* Main Navigation with glassmorphism */}
      <motion.header 
        className={`fixed top-8 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-white/20' 
            : 'bg-white/90 backdrop-blur-md shadow-lg border-b'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="container mx-auto flex justify-between items-center py-3 md:py-4 px-4 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div style={{
              backgroundImage: 'radial-gradient(circle at 25% 75%, rgba(255, 107, 107, 0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} className="w-full h-full"></div>
          </div>

          {/* Logo with floating elements */}
          <Link to="/" className="relative z-10 group">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-coral-500/20 to-medical-blue/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Heart className="h-8 w-8 text-coral-500 relative z-10" />
              </motion.div>
              <div>
                <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-medical-blue to-medical-blue-dark bg-clip-text text-transparent">
                  Dr. M.K. Moosa Kunhi
                </div>
                <div className="text-xs text-gray-600 font-normal">Cardiac Surgeon</div>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation with modern styling */}
          <div className="hidden lg:block relative z-10">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/services", label: "Services" },
                  { to: "/congenital-heart-disease", label: "CHD" },
                  { to: "/medical-tourism", label: "Medical Tourism" },
                  { to: "/achievements", label: "Achievements" },
                  { to: "/contact", label: "Contact" }
                ].map((item, index) => (
                  <NavigationMenuItem key={item.to}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        to={item.to} 
                        className={`${navigationMenuTriggerStyle()} relative group overflow-hidden`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-coral-500/20 to-medical-blue/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </Link>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button with enhanced styling */}
          <div className="hidden md:flex items-center gap-4 relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact#appointment" 
                className="relative group bg-gradient-to-r from-medical-teal to-medical-teal-dark hover:from-coral-500 hover:to-coral-600 text-white px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm md:text-base shadow-lg hover:shadow-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Book Consultation</span>
              </Link>
            </motion.div>
          </div>

          {/* Modern Mobile Menu Button */}
          <motion.button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 relative z-10 group"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-coral-500/20 to-medical-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {isMobileMenuOpen ? 
                  <X className="h-6 w-6 text-medical-blue" /> : 
                  <Menu className="h-6 w-6 text-medical-blue" />
                }
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50 overflow-hidden"
            >
              <div className="container mx-auto py-6 px-4 space-y-1 relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div style={{
                    backgroundImage: 'radial-gradient(circle at 75% 25%, rgba(0, 69, 124, 0.3) 1px, transparent 1px)',
                    backgroundSize: '25px 25px'
                  }} className="w-full h-full"></div>
                </div>

                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/services", label: "Services" },
                  { to: "/congenital-heart-disease", label: "Congenital Heart Disease" },
                  { to: "/medical-tourism", label: "Medical Tourism" },
                  { to: "/achievements", label: "Achievements" },
                  { to: "/contact", label: "Contact" }
                ].map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.to}
                      className="block py-4 px-4 text-medical-blue hover:bg-gradient-to-r hover:from-coral-50 hover:to-medical-blue/5 rounded-xl transition-all duration-300 font-medium relative group overflow-hidden"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-coral-500 to-medical-blue scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="pt-6 border-t border-gray-200/50 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <Link 
                    to="/contact#appointment" 
                    className="block bg-gradient-to-r from-medical-teal to-medical-teal-dark hover:from-coral-500 hover:to-coral-600 text-white px-6 py-4 rounded-xl text-center font-semibold transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Book Consultation</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
