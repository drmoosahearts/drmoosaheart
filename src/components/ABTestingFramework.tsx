
import React, { createContext, useContext, useEffect, useState } from 'react';

interface ABTest {
  testId: string;
  variant: 'A' | 'B';
  active: boolean;
}

interface ABTestContextType {
  getVariant: (testId: string) => 'A' | 'B';
  trackConversion: (testId: string, conversionType: string) => void;
  activeTests: ABTest[];
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined);

export const useABTest = () => {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error('useABTest must be used within ABTestProvider');
  }
  return context;
};

interface ABTestProviderProps {
  children: React.ReactNode;
}

export const ABTestProvider: React.FC<ABTestProviderProps> = ({ children }) => {
  const [activeTests, setActiveTests] = useState<ABTest[]>([]);

  const availableTests = [
    { testId: 'hero_cta_button', variants: ['Book Consultation', 'Schedule Surgery'] },
    { testId: 'pricing_display', variants: ['table', 'cards'] },
    { testId: 'testimonial_format', variants: ['carousel', 'grid'] },
    { testId: 'contact_form_fields', variants: ['minimal', 'detailed'] }
  ];

  useEffect(() => {
    // Initialize A/B tests
    const tests = availableTests.map(test => {
      const stored = localStorage.getItem(`ab_test_${test.testId}`);
      const variant = stored || (Math.random() > 0.5 ? 'A' : 'B');
      
      if (!stored) {
        localStorage.setItem(`ab_test_${test.testId}`, variant);
      }

      return {
        testId: test.testId,
        variant: variant as 'A' | 'B',
        active: true
      };
    });

    setActiveTests(tests);
  }, []);

  const getVariant = (testId: string): 'A' | 'B' => {
    const test = activeTests.find(t => t.testId === testId);
    return test?.variant || 'A';
  };

  const trackConversion = (testId: string, conversionType: string) => {
    const test = activeTests.find(t => t.testId === testId);
    if (test) {
      // Track conversion for analytics
      console.log(`A/B Test Conversion: ${testId} - Variant ${test.variant} - ${conversionType}`);
      
      // Send to analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'ab_test_conversion', {
          test_id: testId,
          variant: test.variant,
          conversion_type: conversionType
        });
      }
    }
  };

  return (
    <ABTestContext.Provider value={{ getVariant, trackConversion, activeTests }}>
      {children}
    </ABTestContext.Provider>
  );
};

// HOC for A/B testing components
export const withABTest = <P extends object>(
  Component: React.ComponentType<P>,
  testId: string
) => {
  return (props: P) => {
    const { getVariant, trackConversion } = useABTest();
    const variant = getVariant(testId);

    return (
      <Component 
        {...props} 
        abVariant={variant}
        onABConversion={(conversionType: string) => trackConversion(testId, conversionType)}
      />
    );
  };
};
