
import { Newspaper, Award } from "lucide-react";

const MediaCoverage = () => {
  return (
    <section className="py-16 bg-white" id="media-coverage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">In The News</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Dr. Moosa Kunhi's groundbreaking surgeries and contributions to cardiac care have been featured in numerous news publications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-medical-gray rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Newspaper className="h-6 w-6 text-medical-teal" />
                <h3 className="text-xl font-bold text-medical-blue-dark">Rare Cardiac Surgery</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Dr. Moosa Kunhi performed a rare cardiac surgery on a patient with renal failure. The patient, who was awaiting kidney transplantation, 
                had severe damage to two heart valves. During the operation, one valve was repaired using a special technique and 
                an artificial valve was used for the other.
              </p>
              <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-lg mb-4">
                <img 
                  src="/lovable-uploads/3b7598c6-8e96-4ebe-a97f-aafa4228d13a.png" 
                  alt="News article about rare cardiac surgery performed by Dr. Moosa Kunhi" 
                  className="w-full h-auto"
                />
              </div>
              <div className="text-sm text-gray-500 italic">
                Times News Network - Coverage of complex heart valve surgery on a patient with renal failure
              </div>
            </div>
          </div>

          <div className="bg-medical-gray rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-6 w-6 text-medical-teal" />
                <h3 className="text-xl font-bold text-medical-blue-dark">Award Recognition</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Dr. Moosa Kunhi's exceptional contributions to cardiac surgery have been recognized through various prestigious awards
                and featured in regional and national publications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/f37bae88-9e87-4e3e-a1f1-b21fe61b1069.png" 
                    alt="News article about Dr. Moosa Kunhi receiving an award" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="aspect-video bg-white flex items-center justify-center overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/2594770f-ea52-46e0-a866-ec02e003c325.png" 
                    alt="News article about Dr. Moosa Kunhi's surgical achievements" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500 italic">
                Regional newspaper coverage of Dr. Moosa Kunhi's awards and achievements
              </div>
            </div>
          </div>
        </div>

        <div className="bg-medical-blue text-white rounded-lg overflow-hidden shadow-xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">In The Operating Room</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/80670cba-b70e-4db3-be7f-0cef3def222a.png" 
                    alt="Dr. Moosa Kunhi performing heart surgery" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-4">
                  Dr. Moosa Kunhi is renowned for his surgical precision and innovation in the operating room. 
                  With over 16,000 successful heart surgeries and a 99.7% success rate, his expertise has saved countless lives.
                </p>
                <p className="text-lg mb-4">
                  As one of the few surgeons in the world skilled in performing almost all types of cardiac surgeries with the highest success rates,
                  Dr. Moosa Kunhi has trained numerous cardiac surgeons who now practice worldwide.
                </p>
                <p className="text-lg font-medium">
                  "The goal is not just to perform surgery, but to transform lives through accessible, high-quality cardiac care."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
