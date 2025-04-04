import { ArrowRight, Heart, Activity, Baby, Minimize2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-10 w-10 text-white" />,
      title: "Bypass & Beating Heart Surgery",
      description: "Safer, cost-effective bypass surgery with faster recovery and reduced complications.",
      link: "/services#bypass"
    },
    {
      icon: <Activity className="h-10 w-10 text-white" />,
      title: "Valve Replacement & Repair",
      description: "Specialized in bileaflet artificial heart valves and complex valve repair procedures.",
      link: "/services#valve"
    },
    {
      icon: <Baby className="h-10 w-10 text-white" />,
      title: "Pediatric Heart Surgery",
      description: "Life-saving operations for infants and children with congenital heart defects.",
      link: "/services#pediatric"
    },
    {
      icon: <Minimize2 className="h-10 w-10 text-white" />,
      title: "Minimally Invasive Surgery",
      description: "Advanced techniques resulting in less pain, smaller incisions, and quicker recovery.",
      link: "/services#minimally-invasive"
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Artificial Heart Technology",
      description: "Pioneering mechanical circulatory support systems and artificial heart procedures.",
      link: "/services#artificial-heart"
    }
  ];

  return (
    <section className="py-16 bg-medical-gray" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Advanced Cardiac Surgery Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. Moosa Kunhi offers a comprehensive range of advanced cardiac surgical procedures,
            combining cutting-edge techniques with decades of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-r from-medical-blue to-medical-teal p-6 h-full flex flex-col">
                <div className="p-3 bg-black/20 rounded-full w-min mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/90 mb-6 flex-grow">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-white font-medium group-hover:underline"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
