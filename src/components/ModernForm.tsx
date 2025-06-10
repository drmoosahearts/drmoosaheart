
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, CheckCircle, AlertCircle } from 'lucide-react';

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  success?: boolean;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
}

const ModernFormField: React.FC<FormFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  success,
  required,
  disabled,
  rows = 4
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  const getStatusIcon = () => {
    if (error) return <AlertCircle className="h-4 w-4 md:h-5 md:w-5 text-red-500" />;
    if (success && value) return <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500" />;
    return null;
  };

  const getStatusColor = () => {
    if (error) return 'border-red-300 focus:border-red-500 focus:ring-red-500/20';
    if (success && value) return 'border-green-300 focus:border-green-500 focus:ring-green-500/20';
    return 'border-gray-300 focus:border-coral-500 focus:ring-coral-500/20';
  };

  const fieldId = React.useId();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <label 
        htmlFor={fieldId}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {type === 'textarea' ? (
          <motion.textarea
            id={fieldId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg md:rounded-xl transition-all duration-300
              ${getStatusColor()}
              ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
              focus:outline-none focus:ring-2
              resize-none text-sm md:text-base
            `}
            whileFocus={{ scale: 1.005 }}
          />
        ) : (
          <motion.input
            id={fieldId}
            type={inputType}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full px-3 py-2 md:px-4 md:py-3 border rounded-lg md:rounded-xl transition-all duration-300
              ${getStatusColor()}
              ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'}
              focus:outline-none focus:ring-2 text-sm md:text-base
              ${type === 'password' ? 'pr-10 md:pr-12' : error || success ? 'pr-10 md:pr-12' : ''}
            `}
            whileFocus={{ scale: 1.005 }}
          />
        )}
        
        {/* Password toggle or status icon */}
        <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {type === 'password' && (
            <motion.button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
              ) : (
                <Eye className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
              )}
            </motion.button>
          )}
          
          {type !== 'password' && getStatusIcon()}
        </div>

        {/* Focus ring animation */}
        <AnimatePresence>
          {isFocused && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 rounded-lg md:rounded-xl border-2 border-coral-500 pointer-events-none"
              style={{ marginTop: '-2px', marginLeft: '-2px', marginRight: '-2px', marginBottom: '-2px' }}
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-xs md:text-sm text-red-600 flex items-center gap-2"
          >
            <AlertCircle className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ModernFormField;
