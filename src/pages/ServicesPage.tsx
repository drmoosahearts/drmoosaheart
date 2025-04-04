
import { Heart, Activity, Baby, Minimize2, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ServicesPage = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Cardiac Surgery Services - Dr. M.K. Moosa Kunhi";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore the comprehensive cardiac surgery services offered by Dr. M.K. Moosa Kunhi including beating heart bypass surgery, valve repairs, pediatric heart surgery, and more.");
    }
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-medical-gray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-medical-blue-dark mb-6">Advanced Cardiac Surgery Services</h1>
            <p className="text-xl text-gray-700 mb-8">
              Dr. Moosa Kunhi offers a comprehensive range of specialized cardiac surgical procedures,
              combining cutting-edge techniques with over 35 years of expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="bypass">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-medical-blue p-4 rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-medical-blue-dark">Beating Heart Bypass Surgery</h2>
            </div>
            
            <div className="bg-medical-gray p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Dr. Moosa Kunhi pioneered beating heart bypass surgery in India in 1997, revolutionizing cardiac care. 
                This technique allows coronary artery bypass grafting without stopping the heart or using a heart-lung machine.
              </p>
              <p className="text-gray-700 mb-6">
                As one of the first surgeons to perform this procedure in India, Dr. Moosa has completed over 1,000 
                beating heart bypass surgeries with exceptional success rates.
              </p>
              
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Benefits of Beating Heart Bypass Surgery:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Reduced risk of complications compared to traditional bypass surgery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Lower chance of post-operative cognitive issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Faster recovery and shorter hospital stays</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Reduced blood transfusion requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">More economical and cost-effective for patients</span>
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg border border-medical-teal-light">
                <p className="text-medical-blue-dark font-semibold">
                  Dr. Moosa's success rate for bypass operations stands at an impressive 99.7%, 
                  which is at par with international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-gray" id="valve">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-medical-teal p-4 rounded-full">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-medical-blue-dark">Valve Replacement & Repair</h2>
            </div>
            
            <div className="bg-white p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Dr. Moosa Kunhi is a pioneer in heart valve surgery, having introduced bileaflet artificial heart valves in India in 1991, 
                which have now become the global standard for valve replacement procedures.
              </p>
              <p className="text-gray-700 mb-6">
                With thousands of successful valve procedures and a 98% success rate, Dr. Moosa offers exceptional expertise 
                in both replacement and repair of heart valves.
              </p>
              
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Valve Procedures Include:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Mitral Valve Replacement & Repair:</span>
                    <p className="text-gray-700">For patients with mitral valve stenosis or regurgitation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Aortic Valve Replacement:</span>
                    <p className="text-gray-700">Using state-of-the-art bileaflet mechanical valves or tissue valves.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Double Valve Replacement:</span>
                    <p className="text-gray-700">Simultaneous replacement of two heart valves when necessary.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Complex Valve Procedures:</span>
                    <p className="text-gray-700">Including Bentall's procedure for aortic root and valve replacement.</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-medical-blue-light p-4 rounded-lg text-white">
                <p className="font-semibold">
                  Dr. Moosa Kunhi has developed innovative techniques in heart valve surgery that have 
                  significantly improved outcomes and long-term success rates for patients with valvular heart disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="pediatric">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-medical-gold p-4 rounded-full">
                <Baby className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-medical-blue-dark">Pediatric Heart Surgery</h2>
            </div>
            
            <div className="bg-medical-gray p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Dr. Moosa Kunhi has played a pivotal role in developing and promoting pediatric heart surgery in India. 
                His expertise in treating congenital heart defects has saved thousands of children's lives.
              </p>
              <p className="text-gray-700 mb-6">
                His most remarkable achievement includes successfully performing heart surgery on Asia's smallest baby, 
                weighing just 750 grams, setting new standards in pediatric cardiac surgery.
              </p>
              
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Pediatric Cardiac Procedures:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Atrial Septal Defect (ASD) Correction</span>
                    <p className="text-gray-700">Closure of holes between the upper chambers of the heart.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Ventricular Septal Defect (VSD) Repair</span>
                    <p className="text-gray-700">Closing abnormal openings between the lower chambers of the heart.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Tetralogy of Fallot Correction</span>
                    <p className="text-gray-700">Comprehensive repair of this complex congenital heart condition.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Arterial Switch Operations</span>
                    <p className="text-gray-700">For transposition of the great arteries in newborns.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">TAPVC Correction</span>
                    <p className="text-gray-700">Total Anomalous Pulmonary Venous Connection repair.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Blalock-Taussig (B-T) Shunts</span>
                    <p className="text-gray-700">Palliative procedure for specific congenital heart defects.</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg border border-medical-gold">
                <p className="text-medical-blue-dark font-semibold">
                  Dr. Moosa Kunhi's expertise in pediatric heart surgery has helped establish specialized pediatric cardiac care centers, 
                  bringing hope to families across India and neighboring countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-gray" id="minimally-invasive">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-medical-blue-dark p-4 rounded-full">
                <Minimize2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-medical-blue-dark">Minimally Invasive Cardiac Surgery</h2>
            </div>
            
            <div className="bg-white p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Dr. Moosa Kunhi incorporates minimally invasive techniques in cardiac surgery, offering patients 
                the benefits of smaller incisions, reduced trauma, and faster recovery.
              </p>
              <p className="text-gray-700 mb-6">
                These advanced approaches result in less post-operative pain, shorter hospital stays, and quicker return to normal activities.
              </p>
              
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Minimally Invasive Procedures:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Minimally Invasive Direct Coronary Artery Bypass (MIDCAB)</span>
                    <p className="text-gray-700">Bypass surgery through a small chest incision without full sternotomy.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Minimally Invasive Valve Surgery</span>
                    <p className="text-gray-700">Repairing or replacing heart valves through smaller incisions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-medical-blue-dark font-semibold">Port-Access Cardiac Surgery</span>
                    <p className="text-gray-700">Using specialized instruments through small ports between the ribs.</p>
                  </div>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Benefits of Minimally Invasive Approaches:</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Smaller incisions and improved cosmetic results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Reduced surgical trauma and bleeding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Less post-operative pain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Shorter hospital stays and faster recovery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-medical-teal h-5 w-5 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Earlier return to normal activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cta-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Why Choose Dr. Moosa Kunhi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-2">35+ Years Experience</h3>
              <p>Decades of expertise in the most complex cardiac procedures.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-2">15,000+ Surgeries</h3>
              <p>A track record of thousands of successful heart operations.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-2">Pioneer & Innovator</h3>
              <p>Introduced multiple advanced cardiac techniques that are now standards of care.</p>
            </div>
          </div>
          
          <Link 
            to="/contact#appointment" 
            className="bg-white text-medical-blue hover:bg-gray-100 transition-colors duration-300 py-3 px-6 rounded-md font-semibold inline-flex items-center justify-center gap-2"
          >
            Schedule a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
