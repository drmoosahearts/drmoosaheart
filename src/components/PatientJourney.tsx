
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  FileText, Users, Video, Plane, Stethoscope, 
  Heart, BedDouble, ArrowRight, Globe, DollarSign, 
  Hotel, User, ArrowUp
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

  const journeySteps = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "English-speaking Case Managers",
      description: "Our multilingual team ensures seamless communication throughout your journey",
      color: "bg-medical-blue"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Case-Document Collection",
      description: "Submit your medical reports online for assessment by Dr. Moosa's team",
      color: "bg-medical-teal"
    },
    {
      icon: <Video className="h-8 w-8 text-white" />,
      title: "Pre-Arrival Medical Consultation",
      description: "Virtual consultation with Dr. Moosa to discuss your condition and treatment plan",
      color: "bg-medical-blue"
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Visa Processing",
      description: "Our team assists with medical visa application and documentation",
      color: "bg-medical-teal"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Currency Exchange",
      description: "Guidance on payment options and currency conversion for your convenience",
      color: "bg-medical-blue"
    },
    {
      icon: <Plane className="h-8 w-8 text-white" />,
      title: "Airport Pickup",
      description: "Complimentary pickup from Chennai International Airport upon arrival",
      color: "bg-medical-teal"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Insurance Options",
      description: "Assistance with travel and medical insurance requirements",
      color: "bg-medical-blue"
    },
    {
      icon: <Hotel className="h-8 w-8 text-white" />,
      title: "Hotel Accommodation",
      description: "Comfortable stay arrangements near the hospital for you and your family",
      color: "bg-medical-teal"
    },
    {
      icon: <User className="h-8 w-8 text-white" />,
      title: "Faith-Based Facility",
      description: "Access to prayer spaces and religiously appropriate amenities",
      color: "bg-medical-blue"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-white" />,
      title: "Hospital Treatment",
      description: "World-class cardiac procedure with Dr. Moosa's expert surgical team",
      color: "bg-medical-teal"
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: "Pre and Post-Operation Consultation",
      description: "Comprehensive care before and after your procedure",
      color: "bg-medical-blue"
    },
    {
      icon: <Plane className="h-8 w-8 text-white" />,
      title: "Airport Drop-off",
      description: "Transportation back to the airport when you're ready to return home",
      color: "bg-medical-teal"
    },
    {
      icon: <Video className="h-8 w-8 text-white" />,
      title: "Post-Departure Medical Consultation",
      description: "Regular online check-ins and continuing care after returning home",
      color: "bg-medical-blue"
    }
  ];

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto">
      <div className="hidden lg:block">
        {/* Desktop Version - Flow Chart Style */}
        <div className="relative">
          {/* Top Row */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {journeySteps.slice(0, 5).map((step, index) => (
              <motion.div
                key={`top-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeStep >= index ? 1 : 0.5,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }}
                className="flex flex-col items-center text-center"
              >
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-3`}>
                  {step.icon}
                </div>
                <h3 className="text-sm font-bold text-medical-blue-dark mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.description}</p>
                {index < 4 && (
                  <div className="absolute right-[-8px] top-8 transform translate-x-1/2">
                    <ArrowRight className="h-5 w-5 text-medical-blue" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Connecting Line Right to Left */}
          <div className="relative h-12 mx-8">
            <div className="absolute right-0 w-[calc(100%-60px)] h-0.5 bg-medical-blue"></div>
            <div className="absolute right-0 h-12 w-0.5 bg-medical-blue"></div>
            <div className="absolute left-0 top-12 h-0.5 w-0.5 bg-medical-blue"></div>
            <div className="absolute left-0 h-12 w-0.5 bg-medical-blue"></div>
          </div>
          
          {/* Middle Row (Right to Left) */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {journeySteps.slice(5, 9).reverse().map((step, index) => (
              <motion.div
                key={`middle-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeStep >= index + 5 ? 1 : 0.5,
                  y: 0,
                  transition: { duration: 0.5, delay: (index + 5) * 0.1 }
                }}
                className="flex flex-col items-center text-center"
              >
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-3`}>
                  {step.icon}
                </div>
                <h3 className="text-sm font-bold text-medical-blue-dark mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="absolute left-[-8px] top-8 transform -translate-x-1/2">
                    <ArrowRight className="h-5 w-5 text-medical-blue rotate-180" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Connecting Line Left to Right */}
          <div className="relative h-12 mx-8">
            <div className="absolute left-0 w-[calc(100%-60px)] h-0.5 bg-medical-blue"></div>
            <div className="absolute left-0 h-12 w-0.5 bg-medical-blue"></div>
            <div className="absolute right-0 top-12 h-0.5 w-0.5 bg-medical-blue"></div>
            <div className="absolute right-0 h-12 w-0.5 bg-medical-blue"></div>
          </div>
          
          {/* Bottom Row */}
          <div className="grid grid-cols-4 gap-4">
            {journeySteps.slice(9).map((step, index) => (
              <motion.div
                key={`bottom-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeStep >= index + 9 ? 1 : 0.5,
                  y: 0,
                  transition: { duration: 0.5, delay: (index + 9) * 0.1 }
                }}
                className="flex flex-col items-center text-center"
              >
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-3`}>
                  {step.icon}
                </div>
                <h3 className="text-sm font-bold text-medical-blue-dark mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="absolute right-[-8px] top-8 transform translate-x-1/2">
                    <ArrowRight className="h-5 w-5 text-medical-blue" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile and Tablet Version - Simplified Vertical Flow */}
      <div className="lg:hidden">
        <div className="relative">
          <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: activeStep >= index ? 1 : 0.5,
                  x: 0,
                  transition: { duration: 0.5, delay: index * 0.1 }
                }}
                className="flex items-start ml-4"
              >
                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center mr-4 z-10 flex-shrink-0`}>
                  {React.cloneElement(step.icon as React.ReactElement, { className: "h-6 w-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-md font-bold text-medical-blue-dark mb-1">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="absolute left-8 transform translate-y-[56px]">
                    <ArrowUp className="h-5 w-5 text-gray-300 rotate-180" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientJourney;
