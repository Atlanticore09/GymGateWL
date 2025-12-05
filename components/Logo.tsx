import React from 'react';

const Logo = ({ className }: { className?: string }) => {
  return (
    <img 
      src="/logo.png" 
      alt="GymGate Logo" 
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;