
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isFading, setIsFading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    // Start fading after progress completes
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 1800);

    // Complete the animation
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-medical-blue via-medical-blue-dark to-slate-900 flex items-center justify-center z-50 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-lg mx-auto text-center px-4">
        {/* Logo Animation */}
        <div className="relative mx-auto w-32 h-32 mb-8">
          <div className="absolute inset-0 rounded-full bg-coral-500/20 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-coral-500/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-4 rounded-full bg-coral-500/40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="h-16 w-16 text-coral-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-playfair">
          Dr. M.K. Moosa Kunhi
        </h1>
        
        <p className="text-coral-300 text-lg mb-8">Cardiac Surgery Specialist</p>
        
        {/* Modern Progress Bar */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-coral-400 to-coral-500 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/60 text-sm mt-3">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
