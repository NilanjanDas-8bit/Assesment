import React, { useState } from 'react';
import Selection from './components/selaction1';
import Intrested from './components/intrested2';
import MyPage from './components/rplace3';
import Math from './components/maths4';
import Last from './components/last5';
import LearningPathRecommendations from './components/final6';


const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="App">
      {currentStep === 1 && <Selection onContinue={handleContinue} />}
      {currentStep === 2 && <Intrested onContinue={handleContinue} />}
      {currentStep === 3 && <MyPage onContinue={handleContinue} />}
      {currentStep === 4 && <Math onContinue={handleContinue} />}
      {currentStep === 5 && <Last onContinue={() => setCurrentStep(6)} />} {/* Change to step 6 */}
      {currentStep === 6 && <LearningPathRecommendations />}
      
    </div>
  );
};

export default App;
