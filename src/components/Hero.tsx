
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-medical-gray pt-24 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-medical-blue-dark leading-tight mb-6">
              Pioneering Cardiac Surgery, Transforming Lives
            </h1>
            <p className="text-xl mb-4 text-gray-700">
              Dr. M.K. Moosa Kunhi - A globally renowned heart surgeon with over 35 years of experience.
            </p>
            <div className="flex items-center mb-8 bg-white p-4 rounded-lg shadow-sm border border-medical-gray-dark">
              <div className="text-medical-blue-dark font-semibold text-lg">
                <span className="font-bold text-medical-teal text-2xl">16,000+</span> Successful Heart Surgeries
              </div>
              <div className="w-px h-10 bg-gray-300 mx-4"></div>
              <div className="text-medical-blue-dark font-semibold text-lg">
                <span className="font-bold text-medical-teal text-2xl">99.7%</span> Success Rate
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact#appointment" className="btn-primary flex items-center gap-2">
                Book an Appointment <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-outline flex items-center gap-2">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
                {/* Placeholder for doctor image */}
                <div className="w-full h-full bg-medical-blue-light flex items-center justify-center text-white text-center p-4">
                  <p className="text-lg">Dr. M.K. Moosa Kunhi's professional photo will appear here</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-medical-blue-dark font-bold">First Indian Heart Surgeon Trained in Modern Artificial Heart Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
