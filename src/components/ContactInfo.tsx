
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  const locations = [
    {
      name: "Lakeshore Hospital & Research Centre",
      address: "N.H. 17, Bypass, Maradu, Nettoor P.O, Kochi - 682040, Kerala, India",
      phone: "+91-484-2701032 / 2701033",
      email: "moosamk@sify.com"
    }
  ];

  const contactInfo = {
    mobile: "+91-9847142064",
    email: "doctormoosa@yahoo.com",
    fax: "+91-484-2701996"
  };

  return (
    <section className="py-12 bg-medical-gray" id="contact-info">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center after:left-1/2 after:-translate-x-1/2 mb-12">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-medical-blue-dark mb-4">Clinic Location</h3>
              {locations.map((location, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-semibold text-medical-blue-dark mb-2">{location.name}</h4>
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin size={20} className="text-medical-teal flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone size={20} className="text-medical-teal flex-shrink-0" />
                    <p className="text-gray-700">{location.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-medical-teal flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-medical-blue hover:underline">
                      {location.email}
                    </a>
                  </div>
                </div>
              ))}
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
                  <Phone size={20} className="text-medical-teal flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">Fax:</p>
                    <p className="font-semibold">{contactInfo.fax}</p>
                  </div>
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
