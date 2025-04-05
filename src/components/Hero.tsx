
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Make sure we start fresh on component mount
    setAnimationStage(0);
    
    // Start heartbeat animation after a short delay
    const timer = setTimeout(() => {
      console.log("Starting heartbeat animation");
      setAnimationStage(1); // Start heartbeat animation
    }, 500);
    
    // Clean up timer
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative bg-medical-gray pt-24 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        {/* Heartbeat Animation */}
        <div className="w-full h-20 md:h-24 mb-6 md:mb-8 overflow-hidden">
          <svg 
            ref={svgRef}
            className="w-full h-full" 
            viewBox="0 0 1000 100" 
            preserveAspectRatio="none"
          >
            {/* Baseline */}
            <line 
              x1="0" 
              y1="50" 
              x2="1000" 
              y2="50" 
              stroke="#e1e7f0" 
              strokeWidth="2"
            />
            
            {/* Animated heartbeat line */}
            {animationStage > 0 && (
              <path
                ref={pathRef}
                d="M0,50 L200,50 L220,50 L240,20 L260,80 L280,50 L300,50 L1000,50"
                fill="none"
                stroke="#0A4DA2"
                strokeWidth="3"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                className="animate-heartbeat"
              />
            )}
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-medical-blue-dark leading-tight mb-4 md:mb-6">
              Pioneering Cardiac Surgery, Transforming Lives
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-700">
              Dr. M.K. Moosa Kunhi - A globally renowned heart surgeon with over 35 years of experience.
            </p>
            <div className="flex flex-col md:flex-row items-center mb-6 md:mb-8 bg-white p-3 md:p-4 rounded-lg shadow-sm border border-medical-gray-dark">
              <div className="text-medical-blue-dark font-semibold text-lg mb-2 md:mb-0">
                <span className="font-bold text-medical-teal text-xl md:text-2xl">16,000+</span> Successful Heart Surgeries
              </div>
              <div className="hidden md:block w-px h-10 bg-gray-300 mx-4"></div>
              <div className="text-medical-blue-dark font-semibold text-lg">
                <span className="font-bold text-medical-teal text-xl md:text-2xl">99.7%</span> Success Rate
              </div>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              <Link to="/contact#appointment" className="btn-primary flex items-center gap-2 text-sm md:text-base w-full md:w-auto justify-center">
                Book an Appointment <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-outline flex items-center gap-2 text-sm md:text-base w-full md:w-auto justify-center mt-3 md:mt-0">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-slide-up order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/lovable-uploads/3ae0be19-9973-4994-87d1-3c3287e74b01.png" 
                  alt="Dr. M.K. Moosa Kunhi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 md:p-4 rounded-lg shadow-lg max-w-[200px] md:max-w-none">
                <p className="text-medical-blue-dark font-bold text-xs md:text-sm">First Indian Heart Surgeon Trained in Modern Artificial Heart Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
