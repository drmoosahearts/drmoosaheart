
import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  image: string;
  slug: string;
  keywords: string[];
  author: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const { slug } = useParams();

  // Mock blog posts data - in real app this would come from CMS or API
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Understanding Beating Heart Surgery: A Revolutionary Approach',
      content: `
        <h2>What is Beating Heart Surgery?</h2>
        <p>Beating heart surgery, also known as off-pump cardiac surgery, represents one of the most significant advances in cardiac surgery in recent decades. Unlike traditional heart surgery where the heart is stopped and a heart-lung machine takes over circulation, beating heart surgery allows the surgeon to operate on a beating heart.</p>
        
        <h3>How Does It Work?</h3>
        <p>During beating heart surgery, special stabilizing devices are used to steady the specific area of the heart being operated on while the rest of the heart continues to beat normally. This technique requires exceptional skill and precision from the surgical team.</p>
        
        <h3>Benefits of Beating Heart Surgery</h3>
        <ul>
          <li><strong>Reduced Complications:</strong> Lower risk of stroke, kidney problems, and bleeding</li>
          <li><strong>Faster Recovery:</strong> Patients typically experience shorter hospital stays</li>
          <li><strong>Less Trauma:</strong> Reduced inflammatory response compared to conventional surgery</li>
          <li><strong>Better Outcomes:</strong> Particularly beneficial for high-risk patients</li>
        </ul>
        
        <h3>Who is a Candidate?</h3>
        <p>Beating heart surgery is particularly beneficial for:</p>
        <ul>
          <li>Elderly patients</li>
          <li>Patients with kidney disease</li>
          <li>Those with previous strokes</li>
          <li>Patients with multiple medical conditions</li>
        </ul>
        
        <h3>Dr. Moosa Kunhi's Expertise</h3>
        <p>Dr. M.K. Moosa Kunhi is recognized as a pioneer of beating heart surgery in India, having performed thousands of these procedures with exceptional success rates. His expertise in this technique has made him a preferred choice for international patients seeking advanced cardiac care.</p>
      `,
      excerpt: 'Learn about the groundbreaking technique that allows cardiac surgery without stopping the heart, reducing complications and recovery time.',
      category: 'Procedures',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      image: '/lovable-uploads/blog-beating-heart.jpg',
      slug: 'understanding-beating-heart-surgery',
      keywords: ['beating heart surgery', 'cardiac surgery without stopping heart', 'minimally invasive cardiac surgery'],
      author: 'Dr. M.K. Moosa Kunhi',
      tags: ['Cardiac Surgery', 'Innovation', 'Patient Care']
    },
    {
      id: '2',
      title: 'Congenital Heart Disease: Early Detection and Treatment Options',
      content: `
        <h2>Understanding Congenital Heart Disease</h2>
        <p>Congenital heart disease (CHD) refers to heart problems that are present at birth. These conditions affect the structure and function of the heart, ranging from simple defects with no symptoms to complex problems that are life-threatening.</p>
        
        <h3>Types of Congenital Heart Defects</h3>
        <h4>Septal Defects</h4>
        <ul>
          <li><strong>Atrial Septal Defect (ASD):</strong> A hole in the wall between the heart's two upper chambers</li>
          <li><strong>Ventricular Septal Defect (VSD):</strong> A hole in the wall between the two lower chambers</li>
        </ul>
        
        <h4>Obstruction Defects</h4>
        <ul>
          <li><strong>Pulmonary Valve Stenosis:</strong> Narrowing of the pulmonary valve</li>
          <li><strong>Aortic Valve Stenosis:</strong> Narrowing of the aortic valve</li>
        </ul>
        
        <h4>Complex Defects</h4>
        <ul>
          <li><strong>Tetralogy of Fallot:</strong> Combination of four heart defects</li>
          <li><strong>Hypoplastic Left Heart Syndrome:</strong> Underdevelopment of the left side of the heart</li>
        </ul>
        
        <h3>Signs and Symptoms</h3>
        <p>Symptoms can vary greatly depending on the type and severity of the defect:</p>
        <ul>
          <li>Blue coloring of the skin, lips, and fingernails (cyanosis)</li>
          <li>Fast breathing or breathlessness</li>
          <li>Poor feeding and failure to gain weight</li>
          <li>Fatigue and weakness</li>
          <li>Heart murmur</li>
        </ul>
        
        <h3>Treatment Options</h3>
        <p>Treatment depends on the type and severity of the defect. Options include:</p>
        <ul>
          <li><strong>Monitoring:</strong> Some mild defects may only require regular check-ups</li>
          <li><strong>Medications:</strong> To help the heart work more efficiently</li>
          <li><strong>Catheter Procedures:</strong> Minimally invasive treatments</li>
          <li><strong>Surgery:</strong> Open-heart surgery to repair complex defects</li>
        </ul>
        
        <h3>Dr. Moosa Kunhi's Approach</h3>
        <p>With extensive experience in pediatric and adult congenital heart surgery, Dr. Moosa Kunhi provides comprehensive care for patients of all ages. His expertise includes complex reconstructive procedures and minimally invasive techniques that offer the best outcomes for patients with congenital heart disease.</p>
      `,
      excerpt: 'Comprehensive guide to identifying and treating congenital heart defects in children and adults.',
      category: 'Education',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      image: '/lovable-uploads/blog-congenital.jpg',
      slug: 'congenital-heart-disease-guide',
      keywords: ['congenital heart disease', 'pediatric cardiac surgery', 'heart defects children'],
      author: 'Dr. M.K. Moosa Kunhi',
      tags: ['Congenital Heart Disease', 'Pediatric Care', 'Heart Defects']
    },
    {
      id: '3',
      title: 'Medical Tourism for Cardiac Surgery: Why Choose India',
      content: `
        <h2>India: A Global Destination for Cardiac Care</h2>
        <p>India has emerged as a leading destination for medical tourism, particularly for cardiac surgery. With world-class facilities, internationally trained surgeons, and cost-effective treatment options, India offers an attractive alternative for patients seeking high-quality cardiac care.</p>
        
        <h3>Cost Advantages</h3>
        <p>The cost of cardiac surgery in India is significantly lower than in Western countries:</p>
        <ul>
          <li><strong>Bypass Surgery:</strong> $3,000-$8,000 vs $30,000-$100,000 in the US</li>
          <li><strong>Valve Replacement:</strong> $4,000-$10,000 vs $40,000-$120,000 in the US</li>
          <li><strong>Congenital Heart Surgery:</strong> $5,000-$15,000 vs $50,000-$200,000 in the US</li>
        </ul>
        
        <h3>Quality of Care</h3>
        <p>Indian cardiac centers offer:</p>
        <ul>
          <li>JCI-accredited hospitals</li>
          <li>Internationally trained surgeons</li>
          <li>State-of-the-art technology</li>
          <li>Success rates comparable to leading global centers</li>
        </ul>
        
        <h3>Why Choose Dr. Moosa Kunhi?</h3>
        <ul>
          <li><strong>Proven Track Record:</strong> 16,000+ successful surgeries</li>
          <li><strong>International Experience:</strong> Patients from 50+ countries</li>
          <li><strong>Advanced Techniques:</strong> Pioneer of beating heart surgery in India</li>
          <li><strong>Comprehensive Care:</strong> End-to-end patient support</li>
        </ul>
        
        <h3>Patient Support Services</h3>
        <p>Our international patient program includes:</p>
        <ul>
          <li>Medical visa assistance</li>
          <li>Airport pickup and drop-off</li>
          <li>Accommodation arrangements</li>
          <li>Language interpretation services</li>
          <li>24/7 patient coordination</li>
          <li>Post-surgery follow-up care</li>
        </ul>
        
        <h3>Success Stories</h3>
        <p>We have successfully treated patients from the UAE, Saudi Arabia, Oman, Kuwait, Qatar, UK, USA, and many other countries. Our patient testimonials speak to the quality of care and the positive outcomes achieved.</p>
        
        <h3>Getting Started</h3>
        <p>To begin your medical tourism journey with us:</p>
        <ol>
          <li>Send your medical reports for initial consultation</li>
          <li>Receive treatment plan and cost estimate</li>
          <li>Plan your travel with our assistance</li>
          <li>Arrive in India for world-class cardiac care</li>
        </ol>
      `,
      excerpt: 'Discover why international patients choose India for world-class cardiac care at affordable costs.',
      category: 'Medical Tourism',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      image: '/lovable-uploads/blog-medical-tourism.jpg',
      slug: 'medical-tourism-cardiac-surgery-india',
      keywords: ['medical tourism India', 'cardiac surgery cost India', 'international patients cardiac surgery'],
      author: 'Dr. M.K. Moosa Kunhi',
      tags: ['Medical Tourism', 'International Patients', 'Cost Savings']
    }
  ];

  if (slug) {
    // Individual blog post view
    const post = blogPosts.find(p => p.slug === slug);
    
    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-coral-600 hover:text-coral-700">
              Return to Blog
            </Link>
          </div>
        </div>
      );
    }

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.excerpt,
      "image": `https://drmoosakunhi.com${post.image}`,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Dr. M.K. Moosa Kunhi",
        "logo": {
          "@type": "ImageObject",
          "url": "https://drmoosakunhi.com/logo.png"
        }
      },
      "datePublished": post.publishDate,
      "dateModified": post.publishDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://drmoosakunhi.com/blog/${post.slug}`
      }
    };

    return (
      <div className="min-h-screen bg-white">
        <SEO
          title={`${post.title} | Dr. M.K. Moosa Kunhi`}
          description={post.excerpt}
          keywords={post.keywords.join(', ')}
          url={`https://drmoosakunhi.com/blog/${post.slug}`}
          type="article"
          schemaData={articleSchema}
        />
        
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-coral-600 hover:text-coral-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <article className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
            
            <div className="mb-6">
              <span className="bg-coral-100 text-coral-700 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    <Tag className="h-3 w-3 inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Blog listing view
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Dr. M.K. Moosa Kunhi - Heart Health & Surgery Insights",
    "description": "Expert insights, patient education, and latest advances in cardiac surgery",
    "url": "https://drmoosakunhi.com/blog",
    "author": {
      "@type": "Person",
      "name": "Dr. M.K. Moosa Kunhi"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Heart Health & Surgery Insights | Dr. M.K. Moosa Kunhi Blog"
        description="Expert insights, patient education, and latest advances in cardiac surgery from Dr. M.K. Moosa Kunhi"
        keywords="cardiac surgery blog, heart health, medical education, beating heart surgery, congenital heart disease"
        url="https://drmoosakunhi.com/blog"
        schemaData={blogListSchema}
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Heart Health & Surgery Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, patient education, and the latest advances in cardiac surgery from Dr. Moosa Kunhi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
                
                <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
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
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
