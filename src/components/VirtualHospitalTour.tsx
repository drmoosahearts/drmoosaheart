
import React, { useState } from 'react';
import { Play, Pause, RotateCw, Maximize, MapPin, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TourStop {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  staff?: string;
  equipment?: string[];
}

const VirtualHospitalTour = () => {
  const [currentStop, setCurrentStop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tourStops: TourStop[] = [
    {
      id: 'entrance',
      name: 'Hospital Entrance & Reception',
      description: 'Welcome to Apollo Hospitals Chennai, a world-class medical facility with state-of-the-art infrastructure.',
      image: '/lovable-uploads/hospital-entrance.jpg',
      features: ['24/7 Reception', 'International Patient Desk', 'Multilingual Staff', 'Concierge Services'],
      staff: '15+ International Patient Coordinators'
    },
    {
      id: 'consultation',
      name: 'Dr. Moosa Kunhi\'s Consultation Room',
      description: 'Private consultation rooms equipped with advanced diagnostic tools for comprehensive patient evaluation.',
      image: '/lovable-uploads/consultation-room.jpg',
      features: ['Private Consultation Space', 'Advanced ECG Equipment', 'Digital X-ray Viewing', 'Comfortable Seating'],
      staff: 'Dr. M.K. Moosa Kunhi + Medical Assistant'
    },
    {
      id: 'cath-lab',
      name: 'Cardiac Catheterization Laboratory',
      description: 'State-of-the-art cath lab for diagnostic procedures and minimally invasive interventions.',
      image: '/lovable-uploads/cath-lab.jpg',
      features: ['Latest Imaging Technology', 'Biplane Angiography', 'FFR Capabilities', 'IVUS/OCT Systems'],
      equipment: ['Siemens Artis Zee', 'GE Discovery IGS', 'Philips Azurion'],
      staff: 'Specialized Cardiac Team (8-10 members)'
    },
    {
      id: 'operating-theater',
      name: 'Cardiac Operating Theater',
      description: 'Ultra-modern operating theaters designed specifically for cardiac surgery with advanced life support systems.',
      image: '/lovable-uploads/operating-theater.jpg',
      features: ['HEPA Filtration', 'Laminar Air Flow', 'Integrated OR Systems', 'Live Streaming Capability'],
      equipment: ['Heart-Lung Machine', 'IABP', 'TEE', 'Cell Saver'],
      staff: 'Cardiac Surgical Team (12-15 members)'
    },
    {
      id: 'icu',
      name: 'Cardiac Intensive Care Unit',
      description: 'Specialized cardiac ICU with round-the-clock monitoring and critical care support.',
      image: '/lovable-uploads/cardiac-icu.jpg',
      features: ['1:1 Nurse Ratio', 'Advanced Monitoring', 'Isolation Rooms', 'Family Areas'],
      equipment: ['Ventilators', 'ECMO', 'Dialysis', 'Cardiac Monitors'],
      staff: '24/7 Intensivists + Specialized Nurses'
    },
    {
      id: 'recovery',
      name: 'Recovery Suites',
      description: 'Comfortable private rooms designed for post-operative recovery with family accommodation.',
      image: '/lovable-uploads/recovery-suite.jpg',
      features: ['Private Bathrooms', 'Family Bed', 'Entertainment System', 'Nurse Call System'],
      staff: 'Dedicated Recovery Nursing Team'
    }
  ];

  const currentTourStop = tourStops[currentStop];

  const nextStop = () => {
    setCurrentStop((prev) => (prev + 1) % tourStops.length);
  };

  const prevStop = () => {
    setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-medical-blue mb-4">
          Virtual Hospital Tour
        </h1>
        <p className="text-gray-600">
          Take a 360° virtual tour of Apollo Hospitals Chennai and Dr. Moosa Kunhi's facilities
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Tour View */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {currentTourStop.name}
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCw className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative mb-6">
                <img
                  src={currentTourStop.image}
                  alt={currentTourStop.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{currentTourStop.name}</h3>
                  <p className="text-sm opacity-90">Stop {currentStop + 1} of {tourStops.length}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{currentTourStop.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {currentTourStop.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {currentTourStop.equipment && (
                  <div>
                    <h4 className="font-semibold mb-3">Equipment & Technology</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentTourStop.equipment.map((item, index) => (
                        <Badge key={index} variant="outline">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {currentTourStop.staff && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold">Medical Staff</span>
                  </div>
                  <p className="text-sm text-gray-700">{currentTourStop.staff}</p>
                </div>
              )}

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prevStop}>
                  Previous Stop
                </Button>
                <div className="flex gap-2">
                  {tourStops.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStop(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentStop ? 'bg-medical-blue' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <Button onClick={nextStop}>
                  Next Stop
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tour Navigation & Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tour Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tourStops.map((stop, index) => (
                  <button
                    key={stop.id}
                    onClick={() => setCurrentStop(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      index === currentStop
                        ? 'bg-medical-blue text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === currentStop ? 'bg-white text-medical-blue' : 'bg-gray-300'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{stop.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Hospital Accreditations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Badge className="w-full justify-center py-2">JCI Accredited</Badge>
                <Badge variant="outline" className="w-full justify-center py-2">NABH Certified</Badge>
                <Badge variant="outline" className="w-full justify-center py-2">ISO 9001:2015</Badge>
                <Badge variant="outline" className="w-full justify-center py-2">Green OT Certified</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule a Real Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Want to see the facilities in person? Schedule a hospital tour with our patient coordinator.
              </p>
              <Button className="w-full bg-coral-500 hover:bg-coral-600">
                Schedule Physical Tour
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VirtualHospitalTour;
