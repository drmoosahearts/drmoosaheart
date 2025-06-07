
import React, { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, Phone, Monitor, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ConsultationSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  type: 'video' | 'phone' | 'follow-up';
}

const TelemedicineConsultation = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState<'initial' | 'follow-up' | 'second-opinion'>('initial');
  const [isInCall, setIsInCall] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const availableSlots: ConsultationSlot[] = [
    { id: '1', date: '2024-01-15', time: '09:00 AM', available: true, type: 'video' },
    { id: '2', date: '2024-01-15', time: '11:00 AM', available: true, type: 'video' },
    { id: '3', date: '2024-01-15', time: '02:00 PM', available: false, type: 'video' },
    { id: '4', date: '2024-01-16', time: '10:00 AM', available: true, type: 'phone' },
    { id: '5', date: '2024-01-16', time: '03:00 PM', available: true, type: 'follow-up' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    medicalHistory: '',
    currentSymptoms: '',
    medications: '',
    urgency: 'routine'
  });

  const ConsultationInterface = () => (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Video Call Interface */}
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-0">
            <div className="relative bg-gray-900 rounded-t-lg h-96 flex items-center justify-center">
              {isVideoOn ? (
                <div className="text-white text-center">
                  <Monitor className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p>Dr. Moosa Kunhi will join shortly</p>
                </div>
              ) : (
                <div className="text-white text-center">
                  <div className="w-20 h-20 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">MK</span>
                  </div>
                  <p>Dr. M.K. Moosa Kunhi</p>
                </div>
              )}
              
              {/* Patient video window */}
              <div className="absolute bottom-4 right-4 w-32 h-24 bg-gray-800 rounded-lg border-2 border-white">
                <div className="w-full h-full flex items-center justify-center text-white text-xs">
                  {isVideoOn ? 'Your Video' : 'Video Off'}
                </div>
              </div>
            </div>
            
            {/* Call Controls */}
            <div className="p-4 bg-gray-50 rounded-b-lg">
              <div className="flex justify-center gap-4">
                <Button
                  variant={isMuted ? "destructive" : "outline"}
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </Button>
                
                <Button
                  variant={isVideoOn ? "outline" : "destructive"}
                  size="sm"
                  onClick={() => setIsVideoOn(!isVideoOn)}
                >
                  {isVideoOn ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                </Button>
                
                <Button variant="destructive" size="sm" onClick={() => setIsInCall(false)}>
                  <Phone className="h-4 w-4" />
                </Button>
                
                <Button variant="outline" size="sm">
                  <Monitor className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Consultation Tools */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Consultation Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Dr. Moosa Kunhi will add notes here during consultation..."
              rows={6}
              readOnly
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">File Sharing</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full mb-2">
              <FileText className="h-4 w-4 mr-2" />
              Upload Medical Records
            </Button>
            <div className="space-y-2">
              <div className="text-xs text-gray-600">Recent ECG.pdf</div>
              <div className="text-xs text-gray-600">Blood Test Results.pdf</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  if (isInCall) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-medical-blue mb-2">
            Video Consultation with Dr. M.K. Moosa Kunhi
          </h1>
          <div className="flex items-center gap-4">
            <Badge className="bg-green-500">Connected</Badge>
            <span className="text-sm text-gray-600">Session started at 10:00 AM</span>
          </div>
        </div>
        <ConsultationInterface />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-medical-blue mb-4">
          Telemedicine Consultation
        </h1>
        <p className="text-gray-600">
          Connect with Dr. Moosa Kunhi from anywhere in the world
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Book Your Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Consultation Type */}
              <div>
                <label className="block text-sm font-medium mb-3">Consultation Type</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'initial', label: 'Initial Consultation', price: '$150' },
                    { id: 'follow-up', label: 'Follow-up', price: '$100' },
                    { id: 'second-opinion', label: 'Second Opinion', price: '$200' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setConsultationType(type.id as any)}
                      className={`p-3 rounded-lg border text-center transition-colors ${
                        consultationType === type.id
                          ? 'border-medical-blue bg-medical-blue text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-medium text-sm">{type.label}</div>
                      <div className="text-xs opacity-75">{type.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Available Slots */}
              <div>
                <label className="block text-sm font-medium mb-3">Available Time Slots</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {availableSlots.filter(slot => slot.available).map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedSlot(slot.id)}
                      className={`p-3 rounded-lg border text-left transition-colors ${
                        selectedSlot === slot.id
                          ? 'border-medical-blue bg-medical-blue text-white'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{new Date(slot.date).toLocaleDateString()}</div>
                          <div className="text-sm opacity-75">{slot.time}</div>
                        </div>
                        <Badge variant={slot.type === 'video' ? 'default' : 'outline'}>
                          {slot.type}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Patient Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Current Symptoms</label>
                <Textarea
                  value={formData.currentSymptoms}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentSymptoms: e.target.value }))}
                  placeholder="Please describe your current symptoms and concerns..."
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Medical History</label>
                <Textarea
                  value={formData.medicalHistory}
                  onChange={(e) => setFormData(prev => ({ ...prev, medicalHistory: e.target.value }))}
                  placeholder="Previous surgeries, medical conditions, family history..."
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-medical-blue hover:bg-medical-blue-dark"
                  disabled={!selectedSlot}
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsInCall(true)}
                  className="bg-green-500 text-white hover:bg-green-600"
                >
                  Start Demo Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Information Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dr. M.K. Moosa Kunhi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl font-bold">MK</span>
                </div>
                <p className="text-sm text-gray-600">Senior Cardiac Surgeon</p>
                <p className="text-sm text-gray-600">Apollo Hospitals, Chennai</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Experience:</span>
                  <span className="font-medium">25+ Years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Surgeries:</span>
                  <span className="font-medium">15,000+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Success Rate:</span>
                  <span className="font-medium text-green-600">99.2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5" />
                Platform Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  HD Video & Audio Quality
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Secure HIPAA Compliant
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Screen Sharing Capability
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Medical Record Integration
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Prescription Management
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p>• Stable internet connection (5+ Mbps)</p>
                <p>• Web camera and microphone</p>
                <p>• Modern web browser (Chrome, Firefox, Safari)</p>
                <p>• Quiet, private space for consultation</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TelemedicineConsultation;
