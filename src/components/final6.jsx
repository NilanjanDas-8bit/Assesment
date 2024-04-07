import React, { useState, useEffect } from 'react';

import option1Image from './assets/foundation.jpeg';
import option2Image from './assets/thimking.jpeg';



const LearningPathRecommendations = ({ onContinue }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating an async operation
      setLoading(false);
      if (typeof onContinue === 'function') {
        onContinue(); // Move to the final step once loading is complete
      }
    };

    fetchData();
  }, [onContinue]);

  return (
    <div className="learning-path-recommendations">
      {loading ? (
        <div className="loading-container">
          <div className="loading-circle"></div>
          <h2>Finding learning path recommendations for you based on your responses</h2>
        </div>
      ) : (
        <LearningPaths />
      )}
    </div>
  );
};

const LearningPaths = () => {
  const [selectedPath, setSelectedPath] = useState(null); // State to track selected path

  const handlePathSelect = (path) => {
    setSelectedPath(path === selectedPath ? null : path); // Toggle selection
  };

  return (
    <div className="selection-container">
      <h1>Learning paths based on your answers</h1>
      <h5>Choose one to get started. You can switch any time.</h5>
      <div className="m-container-horizontal">
        
        <div className={`m-horizontal ${selectedPath === 2 ? 'selected-horizontal' : ''}`} onClick={() => handlePathSelect(2)}>
          <img src={option1Image} alt="Foundational Math" />
        </div>
        <div className={`m-horizontal ${selectedPath === 3 ? 'selected-horizontal' : ''}`} onClick={() => handlePathSelect(3)}>
          <img src={option2Image} alt="Math Thinking" />
        </div>
        
      </div>
    </div>
  );
};






export default LearningPathRecommendations;
