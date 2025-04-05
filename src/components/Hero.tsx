
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [revealText, setRevealText] = useState("");
  const fullName = "DR MOOSA";
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    // Make sure we start fresh on component mount
    setAnimationStage(0);
    setRevealText("");
    
    // Initial delay before starting animation
    const timer1 = setTimeout(() => {
      console.log("Starting heartbeat animation");
      setAnimationStage(1); // Start heartbeat animation
    }, 500);
    
    // Transition to text reveal animation
    const timer2 = setTimeout(() => {
      console.log("Starting text reveal");
      setAnimationStage(2); // Start text reveal
    }, 3000);
    
    // Clean up timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);
  
  // Handle text reveal animation
  useEffect(() => {
    if (animationStage !== 2) return;
    
    let currentIndex = 0;
    const textRevealInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setRevealText(fullName.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(textRevealInterval);
      }
    }, 150);
    
    return () => {
      clearInterval(textRevealInterval);
    };
  }, [animationStage]);

  return (
    <section className="relative bg-medical-gray pt-24 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Heartbeat Animation */}
        <div className="w-full h-24 mb-8 overflow-hidden">
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
            
            {/* Animated heartbeat or text reveal line */}
            {animationStage > 0 && (
              <path
                ref={pathRef}
                d={animationStage === 1 
                  ? "M0,50 L200,50 L220,50 L240,20 L260,80 L280,50 L300,50 L1000,50" 
                  : "M0,50 L1000,50"}
                fill="none"
                stroke="#0A4DA2"
                strokeWidth="3"
                strokeDasharray={animationStage === 1 ? "1000" : "0"}
                strokeDashoffset={animationStage === 1 ? "1000" : "0"}
                className={animationStage === 1 
                  ? "animate-heartbeat" 
                  : "transition-all duration-500"}
              />
            )}
            
            {/* Text reveal */}
            {animationStage === 2 && (
              <text 
                x="240" 
                y="45" 
                fill="#0A4DA2" 
                fontSize="32" 
                fontWeight="bold" 
                fontFamily="Playfair Display"
              >
                {revealText}
              </text>
            )}
          </svg>
        </div>

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
                <img 
                  src="/lovable-uploads/3ae0be19-9973-4994-87d1-3c3287e74b01.png" 
                  alt="Dr. M.K. Moosa Kunhi" 
                  className="w-full h-full object-cover"
                />
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
