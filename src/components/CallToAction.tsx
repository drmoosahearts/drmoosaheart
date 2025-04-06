
import { Link } from "react-router-dom";
import { PhoneCall, Calendar, Globe, ExternalLink } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-12 bg-medical-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Schedule Your Consultation?</h2>
            <div className="w-40 h-1 bg-medical-teal mx-auto mb-8"></div>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards expert cardiac care with Dr. M.K. Moosa Kunhi.
              Schedule your consultation today.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="tel:+919061693446" 
                className="bg-white text-medical-blue hover:bg-medical-gray transition-colors duration-300 py-3 px-6 rounded-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                <PhoneCall size={18} />
                Call Now
              </a>
              <Link 
                to="/contact#appointment" 
                className="bg-medical-teal hover:bg-medical-teal-dark transition-colors duration-300 text-white py-3 px-6 rounded-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                Book Appointment
              </Link>
            </div>
          </div>
          
          {/* International Relations & Inquiries - Prominently displayed */}
          <div className="bg-medical-blue-dark p-8 rounded-lg mt-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe size={28} className="text-medical-gold" />
              <h3 className="text-2xl font-bold">International Relations & Inquiries</h3>
            </div>
            <p className="mb-6 text-gray-200">
              For all inquiries originating from outside India, including prospective patients, 
              international referrers, potential partners, or collaboration requests, please contact:
            </p>
            <div className="bg-medical-blue-light p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-xl mb-3 text-medical-gold">Dr. PT Abdul Rahman</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <ExternalLink size={16} className="text-medical-gold flex-shrink-0" />
                      <a 
                        href="http://www.ptabdulrahman.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-medical-gold hover:underline transition-colors"
                      >
                        www.ptabdulrahman.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <Mail size={16} className="text-medical-gold flex-shrink-0" />
                      <div>
                        <a 
                          href="mailto:6505422@gmail.com" 
                          className="text-white hover:text-medical-gold hover:underline transition-colors"
                        >
                          6505422@gmail.com
                        </a>
                        <span className="mx-1">;</span>
                        <a 
                          href="mailto:mail@ptabdulrahman.com" 
                          className="text-white hover:text-medical-gold hover:underline transition-colors"
                        >
                          mail@ptabdulrahman.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-2">
                      <Phone size={16} className="text-medical-gold flex-shrink-0" />
                      <a 
                        href="tel:+971506505422" 
                        className="text-white hover:text-medical-gold hover:underline transition-colors"
                      >
                        +971506505422
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-200 mb-4">
                    Please specify the nature of your inquiry in your communication.
                  </p>
                  <div className="bg-medical-blue bg-opacity-50 p-4 rounded-lg">
                    <h5 className="font-semibold mb-2 text-medical-gold">Office Hours:</h5>
                    <p className="text-white">
                      Monday - Saturday<br />
                      9:00 AM - 5:00 PM UAE Time (GMT+4)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
