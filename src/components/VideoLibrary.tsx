
import React, { useState } from 'react';
import { Play, Clock, User, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const videos = [
    {
      id: 'XSimd7zRRhU',
      title: 'Advanced Cardiac Surgery Techniques',
      duration: '12:45',
      category: 'Educational',
      thumbnail: `https://img.youtube.com/vi/XSimd7zRRhU/maxresdefault.jpg`,
      description: 'Learn about cutting-edge surgical procedures in cardiac care',
      views: '25K'
    },
    {
      id: 'onqtl-NGSOI',
      title: 'Patient Recovery Journey',
      duration: '8:30',
      category: 'Patient Stories',
      thumbnail: `https://img.youtube.com/vi/onqtl-NGSOI/maxresdefault.jpg`,
      description: 'Follow a patient\'s remarkable recovery after complex heart surgery',
      views: '18K'
    },
    {
      id: 'Bcf7Bvipesw',
      title: 'Beating Heart Surgery Explained',
      duration: '15:20',
      category: 'Procedures',
      thumbnail: `https://img.youtube.com/vi/Bcf7Bvipesw/maxresdefault.jpg`,
      description: 'Understanding the revolutionary beating heart surgical technique',
      views: '42K'
    },
    {
      id: 'OQNKp2wO970',
      title: 'Minimally Invasive Cardiac Procedures',
      duration: '10:15',
      category: 'Procedures',
      thumbnail: `https://img.youtube.com/vi/OQNKp2wO970/maxresdefault.jpg`,
      description: 'Modern approaches to cardiac surgery with minimal invasion',
      views: '31K'
    },
    {
      id: '6g2arr7a7ks',
      title: 'International Patient Experience',
      duration: '6:45',
      category: 'Patient Stories',
      thumbnail: `https://img.youtube.com/vi/6g2arr7a7ks/maxresdefault.jpg`,
      description: 'How international patients receive world-class cardiac care',
      views: '15K'
    },
    {
      id: 'U3GYE5w2Mnk',
      title: 'Congenital Heart Disease Treatment',
      duration: '14:30',
      category: 'Educational',
      thumbnail: `https://img.youtube.com/vi/U3GYE5w2Mnk/maxresdefault.jpg`,
      description: 'Comprehensive approach to treating congenital heart conditions',
      views: '28K'
    },
    {
      id: 'DoNqzDgCCQs',
      title: 'Emergency Cardiac Surgery Success',
      duration: '9:20',
      category: 'Patient Stories',
      thumbnail: `https://img.youtube.com/vi/DoNqzDgCCQs/maxresdefault.jpg`,
      description: 'Life-saving emergency surgery performed by Dr. Moosa',
      views: '22K'
    },
    {
      id: 'HPIcWxPP_RQ',
      title: 'Advanced Heart Valve Procedures',
      duration: '11:55',
      category: 'Procedures',
      thumbnail: `https://img.youtube.com/vi/HPIcWxPP_RQ/maxresdefault.jpg`,
      description: 'Latest techniques in heart valve repair and replacement',
      views: '35K'
    },
    {
      id: 'dWlcXuoeZR0',
      title: 'Pediatric Cardiac Surgery Excellence',
      duration: '13:10',
      category: 'Educational',
      thumbnail: `https://img.youtube.com/vi/dWlcXuoeZR0/maxresdefault.jpg`,
      description: 'Specialized care for children with heart conditions',
      views: '19K'
    }
  ];

  const categories = ['All', 'Patient Stories', 'Educational', 'Procedures'];

  const filteredVideos = activeCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const handleVideoClick = (videoId: string) => {
    window.open(`https://youtu.be/${videoId}`, '_blank');
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Educational Video Library
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive collection of educational videos, patient success stories, and procedural insights.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-coral-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-coral-50 hover:text-coral-600'
                }`}
              >
                <Filter className="h-4 w-4" />
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => handleVideoClick(video.id)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-coral-500 text-white p-4 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-coral-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {video.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-coral-600 transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <User className="h-4 w-4" />
                      <span>{video.views} views</span>
                    </div>
                    
                    <span className="text-coral-600 font-medium text-sm group-hover:text-coral-700 transition-colors">
                      Watch Now →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No videos found in this category.</p>
          </div>
        )}

        {/* YouTube Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Subscribe for More Content</h3>
            <p className="text-coral-100 mb-6">
              Stay updated with the latest educational videos and patient success stories.
            </p>
            <button className="bg-white text-coral-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit YouTube Channel
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoLibrary;
