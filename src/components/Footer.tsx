
import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-medical-blue text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                <Heart className="h-6 w-6 text-medical-blue" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">
                Dr. M.K. Moosa Kunhi
              </h3>
            </div>
            <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
              A globally renowned cardiac surgeon with over 35 years of experience and 16,000+ successful surgeries.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+919061693446" className="text-white bg-medical-blue-dark hover:bg-medical-blue-light transition-colors px-4 py-2 rounded-sm text-sm flex items-center gap-2">
                <Phone size={16} />
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link to="/" className="text-gray-300 hover:text-medical-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-medical-gold transition-colors">
                  About Dr. Moosa
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-medical-gold transition-colors">
                  Cardiac Services
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-gray-300 hover:text-medical-gold transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-medical-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-medical-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-sm md:text-base">
                  KAUVERY HOSPITALS<br />
                  200feet Radial Road<br />
                  Kovilambakkam<br />
                  Pallavaram, CHENNAI<br />
                  TAMIL NADU, INDIA 600129
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-medical-gold flex-shrink-0" />
                <a href="tel:+919061693446" className="text-gray-300 hover:text-medical-gold transition-colors text-sm md:text-base">
                  +91-9061693446
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-medical-gold flex-shrink-0" />
                <a href="mailto:doctormoosa@yahoo.com" className="text-gray-300 hover:text-medical-gold transition-colors text-sm md:text-base overflow-hidden text-ellipsis">
                  doctormoosa@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2 mt-4 pt-4 border-t border-medical-blue-light">
                <Globe size={18} className="text-medical-gold flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  <span className="font-semibold block mb-1">International Relations:</span>
                  <span>Dr. PT Abdul Rahman</span>
                  <a href="http://www.ptabdulrahman.com" target="_blank" rel="noopener noreferrer" className="block text-medical-gold hover:underline">www.ptabdulrahman.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-medical-blue-light text-center text-gray-400">
          <p className="text-sm md:text-base">© {currentYear} Dr. M.K. Moosa Kunhi. All rights reserved.</p>
          <p className="mt-2 text-xs md:text-sm">
            Pioneer of Beating Heart Bypass Surgery in India | Senior Consultant Cardiac Surgeon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
