
import React, { useState } from 'react';
import { Calendar, Clock, Phone, Mail, MapPin, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface TimeSlot {
  time: string;
  available: boolean;
  urgency?: 'emergency' | 'urgent' | 'routine';
}

const AdvancedAppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    consultationType: '',
    urgency: '',
    symptoms: '',
    medicalHistory: '',
    preferredDate: '',
    preferredTime: '',
    contactMethod: '',
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      country: '',
      insurance: ''
    }
  });

  const timeSlots: TimeSlot[] = [
    { time: '09:00 AM', available: true, urgency: 'routine' },
    { time: '10:30 AM', available: false },
    { time: '12:00 PM', available: true, urgency: 'urgent' },
    { time: '02:00 PM', available: true, urgency: 'routine' },
    { time: '03:30 PM', available: true, urgency: 'emergency' },
    { time: '05:00 PM', available: true, urgency: 'routine' }
  ];

  const consultationTypes = [
    { value: 'emergency', label: 'Emergency Consultation', cost: 'Free', duration: '30 min' },
    { value: 'second-opinion', label: 'Second Opinion', cost: '$150', duration: '45 min' },
    { value: 'telemedicine', label: 'Telemedicine', cost: '$100', duration: '30 min' },
    { value: 'pre-surgery', label: 'Pre-Surgery Consultation', cost: '$200', duration: '60 min' },
    { value: 'follow-up', label: 'Follow-up', cost: '$75', duration: '20 min' }
  ];

  const countries = [
    'UAE', 'Saudi Arabia', 'Oman', 'Kuwait', 'Qatar', 'Bahrain',
    'United Kingdom', 'United States', 'Canada', 'Australia', 
    'Germany', 'France', 'Nigeria', 'Kenya', 'South Africa'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate AI processing
    toast({
      title: "Processing your appointment...",
      description: "Our AI is analyzing your requirements and finding the best slot."
    });

    setTimeout(() => {
      toast({
        title: "Appointment confirmed!",
        description: "You'll receive a confirmation email shortly with pre-consultation instructions."
      });
      setStep(4);
    }, 2000);
  };

  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'emergency': return 'text-red-600 bg-red-50';
      case 'urgent': return 'text-orange-600 bg-orange-50';
      case 'routine': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-medical-blue flex items-center gap-2">
            <Calendar className="h-6 w-6" />
            Book Your Consultation with Dr. M.K. Moosa Kunhi
          </CardTitle>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((stepNum) => (
              <div
                key={stepNum}
                className={`flex-1 h-2 rounded ${
                  stepNum <= step ? 'bg-medical-blue' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </CardHeader>

        <CardContent>
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Select Consultation Type</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {consultationTypes.map((type) => (
                  <Card 
                    key={type.value}
                    className={`cursor-pointer transition-all ${
                      formData.consultationType === type.value 
                        ? 'ring-2 ring-medical-blue bg-medical-blue-light text-white' 
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => setFormData(prev => ({ ...prev, consultationType: type.value }))}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{type.label}</h4>
                        <Badge variant="outline">{type.cost}</Badge>
                      </div>
                      <p className="text-sm opacity-80">{type.duration}</p>
                      {type.value === 'emergency' && (
                        <div className="flex items-center gap-1 mt-2">
                          <AlertCircle className="h-4 w-4" />
                          <span className="text-xs">Available 24/7</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium">Describe your symptoms or condition:</span>
                  <Textarea
                    value={formData.symptoms}
                    onChange={(e) => setFormData(prev => ({ ...prev, symptoms: e.target.value }))}
                    placeholder="Please describe your symptoms, concerns, or the reason for consultation..."
                    rows={3}
                    className="mt-1"
                  />
                </label>

                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="How urgent is your consultation?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency (Within 24 hours)</SelectItem>
                    <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                    <SelectItem value="routine">Routine (Within 2-4 weeks)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={() => setStep(2)} 
                disabled={!formData.consultationType || !formData.symptoms}
                className="w-full bg-medical-blue hover:bg-medical-blue-dark"
              >
                Continue to Date & Time
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Select Date & Time</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <Input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Available Time Slots</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={formData.preferredTime === slot.time ? "default" : "outline"}
                        disabled={!slot.available}
                        onClick={() => setFormData(prev => ({ ...prev, preferredTime: slot.time }))}
                        className={`text-xs ${slot.urgency ? getUrgencyColor(slot.urgency) : ''}`}
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        {slot.time}
                        {slot.urgency && (
                          <Badge variant="secondary" className="ml-1 text-xs">
                            {slot.urgency}
                          </Badge>
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-coral-50 p-4 rounded-lg">
                <h4 className="font-semibold text-coral-700 mb-2">AI-Powered Scheduling</h4>
                <p className="text-sm text-coral-600">
                  Our AI has analyzed your symptoms and recommends an {formData.urgency || 'urgent'} consultation. 
                  Emergency slots are highlighted in red for immediate availability.
                </p>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button 
                  onClick={() => setStep(3)}
                  disabled={!formData.preferredDate || !formData.preferredTime}
                  className="flex-1 bg-medical-blue hover:bg-medical-blue-dark"
                >
                  Continue to Contact Details
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={formData.personalInfo.name}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    personalInfo: { ...prev.personalInfo, name: e.target.value }
                  }))}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.personalInfo.email}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    personalInfo: { ...prev.personalInfo, email: e.target.value }
                  }))}
                />
                <Input
                  placeholder="Phone Number"
                  value={formData.personalInfo.phone}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    personalInfo: { ...prev.personalInfo, phone: e.target.value }
                  }))}
                />
                <Select onValueChange={(value) => setFormData(prev => ({ 
                  ...prev, 
                  personalInfo: { ...prev.personalInfo, country: value }
                }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Input
                placeholder="Insurance Provider (Optional)"
                value={formData.personalInfo.insurance}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  personalInfo: { ...prev.personalInfo, insurance: e.target.value }
                }))}
              />

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: 'email', icon: Mail, label: 'Email' },
                    { value: 'phone', icon: Phone, label: 'Phone' },
                    { value: 'whatsapp', icon: Phone, label: 'WhatsApp' }
                  ].map(method => (
                    <Button
                      key={method.value}
                      variant={formData.contactMethod === method.value ? "default" : "outline"}
                      onClick={() => setFormData(prev => ({ ...prev, contactMethod: method.value }))}
                      className="flex flex-col items-center p-4 h-auto"
                    >
                      <method.icon className="h-4 w-4 mb-1" />
                      <span className="text-xs">{method.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={!formData.personalInfo.name || !formData.personalInfo.email || !formData.contactMethod}
                  className="flex-1 bg-coral-500 hover:bg-coral-600"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Confirm Appointment
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-6">
              <div className="bg-green-50 p-8 rounded-lg">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Appointment Confirmed!</h3>
                <p className="text-green-700">
                  Your consultation with Dr. M.K. Moosa Kunhi has been scheduled for{' '}
                  <strong>{formData.preferredDate}</strong> at <strong>{formData.preferredTime}</strong>
                </p>
              </div>

              <div className="bg-medical-blue-light text-white p-6 rounded-lg text-left">
                <h4 className="font-semibold mb-3">What happens next?</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Confirmation email sent to {formData.personalInfo.email}
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Pre-consultation forms will be sent 24 hours before
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Medical records upload instructions included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Travel assistance coordination (if applicable)
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Add to Calendar
                </Button>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Our Team
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedAppointmentBooking;
