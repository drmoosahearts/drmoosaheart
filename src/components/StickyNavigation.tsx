
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar, Menu, X, ChevronDown, Globe, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const StickyNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/', hasDropdown: false },
    { 
      name: 'About', 
      path: '/about', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Dr. Moosa Kunhi', path: '/about' },
        { name: 'Achievements', path: '/achievements' },
        { name: 'Media Coverage', path: '/media' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', path: '/services' },
        { name: 'Beating Heart Surgery', path: '/services/beating-heart' },
        { name: 'Valve Surgery', path: '/services/valve' },
        { name: 'Pediatric Cardiac', path: '/services/pediatric' },
        { name: 'Emergency Care', path: '/services/emergency' }
      ]
    },
    { 
      name: 'Conditions', 
      path: '/conditions', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Congenital Heart Disease', path: '/congenital-heart-disease' },
        { name: 'Valve Disorders', path: '/conditions/valve' },
        { name: 'Coronary Artery Disease', path: '/conditions/coronary' },
        { name: 'Arrhythmias', path: '/conditions/arrhythmias' }
      ]
    },
    { 
      name: 'International', 
      path: '/international', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Medical Tourism', path: '/medical-tourism' },
        { name: 'Country Services', path: '/international' },
        { name: 'Cost Calculator', path: '/cost-calculator' },
        { name: 'Travel Assistance', path: '/travel-assistance' }
      ]
    },
    { name: 'Contact', path: '/contact', hasDropdown: false }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-medical-blue to-medical-blue-dark rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-bold text-lg md:text-xl transition-colors ${
                  isScrolled ? 'text-medical-blue-dark' : 'text-white'
                }`}>
                  Dr. M.K. Moosa Kunhi
                </h1>
                <p className={`text-xs md:text-sm transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}>
                  Cardiac Surgeon
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 font-medium ${
                      isActivePath(item.path)
                        ? isScrolled 
                          ? 'text-medical-blue bg-medical-blue/10' 
                          : 'text-coral-300 bg-white/10'
                        : isScrolled
                          ? 'text-gray-700 hover:text-medical-blue hover:bg-gray-100'
                          : 'text-white hover:text-coral-300 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-medical-blue/5 hover:text-medical-blue transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Emergency Call Button */}
              <a
                href="tel:+919061693446"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isScrolled
                    ? 'bg-coral-500 text-white hover:bg-coral-600'
                    : 'bg-coral-500 text-white hover:bg-coral-600'
                } shadow-lg hover:shadow-xl`}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Emergency</span>
              </a>

              {/* Appointment Button */}
              <Link
                to="/contact#appointment"
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isScrolled
                    ? 'bg-medical-blue text-white hover:bg-medical-blue-dark'
                    : 'bg-medical-blue text-white hover:bg-medical-blue-dark'
                } shadow-lg hover:shadow-xl`}
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Book</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                          isActivePath(item.path)
                            ? 'text-medical-blue bg-medical-blue/10'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </Link>
                      {item.hasDropdown && item.dropdownItems && (
                        <div className="ml-4 space-y-1 mt-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-medical-blue hover:bg-medical-blue/5 rounded-lg transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Emergency Contact */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex gap-3">
                    <a
                      href="tel:+919061693446"
                      className="flex-1 flex items-center justify-center gap-2 bg-coral-500 text-white py-3 rounded-lg font-medium hover:bg-coral-600 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Emergency Call
                    </a>
                    <a
                      href="https://wa.me/919061693446"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                    >
                      <Globe className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
};

export default StickyNavigation;
