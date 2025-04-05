
import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const SurgicalGallery = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const surgicalImages = [
    {
      src: "/lovable-uploads/d930c800-b764-4b79-8124-b2548b232add.png",
      alt: "Dr. Moosa during heart surgery with surgical loupe"
    },
    {
      src: "/lovable-uploads/d8af5afe-808f-4886-8d69-fbb27a110a72.png", 
      alt: "Dr. Moosa with his Surgical Team"
    },
    {
      src: "/lovable-uploads/99e2f5ec-fc30-489e-9a73-cbe1ca614e72.png",
      alt: "Dr. Moosa with surgical team in operating room"
    },
    {
      src: "/lovable-uploads/ec84a4c5-cce6-4b94-aade-a3921372c124.png",
      alt: "Dr. Moosa performing delicate heart surgery"
    },
    {
      src: "/lovable-uploads/d729a8f6-ccb9-4960-88af-f474af2c254c.png",
      alt: "Dr. Moosa with infant patient after successful heart surgery"
    },
    {
      src: "/lovable-uploads/72a80595-47c7-4efb-9918-cfa9ffc23722.png",
      alt: "Dr. Moosa performing precise cardiac surgery"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setActiveImage(imageSrc);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-16 bg-medical-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-blue mb-6">In The Operating Room</h2>
          <div className="w-40 h-1 bg-medical-teal mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. Moosa Kunhi's surgical expertise on display. With precision and care, 
            he has performed over 16,000 heart surgeries with a remarkable 99.7% success rate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {surgicalImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-sm hover:shadow-md transition-shadow duration-300 cursor-pointer bg-white"
              onClick={() => openLightbox(image.src)}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-3 border-t border-gray-100">
                <p className="text-sm text-gray-700">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {activeImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-medical-gold p-2 rounded-full"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <img 
              src={activeImage} 
              alt="Enlarged surgical image" 
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SurgicalGallery;
