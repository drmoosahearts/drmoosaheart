
import React, { useState } from 'react';
import { Heart, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

interface SymptomResult {
  condition: string;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  description: string;
  nextSteps: string[];
  recommendedTests: string[];
}

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState<SymptomResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSymptoms = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock analysis based on keywords
    const lowerSymptoms = symptoms.toLowerCase();
    let mockResult: SymptomResult;
    
    if (lowerSymptoms.includes('chest pain') || lowerSymptoms.includes('heart attack')) {
      mockResult = {
        condition: 'Possible Coronary Artery Disease',
        urgency: 'emergency',
        description: 'Your symptoms suggest possible heart-related issues that require immediate medical attention.',
        nextSteps: [
          'Seek immediate emergency care',
          'Call emergency services if experiencing severe chest pain',
          'Schedule urgent consultation with Dr. Moosa Kunhi'
        ],
        recommendedTests: ['ECG', 'Cardiac Enzymes', 'Coronary Angiography']
      };
    } else if (lowerSymptoms.includes('shortness of breath') || lowerSymptoms.includes('fatigue')) {
      mockResult = {
        condition: 'Possible Heart Valve Disease',
        urgency: 'medium',
        description: 'Your symptoms may indicate heart valve problems that should be evaluated promptly.',
        nextSteps: [
          'Schedule consultation within 1 week',
          'Monitor symptoms closely',
          'Avoid strenuous activities until evaluated'
        ],
        recommendedTests: ['Echocardiogram', 'Chest X-ray', 'Blood Tests']
      };
    } else {
      mockResult = {
        condition: 'General Cardiac Screening Recommended',
        urgency: 'low',
        description: 'Regular cardiac screening is important for maintaining heart health.',
        nextSteps: [
          'Schedule routine cardiac check-up',
          'Maintain healthy lifestyle',
          'Monitor any new symptoms'
        ],
        recommendedTests: ['ECG', 'Basic Blood Panel', 'Blood Pressure Monitoring']
      };
    }
    
    setResult(mockResult);
    setIsAnalyzing(false);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-medical-blue">
            <Heart className="h-6 w-6" />
            AI-Powered Symptom Checker
          </CardTitle>
          <p className="text-gray-600">
            Describe your symptoms to get preliminary assessment and recommendations
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Describe your symptoms in detail:
            </label>
            <Textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Example: I've been experiencing chest pain for the past week, especially when walking upstairs. I also feel short of breath sometimes..."
              rows={4}
              className="w-full"
            />
          </div>
          
          <Button
            onClick={analyzeSymptoms}
            disabled={!symptoms.trim() || isAnalyzing}
            className="w-full bg-medical-blue hover:bg-medical-blue-dark"
          >
            {isAnalyzing ? 'Analyzing Symptoms...' : 'Analyze Symptoms'}
          </Button>
          
          {result && (
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-3">
                <Badge className={`${getUrgencyColor(result.urgency)} text-white`}>
                  {result.urgency.toUpperCase()} PRIORITY
                </Badge>
                <h3 className="text-xl font-semibold">{result.condition}</h3>
              </div>
              
              <p className="text-gray-700">{result.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Recommended Next Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.nextSteps.map((step, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-medical-blue mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      Recommended Tests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {result.recommendedTests.map((test, index) => (
                        <Badge key={index} variant="outline">
                          {test}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-medical-blue-light text-white p-4 rounded-lg">
                <p className="text-sm">
                  <strong>Disclaimer:</strong> This is a preliminary assessment tool and should not replace professional medical advice. 
                  Please consult with Dr. Moosa Kunhi for accurate diagnosis and treatment.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-coral-500 hover:bg-coral-600">
                  Book Emergency Consultation
                </Button>
                <Button variant="outline">
                  Schedule Regular Appointment
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SymptomChecker;
