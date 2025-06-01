
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Emergency Contact Bar */}
      <div className="bg-medical-blue text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Emergency: +91-9061693446</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span>International Patients Welcome</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>24/7 Emergency Cardiac Care</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="fixed top-8 left-0 w-full bg-white shadow-lg z-50 border-b">
        <nav className="container mx-auto flex justify-between items-center py-4 px-4">
          <Link to="/" className="text-xl md:text-2xl font-bold text-medical-blue">
            Dr. M.K. Moosa Kunhi
            <div className="text-xs text-gray-600 font-normal">Cardiac Surgeon</div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className={navigationMenuTriggerStyle()}>
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className={navigationMenuTriggerStyle()}>
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/services" className={navigationMenuTriggerStyle()}>
                    Services
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/congenital-heart-disease" className={navigationMenuTriggerStyle()}>
                    CHD
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/medical-tourism" className={navigationMenuTriggerStyle()}>
                    Medical Tourism
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/achievements" className={navigationMenuTriggerStyle()}>
                    Achievements
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className={navigationMenuTriggerStyle()}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/contact#appointment" 
              className="bg-medical-teal hover:bg-medical-teal-dark text-white px-6 py-2 rounded-sm transition-colors font-medium"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-medical-blue"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto py-4 px-4 space-y-2">
              <Link 
                to="/" 
                className="block py-2 text-medical-blue hover:bg-gray-50 rounded px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block py-2 text-medical-blue hover:bg-gray-50 rounded px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block py-2 text-medical-blue hover:bg-gray-50 rounded px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/congenital-heart-disease" 
                className="block py-2 text-medical-blue hover:bg-gray-50 rounded px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Congenital Heart Disease
              </Link>
              <Link 
                to="/medical-tourism" 
                className="block py-2 text-medical-blue hover:bg-gray-50 rounded px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Medical Tourism
              </Link>
              <Link 
                to="/achievements" 
                className="block py-2 text-medical-blue hover:bg-gray-50 rounded px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Achievements
              </Link>
              <Link 
                to="/contact" 
                className="block py-2 text-medical-blue hover:bg-gray-50 rounded px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t">
                <Link 
                  to="/contact#appointment" 
                  className="block bg-medical-teal hover:bg-medical-teal-dark text-white px-6 py-3 rounded-sm text-center font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
