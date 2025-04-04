
import { ArrowRight, Calendar, Award, HeartPulse, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const Achievements = () => {
  const milestones = [
    {
      year: "1997",
      title: "First Beating-Heart Bypass Surgery in India",
      description: "Pioneered this revolutionary technique that transformed cardiac surgery in the country."
    },
    {
      year: "1991",
      title: "Introduced Bileaflet Heart Valves",
      description: "First surgeon to introduce bileaflet artificial heart valves in India, now a global standard."
    },
    {
      year: "2000s",
      title: "Pediatric Heart Surgery Advancements",
      description: "Successfully performed surgery on Asia's smallest baby (750g), setting new standards."
    },
    {
      year: "Ongoing",
      title: "Charitable Medical Service",
      description: "Established cardiac centers and programs to serve underprivileged patients."
    }
  ];

  const stats = [
    { icon: <HeartPulse className="h-10 w-10 text-medical-teal" />, value: "15,000+", label: "Successful Heart Surgeries" },
    { icon: <Calendar className="h-10 w-10 text-medical-teal" />, value: "35+", label: "Years of Experience" },
    { icon: <Award className="h-10 w-10 text-medical-teal" />, value: "99.7%", label: "Success Rate" },
    { icon: <Stethoscope className="h-10 w-10 text-medical-teal" />, value: "1st", label: "Beating Heart Surgery in India" }
  ];

  return (
    <section className="py-16 bg-white" id="achievements">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">Achievements & Contributions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. Moosa Kunhi has revolutionized cardiac surgery in India through his pioneering techniques,
            dedication to excellence, and commitment to making advanced care accessible to all.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-medical-gray rounded-lg p-6 text-center">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-medical-blue mb-2">{stat.value}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-medical-gold-light hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 relative">
                  <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-medical-gold rounded-full z-10 
                    ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}">
                  </div>
                  <div className={`p-6 bg-medical-gray rounded-lg shadow-sm ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="inline-block px-3 py-1 rounded bg-medical-gold-light text-medical-blue-dark font-semibold mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-medical-blue-dark mb-3">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/achievements" className="btn-primary inline-flex items-center gap-2">
            View All Achievements <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
