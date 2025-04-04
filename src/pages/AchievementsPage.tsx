
import { Award, Star, BookOpen, Youtube, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AchievementsPage = () => {
  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Achievements & Contributions - Dr. M.K. Moosa Kunhi";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore Dr. M.K. Moosa Kunhi's pioneering achievements in cardiac surgery, including the first beating-heart bypass surgery in India, international recognition, and contributions to healthcare.");
    }
  }, []);

  const majorAchievements = [
    {
      title: "First Beating-Heart Bypass Surgery in India (1997)",
      description: "Dr. Moosa Kunhi pioneered this revolutionary technique that transformed cardiac surgery in India, making it safer, more economical, and accessible.",
      icon: <Heart className="h-8 w-8 text-medical-gold" />
    },
    {
      title: "Introduction of Bileaflet Heart Valves (1991)",
      description: "First surgeon to introduce bileaflet artificial heart valves in India, which has now become the standard practice worldwide.",
      icon: <Heart className="h-8 w-8 text-medical-gold" />
    },
    {
      title: "Surgery on Asia's Smallest Baby",
      description: "Successfully performed heart surgery on Asia's smallest baby weighing just 750 grams, setting new standards in pediatric cardiac surgery.",
      icon: <Heart className="h-8 w-8 text-medical-gold" />
    },
    {
      title: "Railway Hospital, Chennai",
      description: "Elevated the cardiac surgery department to international standards during his tenure (1991-2001), making it one of the most prestigious units of Indian Railways.",
      icon: <Heart className="h-8 w-8 text-medical-gold" />
    },
    {
      title: "Lisie Hospital, Cochin",
      description: "Founded and developed the cardiac surgery department, bringing advanced cardiac care to underprivileged patients and smaller cities.",
      icon: <Heart className="h-8 w-8 text-medical-gold" />
    },
    {
      title: "International Foundation for Heart Science",
      description: "Led various programs in heart disease prevention, treatment, and established institutions for the welfare of heart patients.",
      icon: <Heart className="h-8 w-8 text-medical-gold" />
    }
  ];

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
    "Indian inspiration Awards and Gold Medal (2011)",
    "Life time Achievement Award (2011)"
  ];

  const publications = [
    "Isolated bilateral coronary Ostium Stenosis with complete obstruction of the left main artery - Published in Annuals of Thoracic Surgery",
    "Controlled Coronary reperfusion – As an adjunct to myocardial protection – Presented at 44th annual conference of cardio thoracic surgeons of India",
    "Aortic root widening – Our experience - Presented at 44th annual conference of cardio thoracic surgeons of India",
    "Transposition of great arteries – Arterial switch operation – Presented at the 44th annual conference of cardiological society of India",
    "Restricted VSD – surgical implications – Presented at 44th annual conference of cardiological society of India",
    "Modified Delrowm Procedure – Presented at midterm conference of association of surgeons of India",
    "Mitral valve Repair – Modified technique – Presented at 49th annual conference of cardio-thoracic surgeons of India"
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-medical-gray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-medical-blue-dark mb-6">Achievements & Contributions</h1>
            <p className="text-xl text-gray-700 mb-8">
              Dr. Moosa Kunhi's pioneering work has revolutionized cardiac surgery in India and beyond,
              establishing new standards of care and making advanced procedures accessible to all.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title mb-12">Revolutionizing Cardiac Surgery</h2>
            
            <div className="space-y-8">
              {majorAchievements.map((achievement, index) => (
                <div key={index} className="bg-medical-gray p-6 rounded-lg flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 flex justify-center">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-medical-blue-dark mb-2">{achievement.title}</h3>
                    <p className="text-gray-700">{achievement.description}</p>
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
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-medical-gold p-3 rounded-full">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-medical-blue-dark">Awards & Recognition</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Dr. Moosa Kunhi's excellence in cardiac surgery and contributions to healthcare have been recognized
              with numerous prestigious awards and honors throughout his career.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {awards.map((award, index) => (
                <div key={index} className="bg-white p-4 rounded-lg flex items-center gap-3">
                  <Star className="text-medical-gold h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-medical-blue p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-medical-blue-dark">Research & Publications</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Dr. Moosa Kunhi has contributed significantly to cardiac surgery research, publishing papers and 
              presenting at international conferences. His research focuses on advanced cardiac techniques, mechanical 
              circulatory systems, and artificial heart technology.
            </p>
            
            <div className="bg-medical-gray p-6 rounded-lg mb-12">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Notable Publications & Presentations</h3>
              <ul className="space-y-4">
                {publications.map((publication, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-medical-blue-light rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="bg-white rounded-full w-3 h-3"></div>
                    </div>
                    <span className="text-gray-700">{publication}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-medical-teal p-3 rounded-full">
                <Youtube className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-medical-blue-dark">Media & Public Awareness</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Dr. Moosa Kunhi has been actively involved in public health education through various media platforms.
              He has given numerous television interviews, written articles, and conducted awareness programs to educate
              the public about cardiac health.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Television & Media</h3>
                <p className="text-gray-700 mb-4">
                  Dr. Moosa has appeared in numerous television interviews and medical talks,
                  sharing his expertise and educating the public about heart health.
                </p>
                <div className="h-40 bg-medical-blue-light/20 flex items-center justify-center rounded-lg">
                  <p className="text-medical-blue-dark font-medium text-center p-4">
                    Media appearances and television interviews will be displayed here
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Public Awareness Campaigns</h3>
                <p className="text-gray-700 mb-4">
                  Through the International Foundation for Heart Science, Dr. Moosa has conducted
                  free medical camps and heart awareness programs across India.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-medical-teal"></div>
                    <span className="text-gray-700">Heart health awareness classes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-medical-teal"></div>
                    <span className="text-gray-700">Free cardiac screening camps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-medical-teal"></div>
                    <span className="text-gray-700">Educational workshops for healthcare professionals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-medical-teal"></div>
                    <span className="text-gray-700">Public lectures on heart disease prevention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Professional Memberships</h2>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="mb-6">
              Dr. Moosa Kunhi is an active member of several prestigious medical and non-medical organizations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p>Indian Medical Association</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p>Fellow, Indian Association of Cardio-Thoracic Surgeons</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p>World Malayali Council</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p>Rotary Club</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p>Life Member, Indian Red Cross Society</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p>President, Children Heart Care Society</p>
              </div>
            </div>
          </div>
          
          <Link 
            to="/contact" 
            className="bg-white text-medical-blue hover:bg-gray-100 transition-colors duration-300 py-3 px-6 rounded-md font-semibold inline-flex items-center justify-center gap-2"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
