import React, { useState } from 'react';
import '../index.css';
import studentIcon from './assets/student.png';
import careerIcon from './assets/proffesional.png';
import parentIcon from './assets/parent.png';
import learnerIcon from './assets/lifelonglearner.png';
import teacherIcon from './assets/teacher.png';
import otherIcon from './assets/other.png';

const Selection = ({ onContinue }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(25); // Initial progress set to 25%

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
      <h1>Which describes you best?</h1>
      <h5>This will help us to personalize your experience</h5>
      <div className="options-container">
        <div
          className={`option ${selectedOption === 'Student or soon to be enrolled' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Student or soon to be enrolled')}
          tabIndex="0"
        >
          <img src={studentIcon} alt="Student icon" /> Student or soon to be enrolled
        </div>
        <div
          className={`option ${selectedOption === 'Professional pursuing a career' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Professional pursuing a career')}
          tabIndex="0"
        >
          <img src={careerIcon} alt="Career icon" /> Professional pursuing a career
        </div>
        <div
          className={`option ${selectedOption === 'Parent of a school-age child' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Parent of a school-age child')}
          tabIndex="0"
        >
          <img src={parentIcon} alt="Parent icon" /> Parent of a school-age child
        </div>
        <div
          className={`option ${selectedOption === 'Lifelong learner' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Lifelong learner')}
          tabIndex="0"
        >
          <img src={learnerIcon} alt="Learner icon" /> Lifelong learner
        </div>
        <div
          className={`option ${selectedOption === 'Teacher' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Teacher')}
          tabIndex="0"
        >
          <img src={teacherIcon} alt="Teacher icon" /> Teacher
        </div>
        <div
          className={`option ${selectedOption === 'Other' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Other')}
          tabIndex="0"
        >
          <img src={otherIcon} alt="Other icon" /> Other
        </div>
      </div>
      {selectedOption && (
        <p>You selected: <span id="selected">{selectedOption}</span></p>
      )}
      {showButton && (
        <button onClick={handleContinueClick}>Continue</button>
      )}
    </div>
  );
};

export default Selection;
