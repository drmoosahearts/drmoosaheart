
import { MapPin, Phone, Mail, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  // Set page title and meta description for SEO
  useEffect(() => {
    document.title = "Contact Dr. M.K. Moosa Kunhi - Appointment Booking";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Dr. M.K. Moosa Kunhi for consultations and appointments. Reach out to schedule a visit at Kauvery Hospitals, Chennai, Tamil Nadu, India.");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send the data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Appointment Request Submitted",
      description: "We will contact you shortly to confirm your appointment.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      <section className="bg-medical-gray py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-medical-blue-dark mb-6">Contact Dr. M.K. Moosa Kunhi</h1>
            <p className="text-xl text-gray-700 mb-8">
              Get in touch to schedule a consultation or learn more about Dr. Moosa's cardiac services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-medical-blue-dark mb-6">Contact Information</h2>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-medical-blue-light p-3 rounded-full mt-1">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-medical-blue-dark mb-2">Primary Center</h3>
                      <p className="text-gray-700 mb-1">Kauvery Hospitals</p>
                      <p className="text-gray-700">200feet Radial Road, Kovilambakkam, Pallavaram, Chennai, Tamil Nadu, India - 600129</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-medical-blue-light p-3 rounded-full mt-1">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-medical-blue-dark mb-2">Phone Numbers</h3>
                      <p className="text-gray-700 mb-1">Mobile: <a href="tel:+919061693446" className="text-medical-blue hover:underline">+91-9061693446</a></p>
                      <p className="text-gray-700 mb-1">Hospital: <a href="tel:+914461116111" className="text-medical-blue hover:underline">+91-44-61116111</a></p>
                      <p className="text-gray-700">Hospital (Alt): <a href="tel:+914440504050" className="text-medical-blue hover:underline">+91-44-40504050</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-medical-blue-light p-3 rounded-full mt-1">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-medical-blue-dark mb-2">Email & Website</h3>
                      <p className="text-gray-700 mb-1">
                        <a href="mailto:doctormoosa@yahoo.com" className="text-medical-blue hover:underline">doctormoosa@yahoo.com</a>
                      </p>
                      <p className="text-gray-700">
                        Website: <span className="text-medical-blue">www.krr@kauveryhospital.com</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-medical-blue-light p-3 rounded-full mt-1">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-medical-blue-dark mb-2">Consultation Hours</h3>
                      <p className="text-gray-700 mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-700 mb-1">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed (Emergency services available)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="appointment">
                <h2 className="text-2xl font-bold text-medical-blue-dark mb-6">Request an Appointment</h2>
                
                <form onSubmit={handleSubmit} className="bg-medical-gray p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-medical-blue-dark font-medium mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-blue"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-medical-blue-dark font-medium mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-blue"
                          placeholder="Your email address"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-medical-blue-dark font-medium mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-blue"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-medical-blue-dark font-medium mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-blue"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="time" className="block text-medical-blue-dark font-medium mb-1">Preferred Time *</label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-blue"
                        >
                          <option value="">Select a time</option>
                          <option value="Morning">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="Afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
                          <option value="Evening">Evening (3:00 PM - 5:00 PM)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-medical-blue-dark font-medium mb-1">Reason for Appointment</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-medical-blue"
                        placeholder="Please briefly describe your condition or reason for consultation"
                      ></textarea>
                    </div>
                    
                    <div className="!mt-6">
                      <button
                        type="submit"
                        className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <Calendar className="h-5 w-5" />
                        Request Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-medical-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-medical-blue-dark mb-8">Need Urgent Assistance?</h2>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="tel:+919061693446" 
                className="bg-medical-blue hover:bg-medical-blue-dark transition-colors duration-300 text-white py-3 px-6 rounded-md font-semibold inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now: +91-9061693446
              </a>
              
              <a 
                href="mailto:doctormoosa@yahoo.com" 
                className="bg-medical-teal hover:bg-medical-teal-dark transition-colors duration-300 text-white py-3 px-6 rounded-md font-semibold inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Email: doctormoosa@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
