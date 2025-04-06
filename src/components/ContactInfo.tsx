
import { MapPin, Phone, Mail, ExternalLink, Navigation } from "lucide-react";

const ContactInfo = () => {
  const locationUrl = "https://maps.google.com/maps/dir//Kauvery+Hospital+-+Radial+Road+2%2F473,+200+Feet+Radial+Rd,+Ganapathy+Nagar,+Kovilambakkam+Chennai,+Tamil+Nadu+600129+India/@12.9482448,80.1896242,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3a525d054c8b23ef:0x126b948e5ee9888c";
  
  const contactInfo = {
    mobile: "+91-9061693446",
    email: "doctormoosa@yahoo.com",
    hospitalWebsite: "krr@kauveryhospital.com",
    doctorProfile: "https://www.kauveryhospital.com/doctors/chennai-radial-road/cardiothoracic-surgery/dr-moose-kunhi-m-k/"
  };

  return (
    <section className="py-12 bg-medical-gray" id="contact-info">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-12">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://www.kauveryhospital.com/wp-content/themes/KauveryHospital/images/logo.png" 
                  alt="Kauvery Hospital Logo" 
                  className="h-9 w-auto"
                />
                <h3 className="text-xl font-bold text-medical-blue-dark">Kauvery Hospital</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start gap-3 mb-2">
                  <MapPin size={20} className="text-medical-teal flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700">No. 2/473, 200 Feet Radial Road, Kovilambakkam, Chennai – 600 129, Tamil Nadu, India</p>
                    <a 
                      href={locationUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-medical-blue hover:underline flex items-center mt-2 gap-1"
                    >
                      <Navigation size={16} />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Phone size={20} className="text-medical-teal flex-shrink-0" />
                  <p className="text-gray-700">+91-44-61116111 / +91-44-40504050</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-medical-teal flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="text-medical-blue hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-medical-blue-dark mb-2">Location Advantage:</h4>
                  <p className="text-gray-700 text-sm">
                    The hospital is very easy to reach from all major locations in Chennai. Pallavaram Flyover connects this arterial road with GST Road. 
                    The road connects Pallavaram, Pammal, Pozhichalur, Tirusulam and Meenambakkam with Rajiv Gandhi Salai (OMR) and East Coast Road (ECR). 
                    This arterial road also makes the transit easier between eastern neighbourhoods in Chennai City like Thuraipakkam, Shozhinganallur and 
                    Western neighbourhoods in Chennai City like Thiruneermalai, Kundrathur and Poonamallee.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-medical-teal flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">Mobile:</p>
                    <a href={`tel:${contactInfo.mobile}`} className="text-medical-blue hover:underline font-semibold">
                      {contactInfo.mobile}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-medical-teal flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">Email:</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-medical-blue hover:underline font-semibold">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ExternalLink size={20} className="text-medical-teal flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">Profile:</p>
                    <a href={contactInfo.doctorProfile} target="_blank" rel="noopener noreferrer" className="text-medical-blue hover:underline font-semibold">
                      Dr. Moosa Kunhi at Kauvery Hospital
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-medical-blue-dark mb-3">Directions (driving time from)</h4>
                <div className="space-y-2 text-gray-700">
                  <p>• Airport (International / Domestic): 20 minutes with traffic</p>
                  <p>• Central Railway Station (via Beach Road): 70 minutes with traffic</p>
                  <p>• Koyambedu Bus Terminus: 70 minutes with traffic</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-medical-blue-dark mb-3">Office Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed (Emergency services available)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
