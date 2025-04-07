import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
const Hero: React.FC = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    // Make sure we start fresh on component mount
    setAnimationStage(0);

    // Start heartbeat animation after a short delay
    const timer = setTimeout(() => {
      setAnimationStage(1); // Start heartbeat animation
    }, 300); // Reduced from 500ms for better perceived performance

    // Clean up timer
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <section className="relative bg-medical-gray pt-16 md:pt-24 flex items-center">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-blue-dark leading-tight mb-3 md:mb-4">
              Expert Cardiac Care <span className="text-medical-teal">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl mb-4 md:mb-6 text-gray-700 max-w-lg">
              Dr. M.K. Moosa Kunhi is a globally renowned heart surgeon with over 35 years of experience and 16,000+ successful surgeries.
            </p>
            
            <div className="mb-6 bg-white p-4 rounded-md shadow-sm border border-gray-100 max-w-md">
              <div className="flex items-center mb-2">
                <div className="w-1 h-16 bg-medical-blue mr-4"></div>
                <div>
                  <div className="text-medical-blue-dark font-semibold text-lg">
                    <span className="font-bold text-medical-teal text-xl md:text-2xl">16,000+</span> Successful Surgeries
                  </div>
                  <div className="text-medical-blue-dark font-semibold text-lg">
                    <span className="font-bold text-medical-teal text-xl md:text-2xl">99.7%</span> Success Rate
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">First Indian Heart Surgeon Trained in Modern Artificial Heart Technology</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href="tel:+919061693446" className="bg-medical-blue hover:bg-medical-blue-dark text-white px-4 sm:px-6 py-3 rounded-sm flex items-center justify-center sm:justify-start gap-2 transition-colors tap-target touch-manipulation">
                <Phone size={18} />
                <span>+91-9061693446</span>
              </a>
              <Link to="/about" className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-4 sm:px-6 py-3 rounded-sm flex items-center justify-center sm:justify-start gap-2 transition-colors tap-target touch-manipulation">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-slide-up order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-sm overflow-hidden shadow-xl">
                <img alt="Dr. M.K. Moosa Kunhi" loading="eager" // Priority image for LCP
              fetchPriority="high" src="/lovable-uploads/05d7320c-e4e0-491d-9894-1d69ac45d77f.png" className="w-full h-full object-scale-down" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-medical-blue bg-opacity-90 p-3 text-white">
                <p className="text-center text-sm font-medium">Dr. M.K. Moosa Kunhi</p>
                <p className="text-center text-xs font-thin">Sr. Consultant Cardiovascular Surgeon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Heartbeat Animation - Adjusted height to eliminate white space */}
        <div className="w-full h-12 md:h-16 mt-8 mb-0 overflow-hidden">
          <svg ref={svgRef} className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            {/* Baseline */}
            <line x1="0" y1="50" x2="1000" y2="50" stroke="#e1e7f0" strokeWidth="2" />
            
            {/* Animated heartbeat line */}
            {animationStage > 0 && <path ref={pathRef} d="M0,50 L200,50 L220,50 L240,20 L260,80 L280,50 L300,50 L1000,50" fill="none" stroke="#00457c" strokeWidth="3" strokeDasharray="1000" strokeDashoffset="1000" className={`animate-heartbeat ${isMobile ? 'reduce-animation' : ''}`} />}
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;