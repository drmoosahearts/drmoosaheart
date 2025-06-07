
import React, { useState } from 'react';
import { Star, Play, MapPin, Calendar, Quote, ThumbsUp, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Testimonial {
  id: string;
  name: string;
  age: number;
  country: string;
  city: string;
  procedure: string;
  rating: number;
  date: string;
  testimonial: string;
  videoUrl?: string;
  beforeAfterImages?: {
    before: string;
    after: string;
  };
  outcome: string;
  verified: boolean;
  likes: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Al-Rashid',
    age: 52,
    country: 'UAE',
    city: 'Dubai',
    procedure: 'Beating Heart Bypass Surgery',
    rating: 5,
    date: '2024-05-15',
    testimonial: 'Dr. Moosa Kunhi saved my life with his revolutionary beating heart surgery. I was back to work in just 3 weeks, which would have been impossible with traditional surgery. The entire team at Aster Medcity was exceptional.',
    videoUrl: 'https://example.com/video1',
    outcome: 'Complete recovery, returned to work in 3 weeks',
    verified: true,
    likes: 45
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    age: 34,
    country: 'USA',
    city: 'New York',
    procedure: 'Valve Replacement',
    rating: 5,
    date: '2024-04-20',
    testimonial: 'I traveled from New York specifically for Dr. Moosa Kunhi\'s expertise. The medical tourism experience was seamless, and the results exceeded all expectations. My valve replacement was perfect.',
    outcome: 'Excellent valve function, no complications',
    verified: true,
    likes: 32
  },
  {
    id: '3',
    name: 'Mohammed Hassan',
    age: 8,
    country: 'Saudi Arabia',
    city: 'Riyadh',
    procedure: 'Congenital Heart Defect Repair',
    rating: 5,
    date: '2024-03-10',
    testimonial: 'Our son Mohammed had a complex congenital heart condition. Dr. Moosa Kunhi performed a miracle. Mohammed is now playing football like any normal child. We are forever grateful.',
    outcome: 'Complete repair, child leading normal active life',
    verified: true,
    likes: 67
  }
];

const EnhancedTestimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [filter, setFilter] = useState<'all' | 'video' | 'recent'>('all');

  const filteredTestimonials = testimonials.filter(testimonial => {
    if (filter === 'video') return testimonial.videoUrl;
    if (filter === 'recent') return new Date(testimonial.date) > new Date('2024-04-01');
    return true;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const handleShare = (testimonial: Testimonial) => {
    if (navigator.share) {
      navigator.share({
        title: `Patient Success Story - ${testimonial.procedure}`,
        text: testimonial.testimonial,
        url: window.location.href
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-medical-blue-light to-medical-teal-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real Patient Success Stories
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Over 16,000 successful surgeries and counting
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              onClick={() => setFilter('all')}
              className="bg-white text-medical-blue hover:bg-gray-100"
            >
              All Stories
            </Button>
            <Button
              variant={filter === 'video' ? 'default' : 'outline'}
              onClick={() => setFilter('video')}
              className="bg-white text-medical-blue hover:bg-gray-100"
            >
              Video Testimonials
            </Button>
            <Button
              variant={filter === 'recent' ? 'default' : 'outline'}
              onClick={() => setFilter('recent')}
              className="bg-white text-medical-blue hover:bg-gray-100"
            >
              Recent Stories
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-medical-blue">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      Age {testimonial.age} • {testimonial.city}, {testimonial.country}
                    </p>
                  </div>
                  {testimonial.verified && (
                    <Badge className="bg-green-100 text-green-800">Verified</Badge>
                  )}
                </div>

                <div className="mb-4">
                  <Badge variant="outline" className="mb-2">{testimonial.procedure}</Badge>
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm text-gray-600">
                      {new Date(testimonial.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-medical-blue opacity-20" />
                  <p className="text-gray-700 pl-4 italic">
                    {testimonial.testimonial.length > 150 
                      ? `${testimonial.testimonial.substring(0, 150)}...` 
                      : testimonial.testimonial}
                  </p>
                </div>

                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <p className="text-sm font-medium text-green-800">Outcome:</p>
                  <p className="text-sm text-green-700">{testimonial.outcome}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {testimonial.videoUrl && (
                      <Button size="sm" variant="outline" className="text-xs">
                        <Play className="h-3 w-3 mr-1" />
                        Video
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleShare(testimonial)}
                      className="text-xs"
                    >
                      <Share2 className="h-3 w-3 mr-1" />
                      Share
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <ThumbsUp className="h-3 w-3" />
                    {testimonial.likes}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Thousands of Satisfied Patients
            </h3>
            <div className="grid grid-cols-3 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-bold text-coral-300">16,000+</div>
                <div className="text-sm">Successful Surgeries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral-300">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-coral-300">50+</div>
                <div className="text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
