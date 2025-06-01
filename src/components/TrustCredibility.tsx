
import React from 'react';
import { Award, Shield, Globe, Users, Heart, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustCredibility: React.FC = () => {
  const certifications = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Board Certified",
      description: "American Board Certified Cardiothoracic Surgeon",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "HIPAA Compliant",
      description: "Highest standards of patient data security",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "International Standards",
      description: "Joint Commission International Accredited",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pioneer Status",
      description: "First in India to perform beating heart surgery",
      color: "bg-coral-100 text-coral-600"
    }
  ];

  const additionalResources = [
    {
      title: "Congenital Heart Disease Facts & Education",
      source: "Children's Heart Link",
      url: "https://childrensheartlink.org/congenital-heart-disease-facts/",
      description: "Comprehensive educational resource on congenital heart conditions",
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: "Revolutionary Bypass Surgery Techniques",
      source: "Onmanorama Health",
      url: "https://www.onmanorama.com/lifestyle/health/2019/10/25/bypass-surgery-hassan-moosa-kunhi-aster-medicity.html",
      description: "Advanced surgical approaches in cardiac care",
      icon: <Award className="h-5 w-5" />
    },
    {
      title: "Complex Tumor Removal Success",
      source: "Mangalore Today",
      url: "https://www.mangaloretoday.com/mainnewsprint/Unity-Hospital-doctors-successfully-removed-large-thymus-tumor.html",
      description: "Successful removal of large thymus tumor",
      icon: <Users className="h-5 w-5" />
    }
  ];

  const socialProof = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/share/r/1AE4Hgi7Sg/",
      followers: "10K+",
      engagement: "High"
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/share/p/1Fds51DqGs/",
      followers: "Medical Community",
      engagement: "Professional"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Trust & Credibility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is backed by international certifications, proven results, and the trust of patients worldwide.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${cert.color} mb-4`}>
                {cert.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Educational Resources & Media Coverage
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-coral-600 mt-1">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 mb-1">{resource.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{resource.source}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{resource.description}</p>
                
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-coral-600 hover:text-coral-700 font-medium text-sm transition-colors"
                >
                  Read More
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof & Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Patient Reviews & Social Proof</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of satisfied patients who have shared their experiences and trusted Dr. Moosa with their cardiac care.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9/5 Average Rating</span>
              </div>

              <div className="space-y-3">
                {socialProof.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span>{social.platform} - {social.followers} followers</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold text-coral-400 mb-2">500+</div>
                <div className="text-gray-300">Verified Patient Reviews</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustCredibility;
