import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Mail, Phone, Globe, MapPin, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const InternationalPage = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Expert Cardiac Surgery India | Dr. Moosa Kunhi | For GCC Patients";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "World-class heart surgery in India for GCC patients. Dr. M.K. Moosa Kunhi offers expert cardiac care with over 16,000 successful surgeries. Affordable medical tourism from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.");
    }
  }, []);
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-medical-blue to-medical-teal text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none" className="text-white">
            <path d="M500,990C244.77,990,38.09,760.48,10,515.72,38.09,270.95,244.77,10,500,10c255.23,0,461.91,260.95,490,505.72C961.91,760.48,755.23,990,500,990Z" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-playfair">
              World-Class Heart Surgery in India for Patients from GCC Countries
            </h1>
            <div className="w-24 h-1 bg-medical-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Expert Cardiac Care by Dr. M.K. Moosa Kunhi for Patients from UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="bg-white text-medical-blue hover:bg-medical-gold hover:text-white transition-colors px-6 py-3 rounded-sm font-medium text-lg">
                Contact International Coordinator
              </a>
              <Link to="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-medical-blue transition-colors px-6 py-3 rounded-sm font-medium text-lg">
                View Cardiac Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeInUp} className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Are you seeking the best cardiac care options from the UAE, Saudi Arabia, Qatar, Oman, Kuwait, or Bahrain? India has emerged as a leading destination for advanced medical tourism, offering exceptional expertise at accessible costs. Dr. M.K. Moosa Kunhi, a highly acclaimed Consultant Cardiothoracic, Vascular, and Heart Transplant Surgeon currently associated with Kauvery Hospital, India, provides world-class heart treatment for international patients, including those from across the GCC. With over 34 years of experience and a remarkable record of performing over 16,000 successful procedures, Dr. Kunhi is recognized as one of the top heart surgeons in India for patients seeking specialized care abroad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-medical-gray">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeInUp} className="text-center mb-12">
            <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Why Choose Dr. Moosa Kunhi & India for Your Heart Treatment?</h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-medical-blue p-3 rounded-full text-white mr-4">
                  <Award className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-bold text-medical-blue-dark">Unrivalled Expertise & Experience</h3>
              </div>
              <p className="text-gray-700">
                Dr. Kunhi has performed over 16,000 heart surgeries, demonstrating vast experience in complex procedures like Off-Pump Bypass (Beating Heart Surgery), Valve Replacements/Repairs, Congenital Heart Defect Corrections, Aortic Surgery, and Heart Transplants. He is a pioneer, introducing innovative techniques to India.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-medical-blue p-3 rounded-full text-white mr-4">
                  <Globe className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-bold text-medical-blue-dark">Internationally Recognized</h3>
              </div>
              <p className="text-gray-700">
                Trained in advanced Heart Transplant & L-VAD surgery in Germany, Dr. Kunhi brings global standards of care. He has experience working with patients from diverse backgrounds and has participated in health programs in Middle East countries.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-medical-blue p-3 rounded-full text-white mr-4">
                  <Heart className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-bold text-medical-blue-dark">State-of-the-Art Facilities</h3>
              </div>
              <p className="text-gray-700">
                Treatment is provided at Kauvery Hospital, equipped with modern technology and adhering to international healthcare protocols.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-medical-blue p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M12 2v6a2 2 0 0 0 2 2h6"></path>
                    <path d="M22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6"></path>
                    <path d="M18 14h-8"></path>
                    <path d="M15 18h-5"></path>
                    <path d="M10 6H6"></path>
                    <path d="M10 10H7"></path>
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-medical-blue-dark">Significant Cost Advantage</h3>
              </div>
              <p className="text-gray-700">
                Often, seeking treatment like bypass surgery or heart valve replacement in India offers considerable cost savings compared to undergoing similar procedures in the UAE, Saudi Arabia, Qatar, or other GCC nations, without compromising on quality.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <span className="bg-medical-blue p-3 rounded-full text-white mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <h3 className="text-xl font-bold text-medical-blue-dark">Dedicated International Patient Support</h3>
              </div>
              <p className="text-gray-700">
                We understand the needs of patients traveling from abroad. Our dedicated International Patient Coordinator (GCC Region) ensures a smooth experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievement Statistics */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={34} suffix="+" duration={2.5} />
              </div>
              <p className="text-lg md:text-xl">Years of Experience</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={16000} suffix="+" duration={2.5} />
              </div>
              <p className="text-lg md:text-xl">Successful Surgeries</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={99.7} suffix="%" decimals={1} duration={2.5} />
              </div>
              <p className="text-lg md:text-xl">Success Rate</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={6} suffix="+" duration={2.5} />
              </div>
              <p className="text-lg md:text-xl">GCC Countries Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeInUp} className="text-center mb-12">
            <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Comprehensive Cardiac Services for GCC Patients</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
              Dr. Kunhi offers the full spectrum of advanced cardiac care, including:
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-medical-gray rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-3">Coronary Artery Bypass Grafting (CABG)</h3>
              <p className="text-gray-700">Specializing in Off-Pump (Beating Heart) Surgery with exceptional success rates.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-medical-gray rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-3">Heart Valve Repair and Replacement</h3>
              <p className="text-gray-700">Expert treatment for Mitral, Aortic, and Double Valve conditions.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-medical-gray rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-3">Surgery for Congenital Heart Defects</h3>
              <p className="text-gray-700">Specialized care for both children and adults with congenital heart conditions.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-medical-gray rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-3">Aortic Aneurysm Repair</h3>
              <p className="text-gray-700">Advanced techniques for aortic aneurysm repair and aortic root replacement.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-medical-gray rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-3">Heart Failure Surgery</h3>
              <p className="text-gray-700">Cutting-edge treatments including L-VAD and Heart Transplantation.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-medical-gray rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-3">Thoracic and Vascular Surgeries</h3>
              <p className="text-gray-700">Comprehensive treatment for thoracic and vascular conditions.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-medical-teal text-white">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Your Dedicated Contact for International Inquiries</h2>
            <div className="w-24 h-1 bg-medical-gold mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
              For seamless coordination, inquiries, cost estimates, and assistance with your medical journey to India for treatment with Dr. Moosa Kunhi, please contact:
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeInUp} className="max-w-3xl mx-auto bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row md:items-center mb-6">
                <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                  <div className="bg-medical-teal rounded-full p-6 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h3 className="text-2xl font-bold text-medical-blue-dark mb-2">PT Abdul Rahman</h3>
                  <p className="text-lg text-medical-teal mb-4 font-medium">Senior Liaison, International Affairs</p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Globe className="w-5 h-5 text-medical-teal mr-3" />
                      <a href="http://www.ptabdulrahman.com" target="_blank" rel="noopener noreferrer" className="hover:text-medical-teal transition-colors">
                        www.ptabdulrahman.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      <Mail className="w-5 h-5 text-medical-teal mr-3" />
                      <div>
                        <a href="mailto:6505422@gmail.com" className="hover:text-medical-teal transition-colors block">
                          6505422@gmail.com
                        </a>
                        <a href="mailto:mail@ptabdulrahman.com" className="hover:text-medical-teal transition-colors block">
                          mail@ptabdulrahman.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <Phone className="w-5 h-5 text-medical-teal mr-3" />
                      <a href="tel:+971506505422" className="hover:text-medical-teal transition-colors">
                        +971 50 650 5422
                      </a>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-medical-teal mr-3">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Office Hours: Monday - Saturday, 9:00 AM - 5:00 PM (Gulf Standard Time, GMT+4)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-medical-gray">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} variants={fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-6">Begin Your Journey to a Healthier Heart</h2>
            <p className="text-lg text-gray-700 mb-8">
              Don't let distance be a barrier to receiving care from one of the best cardiovascular surgeons in India. Contact the International Patient Coordinator (GCC Region) today to learn more about treatment options with Dr. Moosa Kunhi and start your medical tourism journey to India.
            </p>
            <a href="#contact" className="bg-medical-blue text-white hover:bg-medical-teal transition-colors px-8 py-4 rounded-sm font-medium text-lg inline-block">
              Contact International Coordinator
            </a>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default InternationalPage;