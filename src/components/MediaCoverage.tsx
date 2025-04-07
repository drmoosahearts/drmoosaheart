import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { Newspaper, Award, ExternalLink, Video, Globe, Search, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const MediaCoverage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const carouselRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.2 });
  
  const newsMentions = [
    {
      id: 1,
      title: "Rare Cardiac Surgery",
      description: "Dr. Moosa Kunhi performed a rare cardiac surgery on a patient with renal failure. The patient, who was awaiting kidney transplantation, had severe damage to two heart valves.",
      source: "Times News Network",
      imageUrl: "/lovable-uploads/3b7598c6-8e96-4ebe-a97f-aafa4228d13a.png",
      link: null,
      type: "article",
      category: "surgery"
    },
    {
      id: 2,
      title: "Award Recognition",
      description: "Dr. Moosa Kunhi's exceptional contributions to cardiac surgery have been recognized through various prestigious awards and featured in regional and national publications.",
      source: "Regional newspapers",
      imageUrl: "/lovable-uploads/f37bae88-9e87-4e3e-a1f1-b21fe61b1069.png",
      secondaryImage: "/lovable-uploads/2594770f-ea52-46e0-a866-ec02e003c325.png",
      link: null,
      type: "award",
      category: "achievement"
    },
    {
      id: 3,
      title: "Aster Medcity Doctors Save Life of 50-Year-Old Patient",
      description: "A team led by Dr. Moosa Kunhi saved a patient whose heart's pumping power was just 15%.",
      source: "Aster Hospitals",
      link: "https://www.asterhospitals.in/blogs-events-news/aster-medcity-kochi/aster-medcity-doctors-saves-life-of-50-year-old-patient-hearts-pumping-power-just-15",
      type: "article",
      category: "surgery",
      featured: true
    },
    {
      id: 4,
      title: "Dubai Boy Undergoes Rare Surgery in Kerala",
      description: "Dr. Moosa Kunhi performed a life-saving surgery on a young boy from Dubai at Aster Medcity in Kerala.",
      source: "Gulf Times",
      link: "https://www.gulf-times.com/story/504680/dubai-boy-undergoes-rare-surgery-in-kerala",
      type: "article",
      category: "international",
      featured: true
    },
    {
      id: 5,
      title: "How Induced Death by Cooling Saved a Two-Year-Old Boy's Life",
      description: "An innovative cooling technique used by Dr. Moosa Kunhi saved a young boy's life during a complex cardiac procedure.",
      source: "Scroll.in",
      link: "https://amp.scroll.in/article/813225/how-induced-death-by-cooling-saved-a-two-year-old-boys-life",
      type: "article",
      category: "innovation",
      featured: true
    },
    {
      id: 6,
      title: "Surgery on Minor Heart Attack Patient",
      description: "Dr. Moosa Kunhi conducted a successful surgery on a patient who had suffered a minor heart attack.",
      source: "Daijiworld",
      link: "https://www.daijiworld.com/news/newsDisplay?newsID=1079927",
      type: "article",
      category: "surgery"
    },
    {
      id: 7,
      title: "Injury to the Heart: Emergency Surgery Saves Boy",
      description: "A life-saving emergency surgery performed by Dr. Moosa Kunhi saved a young boy with a heart injury.",
      source: "Times of India",
      link: "https://timesofindia.indiatimes.com/city/mangaluru/injury-to-the-heart-emergency-surgery-saves-boy/articleshow/86760162.cms",
      type: "article",
      category: "emergency"
    },
    {
      id: 8,
      title: "28-Year-Old Kerala Woman Receives New Lease of Life",
      description: "A high-risk open heart surgery conducted by Dr. Moosa Kunhi gave a new lease on life to a young woman from Kerala.",
      source: "The New Indian Express",
      link: "https://www.newindianexpress.com/amp/story/good-news/2020/Sep/25/28-year-old-kerala-woman-receives-new-lease-of-life-after-high-risk-open-heart-surgery-2201796.html",
      type: "article",
      category: "surgery"
    },
    {
      id: 9,
      title: "Bypass Surgery Success Story",
      description: "A successful bypass surgery performed by Dr. Moosa Kunhi at Aster Medcity helped a patient recover completely.",
      source: "Onmanorama",
      link: "https://www.onmanorama.com/lifestyle/health/2019/10/25/bypass-surgery-hassan-moosa-kunhi-aster-medicity.html",
      type: "article",
      category: "surgery"
    },
    {
      id: 10,
      title: "Unity Hospital Doctors Successfully Remove Large Thymus Tumor",
      description: "Dr. Moosa Kunhi led a team that successfully removed a large thymus tumor from a patient.",
      source: "Mangalore Today",
      link: "https://www.mangaloretoday.com/mainnewsprint/Unity-Hospital-doctors-successfully-removed-large-thymus-tumor.html",
      type: "article",
      category: "surgery"
    },
    {
      id: 11,
      title: "Rare Surgery to Remove Blood Clot in Heart",
      description: "A rare surgical procedure performed by Dr. Moosa Kunhi saved a 45-year-old man with a blood clot in his heart.",
      source: "Times of India",
      link: "https://timesofindia.indiatimes.com/city/kochi/rare-surgery-to-remove-blood-clot-in-heart-saves-45-year-old-man/amp_articleshow/59610721.cms",
      type: "article",
      category: "surgery"
    },
    {
      id: 12,
      title: "Giant Thymus Tumor Removed from 37-Year-Old Patient",
      description: "Dr. Moosa Kunhi and team at Unity Hospital, Mangalore successfully removed a giant thymus tumor from a patient.",
      source: "Varthabharati",
      link: "https://english.varthabharati.in/karavali/giant-thymus-tumor-removed-from-a-37-year-old-patient-at-unity-hospital-mangalore",
      type: "article",
      category: "surgery"
    },
    {
      id: 13,
      title: "Expert Cardiac Care - Video Feature",
      description: "Dr. Moosa Kunhi discusses advanced cardiac care procedures and his approach to patient treatment.",
      source: "YouTube",
      link: "https://youtu.be/XSimd7zRRhU?si=QOJD0MrnHt5Etdpw",
      type: "video",
      category: "feature",
      featured: true
    },
    {
      id: 14,
      title: "Dr. Moosa Kunhi Featured on Social Media",
      description: "A social media post highlighting Dr. Moosa Kunhi's contributions to cardiac surgery and patient care.",
      source: "Facebook",
      link: "https://www.facebook.com/share/r/1AE4Hgi7Sg/",
      type: "social",
      category: "feature"
    }
  ];

  // Get featured items
  const featuredItems = newsMentions.filter(item => item.featured);
  
  // Get all categories
  const allCategories = ["all", ...Array.from(new Set(newsMentions.map(item => item.category)))];
  
  // Filter items by category
  const filteredItems = activeCategory === "all" 
    ? newsMentions
    : newsMentions.filter(item => item.category === activeCategory);

  // Handle carousel navigation
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Function to get icon for news item
  const getItemIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="h-6 w-6" />;
      case 'award':
        return <Award className="h-6 w-6" />;
      case 'social':
        return <Globe className="h-6 w-6" />;
      default:
        return <Newspaper className="h-6 w-6" />;
    }
  };

  return (
    <section 
      className="py-16 bg-white" 
      id="media-coverage"
      ref={inViewRef}
    >
      <div className="container mx-auto px-4">
        <div 
          className={`text-center mb-12 transition-opacity duration-700 ${
            isInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">In The News</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. Moosa Kunhi's groundbreaking surgeries and contributions to cardiac care have been featured in numerous news publications. Explore these media mentions highlighting his achievements and innovations.
          </p>
        </div>

        {/* Featured Carousel */}
        <div className={`relative mb-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-medical-blue-dark">Featured Highlights</h3>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={scrollLeft}
                className="rounded-full"
              >
                <ArrowLeftCircle size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={scrollRight}
                className="rounded-full"
              >
                <ArrowRightCircle size={20} />
              </Button>
            </div>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {featuredItems.map((item) => (
              <div 
                key={item.id} 
                className="flex-none w-[300px] md:w-[350px]"
              >
                <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 bg-medical-gray">
                    <div className="flex items-center gap-3">
                      <span className="bg-medical-blue p-2 rounded-full text-white">
                        {getItemIcon(item.type)}
                      </span>
                      <CardTitle className="text-lg font-bold text-medical-blue-dark">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                  <CardFooter className="p-3 bg-gray-50 text-sm text-gray-500 flex justify-between items-center">
                    <span>{item.source}</span>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-medical-blue hover:text-medical-teal transition-colors"
                      >
                        {item.type === 'video' ? 'Watch' : 'Read More'}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Video feature section */}
        <div className={`bg-medical-blue text-white rounded-lg overflow-hidden shadow-xl mb-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Featured Video</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/80670cba-b70e-4db3-be7f-0cef3def222a.png" 
                    alt="Dr. Moosa Kunhi performing heart surgery" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Dr. Moosa Kunhi is renowned for his surgical precision and innovation in the operating room. 
                  With over 16,000 successful heart surgeries and a 99.7% success rate, his expertise has saved countless lives.
                </p>
                <p className="text-lg mb-6">
                  As one of the few surgeons in the world skilled in performing almost all types of cardiac surgeries with the highest success rates,
                  Dr. Moosa Kunhi has trained numerous cardiac surgeons who now practice worldwide.
                </p>
                <a 
                  href="https://youtu.be/XSimd7zRRhU?si=QOJD0MrnHt5Etdpw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-white text-medical-blue px-4 py-2 rounded hover:bg-gray-100 transition-colors"
                >
                  <Video size={18} />
                  Watch Video Feature
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed news collection */}
        <div className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-bold text-medical-blue-dark mb-4 md:mb-0">News Collection</h3>
            
            <div className="relative">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-flow-col auto-cols-max gap-2 overflow-x-auto p-1 max-w-full">
                  {allCategories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className="capitalize"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="overflow-hidden shadow-sm hover:shadow-md transition-shadow border-l-4 border-medical-blue"
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`p-2 rounded-full text-white ${
                      item.type === 'video' ? 'bg-red-500' :
                      item.type === 'award' ? 'bg-medical-gold' :
                      item.type === 'social' ? 'bg-blue-500' :
                      'bg-medical-blue'
                    }`}>
                      {getItemIcon(item.type)}
                    </span>
                    <CardTitle className="text-lg font-bold">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {item.source} | <span className="capitalize">{item.category}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </CardContent>
                <CardFooter className="p-3 bg-gray-50 flex justify-end">
                  {item.link && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-1">
                          <Search size={14} />
                          Preview
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <div className="bg-gray-100 p-4 rounded mb-4">
                            <p className="text-gray-700">{item.description}</p>
                            <p className="text-sm text-gray-500 mt-2">Source: {item.source}</p>
                          </div>
                          <div className="flex justify-end">
                            <a 
                              href={item.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-1 bg-medical-blue text-white px-4 py-2 rounded-sm hover:bg-medical-blue-dark transition-colors"
                            >
                              Visit Original Article
                              <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1 text-medical-blue hover:text-medical-teal transition-colors text-sm ml-2"
                    >
                      {item.type === 'video' ? 'Watch' : 'Read'}
                      <ExternalLink size={14} />
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* News coverage statistics */}
        <div className={`bg-medical-gray p-6 rounded-lg shadow-sm mt-12 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-medical-teal mb-2">{newsMentions.length}+</div>
              <div className="text-medical-blue-dark font-medium">Media Features</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-teal mb-2">6+</div>
              <div className="text-medical-blue-dark font-medium">International Publications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-teal mb-2">5+</div>
              <div className="text-medical-blue-dark font-medium">Video Features</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-teal mb-2">10+</div>
              <div className="text-medical-blue-dark font-medium">Years of Media Recognition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
