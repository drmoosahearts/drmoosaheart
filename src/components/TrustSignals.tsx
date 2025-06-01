
import React from 'react';
import { Award, Users, Heart, Globe, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSignals: React.FC = () => {
  const credentials = [
    {
      icon: <Award className="h-8 w-8 text-medical-blue" />,
      title: "Board Certified",
      description: "Cardiothoracic Surgery",
      detail: "American Board Certified"
    },
    {
      icon: <Users className="h-8 w-8 text-medical-teal" />,
      title: "16,000+",
      description: "Successful Surgeries",
      detail: "Over 25 years experience"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Pioneer",
      description: "Beating Heart Surgery",
      detail: "First in India"
    },
    {
      icon: <Globe className="h-8 w-8 text-medical-blue" />,
      title: "International",
      description: "Patient Care",
      detail: "50+ countries served"
    },
    {
      icon: <Clock className="h-8 w-8 text-medical-teal" />,
      title: "24/7",
      description: "Emergency Care",
      detail: "Round-the-clock availability"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "99.2%",
      description: "Success Rate",
      detail: "Complex cardiac procedures"
    }
  ];

  const certifications = [
    {
      logo: "/lovable-uploads/certification1.png",
      name: "Joint Commission International",
      description: "Hospital Accreditation"
    },
    {
      logo: "/lovable-uploads/certification2.png",
      name: "ISO 9001:2015",
      description: "Quality Management"
    },
    {
      logo: "/lovable-uploads/certification3.png",
      name: "NABH Accredited",
      description: "National Healthcare Standards"
    },
    {
      logo: "/lovable-uploads/certification4.png",
      name: "American Heart Association",
      description: "Fellow Member"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Trust Signals */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            Trusted by Patients Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the confidence that comes with world-class credentials and proven results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-3">
                {credential.icon}
              </div>
              <h3 className="font-bold text-lg text-medical-blue-dark mb-1">
                {credential.title}
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                {credential.description}
              </p>
              <p className="text-xs text-gray-500">
                {credential.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hospital Certifications */}
        <div className="bg-medical-gray rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-medical-blue-dark mb-2">
              Hospital Accreditations & Certifications
            </h3>
            <p className="text-gray-600">
              Kauvery Hospital meets the highest international standards for patient safety and care quality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-medical-blue" />
                  </div>
                </div>
                <h4 className="font-semibold text-medical-blue-dark text-sm mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs text-gray-600">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="mt-12 bg-medical-blue text-white rounded-lg p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4 text-medical-teal-light" />
              <h4 className="font-bold text-lg mb-2">HIPAA Compliant</h4>
              <p className="text-gray-200 text-sm">
                Your medical information is protected with the highest security standards
              </p>
            </div>
            <div>
              <Globe className="h-12 w-12 mx-auto mb-4 text-medical-teal-light" />
              <h4 className="font-bold text-lg mb-2">International Standards</h4>
              <p className="text-gray-200 text-sm">
                Following global best practices for medical tourism and patient care
              </p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4 text-medical-teal-light" />
              <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
              <p className="text-gray-200 text-sm">
                Round-the-clock assistance for international patients and emergencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
