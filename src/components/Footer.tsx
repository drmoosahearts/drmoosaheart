
import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-medical-blue-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Heart className="text-medical-gold" size={20} />
              Dr. M.K. Moosa Kunhi
            </h3>
            <p className="mb-6 text-gray-300">
              A globally renowned cardiac surgeon with over 35 years of experience and 15,000+ successful surgeries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-medical-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-medical-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-medical-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-medical-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
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
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#bypass" className="text-gray-300 hover:text-medical-gold transition-colors">
                  Beating Heart Bypass Surgery
                </Link>
              </li>
              <li>
                <Link to="/services#valve" className="text-gray-300 hover:text-medical-gold transition-colors">
                  Valve Replacement & Repair
                </Link>
              </li>
              <li>
                <Link to="/services#pediatric" className="text-gray-300 hover:text-medical-gold transition-colors">
                  Pediatric Heart Surgery
                </Link>
              </li>
              <li>
                <Link to="/services#minimally-invasive" className="text-gray-300 hover:text-medical-gold transition-colors">
                  Minimally Invasive Surgery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-medical-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Lakeshore Hospital & Research Centre, Kochi - 682040, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-medical-gold flex-shrink-0" />
                <a href="tel:+919847142064" className="text-gray-300 hover:text-medical-gold transition-colors">
                  +91-9847142064
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-medical-gold flex-shrink-0" />
                <a href="mailto:moosamk@sify.com" className="text-gray-300 hover:text-medical-gold transition-colors">
                  moosamk@sify.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {currentYear} Dr. M.K. Moosa Kunhi. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Pioneer of Beating Heart Bypass Surgery in India | Senior Consultant Cardiac Surgeon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
