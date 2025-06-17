
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Globe, Clock, Shield, Star, CheckCircle, Trophy, Medal } from 'lucide-react';
import CountUp from 'react-countup';

const EnhancedTrustSignals: React.FC = () => {
  const credentials = [
    {
      icon: <Award className="h-8 w-8 text-medical-blue" />,
      title: "Board Certified",
      description: "Cardiothoracic Surgery",
      detail: "American Board Certified",
      color: "bg-medical-blue/10"
    },
    {
      icon: <Users className="h-8 w-8 text-medical-teal" />,
      title: "16,000+",
      description: "Successful Surgeries",
      detail: "Over 25 years experience",
      color: "bg-medical-teal/10"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Pioneer",
      description: "Beating Heart Surgery",
      detail: "First in India",
      color: "bg-red-50"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "International",
      description: "Patient Care",
      detail: "50+ countries served",
      color: "bg-blue-50"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "24/7",
      description: "Emergency Care",
      detail: "Round-the-clock availability",
      color: "bg-orange-50"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "99.2%",
      description: "Success Rate",
      detail: "Complex cardiac procedures",
      color: "bg-green-50"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="h-12 w-12 text-yellow-500" />,
      title: "Excellence in Cardiac Surgery",
      year: "2023",
      organization: "Medical Association of India"
    },
    {
      icon: <Medal className="h-12 w-12 text-blue-600" />,
      title: "Lifetime Achievement Award",
      year: "2022",
      organization: "International Cardiac Society"
    },
    {
      icon: <Star className="h-12 w-12 text-purple-600" />,
      title: "Best Cardiac Surgeon",
      year: "2021-2023",
      organization: "Healthcare Excellence Awards"
    }
  ];

  const certifications = [
    {
      name: "Joint Commission International",
      description: "Hospital Accreditation",
      logo: <Award className="h-8 w-8 text-medical-blue" />
    },
    {
      name: "ISO 9001:2015",
      description: "Quality Management",
      logo: <CheckCircle className="h-8 w-8 text-green-600" />
    },
    {
      name: "NAB Accredited",
      description: "National Healthcare Standards",
      logo: <Shield className="h-8 w-8 text-blue-600" />
    },
    {
      name: "American Heart Association",
      description: "Fellow Member",
      logo: <Heart className="h-8 w-8 text-red-500" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-medical-blue-dark mb-6"
          >
            Trusted by Patients Worldwide
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experience the confidence that comes with world-class credentials, proven results, and unwavering commitment to excellence
          </motion.p>
        </div>

        {/* Main Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center p-6 ${credential.color} rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {credential.icon}
              </div>
              <h3 className="font-bold text-xl text-medical-blue-dark mb-2">
                {credential.title.includes('+') || credential.title.includes('%') ? (
                  <CountUp
                    end={parseFloat(credential.title.replace(/[^\d.]/g, ''))}
                    suffix={credential.title.includes('+') ? '+' : credential.title.includes('%') ? '%' : ''}
                    duration={2}
                    enableScrollSpy
                  />
                ) : (
                  credential.title
                )}
              </h3>
              <p className="text-sm text-gray-700 mb-2 font-medium">
                {credential.description}
              </p>
              <p className="text-xs text-gray-500">
                {credential.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-medical-blue-dark mb-4">
              Awards & Recognition
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dr. Moosa Kunhi's exceptional contributions to cardiac surgery have been recognized globally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h4 className="font-bold text-lg text-medical-blue-dark mb-2">
                  {achievement.title}
                </h4>
                <p className="text-coral-500 font-semibold mb-1">
                  {achievement.year}
                </p>
                <p className="text-sm text-gray-600">
                  {achievement.organization}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hospital Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-medical-blue text-white rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Hospital Accreditations & Certifications
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
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
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {cert.logo}
                </div>
                <h4 className="font-semibold text-white text-sm mb-2">
                  {cert.name}
                </h4>
                <p className="text-xs text-blue-200">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Patient Safety & Privacy */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg"
          >
            <Shield className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h4 className="font-bold text-xl mb-4 text-medical-blue-dark">HIPAA Compliant</h4>
            <p className="text-gray-600">
              Your medical information is protected with the highest security standards and privacy protocols
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg"
          >
            <Globe className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h4 className="font-bold text-xl mb-4 text-medical-blue-dark">International Standards</h4>
            <p className="text-gray-600">
              Following global best practices for medical tourism, patient care, and surgical excellence
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg"
          >
            <Clock className="h-16 w-16 mx-auto mb-6 text-orange-500" />
            <h4 className="font-bold text-xl mb-4 text-medical-blue-dark">24/7 Support</h4>
            <p className="text-gray-600">
              Round-the-clock assistance for international patients, emergencies, and post-operative care
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTrustSignals;
