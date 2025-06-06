
import { useEffect, useState } from 'react';
import { Heart, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isFading, setIsFading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Faster loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 20;
      });
    }, 100);

    // Start fading after progress completes
    const fadeTimeout = setTimeout(() => {
      setIsFading(true);
    }, 800);

    // Complete the animation faster
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-medical-blue to-medical-blue-dark flex items-center justify-center z-50 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full max-w-lg mx-auto text-center px-4">
        {/* Enhanced Logo Animation */}
        <motion.div 
          className="relative mx-auto w-32 h-32 mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 rounded-full bg-coral-500/20 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full bg-coral-500/30 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute inset-4 rounded-full bg-coral-500/40 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="h-16 w-16 text-coral-400" fill="currentColor" />
            </motion.div>
          </div>
          
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ 
              y: [-5, 5, -5],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Stethoscope className="h-8 w-8 text-white/80" />
          </motion.div>
        </motion.div>
        
        {/* Enhanced Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-playfair">
            Dr. M.K. Moosa Kunhi
          </h1>
          
          <motion.p 
            className="text-coral-300 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Cardiac Surgery Specialist
          </motion.p>
        </motion.div>
        
        {/* Modern Progress Bar */}
        <motion.div 
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-white/10 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-white/20">
            <motion.div 
              className="bg-gradient-to-r from-coral-400 to-coral-500 h-full rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          <p className="text-white/70 text-sm mt-3">Loading your cardiac care experience...</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;
