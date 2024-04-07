import React, { useState } from 'react';
import '../index.css';
import GraphIcon from './assets/graph.png';
import EarthIcon from './assets/earth.png';
import RefreshIcon from './assets/refresh.png';
import BullseyeIcon from './assets/bullseye.png';
import EyeIcon from './assets/eye.png';
import './selaction1';


const Intrested = ({ onContinue }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(40); // Initial progress set to 40%

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowButton(true);
  };

  const handleContinueClick = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      setProgress(progress + 20);
    } else {
      setShowButton(false); // Hide the continue button after reaching 100% progress
    }
    onContinue(); // Call the onContinue function passed from the parent
  };

  
  

  return (
    <div className="selection-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <h1>Which are you most interested in?</h1>
      <h5>Choose just one. This will help us get you started (but won't limit your experience).</h5>
      <div className="options-container">
        <div
          className={`option ${selectedOption === 'Learning specific skills to advance my career' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Learning specific skills to advance my career')}
          tabIndex="0"
        >
          <img src={GraphIcon} alt="Student icon" /> Learning specific skills to advance my career
        </div>
        <div
          className={`option ${selectedOption === 'Exploring new topics Im interested in' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Exploring new topics Im interested in')}
          tabIndex="0"
        >
          <img src={EarthIcon} alt="Career icon" /> Exploring new topics I'm interested in
        </div>
        <div
          className={`option ${selectedOption === 'Refreshing my math foundations' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Refreshing my math foundations')}
          tabIndex="0"
        >
          <img src={RefreshIcon} alt="Parent icon" /> Refreshing my math foundations
        </div>
        <div
          className={`option ${selectedOption === 'Exercising my brain to stay sharp' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Exercising my brain to stay sharp')}
          tabIndex="0"
        >
          <img src={BullseyeIcon} alt="Learner icon" /> Exercising my brain to stay sharp
        </div>
        <div
          className={`option ${selectedOption === 'Something else' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Something else')}
          tabIndex="0"
        >
          <img src={EyeIcon} alt="Teacher icon" /> Something else
        </div>
        
      </div>
      {selectedOption && (
        <p>You selected: <span id="selected">{selectedOption}</span></p>
      )}
      {showButton && (
        <>
          
          <button onClick={handleContinueClick}>Continue</button>
        </>
      )}
    </div>
  );
};

export default Intrested;
