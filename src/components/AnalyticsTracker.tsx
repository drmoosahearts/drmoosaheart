
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }

    // Track conversion events
    const trackConversion = (action: string, category: string) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
          event_category: category,
          event_label: location.pathname,
          value: 1
        });
      }
    };

    // Set up conversion tracking
    const appointmentButtons = document.querySelectorAll('[data-track="appointment"]');
    const contactButtons = document.querySelectorAll('[data-track="contact"]');
    const costCalculatorButtons = document.querySelectorAll('[data-track="calculator"]');

    appointmentButtons.forEach(button => {
      button.addEventListener('click', () => trackConversion('appointment_click', 'conversion'));
    });

    contactButtons.forEach(button => {
      button.addEventListener('click', () => trackConversion('contact_click', 'conversion'));
    });

    costCalculatorButtons.forEach(button => {
      button.addEventListener('click', () => trackConversion('calculator_click', 'engagement'));
    });

    return () => {
      // Cleanup event listeners
      appointmentButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      contactButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
      costCalculatorButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, [location]);

  return null;
};

export default AnalyticsTracker;
