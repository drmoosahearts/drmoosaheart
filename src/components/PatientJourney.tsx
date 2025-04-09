
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  FileText, Video, Plane, Stethoscope, 
  Heart, BedDouble, ArrowRight
} from 'lucide-react';

interface PatientJourneyProps {
  activeStep?: number;
}

const PatientJourney: React.FC<PatientJourneyProps> = ({ activeStep = 0 }) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Initial Contact",
      description: "Submit your medical reports online for assessment by Dr. Moosa's team",
      color: "bg-medical-blue"
    },
    {
      icon: <Video className="h-8 w-8 text-white" />,
      title: "Virtual Consultation",
      description: "Speak directly with Dr. Moosa about your condition and treatment options",
      color: "bg-medical-teal"
    },
    {
      icon: <Plane className="h-8 w-8 text-white" />,
      title: "Travel Planning",
      description: "Our team assists with medical visa, flight arrangements, and accommodation",
      color: "bg-medical-blue"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Medical Assessment",
      description: "Comprehensive diagnostics and fitness tests on arrival in Chennai",
      color: "bg-medical-teal"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Surgery by Dr. Moosa",
      description: "World-class cardiac procedure with Dr. Moosa's expert surgical team",
      color: "bg-medical-blue"
    },
    {
      icon: <BedDouble className="h-8 w-8 text-white" />,
      title: "Post-Op Recovery",
      description: "Dedicated rehabilitation, counseling, and monitoring for optimal recovery",
      color: "bg-medical-teal"
    },
    {
      icon: <Plane className="h-8 w-8 text-white" />,
      title: "Return & Follow-Up",
      description: "Regular online check-ins and continuing care after returning home",
      color: "bg-medical-blue"
    }
  ];

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto">
      {/* Journey Line */}
      <div className="absolute left-4 top-10 bottom-10 w-0.5 bg-gray-200 hidden md:block"></div>
      
      <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-7 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: activeStep >= index ? 1 : 0.5,
              y: 0,
              transition: { 
                duration: 0.5,
                delay: index * 0.1
              }
            }}
            className={`relative ${activeStep >= index ? "z-10" : "z-0"}`}
          >
            <div className="md:col-span-1 flex md:block">
              <div className={`flex-shrink-0 h-16 w-16 rounded-full ${step.color} flex items-center justify-center shadow-lg relative md:ml-0 z-10 transition-all duration-300 ${activeStep >= index ? "scale-100" : "scale-90 opacity-70"}`}>
                {step.icon}
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block">
                  <ArrowRight className={`h-5 w-5 text-gray-400 ${index === steps.length - 1 ? "hidden" : ""}`} />
                </div>
              </div>
              <div className="ml-4 md:ml-0 md:mt-3">
                <h3 className={`text-lg font-bold ${activeStep >= index ? "text-medical-blue-dark" : "text-gray-500"} transition-colors duration-300`}>
                  {index + 1}. {step.title}
                </h3>
                <p className={`mt-1 text-sm ${activeStep >= index ? "text-gray-700" : "text-gray-400"} transition-colors duration-300`}>
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile view - Arrow connections */}
      <div className="block md:hidden space-y-1">
        {steps.map((step, index) => (
          index < steps.length - 1 && (
            <div key={`arrow-${index}`} className="flex justify-center my-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default PatientJourney;
