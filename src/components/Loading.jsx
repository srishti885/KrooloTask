import React, { useState, useEffect } from 'react';
import KrooloLogo from './KrooloLogo';

const Loading = () => {
  // !!! UPDATED: Dynamic loading messages !!!
  const [loadingText, setLoadingText] = useState("Initializing...");
  const messages = [
    "Fetching your profile...",
    "Connecting to AI services...",
    "Optimizing your workspace...",
    "Almost there..."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingText(messages[index]);
    }, 1500); // Change text every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6">
      {/* Static Logo - design fetch karlo */}
      <KrooloLogo size={100} className="text-[#4f1df2]" />
      
      {/* Dynamic Loading Text */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tighter">
          kroolo
        </h2>
        <p className="text-gray-600 mt-2 font-medium animate-pulse">
          {loadingText}
        </p>
      </div>
      
      {/* Progress Bar */}
      <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden mt-4">
        <div className="h-full bg-[#4f1df2] rounded-full animate-loading-bar"></div>
      </div>
      
      <style>
        {`
          @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-loading-bar {
            animation: loading-bar 2s ease-in-out infinite;
            width: 40%;
          }
        `}
      </style>
    </div>
  );
};

export default Loading;