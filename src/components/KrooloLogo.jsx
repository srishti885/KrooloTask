import React from 'react';

const KrooloLogo = ({ size = 120, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} group transition-transform duration-300 hover:scale-105`}
    >
      <defs>
        {/* Shadow for depth */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Glow effect for red part */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Premium Gradient */}
        <linearGradient id="redGradient" x1="40" y1="30" x2="70" y2="80">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>

      {/* Blue Vertical Stem of K - !!! UPDATED: Color change on hover !!! */}
      <rect 
        x="25" y="15" width="15" height="70" rx="7.5" 
        fill="#1e40af" 
        filter="url(#shadow)" 
        className="transition-colors duration-300 group-hover:fill-[#4f1df2]" 
      />
      
      {/* Red Continuous Path with Gradient and Glow */}
      <g filter="url(#glow)">
        <path 
          d="M40 50 L65 30 L70 36 L50 55 L70 74 L65 80 Z" 
          fill="url(#redGradient)"
          opacity="0.9"
        />
      </g>
      
    </svg>
  );
};

export default KrooloLogo;