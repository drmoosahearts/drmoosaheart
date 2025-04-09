
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    condition: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    try {
      // In a real application, you would send data to your backend here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Inquiry Submitted Successfully",
        description: "Our international patient coordinator will contact you within 24 hours.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        condition: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-sm focus:ring-medical-teal focus:border-medical-teal"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-sm focus:ring-medical-teal focus:border-medical-teal"
            placeholder="your.email@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-sm focus:ring-medical-teal focus:border-medical-teal"
            placeholder="Including country code"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1">Country*</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-sm focus:ring-medical-teal focus:border-medical-teal"
          >
            <option value="">Select your country</option>
            <option value="UAE">United Arab Emirates</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Qatar">Qatar</option>
            <option value="Oman">Oman</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="condition" className="block text-sm font-medium mb-1">Medical Condition</label>
        <input
          type="text"
          id="condition"
          name="condition"
          value={formData.condition}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-sm focus:ring-medical-teal focus:border-medical-teal"
          placeholder="Brief description of your heart condition"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Additional Information</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-sm focus:ring-medical-teal focus:border-medical-teal"
          placeholder="Any other details you'd like to share"
        ></textarea>
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-medical-teal hover:bg-medical-teal-dark text-white py-3 rounded-sm transition-colors font-medium disabled:bg-gray-400"
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
        </button>
        <p className="text-xs text-center mt-2 text-gray-600">
          Your information is secure and will only be used to coordinate your medical care.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
