import React from 'react';
import './StarryBackground.css';

const StarryBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="stars"></div>
      <div className="twinkling"></div>
    </div>
  );
};

export default StarryBackground;
