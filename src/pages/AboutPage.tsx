
import { ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutPage = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "About Dr. M.K. Moosa Kunhi - Cardiac Surgery Pioneer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about Dr. M.K. Moosa Kunhi's journey, education, achievements, and pioneering contributions to cardiac surgery in India and globally.");
    }
  }, []);

  // Education timeline
  const education = [
    {
      period: "Early Education",
      institution: "Govt. Schools in Kasaragod, Kerala",
      description: "Completed primary and secondary education with distinction."
    },
    {
      period: "1976-1982",
      institution: "Medical College, Calicut",
      degree: "M.B.B.S.",
      description: "Graduated in Medicine with strong academic performance."
    },
    {
      period: "1983-1986",
      institution: "Medical College, Calicut",
      degree: "M.S. (Surgery)",
      description: "Specialized in General Surgery with thesis on 'Highly Selective Vagotomy'."
    },
    {
      period: "Advanced Training",
      institution: "Medical College, Trivandrum",
      degree: "M.Ch. (Cardio-Thoracic Surgery)",
      description: "Conducted over 500 open heart and closed heart operations during this period."
    }
  ];

  // Career milestones
  const career = [
    {
      period: "1991-2001",
      role: "Cardiac Surgeon (to Senior Consultant)",
      institution: "Southern Railway Head-Quarters Hospital, Chennai",
      description: "Elevated the cardiac surgery department to international standards. Conducted about 6,000 open-heart surgeries and pioneered multiple techniques including beating heart bypass surgery in 1997."
    },
    {
      role: "Chief Cardiac Surgeon",
      institution: "Lisie Heart Institute, Kochi",
      description: "Established a leading cardiac surgery center serving underprivileged patients. Completed 1,000 'beating-heart' bypass operations by 2006, becoming the first surgeon in Kerala to achieve this milestone."
    },
    {
      role: "President & CEO",
      institution: "International Foundation for Heart Science",
      description: "Led various programs in heart disease prevention, treatment, and established institutions for the welfare of heart patients."
    },
    {
      role: "Chief Consultant Cardiac Surgeon",
      institution: "Lakeshore Hospital & Research Centre, Kochi",
      description: "Currently providing expert cardiac surgical services and advanced heart procedures."
    }
  ];

  // Awards and recognitions
  const awards = [
    "NS DAS PURASKARAM (2001)",
    "Indian Red Cross Award (2003)",
    "MOTHER TERESA Award (2003)",
    "RASTRA KAVI GOVINDA PAI ACADEMY Award (2004)",
    "ETHICON RECOGNITION AWARD (2005)",
    "JNANA BHOOMIKA - HEART OF INDIA Award (2005)",
    "PRATHIBHA AWARD (2006)",
    "AAROGYA SEVA RATNA PURASKARAM (2008)",
    "INTERNATIONAL CITIZEN AWARD (2009)",
    "Bharath Excellence Awards and Govt Medal (2011)",
    "Life time Achievement Award (2011)"
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-medical-gray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-medical-blue-dark mb-6">About Dr. M.K. Moosa Kunhi</h1>
            <p className="text-xl text-gray-700 mb-8">
              A pioneer in cardiac surgery who has transformed the landscape of heart care in India.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-medical-blue-dark mb-4">Who is Dr. M.K. Moosa Kunhi?</h2>
              <p className="text-gray-700 mb-4">
                Dr. M.K. Moosa Kunhi is a globally renowned heart surgeon, celebrated for pioneering advanced cardiac surgery techniques in India. 
                He introduced beating-heart bypass surgery in 1997, making complex heart procedures safer, more affordable, and accessible.
              </p>
              <p className="text-gray-700 mb-4">
                With over 35 years of experience and more than 15,000 successful heart surgeries, Dr. Moosa Kunhi has revolutionized cardiac 
                care by developing new techniques in myocardial protection and valve surgery, with a success rate of 99.7% for bypass operations.
              </p>
              <p className="text-gray-700">
                He is the first heart surgeon to introduce bileaflet artificial heart valves in India (1991) and has performed groundbreaking 
                pediatric heart surgeries, including surgery on Asia's smallest baby weighing just 750 grams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-12">Early Life & Education</h2>
            
            <div className="relative border-l-2 border-medical-gold-light pl-8 ml-4 mb-12">
              {education.map((item, index) => (
                <div key={index} className="mb-10 relative">
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-medical-gold flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <div>
                    <div className="bg-medical-gold-light text-medical-blue-dark text-sm font-semibold py-1 px-3 rounded-full inline-block mb-2">
                      {item.period}
                    </div>
                    <h3 className="text-xl font-bold text-medical-blue-dark mb-1">{item.institution}</h3>
                    {item.degree && (
                      <p className="text-medical-teal font-semibold mb-2">{item.degree}</p>
                    )}
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-12">Career & Achievements</h2>
            
            <div className="space-y-8">
              {career.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  {item.period && (
                    <div className="bg-medical-blue text-white text-sm font-semibold py-1 px-3 rounded-full inline-block mb-2">
                      {item.period}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-medical-blue-dark mb-1">{item.role}</h3>
                  <p className="text-medical-teal font-semibold mb-3">{item.institution}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-12">Legacy & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-medical-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Pioneer of Advanced Techniques</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">First to introduce beating-heart bypass surgery in India (1997)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">First to introduce bileaflet artificial heart valves in India (1991)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Developed new techniques in myocardial protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Pioneered complex valve repair procedures</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-medical-gray p-6 rounded-lg">
                <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Contributions to Healthcare</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Elevated Railway Hospital, Chennai to international standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Established Lisie Heart Institute to serve underprivileged patients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Led International Foundation for Heart Science's public awareness programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Conducted free medical camps and heart awareness classes across India</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-medical-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Awards & Recognitions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Award className="text-medical-gold h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-medical-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Dr. Moosa Kunhi's Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Explore the advanced cardiac surgical procedures offered by Dr. Moosa Kunhi or schedule a consultation today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="bg-white text-medical-teal hover:bg-gray-100 transition-colors duration-300 py-3 px-6 rounded-md font-semibold inline-flex items-center justify-center gap-2"
            >
              View Services <ArrowRight size={18} />
            </Link>
            <Link 
              to="/contact#appointment" 
              className="bg-medical-blue hover:bg-medical-blue-dark transition-colors duration-300 text-white py-3 px-6 rounded-md font-semibold inline-flex items-center justify-center gap-2"
            >
              Contact Dr. Moosa <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
