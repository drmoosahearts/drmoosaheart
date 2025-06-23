
import React, { useState } from 'react';
import { Search, Filter, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdvancedSEO from '@/components/AdvancedSEO';
import VoiceSearchOptimizer from '@/components/VoiceSearchOptimizer';
import { useSEOOptimization } from '@/hooks/useSEOOptimization';
import { blogArticles } from '@/data/blogArticles';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const BlogListPage: React.FC = () => {
  const { seoData, isLoading } = useSEOOptimization();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  const categories = ['all', 'Procedures', 'Education', 'Medical Tourism', 'Pediatric', 'Prevention', 'Recovery'];

  const filteredArticles = blogArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const displayedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const faqData = [
    {
      question: "What topics are covered in the cardiac surgery blog?",
      answer: "Our blog covers cardiac surgery procedures, patient education, recovery tips, medical tourism information, and the latest advances in heart surgery."
    },
    {
      question: "How often is the blog updated?",
      answer: "We publish new articles weekly, covering the latest developments in cardiac surgery, patient stories, and educational content."
    },
    {
      question: "Can I ask questions about specific procedures?",
      answer: "Yes, you can contact us directly or schedule a consultation to discuss specific cardiac procedures and treatment options."
    }
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdvancedSEO
        title={seoData?.title}
        description={seoData?.description}
        keywords={seoData?.keywords}
        url={seoData?.canonicalUrl}
        breadcrumbs={seoData?.breadcrumbs}
        faqData={faqData}
      />
      
      <VoiceSearchOptimizer pageType="about" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-blue-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Heart Health & Surgery Insights
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Comprehensive cardiac surgery education, patient guides, and medical insights from Dr. M.K. Moosa Kunhi
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg inline-block">
              <p className="text-sm">
                {blogArticles.length}+ Articles • Updated Weekly • Expert Reviewed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles, procedures, conditions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {searchTerm && (
              <div className="mt-4">
                <p className="text-gray-600">
                  Found {filteredArticles.length} articles for "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        <Tag className="h-2 w-2 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    
                    <Link 
                      to={`/blog/${article.slug}`}
                      className="text-coral-600 hover:text-coral-700 font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === page
                        ? 'bg-medical-blue text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;
