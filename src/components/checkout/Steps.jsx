import React from 'react';

export default function Steps({ currentStep }) {
  const steps = ['Shipping', 'Payment', 'Review'];

  return (
    <div className="flex space-x-4 mb-4">
      {steps.map((s, idx) => (
        <div key={idx} className={`flex-1 text-center p-2 border ${idx === currentStep ? 'bg-blue-600 text-white' : ''}`}>
          {s}
        </div>
      ))}
    </div>
  );
}
