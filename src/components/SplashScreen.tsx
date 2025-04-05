
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Set a timeout to start fading the splash screen after 4 seconds
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 4000);

    // Set a timeout to complete the animation after fade-out (4s + 1s for fade)
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 5000);

    // Clean up timers
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-medical-blue flex items-center justify-center z-50 transition-opacity duration-1000 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-lg mx-auto text-center px-4">
        <div className="flex justify-center mb-4">
          <img 
            src="/lovable-uploads/c3c9eb4d-5b2d-4995-9c87-f4c88209fdd4.png" 
            alt="Dr. Moosa Heart Logo" 
            className="w-32 h-32 mx-auto"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-playfair">
          Dr. M.K. Moosa Kunhi
        </h1>
        <dotlottie-player 
          src="https://lottie.host/85bedc86-399c-46a1-8d59-192e512c3d46/VPEoqhRMXz.lottie" 
          background="transparent" 
          speed="1" 
          style={{ width: "280px", height: "280px", maxWidth: "100%" }} 
          loop 
          autoplay
          className="mx-auto"
        ></dotlottie-player>
        <p className="text-white text-lg md:text-xl">Cardiac Surgery Specialist</p>
      </div>
    </div>
  );
};

export default SplashScreen;
