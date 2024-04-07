import React, { useState } from "react";
import '../index.css';
import option1Image from './assets/introductory.jpeg';
import option2Image from './assets/foundational.jpeg';
import option3Image from './assets/intermediat.jpeg';
import option4Image from './assets/Advanaced.jpeg';

const MathComfortLevel = ({ onContinue }) => {
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected option
  const [progress, setProgress] = useState(60);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinueClick = () => {
    // Handle continue click logic here
    console.log("Continue clicked");
    onContinue(); // Call the onContinue function passed from the parent
  };

  return (
    <div className='selection-container'> 
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: '75%' }}></div> {/* Progress set to 75% for Step 4 */}
      </div>
      <h1>Math Comfort Level</h1>
      <h5>Choose your comfort level</h5>
      <div className="options-container-horizontal">
        <div className={`option-horizontal ${selectedOption === 1 ? 'selected-horizontal' : ''}`} onClick={() => handleOptionSelect(1)}>
          <img src={option1Image} alt="Introductory" />
        </div>
        <div className={`option-horizontal ${selectedOption === 2 ? 'selected-horizontal' : ''}`} onClick={() => handleOptionSelect(2)}>
          <img src={option2Image} alt="Foundational" />
        </div>
        <div className={`option-horizontal ${selectedOption === 3 ? 'selected-horizontal' : ''}`} onClick={() => handleOptionSelect(3)}>
          <img src={option3Image} alt="Intermediate" />
        </div>
        <div className={`option-horizontal ${selectedOption === 4 ? 'selected-horizontal' : ''}`} onClick={() => handleOptionSelect(4)}>
          <img src={option4Image} alt="Advanced" />
        </div>
      </div>
      {selectedOption && (
        <button onClick={handleContinueClick}>Continue</button>
      )}
    </div>
  );
};

export default MathComfortLevel;
