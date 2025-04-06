
import { Link } from "react-router-dom";
import { PhoneCall, Calendar, Globe } from "lucide-react";

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
          
          {/* International Relations & Inquiries */}
          <div className="bg-medical-blue-dark p-6 rounded-lg mt-8">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={24} className="text-medical-gold" />
              <h3 className="text-xl font-bold">International Relations & Inquiries</h3>
            </div>
            <p className="mb-4">
              For all inquiries originating from outside India, including prospective patients, 
              international referrers, potential partners, or collaboration requests, please contact:
            </p>
            <div className="bg-medical-blue-light p-4 rounded-lg">
              <p className="font-bold mb-1">Dr. PT Abdul Rahman</p>
              <p className="mb-1">Website: <a href="http://www.ptabdulrahman.com" target="_blank" rel="noopener noreferrer" className="text-medical-gold hover:underline">www.ptabdulrahman.com</a></p>
              <p className="mb-1">
                Email: <a href="mailto:6505422@gmail.com" className="text-medical-gold hover:underline">6505422@gmail.com</a>; 
                <a href="mailto:mail@ptabdulrahman.com" className="text-medical-gold hover:underline ml-1">mail@ptabdulrahman.com</a>
              </p>
              <p className="mb-1">Phone: <a href="tel:+971506505422" className="text-medical-gold hover:underline">+971506505422</a></p>
              <p className="mb-3">Please specify the nature of your inquiry in your communication.</p>
              <p>Office Hours: Monday - Saturday, 9:00 AM - 5:00 PM UAE Time (GMT+4)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
