import React, { useState } from 'react';
import '../index.css';
import img from './assets/k.png'
const Step3 = ({ onContinue }) => {
  const [showButton, setShowButton] = useState(false);
  const [currentStep, setCurrentStep] = useState(3);
  const [progress, setProgress] = useState(40); // Progress set to 40% for step 3

  const handleContinueClick = () => {
    onContinue(); // Call the onContinue function passed from the parent
  };

  return (
    <div className="selection-container">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <h1>You're in the right place</h1>
      <h5></h5>
      <div className="image-and-text-container">
        <img src={img} alt="Description of image" />
        <p>Brilliant gets you hands-on to<br />
        help improve your 
        professional skills<br /> and knowledge. You'll interact with <br />concepts and solve fun problems<br /> in math, science, and computer science .</p>
      </div>
      <button onClick={handleContinueClick}>Continue</button>
    </div>
  );
};

export default Step3;
