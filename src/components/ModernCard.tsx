
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ModernCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  gradient?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const ModernCard: React.FC<ModernCardProps> = ({
  title,
  description,
  icon: Icon,
  image,
  gradient = 'from-white to-gray-50',
  className = '',
  children,
  href,
  onClick
}) => {
  const CardComponent = motion.div;

  const cardContent = (
    <CardComponent
      whileHover={{ 
        y: -4, 
        scale: 1.01
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative bg-gradient-to-br ${gradient} 
        rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
        transition-all duration-300 border border-gray-200/50
        backdrop-blur-sm hover:border-coral-300/30
        transform-gpu
        ${className}
      `}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
        <div style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 69, 124, 0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} className="w-full h-full"></div>
      </div>

      {image && (
        <div className="aspect-video overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="relative p-4 md:p-6 lg:p-8 z-10">
        {Icon && (
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-coral-500 to-coral-600 text-white rounded-xl md:rounded-2xl mb-4 md:mb-6 shadow-lg group-hover:shadow-coral-500/25 transition-shadow duration-300"
          >
            <Icon className="h-6 w-6 md:h-8 md:w-8" />
          </motion.div>
        )}
        
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-coral-600 transition-colors duration-300 leading-tight">
          {title}
        </h3>
        
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {children}
      </div>

      {/* Floating accent */}
      <motion.div
        className="absolute top-3 right-3 md:top-4 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-coral-400 rounded-full opacity-60 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Modern glow effect */}
      <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-r from-coral-500/20 via-medical-blue/20 to-coral-500/20 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
    </CardComponent>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {cardContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="block w-full text-left">
        {cardContent}
      </button>
    );
  }

  return cardContent;
};

export default ModernCard;
