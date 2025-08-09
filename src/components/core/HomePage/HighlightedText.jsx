import React from 'react';

const HighlightedText = ({ text }) => {
  return (
    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
      {' '}
      {text}
    </span>
  );
};

export default HighlightedText;
