
import React from 'react';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  image: string;
  slug: string;
  keywords: string[];
}

const BlogSection: React.FC = () => {
  const featuredPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Understanding Beating Heart Surgery: A Revolutionary Approach',
      excerpt: 'Learn about the groundbreaking technique that allows cardiac surgery without stopping the heart, reducing complications and recovery time.',
      category: 'Procedures',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      image: '/lovable-uploads/blog-beating-heart.jpg',
      slug: 'understanding-beating-heart-surgery',
      keywords: ['beating heart surgery', 'cardiac surgery without stopping heart', 'minimally invasive cardiac surgery']
    },
    {
      id: '2',
      title: 'Congenital Heart Disease: Early Detection and Treatment Options',
      excerpt: 'Comprehensive guide to identifying and treating congenital heart defects in children and adults.',
      category: 'Education',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      image: '/lovable-uploads/blog-congenital.jpg',
      slug: 'congenital-heart-disease-guide',
      keywords: ['congenital heart disease', 'pediatric cardiac surgery', 'heart defects children']
    },
    {
      id: '3',
      title: 'Medical Tourism for Cardiac Surgery: Why Choose India',
      excerpt: 'Discover why international patients choose India for world-class cardiac care at affordable costs.',
      category: 'Medical Tourism',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      image: '/lovable-uploads/blog-medical-tourism.jpg',
      slug: 'medical-tourism-cardiac-surgery-india',
      keywords: ['medical tourism India', 'cardiac surgery cost India', 'international patients cardiac surgery']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Heart Health & Surgery Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, patient education, and the latest advances in cardiac surgery from Dr. Moosa Kunhi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <span className="bg-coral-100 text-coral-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-coral-600 hover:text-coral-700 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 bg-medical-blue hover:bg-medical-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
