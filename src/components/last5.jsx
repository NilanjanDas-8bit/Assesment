import React, { useState } from 'react';
import '../index.css';
import img from './assets/jecob.jpeg'
const Step5 = ({ onContinue }) => {
  const [showButton, setShowButton] = useState(false);
  const [currentStep, setCurrentStep] = useState(3);
  const [progress, setProgress] = useState(100); // Progress set to 40% for step 3

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
        <p><br />"Through its engaging and well-structured courses, Brilliant has taught me <br />
           <br />mathematical concepts that I previously struggled to understand.<br />
           <br /> I now feel confident approaching both technical job interviews and real
           <br /> world problem solving situations."<br/>

             -Jacob S.</p>
      </div>
      <button onClick={handleContinueClick}>Continue</button>
    </div>
  );
};

export default Step5;
