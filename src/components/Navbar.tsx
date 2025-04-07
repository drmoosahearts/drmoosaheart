
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Heart } from "lucide-react";

interface NavLink {
  name: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Achievements", path: "/achievements" },
    { name: "International", path: "/international" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add body scroll lock when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white shadow-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-medical-blue rounded-full p-2 flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-medical-blue">
                Dr. M.K. Moosa Kunhi
                <span className="block text-xs md:text-sm font-normal text-medical-teal">Cardiac Surgery Specialist</span>
              </h1>
            </div>
          </Link>

          {/* Contact Info - Visible on medium screens and above */}
          <div className="hidden md:flex items-center mr-4 lg:mr-0">
            <a href="tel:+919061693446" className="flex items-center text-medical-blue hover:text-medical-teal transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              <div>
                <p className="text-sm font-semibold">+91-9061693446</p>
                <p className="text-xs">Book an appointment</p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-medical-teal ${
                  location.pathname === link.path
                    ? "text-medical-teal"
                    : "text-medical-blue-dark"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact#appointment"
              className="bg-medical-blue text-white hover:bg-medical-blue-dark transition-colors px-4 py-2 rounded-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-medical-blue-dark p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-20 flex flex-col h-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`py-4 text-xl font-medium border-b border-gray-100 ${
                location.pathname === link.path
                  ? "text-medical-teal"
                  : "text-medical-blue-dark"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact#appointment"
            className="btn-primary w-full text-center mt-6 py-4"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
          
          {/* Mobile contact info */}
          <div className="mt-6 flex items-center">
            <a href="tel:+919061693446" className="flex items-center text-medical-blue">
              <Phone className="mr-2 h-5 w-5" />
              <div>
                <p className="text-sm font-semibold">+91-9061693446</p>
                <p className="text-xs">Book an appointment</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
