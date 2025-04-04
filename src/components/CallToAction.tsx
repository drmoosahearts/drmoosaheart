
import { Link } from "react-router-dom";
import { PhoneCall, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-cta-pattern text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Consultation?</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Take the first step towards expert cardiac care with Dr. M.K. Moosa Kunhi.
          Schedule your consultation today.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="tel:+919847142064" 
            className="bg-white text-medical-blue hover:bg-medical-gray transition-colors duration-300 py-3 px-6 rounded-md font-semibold inline-flex items-center justify-center gap-2"
          >
            <PhoneCall size={18} />
            Call Now
          </a>
          <Link 
            to="/contact#appointment" 
            className="bg-medical-gold hover:bg-medical-gold-dark transition-colors duration-300 text-medical-blue-dark py-3 px-6 rounded-md font-semibold inline-flex items-center justify-center gap-2"
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
