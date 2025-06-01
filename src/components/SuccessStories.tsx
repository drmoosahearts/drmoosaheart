
import React from 'react';
import { ExternalLink, User, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      title: "50-Year-Old Patient's Life Saved with Revolutionary Heart Procedure",
      hospital: "Aster Medcity, Kochi",
      patientAge: "50 years",
      procedure: "Complex Cardiac Surgery",
      outcome: "Full Recovery",
      url: "https://www.asterhospitals.in/blogs-events-news/aster-medcity-kochi/aster-medcity-doctors-saves-life-of-50-year-old-patient-hearts-pumping-power-just-15",
      description: "Patient with heart pumping power of just 15% makes remarkable recovery",
      category: "Life-Saving Surgery"
    },
    {
      title: "Dubai Boy Undergoes Rare Life-Saving Surgery in Kerala",
      hospital: "International Patient Care",
      patientAge: "Pediatric",
      procedure: "Rare Cardiac Surgery",
      outcome: "Successful",
      url: "https://www.gulf-times.com/story/504680/dubai-boy-undergoes-rare-surgery-in-kerala",
      description: "Complex pediatric cardiac procedure performed with international collaboration",
      category: "International Case"
    },
    {
      title: "Induced Death by Cooling Saves Two-Year-Old's Life",
      hospital: "Advanced Cardiac Care",
      patientAge: "2 years",
      procedure: "Hypothermic Surgery",
      outcome: "Complete Recovery",
      url: "https://amp.scroll.in/article/813225/how-induced-death-by-cooling-saved-a-two-year-old-boys-life",
      description: "Revolutionary cooling technique used in complex pediatric heart surgery",
      category: "Innovative Technique"
    },
    {
      title: "Emergency Heart Surgery Saves Young Boy's Life",
      hospital: "Mangaluru Medical Center",
      patientAge: "Young patient",
      procedure: "Emergency Cardiac Surgery",
      outcome: "Life Saved",
      url: "https://timesofindia.indiatimes.com/city/mangaluru/injury-to-the-heart-emergency-surgery-saves-boy/articleshow/86760162.cms",
      description: "Critical heart injury treated with immediate surgical intervention",
      category: "Emergency Surgery"
    },
    {
      title: "28-Year-Old Woman Receives New Lease of Life",
      hospital: "High-Risk Surgery Unit",
      patientAge: "28 years",
      procedure: "High-Risk Open Heart Surgery",
      outcome: "New Lease of Life",
      url: "https://www.newindianexpress.com/amp/story/good-news/2020/Sep/25/28-year-old-kerala-woman-receives-new-lease-of-life-after-high-risk-open-heart-surgery-2201796.html",
      description: "Complex open heart surgery performed successfully on young mother",
      category: "High-Risk Surgery"
    },
    {
      title: "Rare Blood Clot Removal Surgery Saves 45-Year-Old",
      hospital: "Specialized Cardiac Unit",
      patientAge: "45 years",
      procedure: "Blood Clot Removal",
      outcome: "Full Recovery",
      url: "https://timesofindia.indiatimes.com/city/kochi/rare-surgery-to-remove-blood-clot-in-heart-saves-45-year-old-man/amp_articleshow/59610721.cms",
      description: "Rare and complex cardiac surgery to remove dangerous blood clot",
      category: "Specialized Surgery"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Life-Changing Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real patients, real results. Discover how Dr. Moosa's expertise has transformed lives across the globe.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Category Tag */}
                <div className="inline-flex items-center gap-2 bg-coral-100 text-coral-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Award className="h-4 w-4" />
                  {story.category}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-coral-600 transition-colors">
                  {story.title}
                </h3>

                {/* Patient Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{story.patientAge}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{story.procedure}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {story.description}
                </p>

                {/* Outcome Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {story.outcome}
                  </span>
                  <span className="text-xs text-gray-500">{story.hospital}</span>
                </div>

                {/* Read More Button */}
                <a
                  href={story.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-coral-600 hover:text-coral-700 font-medium text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Read Full Story
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-900 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Your Success Story Awaits</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of patients who have trusted Dr. Moosa with their cardiac care.
            </p>
            <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Your Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
