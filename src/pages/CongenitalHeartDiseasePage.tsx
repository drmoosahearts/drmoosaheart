
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Clock, Activity, Users, Youtube, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CongenitalHeartDiseasePage: React.FC = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Congenital Heart Disease - Expert Care by Dr. M.K. Moosa Kunhi";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about Congenital Heart Disease (CHD), key facts, and expert cardiac care with Dr. M.K. Moosa Kunhi, a leading cardiac surgeon in India specializing in pediatric cardiac surgery."
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-medical-blue-light to-medical-teal-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-blue-dark mb-6">
              Understanding Congenital Heart Disease & Expert Care
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Specialized diagnosis, treatment and long-term care for children with heart defects
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Introduction to Congenital Heart Disease (CHD)</h2>
            <p className="text-lg mb-6">
              Congenital Heart Disease (CHD) refers to a range of heart defects present at birth. 
              These structural abnormalities can affect the heart walls, valves, and blood vessels, 
              impacting how blood flows through the heart and the rest of the body. CHD requires 
              specialized care, early intervention, and ongoing management to ensure the best outcomes.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-medical-teal my-8">
              <h3 className="text-xl font-semibold text-medical-blue-dark mb-4">
                CHD in India: Key Statistics
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-medical-teal mr-2">•</span>
                  Over 200,000 children are estimated to be born with congenital heart disease in India every year.
                </li>
                <li className="flex items-start">
                  <span className="text-medical-teal mr-2">•</span>
                  About one-fifth of these suffer from critical heart disease requiring early intervention.
                </li>
                <li className="flex items-start">
                  <span className="text-medical-teal mr-2">•</span>
                  The currently available care for these children is grossly inadequate.
                </li>
                <li className="flex items-start">
                  <span className="text-medical-teal mr-2">•</span>
                  There are over 60 centers that cater to children with congenital heart disease; majority are in southern states of India.
                </li>
                <li className="flex items-start">
                  <span className="text-medical-teal mr-2">•</span>
                  Most babies born with congenital heart disease in most populous states of India, such as Uttar Pradesh and Bihar, do not receive the care they deserve.
                </li>
                <li className="flex items-start">
                  <span className="text-medical-teal mr-2">•</span>
                  Improving care of children with congenital heart disease is an uphill task, but needs to be addressed.
                </li>
              </ul>
            </div>

            <p className="text-lg">
              This page aims to provide essential information about CHD, highlight key facts, 
              share resources, and showcase the expert care available with Dr. M.K. Moosa Kunhi for 
              children and families affected by congenital heart conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Key Facts About Congenital Heart Disease</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Fact 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-medical-blue-light p-3 mr-3">
                    <Heart className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-medical-blue-dark">What is CHD?</h3>
                </div>
                <p className="text-gray-700">
                  CHD encompasses various defects ranging from simple to complex. Common types include:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• Atrial Septal Defect (ASD): Hole in the wall between heart's upper chambers</li>
                  <li>• Ventricular Septal Defect (VSD): Hole in the wall between heart's lower chambers</li>
                  <li>• Tetralogy of Fallot: A combination of four heart defects</li>
                  <li>• Patent Ductus Arteriosus (PDA): Abnormal blood flow between two major arteries</li>
                  <li>• Coarctation of the Aorta: Narrowing of the major blood vessel</li>
                </ul>
              </div>

              {/* Fact 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-medical-teal-light p-3 mr-3">
                    <Clock className="h-6 w-6 text-medical-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-medical-blue-dark">Early Diagnosis & Treatment</h3>
                </div>
                <p className="text-gray-700">
                  Early detection is critical for CHD management. Untreated CHD can lead to:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• Heart failure and compromised cardiac function</li>
                  <li>• Pulmonary hypertension (high blood pressure in lung arteries)</li>
                  <li>• Delayed growth and development in children</li>
                  <li>• Increased risk of infections and other complications</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Modern diagnostic tools like echocardiograms, cardiac MRIs, and specialized cardiac 
                  care can detect CHD early—sometimes even before birth.
                </p>
              </div>

              {/* Fact 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-medical-blue-light p-3 mr-3">
                    <Activity className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-medical-blue-dark">Advancements in Treatment</h3>
                </div>
                <p className="text-gray-700">
                  Modern CHD treatment options have significantly improved outcomes:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• Minimally Invasive Keyhole Heart Surgery: Reduces trauma and recovery time</li>
                  <li>• Beating Heart Surgery: Specialized techniques without stopping the heart</li>
                  <li>• Catheter-Based Interventions: Non-surgical options for certain defects</li>
                  <li>• Hybrid Procedures: Combining surgical and catheter-based approaches</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Dr. Moosa Kunhi specializes in advanced cardiac techniques including beating heart 
                  surgery and minimally invasive approaches for treating congenital heart defects.
                </p>
              </div>

              {/* Fact 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-medical-teal-light p-3 mr-3">
                    <Users className="h-6 w-6 text-medical-teal" />
                  </div>
                  <h3 className="text-xl font-semibold text-medical-blue-dark">Living with CHD</h3>
                </div>
                <p className="text-gray-700">
                  With proper care, most CHD patients can lead fulfilling lives:
                </p>
                <ul className="mt-3 space-y-2 text-gray-700">
                  <li>• Regular cardiac monitoring and follow-up care</li>
                  <li>• Personalized physical activity recommendations</li>
                  <li>• Nutritional guidance and healthy lifestyle adaptations</li>
                  <li>• Psychosocial support for patients and families</li>
                  <li>• Transition planning from pediatric to adult cardiac care</li>
                </ul>
                <p className="mt-3 text-gray-700">
                  Long-term management focuses on maximizing quality of life and preventing 
                  complications through specialized, ongoing cardiac care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Moosa's Expertise & Interviews */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title">Insights from Dr. Moosa</h2>
            <p className="text-lg mb-8">
              Learn more about Congenital Heart Disease and cardiac care through these informative 
              interviews with Dr. Moosa Kunhi, where he shares his expertise and insights on various 
              heart conditions and treatments.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Dr Moose Kunhi MK | Cardio Thoracic & Vascular Surgery</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=onqtl-NGSOI</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">Dr Moose Kunhi MK | Cardio Thoracic & Vascular Surgery</h3>
                  <p className="text-sm text-gray-600 mt-1">An overview of cardiac surgical approaches and expertise</p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Congenital Heart Disease</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=dWlcXuoeZR0</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">Congenital Heart Disease</h3>
                  <p className="text-sm text-gray-600 mt-1">Understanding pediatric heart conditions and treatment options</p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Development Of Cardiological Surgery</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=XSimd7zRRhU</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">இதய அறுவை சிகிச்சை அன்றும் இன்றும் | Development Of Cardiological Surgery</h3>
                  <p className="text-sm text-gray-600 mt-1">The evolution and advances in cardiac surgical techniques</p>
                </div>
              </div>

              {/* Video 4 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Keyhole Heart Surgery</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=DoNqzDgCCQs</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">Keyhole Heart Surgery: A Less Invasive Approach</h3>
                  <p className="text-sm text-gray-600 mt-1">Benefits and applications of minimally invasive cardiac procedures</p>
                </div>
              </div>

              {/* Video 5 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Bypass Surgery | Patient Success Story</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=6g2arr7a7ks</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">Bypass Surgery | Patient Success Story</h3>
                  <p className="text-sm text-gray-600 mt-1">Real patient experiences and outcomes after cardiac surgery</p>
                </div>
              </div>

              {/* Video 6 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Heart Valve Problems</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=Bcf7Bvipesw</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">Heart Valve Problems: A Gateway to Heart Failure?</h3>
                  <p className="text-sm text-gray-600 mt-1">Understanding the importance of valve health in cardiac function</p>
                </div>
              </div>

              {/* Video 7 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Early Detection Saves Lives</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=OQNKp2wO970</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">Early Detection Saves Lives: Aortic Aneurysm Screening</h3>
                  <p className="text-sm text-gray-600 mt-1">The importance of preventive care and early intervention</p>
                </div>
              </div>

              {/* Video 8 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Heart Attack vs. Heart Failure</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=U3GYE5w2Mnk</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">Heart Attack vs. Heart Failure: Understanding the Difference</h3>
                  <p className="text-sm text-gray-600 mt-1">Clarifying important distinctions in cardiac conditions</p>
                </div>
              </div>

              {/* Video 9 */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Youtube className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <p className="text-gray-600 text-sm">Video Embed: Aortic Dissection</p>
                    <p className="text-xs text-gray-500 mt-2">http://www.youtube.com/watch?v=HPIcWxPP_RQ</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-medical-blue-dark">Aortic Dissection: A Medical Emergency</h3>
                  <p className="text-sm text-gray-600 mt-1">Recognizing and treating critical aortic conditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-medical-blue to-medical-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the Next Step in Cardiac Care</h2>
            <p className="text-lg mb-8">
              Dr. Moosa Kunhi and his expert team provide specialized care for children and adults 
              with congenital heart disease. Contact us today to learn more about diagnosis, 
              treatment options, and comprehensive cardiac care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-medical-blue px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors font-medium"
              >
                <Phone size={20} />
                Schedule a Consultation
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 bg-medical-blue-dark text-white px-6 py-3 rounded-sm hover:bg-medical-blue-dark/90 transition-colors font-medium"
              >
                <ArrowRight size={20} />
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CongenitalHeartDiseasePage;
