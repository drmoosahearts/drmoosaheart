
import { Newspaper, Award, ExternalLink, Video, FileText, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const MediaCoverage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  const newsMentions = [
    {
      id: 1,
      title: "Rare Cardiac Surgery",
      description: "Dr. Moosa Kunhi performed a rare cardiac surgery on a patient with renal failure. The patient, who was awaiting kidney transplantation, had severe damage to two heart valves.",
      source: "Times News Network",
      imageUrl: "/lovable-uploads/3b7598c6-8e96-4ebe-a97f-aafa4228d13a.png",
      link: null,
      type: "article"
    },
    {
      id: 2,
      title: "Award Recognition",
      description: "Dr. Moosa Kunhi's exceptional contributions to cardiac surgery have been recognized through various prestigious awards and featured in regional and national publications.",
      source: "Regional newspapers",
      imageUrl: "/lovable-uploads/f37bae88-9e87-4e3e-a1f1-b21fe61b1069.png",
      secondaryImage: "/lovable-uploads/2594770f-ea52-46e0-a866-ec02e003c325.png",
      link: null,
      type: "award"
    },
    {
      id: 3,
      title: "Aster Medcity Doctors Save Life of 50-Year-Old Patient",
      description: "A team led by Dr. Moosa Kunhi saved a patient whose heart's pumping power was just 15%.",
      source: "Aster Hospitals",
      link: "https://www.asterhospitals.in/blogs-events-news/aster-medcity-kochi/aster-medcity-doctors-saves-life-of-50-year-old-patient-hearts-pumping-power-just-15",
      type: "article"
    },
    {
      id: 4,
      title: "Dubai Boy Undergoes Rare Surgery in Kerala",
      description: "Dr. Moosa Kunhi performed a life-saving surgery on a young boy from Dubai at Aster Medcity in Kerala.",
      source: "Gulf Times",
      link: "https://www.gulf-times.com/story/504680/dubai-boy-undergoes-rare-surgery-in-kerala",
      type: "article"
    },
    {
      id: 5,
      title: "How Induced Death by Cooling Saved a Two-Year-Old Boy's Life",
      description: "An innovative cooling technique used by Dr. Moosa Kunhi saved a young boy's life during a complex cardiac procedure.",
      source: "Scroll.in",
      link: "https://amp.scroll.in/article/813225/how-induced-death-by-cooling-saved-a-two-year-old-boys-life",
      type: "article"
    },
    {
      id: 6,
      title: "Surgery on Minor Heart Attack Patient",
      description: "Dr. Moosa Kunhi conducted a successful surgery on a patient who had suffered a minor heart attack.",
      source: "Daijiworld",
      link: "https://www.daijiworld.com/news/newsDisplay?newsID=1079927",
      type: "article"
    },
    {
      id: 7,
      title: "Injury to the Heart: Emergency Surgery Saves Boy",
      description: "A life-saving emergency surgery performed by Dr. Moosa Kunhi saved a young boy with a heart injury.",
      source: "Times of India",
      link: "https://timesofindia.indiatimes.com/city/mangaluru/injury-to-the-heart-emergency-surgery-saves-boy/articleshow/86760162.cms",
      type: "article"
    },
    {
      id: 8,
      title: "28-Year-Old Kerala Woman Receives New Lease of Life",
      description: "A high-risk open heart surgery conducted by Dr. Moosa Kunhi gave a new lease on life to a young woman from Kerala.",
      source: "The New Indian Express",
      link: "https://www.newindianexpress.com/amp/story/good-news/2020/Sep/25/28-year-old-kerala-woman-receives-new-lease-of-life-after-high-risk-open-heart-surgery-2201796.html",
      type: "article"
    },
    {
      id: 9,
      title: "Bypass Surgery Success Story",
      description: "A successful bypass surgery performed by Dr. Moosa Kunhi at Aster Medcity helped a patient recover completely.",
      source: "Onmanorama",
      link: "https://www.onmanorama.com/lifestyle/health/2019/10/25/bypass-surgery-hassan-moosa-kunhi-aster-medicity.html",
      type: "article"
    },
    {
      id: 10,
      title: "Unity Hospital Doctors Successfully Remove Large Thymus Tumor",
      description: "Dr. Moosa Kunhi led a team that successfully removed a large thymus tumor from a patient.",
      source: "Mangalore Today",
      link: "https://www.mangaloretoday.com/mainnewsprint/Unity-Hospital-doctors-successfully-removed-large-thymus-tumor.html",
      type: "article"
    },
    {
      id: 11,
      title: "Rare Surgery to Remove Blood Clot in Heart",
      description: "A rare surgical procedure performed by Dr. Moosa Kunhi saved a 45-year-old man with a blood clot in his heart.",
      source: "Times of India",
      link: "https://timesofindia.indiatimes.com/city/kochi/rare-surgery-to-remove-blood-clot-in-heart-saves-45-year-old-man/amp_articleshow/59610721.cms",
      type: "article"
    },
    {
      id: 12,
      title: "Giant Thymus Tumor Removed from 37-Year-Old Patient",
      description: "Dr. Moosa Kunhi and team at Unity Hospital, Mangalore successfully removed a giant thymus tumor from a patient.",
      source: "Varthabharati",
      link: "https://english.varthabharati.in/karavali/giant-thymus-tumor-removed-from-a-37-year-old-patient-at-unity-hospital-mangalore",
      type: "article"
    },
    {
      id: 13,
      title: "Expert Cardiac Care - Video Feature",
      description: "Dr. Moosa Kunhi discusses advanced cardiac care procedures and his approach to patient treatment.",
      source: "YouTube",
      link: "https://youtu.be/XSimd7zRRhU?si=QOJD0MrnHt5Etdpw",
      type: "video"
    }
  ];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsMentions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(newsMentions.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of section
    document.getElementById('media-coverage')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Render pagination numbers
  const renderPaginationNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(
      <PaginationItem key="page-1">
        <PaginationLink 
          onClick={() => handlePageChange(1)} 
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // If there are many pages, add ellipsis and show a few pages around current page
    if (totalPages > 5) {
      // If current page is not near the beginning, show ellipsis
      if (currentPage > 3) {
        pages.push(
          <PaginationItem key="ellipsis-1">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) { // Skip first and last pages (already handled)
          pages.push(
            <PaginationItem key={`page-${i}`}>
              <PaginationLink 
                onClick={() => handlePageChange(i)} 
                isActive={currentPage === i}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      }
      
      // If current page is not near the end, show ellipsis
      if (currentPage < totalPages - 2) {
        pages.push(
          <PaginationItem key="ellipsis-2">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    } else {
      // If not many pages, show all page numbers
      for (let i = 2; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={`page-${i}`}>
            <PaginationLink 
              onClick={() => handlePageChange(i)} 
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    
    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={`page-${totalPages}`}>
          <PaginationLink 
            onClick={() => handlePageChange(totalPages)} 
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return pages;
  };

  // Function to render the news item card
  const renderNewsItem = (item: any) => {
    const getIcon = (type: string) => {
      switch (type) {
        case 'video':
          return <Video className="h-6 w-6 text-medical-teal" />;
        case 'award':
          return <Award className="h-6 w-6 text-medical-teal" />;
        default:
          return <Newspaper className="h-6 w-6 text-medical-teal" />;
      }
    };

    return (
      <Card key={item.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <CardHeader className="p-4 bg-medical-gray">
          <div className="flex items-center gap-3">
            {getIcon(item.type)}
            <CardTitle className="text-lg font-bold text-medical-blue-dark">{item.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-700 mb-3">{item.description}</p>
          
          {item.imageUrl && !item.secondaryImage && (
            <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-lg mb-3">
              <img 
                src={item.imageUrl} 
                alt={`News article about ${item.title}`}
                className="w-full h-auto"
              />
            </div>
          )}
          
          {item.imageUrl && item.secondaryImage && (
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-lg">
                <img 
                  src={item.imageUrl} 
                  alt={`News article about ${item.title}`}
                  className="w-full h-auto"
                />
              </div>
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-lg">
                <img 
                  src={item.secondaryImage} 
                  alt={`News article about ${item.title}`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
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
              {item.type === 'video' ? 'Watch Video' : 'Read Article'}
              <ExternalLink size={14} />
            </a>
          )}
        </CardFooter>
      </Card>
    );
  };

  // Render news mentions in a table for mobile view
  const renderMobileNewsList = () => {
    return (
      <div className="space-y-4 md:hidden">
        {currentItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            <div className="bg-medical-gray p-3 flex items-center gap-2">
              {item.type === 'video' ? (
                <Video size={18} className="text-medical-teal" />
              ) : item.type === 'award' ? (
                <Award size={18} className="text-medical-teal" />
              ) : (
                <Newspaper size={18} className="text-medical-teal" />
              )}
              <h3 className="font-bold text-medical-blue-dark">{item.title}</h3>
            </div>
            <div className="p-3">
              <p className="text-sm text-gray-700 mb-2">{item.description}</p>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500">{item.source}</span>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1 text-medical-blue"
                  >
                    View
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Pagination component
  const PaginationEllipsis = ({className, ...props}: React.ComponentProps<"span">) => (
    <span
      aria-hidden
      className={`flex h-9 w-9 items-center justify-center ${className}`}
      {...props}
    >
      ...
      <span className="sr-only">More pages</span>
    </span>
  );

  return (
    <section className="py-16 bg-white" id="media-coverage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">In The News</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. Moosa Kunhi's groundbreaking surgeries and contributions to cardiac care have been featured in numerous news publications. Explore these media mentions highlighting his achievements and innovations.
          </p>
        </div>

        {/* Mobile view - list format */}
        {renderMobileNewsList()}

        {/* Desktop view - grid format */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
          {currentItems.map(item => renderNewsItem(item))}
        </div>

        {/* Video feature section */}
        <div className="bg-medical-blue text-white rounded-lg overflow-hidden shadow-xl mb-12">
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

        {/* News coverage statistics */}
        <div className="bg-medical-gray p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-medical-teal mb-2">{newsMentions.length}+</div>
              <div className="text-medical-blue-dark font-medium">Major News Features</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-teal mb-2">6+</div>
              <div className="text-medical-blue-dark font-medium">International Publications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-medical-teal mb-2">10+</div>
              <div className="text-medical-blue-dark font-medium">Years of Media Recognition</div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>
              )}
              
              {renderPaginationNumbers()}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default MediaCoverage;
