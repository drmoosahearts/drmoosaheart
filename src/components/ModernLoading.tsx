
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ModernLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'pulse' | 'dots' | 'heart';
  message?: string;
}

const ModernLoading: React.FC<ModernLoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  message
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const containerClasses = {
    sm: 'gap-2 text-sm',
    md: 'gap-3 text-base',
    lg: 'gap-4 text-lg'
  };

  const renderSpinner = () => (
    <motion.div
      className={`${sizeClasses[size]} border-2 border-coral-200 border-t-coral-500 rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );

  const renderPulse = () => (
    <motion.div
      className={`${sizeClasses[size]} bg-coral-500 rounded-full`}
      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );

  const renderDots = () => (
    <div className="flex gap-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`w-2 h-2 bg-coral-500 rounded-full`}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  const renderHeart = () => (
    <motion.div
      className={`${sizeClasses[size]} text-coral-500`}
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Heart className="w-full h-full fill-current" />
    </motion.div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'pulse':
        return renderPulse();
      case 'dots':
        return renderDots();
      case 'heart':
        return renderHeart();
      default:
        return renderSpinner();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex flex-col items-center justify-center ${containerClasses[size]} text-gray-600`}
    >
      {renderVariant()}
      {message && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-medium text-center"
        >
          {message}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ModernLoading;
