
import React from 'react';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PatientTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      location: "Dubai, UAE",
      procedure: "Complex Bypass Surgery",
      date: "March 2024",
      rating: 5,
      image: "/lovable-uploads/patient1.jpg",
      quote: "Dr. Moosa saved my life with his exceptional skill. The entire team made my family and me feel comfortable throughout the process. The beating heart surgery was a success, and I'm back to my normal life.",
      verified: true
    },
    {
      name: "Sarah Johnson",
      location: "London, UK",
      procedure: "Mitral Valve Repair",
      date: "January 2024",
      rating: 5,
      image: "/lovable-uploads/patient2.jpg",
      quote: "Traveling to India for my heart surgery was the best decision. Dr. Moosa's expertise and the hospital's world-class facilities exceeded all expectations. The care coordination was flawless.",
      verified: true
    },
    {
      name: "Michael Thompson",
      location: "New York, USA",
      procedure: "Aortic Valve Replacement",
      date: "February 2024",
      rating: 5,
      image: "/lovable-uploads/patient3.jpg",
      quote: "After consulting multiple cardiologists worldwide, Dr. Moosa's approach and track record convinced me to choose Chennai. The minimally invasive technique meant faster recovery.",
      verified: true
    },
    {
      name: "Fatima Al-Zahra",
      location: "Riyadh, Saudi Arabia",
      procedure: "Pediatric Heart Surgery",
      date: "December 2023",
      rating: 5,
      image: "/lovable-uploads/patient4.jpg",
      quote: "Our 6-year-old daughter's congenital heart defect was successfully corrected by Dr. Moosa. His gentle approach with children and clear communication gave us confidence throughout.",
      verified: true
    },
    {
      name: "Robert Chen",
      location: "Singapore",
      procedure: "CABG Surgery",
      date: "November 2023",
      rating: 5,
      image: "/lovable-uploads/patient5.jpg",
      quote: "Dr. Moosa's pioneering techniques in beating heart surgery made my recovery remarkably smooth. The international patient services were outstanding from arrival to departure.",
      verified: true
    },
    {
      name: "Maria Santos",
      location: "Manila, Philippines",
      procedure: "Heart Transplant Evaluation",
      date: "October 2023",
      rating: 5,
      image: "/lovable-uploads/patient6.jpg",
      quote: "Dr. Moosa's comprehensive evaluation saved me from unnecessary transplant surgery. His alternative treatment approach has given me a new lease on life.",
      verified: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue-dark mb-4">
            Patient Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from patients worldwide who trusted Dr. Moosa with their cardiac care. 
            These verified testimonials reflect our commitment to excellence.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="text-gray-600">|</div>
            <div className="text-gray-600">500+ Successful Cases</div>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3 flex-1">
                  <h4 className="font-semibold text-medical-blue-dark">{testimonial.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span>{testimonial.location}</span>
                    {testimonial.verified && (
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${star <= testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <div className="ml-2 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-3 w-3" />
                  <span>{testimonial.date}</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Quote className="h-4 w-4 text-medical-blue" />
                  <span className="text-sm font-medium text-medical-blue">{testimonial.procedure}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="border-t pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Treatment Outcome</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Successful
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <div className="bg-medical-gray p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-medical-blue-dark mb-2">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-4">
              Have you been treated by Dr. Moosa? We'd love to hear about your experience.
            </p>
            <button className="bg-medical-blue hover:bg-medical-blue-dark text-white px-6 py-2 rounded-sm transition-colors">
              Submit Your Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
