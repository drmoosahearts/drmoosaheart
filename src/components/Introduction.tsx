
import { Heart, Award, Users } from "lucide-react";

const Introduction = () => {
  const highlights = [
    {
      icon: <Heart className="h-12 w-12 text-medical-teal" />,
      title: "Cardiac Excellence",
      description: "Pioneer of beating-heart bypass surgery, making complex procedures safer and more affordable."
    },
    {
      icon: <Award className="h-12 w-12 text-medical-teal" />,
      title: "World-Class Surgeon",
      description: "Over 35 years of experience with 16,000+ successful heart operations and a 99.7% success rate."
    },
    {
      icon: <Users className="h-12 w-12 text-medical-teal" />,
      title: "Patient-Centered Care",
      description: "Dedicated to making advanced cardiac care accessible to all patients, regardless of economic status."
    }
  ];

  return (
    <section className="py-16 bg-white" id="introduction">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Meet Dr. M.K. Moosa Kunhi</h2>
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-medical-teal shadow-lg">
              <img 
                src="/lovable-uploads/70c164f0-c589-4af4-bf9d-05fc475344cd.png" 
                alt="Dr. M.K. Moosa Kunhi in surgical attire" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            A globally renowned heart surgeon, celebrated for pioneering advanced cardiac surgery techniques in India. 
            Dr. Moosa Kunhi introduced beating-heart bypass surgery in 1997, making complex heart procedures safer, 
            more affordable, and accessible to all.
          </p>
          <p className="text-lg text-gray-700">
            With over three decades of experience and more than 16,000 successful surgeries, 
            Dr. Moosa Kunhi has transformed cardiac care throughout India and beyond. His astounding surgical feats in 
            high-complication cases have been revered by the cardiac fraternity worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="bg-medical-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-medical-blue-dark mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-medical-blue font-semibold mb-6">Dr. Moosa Kunhi is the only heart surgeon from India invited by Europe's biggest heart surgery hospital, The German Heart Institute in Berlin, as a guest heart surgeon.</p>
          <a href="/about" className="btn-outline inline-flex items-center gap-2">
            Read Full Biography
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
