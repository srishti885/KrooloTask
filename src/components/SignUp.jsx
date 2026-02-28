import React, { useState, useEffect } from 'react';
import { SignUp, useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import KrooloLogo from './KrooloLogo';
import Loading from './Loading'; 

import { BsLightningChargeFill, BsFillGearFill, BsCodeSquare, BsDiagram3Fill, BsCpuFill } from 'react-icons/bs';

const Signup = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true); //  Loader state 

  // Redirect if already signed in
  useEffect(() => {
    if (isSignedIn) {
      navigate('/');
    }
  }, [isSignedIn, navigate]);

  //  Hide loader when Clerk is loaded 
  useEffect(() => {
    if (isLoaded) {
      // Thoda delay taaki animation dikhe
      const timer = setTimeout(() => setShowLoader(false), 1000); 
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  // Floating Icons Background Component
  const FloatingIcons = () => (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <BsLightningChargeFill className="absolute top-10 left-10 text-[#4f1df2] text-6xl animate-float-slow" />
        <BsFillGearFill className="absolute bottom-20 right-20 text-purple-600 text-7xl animate-float-fast" />
        <BsCodeSquare className="absolute top-1/2 left-1/3 text-blue-500 text-5xl animate-float-slow" />
        <BsDiagram3Fill className="absolute top-1/3 right-1/4 text-purple-400 text-4xl animate-float-fast" />
        <BsCpuFill className="absolute bottom-1/4 left-1/2 text-blue-400 text-5xl animate-float-slow" />
        
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-300 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-purple-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/2 w-24 h-24 bg-pink-200 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );

  return (
    <>
      {/*  UPDATED: Conditional Rendering of Loader  */}
      {showLoader && <Loading />}

      <div className={`min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${showLoader ? 'opacity-0' : 'opacity-100'} relative`}>
        
        {/* Floating Background Icons */}
        <FloatingIcons />

        {/* Content Container */}
        <div className="relative z-10">
          {/* Logo Container */}
          <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center mb-10">
            <KrooloLogo size={60} />
            <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900 tracking-tighter">
              Create your <span className="text-[#4f1df2]">kroolo</span> account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Start your productivity journey with us.
            </p>
          </div>

          {/* Clerk SignUp Component Container */}
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md flex justify-center">
            <div className="bg-white/60 backdrop-blur-lg p-2 rounded-3xl border border-white/20 shadow-2xl">
              <SignUp 
                path="/signup" 
                routing="path" 
                signInUrl="/login"
                appearance={{
                  elements: {
                    //  UPDATED: Simplified styling for glass effect
                    card: "shadow-none bg-transparent border-none", 
                    formButtonPrimary: 
                      "bg-[#4f1df2] hover:bg-[#3730a3] text-sm !shadow-none rounded-xl py-3",
                    headerTitle: "hidden", 
                    headerSubtitle: "hidden",
                    footer: "hidden",
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Keyframes for Floating Animation */}
        <style>
          {`
            @keyframes float-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            @keyframes float-fast {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
            .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
            .animate-blob { animation: blob 7s infinite; }
            .animation-delay-2000 { animation-delay: 2s; }
            .animation-delay-4000 { animation-delay: 4s; }
          `}
        </style>
      </div>
    </>
  );
};

export default Signup;