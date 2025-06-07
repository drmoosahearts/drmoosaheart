
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import SEOSchema from '@/components/SEOSchema';
import { getArticleBySlug } from '@/data/blogArticles';
import { Button } from '@/components/ui/button';

const BlogPage: React.FC = () => {
  const { slug } = useParams();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const article = getArticleBySlug(slug);
  
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Article Not Found</h1>
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
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://drmoosakunhi.com${article.image}`,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. M.K. Moosa Kunhi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drmoosakunhi.com/logo.png"
      }
    },
    "datePublished": article.publishDate,
    "dateModified": article.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://drmoosakunhi.com/blog/${article.slug}`
    },
    "keywords": article.keywords.join(', ')
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${article.title} | Dr. M.K. Moosa Kunhi`}
        description={article.metaDescription}
        keywords={article.keywords.join(', ')}
        url={`https://drmoosakunhi.com/blog/${article.slug}`}
        type="article"
      />
      
      <SEOSchema 
        type="article" 
        data={{
          title: article.title,
          description: article.metaDescription,
          image: article.image,
          author: article.author,
          publishDate: article.publishDate,
          url: `https://drmoosakunhi.com/blog/${article.slug}`,
          category: article.category,
          keywords: article.keywords
        }} 
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
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
          
          <div className="mb-6">
            <span className="bg-coral-100 text-coral-700 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.publishDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
          </div>
          
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-700 italic">{article.excerpt}</p>
          </div>
          
          <div 
            className="prose prose-lg max-w-none mb-8 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-medical-blue [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mt-6 [&>h3]:mb-3 [&>h4]:text-lg [&>h4]:font-medium [&>h4]:text-gray-700 [&>h4]:mt-4 [&>h4]:mb-2 [&>p]:text-gray-700 [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:mb-4 [&>ul]:pl-6 [&>li]:mb-2 [&>li]:text-gray-700 [&>strong]:text-gray-900 [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
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

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-coral-50 to-medical-blue-50 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-medical-blue mb-4">
                Need Expert Cardiac Care?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                If you have questions about the procedures discussed in this article or need a consultation, 
                Dr. M.K. Moosa Kunhi is here to help with world-class cardiac surgery expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                  Schedule Consultation
                </Button>
                <Button variant="outline">
                  Download Patient Guide
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPage;
