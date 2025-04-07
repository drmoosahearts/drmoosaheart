import { useEffect, useState } from 'react';
interface SplashScreenProps {
  onComplete: () => void;
}
const SplashScreen = ({
  onComplete
}: SplashScreenProps) => {
  const [isFading, setIsFading] = useState<boolean>(false);
  useEffect(() => {
    // Set a timeout to start fading the splash screen after 2 seconds (reduced from 4s)
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Set a timeout to complete the animation after fade-out (2s + 0.5s for fade)
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 2500);

    // Clean up timers
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);
  return <div className={`fixed inset-0 bg-medical-blue flex items-center justify-center z-50 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-lg mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-playfair">
          Dr. M.K. Moosa Kunhi
        </h1>
        
        {/* Modern animation replacing the logo */}
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-medical-teal opacity-20 animate-pulse"></div>
          <div className="absolute inset-4 rounded-full bg-medical-teal opacity-30 animate-pulse" style={{
          animationDelay: '0.5s'
        }}></div>
          <div className="absolute inset-8 rounded-full bg-medical-teal opacity-40 animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <div className="absolute inset-0 flex items-center justify-center mx-0">
            <div className="text-white text-4xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-heartbeat">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
          </div>
        </div>
        
        <p className="text-white text-lg md:text-xl mt-4">Cardiac Surgery Specialist</p>
      </div>
    </div>;
};
export default SplashScreen;