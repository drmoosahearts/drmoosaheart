
import React, { useState, useRef, useEffect } from 'react';
import { RotateCcw, Info, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface HeartPart {
  id: string;
  name: string;
  description: string;
  function: string;
  commonIssues: string[];
}

const InteractiveHeartModel = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const heartParts: HeartPart[] = [
    {
      id: 'left-ventricle',
      name: 'Left Ventricle',
      description: 'Main pumping chamber that sends oxygenated blood to the body',
      function: 'Pumps oxygen-rich blood through the aorta to supply the entire body',
      commonIssues: ['Heart failure', 'Ventricular hypertrophy', 'Cardiomyopathy']
    },
    {
      id: 'right-ventricle',
      name: 'Right Ventricle',
      description: 'Pumps deoxygenated blood to the lungs for oxygenation',
      function: 'Sends blood to the lungs through the pulmonary artery',
      commonIssues: ['Pulmonary hypertension', 'Right heart failure', 'Tricuspid regurgitation']
    },
    {
      id: 'left-atrium',
      name: 'Left Atrium',
      description: 'Receives oxygenated blood from the lungs',
      function: 'Collects oxygen-rich blood from pulmonary veins',
      commonIssues: ['Atrial fibrillation', 'Mitral valve disease', 'Blood clots']
    },
    {
      id: 'right-atrium',
      name: 'Right Atrium',
      description: 'Receives deoxygenated blood from the body',
      function: 'Collects blood returning from the body through vena cava',
      commonIssues: ['Tricuspid valve disease', 'Arrhythmias', 'Venous congestion']
    },
    {
      id: 'aortic-valve',
      name: 'Aortic Valve',
      description: 'Controls blood flow from left ventricle to aorta',
      function: 'Prevents backflow of blood into the left ventricle',
      commonIssues: ['Aortic stenosis', 'Aortic regurgitation', 'Bicuspid aortic valve']
    },
    {
      id: 'mitral-valve',
      name: 'Mitral Valve',
      description: 'Controls blood flow from left atrium to left ventricle',
      function: 'Ensures one-way flow of blood into the left ventricle',
      commonIssues: ['Mitral stenosis', 'Mitral regurgitation', 'Mitral valve prolapse']
    },
    {
      id: 'coronary-arteries',
      name: 'Coronary Arteries',
      description: 'Supply blood to the heart muscle itself',
      function: 'Provide oxygen and nutrients to the heart muscle',
      commonIssues: ['Coronary artery disease', 'Heart attack', 'Atherosclerosis']
    }
  ];

  const selectedPartData = heartParts.find(part => part.id === selectedPart);

  // Simulate 3D heart rendering (in a real implementation, you'd use Three.js or WebGL)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let rotation = 0;

    const drawHeart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set canvas size
      canvas.width = 400;
      canvas.height = 400;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Apply rotation if enabled
      if (isRotating) {
        rotation += 0.01;
      }
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      
      // Draw simplified heart shape with chambers
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 3;
      ctx.fillStyle = selectedPart === 'left-ventricle' ? '#ef4444' : '#fca5a5';
      
      // Left ventricle (main chamber)
      ctx.beginPath();
      ctx.ellipse(-50, 20, 60, 80, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Right ventricle
      ctx.fillStyle = selectedPart === 'right-ventricle' ? '#ef4444' : '#fde047';
      ctx.beginPath();
      ctx.ellipse(30, 30, 45, 70, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Left atrium
      ctx.fillStyle = selectedPart === 'left-atrium' ? '#ef4444' : '#a78bfa';
      ctx.beginPath();
      ctx.ellipse(-40, -50, 35, 40, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Right atrium
      ctx.fillStyle = selectedPart === 'right-atrium' ? '#ef4444' : '#34d399';
      ctx.beginPath();
      ctx.ellipse(20, -40, 30, 35, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Draw valves as small circles
      ctx.fillStyle = selectedPart === 'aortic-valve' ? '#ef4444' : '#f59e0b';
      ctx.beginPath();
      ctx.arc(-30, -10, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = selectedPart === 'mitral-valve' ? '#ef4444' : '#f59e0b';
      ctx.beginPath();
      ctx.arc(-20, 10, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Draw coronary arteries as lines
      if (selectedPart === 'coronary-arteries') {
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 4;
      } else {
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 2;
      }
      
      ctx.beginPath();
      ctx.moveTo(-80, -20);
      ctx.bezierCurveTo(-60, -40, -20, -60, 0, -80);
      ctx.moveTo(0, -80);
      ctx.bezierCurveTo(20, -60, 60, -40, 80, -20);
      ctx.stroke();
      
      ctx.restore();
      
      animationId = requestAnimationFrame(drawHeart);
    };

    drawHeart();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isRotating, selectedPart]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-medical-blue mb-4">
          Interactive 3D Heart Anatomy
        </h1>
        <p className="text-gray-600">
          Explore the heart's structure and learn about cardiac conditions
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 3D Heart Model */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              3D Heart Model
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsRotating(!isRotating)}
                >
                  {isRotating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedPart(null)}
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <canvas
                ref={canvasRef}
                className="w-full max-w-md mx-auto border rounded-lg cursor-pointer"
                onClick={(e) => {
                  // Simple click detection for demo - in real app, you'd use 3D ray casting
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  
                  // Mock selection based on click position
                  if (x < rect.width / 2 && y > rect.height / 2) {
                    setSelectedPart('left-ventricle');
                  } else if (x > rect.width / 2 && y > rect.height / 2) {
                    setSelectedPart('right-ventricle');
                  } else if (x < rect.width / 2 && y < rect.height / 2) {
                    setSelectedPart('left-atrium');
                  } else {
                    setSelectedPart('right-atrium');
                  }
                }}
              />
              
              <div className="mt-4 grid grid-cols-2 gap-2">
                {heartParts.slice(0, 4).map((part) => (
                  <Button
                    key={part.id}
                    variant={selectedPart === part.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPart(part.id)}
                    className="text-xs"
                  >
                    {part.name}
                  </Button>
                ))}
              </div>
              
              <div className="mt-2 grid grid-cols-3 gap-2">
                {heartParts.slice(4).map((part) => (
                  <Button
                    key={part.id}
                    variant={selectedPart === part.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPart(part.id)}
                    className="text-xs"
                  >
                    {part.name.split(' ')[0]}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              {selectedPartData ? selectedPartData.name : 'Heart Anatomy Information'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedPartData ? (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-gray-700">{selectedPartData.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Function</h4>
                  <p className="text-gray-700">{selectedPartData.function}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Common Conditions</h4>
                  <div className="space-y-2">
                    {selectedPartData.commonIssues.map((issue, index) => (
                      <Badge key={index} variant="outline" className="mr-2 mb-2">
                        {issue}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="bg-medical-blue-light text-white p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">Need Treatment?</h5>
                  <p className="text-sm mb-3">
                    Dr. Moosa Kunhi specializes in treating conditions affecting the {selectedPartData.name.toLowerCase()}.
                  </p>
                  <Button className="bg-white text-medical-blue hover:bg-gray-100">
                    Learn About Treatment Options
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Info className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Click on different parts of the heart model to learn about their structure and function.
                </p>
                <p className="text-sm text-gray-500">
                  Use the controls above to pause rotation, toggle sound, or reset the view.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InteractiveHeartModel;
