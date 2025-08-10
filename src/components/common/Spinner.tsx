import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="mx-auto flex flex-col justify-center h-full items-center">
      <div className="spinner"></div>
      <h1 className="font-semibold mt-2 text-base-content">Loading...</h1>
    </div>
  );
};

export default Spinner;
