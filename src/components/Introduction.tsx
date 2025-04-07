import { Heart, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
const Introduction = () => {
  const highlights = [{
    icon: <Heart className="h-12 w-12 text-medical-teal" />,
    title: "Cardiac Excellence",
    description: "Pioneer of beating-heart bypass surgery, making complex procedures safer and more affordable."
  }, {
    icon: <Award className="h-12 w-12 text-medical-teal" />,
    title: "World-Class Surgeon",
    description: "Over 35 years of experience with 16,000+ successful heart operations and a 99.7% success rate."
  }, {
    icon: <Users className="h-12 w-12 text-medical-teal" />,
    title: "Patient-Centered Care",
    description: "Dedicated to making advanced cardiac care accessible to all patients, regardless of economic status."
  }];
  return <section className="py-16 bg-white" id="introduction">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-6 text-center">Meet Dr. M.K. Moosa Kunhi</h2>
          <div className="w-40 h-1 bg-medical-teal mx-auto mb-8"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-48 h-48 rounded-sm overflow-hidden border-4 border-white shadow-lg mx-auto">
                <img alt="Dr. M.K. Moosa Kunhi" className="w-full h-full object-cover" src="/lovable-uploads/371c975d-3f6b-492b-9a6c-01c04b81a4a7.jpg" />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-4">
                A globally renowned heart surgeon, celebrated for pioneering advanced cardiac surgery techniques in India. 
                Dr. Moosa Kunhi introduced beating-heart bypass surgery in 1997, making complex heart procedures safer, 
                more affordable, and accessible to all.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With over three decades of experience and more than 16,000 successful surgeries, 
                Dr. Moosa Kunhi has transformed cardiac care throughout India and beyond.
              </p>
              <Link to="/about" className="bg-medical-blue text-white hover:bg-medical-blue-dark transition-colors px-6 py-3 inline-block rounded-sm">
                Full Biography
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {highlights.map((item, index) => <div key={index} className="bg-medical-gray p-6 rounded-sm hover:shadow-md transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-medical-blue-dark mb-3">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>)}
        </div>

        <div className="mt-16 p-6 bg-medical-gray rounded-sm">
          <p className="text-center text-medical-blue font-semibold mb-4">
            "Dr. Moosa Kunhi is the only heart surgeon from India invited by Europe's biggest heart surgery hospital, 
            The German Heart Institute in Berlin, as a guest heart surgeon."
          </p>
        </div>
      </div>
    </section>;
};
export default Introduction;