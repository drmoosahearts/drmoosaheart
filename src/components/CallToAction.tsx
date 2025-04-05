
import { Link } from "react-router-dom";
import { PhoneCall, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-12 bg-medical-blue text-white">
      <div className="container mx-auto px-4 text-center">
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
    </section>
  );
};

export default CallToAction;
