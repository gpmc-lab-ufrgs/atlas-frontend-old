import React from 'react';

const LegendGradient = () => {
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id="myGradient">
          <stop offset="25%" stopColor="#ADDC91" />
          <stop offset="50%" stopColor="#6CC24A" />
          <stop offset="75%" stopColor="#509E2F" />
          <stop offset="100%" stopColor="#4A7729" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LegendGradient;
