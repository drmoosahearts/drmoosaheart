
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FileText, Users, Video, Plane, Stethoscope, Heart, 
  BedDouble, ArrowRight, Globe, Phone, Mail, MapPin,
  Clock, Languages, DollarSign, Calendar, Shield, Award, 
  HeartPulse, User, Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PatientJourney from "@/components/PatientJourney";
import ContactForm from "@/components/ContactForm";

const MedicalTourismPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<number>(0);
  
  // Set SEO meta tags
  useEffect(() => {
    document.title = "10 Reasons Why International Patients Trust India for Medical Tourism | Dr. M.K. Moosa Kunhi";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Discover why patients from around the world choose Dr. M.K. Moosa Kunhi in India for affordable, world-class cardiac surgery with comprehensive support services.");
    }
  }, []);

  // Monitor scroll for animations
  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 10 reasons data with numbered format
  const reasons = [
    {
      title: "Unrivalled Expertise & Experience",
      description: "Over 16,000 successful heart surgeries including beating-heart bypass, valve repairs, congenital heart corrections, and transplants.",
      icon: <Award className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Internationally Trained & Recognized",
      description: "Dr. Moosa trained in Germany for L-VAD and Heart Transplant, bringing global standards of excellence to cardiac care in India.",
      icon: <Globe className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Modern Facilities in Chennai",
      description: "All treatments are conducted at Kauvery Hospital, a world-class facility known for its cardiac excellence and advanced technology.",
      icon: <Building className="w-6 h-6 text-medical-teal" />
    },
    {
      title: "Global Patient Network",
      description: "Patients from Europe, Africa, Asia, and the Middle East regularly seek care from Dr. Moosa with exceptional satisfaction rates.",
      icon: <Users className="w-6 h-6 text-medical-teal" />
    },
    {
      title: "Transparent, Cost-Effective Treatment",
      description: "Heart surgery in India can cost up to 70-80% less than in Western countries and 50-60% less than in other Asian medical hubs, without compromising quality or care standards.",
      icon: <DollarSign className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Comprehensive International Patient Support",
      description: "From visa guidance to translator services in multiple languages, our International Patient Coordinator ensures stress-free travel and stay throughout your treatment.",
      icon: <User className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "Cultural Sensitivity & Accommodation",
      description: "We respect diverse values and needs: special dietary requirements, prayer spaces, gender-sensitive care, and cultural preferences are all accommodated.",
      icon: <MapPin className="w-6 h-6 text-medical-teal" />
    },
    {
      title: "Timely Appointments",
      description: "No long waiting lists. We prioritize urgent cardiac cases and schedule treatment within days of your initial consultation, regardless of your country of origin.",
      icon: <Calendar className="w-6 h-6 text-medical-teal" />
    },
    {
      title: "End-to-End Case Management",
      description: "Receive full case planning, diagnostics, surgery, rehab, and post-care—under one unified system with no fragmentation of care, ensuring continuity across borders.",
      icon: <Shield className="w-6 h-6 text-medical-blue" />
    },
    {
      title: "International Affairs Liaison",
      description: "Our dedicated international team provides coordinated support in multiple languages, specialized travel assistance, and continuous follow-up care for patients worldwide.",
      icon: <Languages className="w-6 h-6 text-medical-blue" />
    }
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-medical-blue to-medical-teal text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-playfair">
              10 Reasons Why International Patients Trust India for Medical Tourism
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              World-Class Heart Surgery by Dr. M.K. Moosa Kunhi for Patients from Europe, Africa, Asia and the Middle East
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-section" className="bg-white text-medical-blue hover:bg-gray-100 px-6 py-3 rounded-sm font-medium inline-flex items-center justify-center">
                Contact International Coordinator
              </a>
              <a href="#journey-section" className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-sm font-medium inline-flex items-center justify-center">
                View Patient Journey
              </a>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#f8f9fa" />
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#f8f9fa" />
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f8f9fa" />
          </svg>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey-section" className="py-16 md:py-24 bg-medical-gray scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-medical-blue-dark mb-4 font-playfair">
              Your Care Journey, Simplified
            </h2>
            <p className="text-lg text-gray-700">
              We've streamlined every step of your medical journey from consultation to recovery, no matter where you're from
            </p>
          </div>
          
          <PatientJourney activeStep={activeSection} />
          
        </div>
      </section>

      {/* 10 Reasons Section - Numbered List Format */}
      <section className="py-16 md:py-24 bg-white scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-medical-blue-dark mb-4 font-playfair">
              10 Reasons Why Choose Dr. Moosa Kunhi & India for Heart Treatment
            </h2>
            <p className="text-lg text-gray-700">
              Discover the compelling reasons that make India a global leader in cardiac healthcare for international patients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <ol className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 }
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-medical-gray md:w-16 flex justify-center items-center p-4 text-2xl font-bold text-medical-blue-dark">
                      {index + 1}
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        <div className="bg-medical-blue-light/10 p-3 rounded-full hidden md:flex">
                          {reason.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-medical-blue-dark mb-2">{reason.title}</h3>
                          <p className="text-gray-700">{reason.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-medical-gray scroll-section" id="cardiac-services">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-medical-blue-dark mb-4 font-playfair">
              Comprehensive Cardiac Services
            </h2>
            <p className="text-lg text-gray-700">
              World-class heart procedures with exceptional outcomes for patients from across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 rounded-full bg-medical-blue/10 mb-4">
                    <HeartPulse className="w-8 h-8 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue-dark">Coronary Artery Bypass</h3>
                  <p className="mt-2 text-gray-700">Specializing in Off-Pump/Beating Heart Surgery with minimal recovery time</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 rounded-full bg-medical-blue/10 mb-4">
                    <Heart className="w-8 h-8 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue-dark">Heart Valve Surgery</h3>
                  <p className="mt-2 text-gray-700">Valve Repair and Replacement (Mitral, Aortic, Double Valve) procedures</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 rounded-full bg-medical-teal/10 mb-4">
                    <Shield className="w-8 h-8 text-medical-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue-dark">Congenital Corrections</h3>
                  <p className="mt-2 text-gray-700">Complex congenital heart defect repairs for both children and adults</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 rounded-full bg-medical-teal/10 mb-4">
                    <Award className="w-8 h-8 text-medical-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue-dark">Aortic Surgery</h3>
                  <p className="mt-2 text-gray-700">Aneurysm and Root Replacement with advanced surgical techniques</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 rounded-full bg-medical-blue/10 mb-4">
                    <HeartPulse className="w-8 h-8 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue-dark">Heart Failure Treatment</h3>
                  <p className="mt-2 text-gray-700">L-VAD & Heart Transplant procedures for advanced heart failure</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="inline-flex p-3 rounded-full bg-medical-teal/10 mb-4">
                    <Stethoscope className="w-8 h-8 text-medical-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-medical-blue-dark">Thoracic & Vascular</h3>
                  <p className="mt-2 text-gray-700">Comprehensive thoracic and vascular surgery solutions</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chennai Medical Leadership Section */}
      <section className="py-16 md:py-24 bg-white scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-medical-blue-dark mb-4 font-playfair">
                  Chennai: India's Hub for Medical Excellence
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Chennai has emerged as India's leading destination for international patients seeking cardiac care due to its:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-medical-teal rounded-full p-1 mt-1 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Internationally accredited hospitals with global standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-medical-teal rounded-full p-1 mt-1 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Highest concentration of cardiac specialists in the country</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-medical-teal rounded-full p-1 mt-1 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Advanced medical technology on par with Western facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-medical-teal rounded-full p-1 mt-1 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Well-established infrastructure for international patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-medical-teal rounded-full p-1 mt-1 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Excellent connectivity with direct flights from many international hubs</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button asChild className="bg-medical-blue hover:bg-medical-blue-dark text-white">
                    <a href="#contact-section">Request Chennai Treatment</a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-md overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/b4be52b5-393a-4a20-8a34-d7d8f6aa2ba4.png" 
                    alt="Medical Tourism Journey in India" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                    <p className="text-white text-sm">Dr. Moosa's comprehensive patient journey ensures world-class care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section id="contact-section" className="py-16 md:py-24 bg-medical-teal text-white scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-playfair">
                  Your Dedicated Contact for International Inquiries
                </h2>
                <div className="bg-white/10 backdrop-blur p-6 rounded-md">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                      <User className="w-8 h-8 text-medical-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">PT Abdul Rahman</h3>
                      <p className="text-white/80">Senior Liaison, International Affairs</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mt-1 mr-3" />
                      <div>
                        <p>6505422@gmail.com</p>
                        <p>mail@ptabdulrahman.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 mt-1 mr-3" />
                      <div>
                        <p>+971 50 650 5422</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-5 h-5 mt-1 mr-3" />
                      <div>
                        <p>www.ptabdulrahman.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 mt-1 mr-3" />
                      <div>
                        <p>Available for patients from all time zones</p>
                        <p>Quick response guaranteed within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/20 p-4 rounded-md">
                    <h4 className="font-bold mb-2">How We Help International Patients:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full p-1 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Treatment cost estimates & packages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full p-1 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Medical visa processing assistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full p-1 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Accommodation arrangements near hospital</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full p-1 shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>Multiple language support & cultural needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  Ready to Begin Your Journey?
                </h3>
                <div className="bg-white rounded-md p-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-medical-gray scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-medical-blue-dark mb-4 font-playfair">
              Patient Success Stories from Around the World
            </h2>
            <p className="text-lg text-gray-700">
              Hear directly from our international patients about their experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 - UAE */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex gap-1 text-medical-gold mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic">
                      "After being told I would need to wait 6 months for heart surgery in Dubai, I came to Dr. Moosa and had my procedure within a week. The care was exceptional and I recovered faster than expected."
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <p className="font-semibold text-medical-blue-dark">Ahmed S.</p>
                    <p className="text-sm text-gray-600">Dubai, UAE</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 - UK */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex gap-1 text-medical-gold mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic">
                      "The cost savings were incredible, but what impressed me most was how Dr. Moosa took time to explain everything. His team arranged everything from visa to accommodation, making it stress-free."
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <p className="font-semibold text-medical-blue-dark">Michael B.</p>
                    <p className="text-sm text-gray-600">London, United Kingdom</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 - Nigeria */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex gap-1 text-medical-gold mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic">
                      "I searched for the best cardiac care globally and found Dr. Moosa. The international team guided us through every step. His expertise is truly world-class and the value is unmatched."
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <p className="font-semibold text-medical-blue-dark">Emmanuel O.</p>
                    <p className="text-sm text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-medical-blue text-white scroll-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-playfair">
              Experience World-Class Cardiac Care in India
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let Dr. Moosa Kunhi and his expert team guide you to India with complete care and confidence, no matter where you're from.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971506505422" className="bg-white text-medical-blue hover:bg-gray-100 px-6 py-3 rounded-sm font-medium inline-flex items-center justify-center gap-2">
                <Phone size={18} /> Call: +971 50 650 5422
              </a>
              <a href="#contact-section" className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-sm font-medium inline-flex items-center justify-center gap-2">
                Request Information <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalTourismPage;

