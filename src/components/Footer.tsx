
import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-medical-blue-dark text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 md:mb-12">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 flex items-center gap-2">
              <Heart className="text-medical-gold" size={18} />
              Dr. M.K. Moosa Kunhi
            </h3>
            <p className="mb-4 md:mb-6 text-gray-300 text-sm md:text-base">
              A globally renowned cardiac surgeon with over 35 years of experience and 15,000+ successful surgeries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-medical-gold transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white hover:text-medical-gold transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white hover:text-medical-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white hover:text-medical-gold transition-colors" aria-label="YouTube">
                <Youtube size={18} />
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

          <div className="lg:col-span-2">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-medical-gold text-sm md:text-base mb-2">Primary Center</h4>
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
                  <li className="flex items-start gap-2">
                    <span className="text-transparent flex-shrink-0">
                      <Phone size={18} />
                    </span>
                    <span className="text-gray-300 text-sm md:text-base">
                      Hospital: +91-44-61116111<br />
                      +91-44-40504050
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail size={18} className="text-medical-gold flex-shrink-0" />
                    <a href="mailto:doctormoosa@yahoo.com" className="text-gray-300 hover:text-medical-gold transition-colors text-sm md:text-base overflow-hidden text-ellipsis">
                      doctormoosa@yahoo.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-transparent flex-shrink-0">
                      <Mail size={18} />
                    </span>
                    <a href="mailto:krr@kauveryhospital.com" className="text-gray-300 hover:text-medical-gold transition-colors text-sm md:text-base overflow-hidden text-ellipsis">
                      krr@kauveryhospital.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-medical-gold text-sm md:text-base mb-2">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services#bypass" className="text-gray-300 hover:text-medical-gold transition-colors text-sm md:text-base">
                      Beating Heart Bypass Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/services#valve" className="text-gray-300 hover:text-medical-gold transition-colors text-sm md:text-base">
                      Valve Replacement & Repair
                    </Link>
                  </li>
                  <li>
                    <Link to="/services#pediatric" className="text-gray-300 hover:text-medical-gold transition-colors text-sm md:text-base">
                      Pediatric Heart Surgery
                    </Link>
                  </li>
                  <li>
                    <Link to="/services#minimally-invasive" className="text-gray-300 hover:text-medical-gold transition-colors text-sm md:text-base">
                      Minimally Invasive Surgery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-400">
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
