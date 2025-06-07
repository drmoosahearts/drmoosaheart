
import React, { useState } from 'react';
import { Calendar, Clock, Phone, Mail, Globe, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  country: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  medicalCondition: string;
  urgency: string;
  message: string;
}

const AppointmentBooking = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    medicalCondition: '',
    urgency: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    'India', 'UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Oman', 'Bahrain',
    'USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'Other'
  ];

  const consultationTypes = [
    'In-person Consultation',
    'Video Consultation',
    'Second Opinion',
    'Emergency Consultation',
    'Follow-up Consultation'
  ];

  const urgencyLevels = [
    'Routine (within 2 weeks)',
    'Urgent (within 1 week)',
    'Very Urgent (within 3 days)',
    'Emergency (same day)'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (field: keyof AppointmentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Appointment request submitted successfully! We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '', email: '', phone: '', country: '', preferredDate: '',
        preferredTime: '', consultationType: '', medicalCondition: '',
        urgency: '', message: ''
      });
    } catch (error) {
      toast.error('Failed to submit appointment request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl text-medical-blue">
          <Calendar className="h-6 w-6" />
          Book Your Consultation
        </CardTitle>
        <p className="text-gray-600">
          Schedule a consultation with Dr. M.K. Moosa Kunhi for expert cardiac care
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline h-4 w-4 mr-1" />
                Full Name *
              </label>
              <Input
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline h-4 w-4 mr-1" />
                Email Address *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="inline h-4 w-4 mr-1" />
                Phone Number *
              </label>
              <Input
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+91 9061693446"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Globe className="inline h-4 w-4 mr-1" />
                Country *
              </label>
              <Select onValueChange={(value) => handleInputChange('country', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Preferred Date *
              </label>
              <Input
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Preferred Time *
              </label>
              <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map(time => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Consultation Type *
            </label>
            <Select onValueChange={(value) => handleInputChange('consultationType', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select consultation type" />
              </SelectTrigger>
              <SelectContent>
                {consultationTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Medical Condition/Procedure *
            </label>
            <Input
              required
              value={formData.medicalCondition}
              onChange={(e) => handleInputChange('medicalCondition', e.target.value)}
              placeholder="e.g., Coronary Artery Disease, Valve Replacement, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Urgency Level *
            </label>
            <Select onValueChange={(value) => handleInputChange('urgency', value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select urgency level" />
              </SelectTrigger>
              <SelectContent>
                {urgencyLevels.map(level => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="inline h-4 w-4 mr-1" />
              Additional Message
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Please provide any additional details about your condition or specific questions..."
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-medical-blue hover:bg-medical-blue-dark"
            >
              {isSubmitting ? 'Submitting...' : 'Book Appointment'}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => window.open('https://wa.me/919061693446', '_blank')}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              WhatsApp Chat
            </Button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-medical-blue-light rounded-lg text-white">
          <h4 className="font-semibold mb-2">Quick Contact Options:</h4>
          <div className="space-y-2 text-sm">
            <p><Phone className="inline h-4 w-4 mr-2" />Emergency: +91-9061693446</p>
            <p><Mail className="inline h-4 w-4 mr-2" />Email: info@drmoosakunhi.com</p>
            <p><Clock className="inline h-4 w-4 mr-2" />Office Hours: Mon-Sat 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentBooking;
