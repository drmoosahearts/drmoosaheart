
import React, { useState, useEffect } from 'react';
import { Search, Target, TrendingUp, Award } from 'lucide-react';

interface SEOMetrics {
  titleLength: number;
  descriptionLength: number;
  keywordDensity: number;
  readabilityScore: number;
  internalLinks: number;
  externalLinks: number;
}

interface SEOContentOptimizerProps {
  content: string;
  targetKeywords: string[];
  onOptimizationSuggestions?: (suggestions: string[]) => void;
}

const SEOContentOptimizer: React.FC<SEOContentOptimizerProps> = ({
  content,
  targetKeywords,
  onOptimizationSuggestions
}) => {
  const [metrics, setMetrics] = useState<SEOMetrics>({
    titleLength: 0,
    descriptionLength: 0,
    keywordDensity: 0,
    readabilityScore: 0,
    internalLinks: 0,
    externalLinks: 0
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    analyzeContent();
  }, [content, targetKeywords]);

  const analyzeContent = () => {
    const wordCount = content.split(/\s+/).length;
    const keywordCount = targetKeywords.reduce((count, keyword) => {
      const regex = new RegExp(keyword, 'gi');
      return count + (content.match(regex) || []).length;
    }, 0);

    const keywordDensity = wordCount > 0 ? (keywordCount / wordCount) * 100 : 0;
    
    // Simple readability score based on sentence length and word complexity
    const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const avgSentenceLength = wordCount / sentences.length || 0;
    const readabilityScore = Math.max(0, 100 - avgSentenceLength * 2);

    // Count links
    const internalLinks = (content.match(/href="\/[^"]*"/g) || []).length;
    const externalLinks = (content.match(/href="https?:\/\/[^"]*"/g) || []).length;

    const newMetrics = {
      titleLength: content.length,
      descriptionLength: content.length,
      keywordDensity: Math.round(keywordDensity * 100) / 100,
      readabilityScore: Math.round(readabilityScore),
      internalLinks,
      externalLinks
    };

    setMetrics(newMetrics);
    generateSuggestions(newMetrics);
  };

  const generateSuggestions = (currentMetrics: SEOMetrics) => {
    const newSuggestions: string[] = [];

    if (currentMetrics.keywordDensity < 1) {
      newSuggestions.push('Increase keyword density to 1-3% for better SEO performance');
    } else if (currentMetrics.keywordDensity > 5) {
      newSuggestions.push('Reduce keyword density to avoid keyword stuffing penalties');
    }

    if (currentMetrics.readabilityScore < 60) {
      newSuggestions.push('Improve readability by using shorter sentences and simpler words');
    }

    if (currentMetrics.internalLinks < 3) {
      newSuggestions.push('Add more internal links to improve site navigation and SEO');
    }

    if (currentMetrics.externalLinks === 0) {
      newSuggestions.push('Consider adding authoritative external links to enhance credibility');
    }

    // Medical content specific suggestions
    newSuggestions.push('Include patient testimonials and success stories for trust building');
    newSuggestions.push('Add FAQ sections for common medical questions to capture long-tail searches');
    newSuggestions.push('Include cost information and comparison data for medical tourism');

    setSuggestions(newSuggestions);
    
    if (onOptimizationSuggestions) {
      onOptimizationSuggestions(newSuggestions);
    }
  };

  const getScoreColor = (score: number, thresholds: { good: number; fair: number }) => {
    if (score >= thresholds.good) return 'text-green-600';
    if (score >= thresholds.fair) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-medical-blue/10 p-2 rounded-lg">
          <Search className="h-6 w-6 text-medical-blue" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">SEO Content Analysis</h3>
      </div>

      {/* SEO Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-medical-blue mb-1">
            {metrics.keywordDensity}%
          </div>
          <div className="text-sm text-gray-600">Keyword Density</div>
          <div className={`text-xs mt-1 ${getScoreColor(metrics.keywordDensity, { good: 1, fair: 0.5 })}`}>
            {metrics.keywordDensity >= 1 && metrics.keywordDensity <= 3 ? 'Optimal' : 
             metrics.keywordDensity > 3 ? 'Too High' : 'Too Low'}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-medical-blue mb-1">
            {metrics.readabilityScore}
          </div>
          <div className="text-sm text-gray-600">Readability</div>
          <div className={`text-xs mt-1 ${getScoreColor(metrics.readabilityScore, { good: 70, fair: 50 })}`}>
            {metrics.readabilityScore >= 70 ? 'Good' : 
             metrics.readabilityScore >= 50 ? 'Fair' : 'Poor'}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-medical-blue mb-1">
            {metrics.internalLinks}
          </div>
          <div className="text-sm text-gray-600">Internal Links</div>
          <div className={`text-xs mt-1 ${getScoreColor(metrics.internalLinks, { good: 3, fair: 1 })}`}>
            {metrics.internalLinks >= 3 ? 'Good' : 
             metrics.internalLinks >= 1 ? 'Fair' : 'Poor'}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-medical-blue mb-1">
            {metrics.externalLinks}
          </div>
          <div className="text-sm text-gray-600">External Links</div>
          <div className={`text-xs mt-1 ${getScoreColor(metrics.externalLinks, { good: 2, fair: 1 })}`}>
            {metrics.externalLinks >= 2 ? 'Good' : 
             metrics.externalLinks >= 1 ? 'Fair' : 'Poor'}
          </div>
        </div>
      </div>

      {/* Optimization Suggestions */}
      <div className="border-t pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-5 w-5 text-coral-500" />
          <h4 className="font-semibold text-gray-800">Optimization Suggestions</h4>
        </div>
        
        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <TrendingUp className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">{suggestion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Medical SEO Best Practices */}
      <div className="border-t pt-6 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-green-600" />
          <h4 className="font-semibold text-gray-800">Medical SEO Best Practices</h4>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h5 className="font-medium text-gray-700">Content Optimization</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Include medical credentials and certifications</li>
              <li>• Add patient success stories and testimonials</li>
              <li>• Explain procedures in simple, understandable terms</li>
              <li>• Include before/after images where appropriate</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h5 className="font-medium text-gray-700">Trust Signals</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Display hospital accreditations (JCI, NABH)</li>
              <li>• Show real patient reviews and ratings</li>
              <li>• Include contact information and emergency numbers</li>
              <li>• Add insurance and payment information</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOContentOptimizer;
