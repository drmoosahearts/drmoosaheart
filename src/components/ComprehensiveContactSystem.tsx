
import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, Clock, Globe, Headphones, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

const ComprehensiveContactSystem = () => {
  const [contactMethod, setContactMethod] = useState('');
  const [urgency, setUrgency] = useState('');
  const [message, setMessage] = useState('');
  const [preferredTime, setPreferredTime] = useState('');

  const contactMethods = [
    {
      id: 'emergency',
      title: 'Emergency Consultation',
      icon: Phone,
      description: '24/7 emergency cardiac consultation',
      response: 'Immediate',
      color: 'bg-red-500',
      phone: '+91-9061693446',
      available: true
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      icon: MessageSquare,
      description: 'Quick response via WhatsApp',
      response: 'Within 30 minutes',
      color: 'bg-green-500',
      phone: '+91-9061693446',
      available: true
    },
    {
      id: 'video',
      title: 'Video Consultation',
      icon: Video,
      description: 'Face-to-face consultation',
      response: 'Scheduled slots',
      color: 'bg-blue-500',
      available: true
    },
    {
      id: 'phone',
      title: 'Phone Call',
      icon: Phone,
      description: 'Direct phone consultation',
      response: 'Within 2 hours',
      color: 'bg-medical-blue',
      phone: '+91-44-2815-3769',
      available: true
    },
    {
      id: 'email',
      title: 'Email',
      icon: Mail,
      description: 'Detailed written consultation',
      response: 'Within 4 hours',
      color: 'bg-coral-500',
      email: 'info@drmoosakunhi.com',
      available: true
    },
    {
      id: 'chat',
      title: 'Live Chat',
      icon: Headphones,
      description: 'Real-time chat support',
      response: 'Instant',
      color: 'bg-purple-500',
      available: true
    }
  ];

  const timeZones = [
    { region: 'India (IST)', time: '09:00 AM - 09:00 PM', offset: '+5:30' },
    { region: 'UAE (GST)', time: '07:30 AM - 07:30 PM', offset: '+4:00' },
    { region: 'UK (GMT)', time: '03:30 AM - 03:30 PM', offset: '+0:00' },
    { region: 'USA East (EST)', time: '10:30 PM - 10:30 AM', offset: '-5:00' },
    { region: 'Australia (AEST)', time: '02:30 PM - 02:30 AM+1', offset: '+10:00' }
  ];

  const supportLanguages = [
    { lang: 'English', flag: '🇬🇧', available: true },
    { lang: 'Arabic', flag: '🇸🇦', available: true },
    { lang: 'Hindi', flag: '🇮🇳', available: true },
    { lang: 'Malayalam', flag: '🇮🇳', available: true },
    { lang: 'Tamil', flag: '🇮🇳', available: true },
    { lang: 'French', flag: '🇫🇷', available: false },
    { lang: 'German', flag: '🇩🇪', available: false }
  ];

  const handleContactSubmit = (methodId: string) => {
    const method = contactMethods.find(m => m.id === methodId);
    
    switch (methodId) {
      case 'emergency':
      case 'phone':
        window.open(`tel:${method?.phone}`);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${method?.phone?.replace(/[^0-9]/g, '')}?text=Hello Dr. Moosa Kunhi, I need cardiac consultation.`);
        break;
      case 'email':
        window.open(`mailto:${method?.email}?subject=Cardiac Consultation Request&body=${encodeURIComponent(message)}`);
        break;
      case 'video':
        // Would integrate with video consultation booking system
        alert('Video consultation booking system would open here');
        break;
      case 'chat':
        // Would open live chat widget
        alert('Live chat system would open here');
        break;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-medical-blue mb-4">
          Contact Dr. M.K. Moosa Kunhi
        </h2>
        <p className="text-lg text-gray-600">
          Multiple ways to reach us - Emergency support available 24/7
        </p>
      </div>

      {/* Emergency Banner */}
      <Card className="mb-6 border-red-200 bg-red-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 text-white p-2 rounded-full">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-red-800">Cardiac Emergency?</h3>
                <p className="text-sm text-red-600">Call now for immediate consultation</p>
              </div>
            </div>
            <Button 
              onClick={() => handleContactSubmit('emergency')}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Call +91-9061693446
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contact Methods Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {contactMethods.slice(1).map((method) => (
          <Card key={method.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`${method.color} text-white p-2 rounded-lg`}>
                  <method.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg">{method.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {method.response}
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{method.description}</p>
              {method.phone && (
                <p className="text-sm font-mono mb-2">{method.phone}</p>
              )}
              {method.email && (
                <p className="text-sm font-mono mb-2">{method.email}</p>
              )}
              <Button 
                onClick={() => handleContactSubmit(method.id)}
                className="w-full"
                variant="outline"
              >
                Contact via {method.title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Preferred Contact Method" />
                </SelectTrigger>
                <SelectContent>
                  {contactMethods.map(method => (
                    <SelectItem key={method.id} value={method.id}>
                      {method.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Urgency Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="urgent">Urgent (within 24 hours)</SelectItem>
                  <SelectItem value="routine">Routine</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Textarea 
                placeholder="Describe your condition or question..."
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                Send Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Zones & Availability */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Consultation Hours by Region
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {timeZones.map((tz, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{tz.region}</p>
                    <p className="text-sm text-gray-600">{tz.time}</p>
                  </div>
                  <Badge variant="outline">{tz.offset}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Language Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {supportLanguages.map((lang, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 p-2 rounded ${
                    lang.available ? 'bg-green-50' : 'bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className={`text-sm ${lang.available ? 'text-green-700' : 'text-gray-500'}`}>
                    {lang.lang}
                  </span>
                  {lang.available && (
                    <Badge variant="outline" className="text-xs">Available</Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hospital Locations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Hospital Locations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Apollo Hospitals Chennai</h4>
              <p className="text-sm text-gray-600 mb-2">
                Greams Road, Chennai<br />
                Tamil Nadu 600006, India
              </p>
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Apollo Hospitals Bangalore</h4>
              <p className="text-sm text-gray-600 mb-2">
                Bannerghatta Road<br />
                Bangalore 560076, India
              </p>
              <Button variant="outline" size="sm">
                Get Directions
              </Button>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Consultation Offices</h4>
              <p className="text-sm text-gray-600 mb-2">
                Multiple locations<br />
                By appointment only
              </p>
              <Button variant="outline" size="sm">
                View All Locations
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComprehensiveContactSystem;
