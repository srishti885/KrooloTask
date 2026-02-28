import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaEnvelope, FaUser, FaPhone, FaBuilding, FaExternalLinkAlt, FaBox, FaQuoteLeft } from 'react-icons/fa';
import Footer from './Footer';

const BookDemoPage = () => {
  // Testimonial Data
  const testimonials = [
    {
      quote: "Since we implemented the Kroolo platform, we’ve experienced increased accountability and successfully met all deadlines for significant projects due to its robust tracking capabilities.",
      name: "Daniel Marty",
      company: "airguidemfg.com"
    },
    {
      quote: "Kroolo completely transformed how our remote team collaborates. The AI features helped us cut down meeting times by nearly 40%.",
      name: "Sarah Chen",
      company: "innovatech.io"
    },
    {
      quote: "The best all-in-one workspace we've used. From project management to internal chat, it's seamless.",
      name: "Marcus Rodriguez",
      company: "logisticspro.com"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true); // Animation state

  // Auto-scroll testimonials with smooth fade effect
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false); // Start fade out
      
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true); // Fade in new content
      }, 500); // Wait for fade out to finish

    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans antialiased">
      
      {/* SECTION 1: HERO */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 grid md:grid-cols-5 overflow-hidden">
            
            {/* LEFT: INFO & MAP */}
            <div className="md:col-span-2 bg-[#0f172a] text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#4f1df2]/10 rounded-full flex items-center justify-center">
                <span className="text-[#4f1df2] font-bold text-9xl opacity-20">K</span>
              </div>
              
              <div className="relative z-10">
                <span className="inline-block bg-[#4f1df2]/20 text-[#4f1df2] px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-[#4f1df2]/30 tracking-wider uppercase">
                  Enterprise AI Solution
                </span>
                <h1 className="text-5xl font-extrabold tracking-tighter mb-4 leading-none">
                  Get Your <span className="text-white/80">Tailored</span> Demo
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                  Unlock enterprise efficiency. Our expert team will show you how Kroolo fits your workflow.
                </p>
              </div>

              {/* Map Block */}
              <div className="relative z-10 mt-10 h-64 rounded-2xl overflow-hidden border-2 border-white/10 shadow-inner group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.556209591456!2d75.75330367543885!3d26.897364476673523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ad708c374b%3A0x679c2934175b2446!2sVidyut%20Nagar%2C%20Ajmer%20Rd%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="transition-transform duration-500 group-hover:scale-105"
                ></iframe>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <span className="text-white flex items-center gap-2 font-semibold">
                    <FaExternalLinkAlt /> View Larger Map
                  </span>
                </a>
              </div>

              {/* Address Card */}
              <div className="relative z-10 flex items-center gap-4 bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10 mt-auto shadow-xl">
                <div className="w-16 h-16 bg-[#4f1df2] rounded-full flex items-center justify-center shrink-0 shadow-lg">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">Jaipur Headquarters</h4>
                  <p className="text-gray-300 text-sm">2nd Floor, Purani Chungi, Vidyut Nagar, Ajmer Rd, Jaipur, Rajasthan</p>
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="md:col-span-3 p-10 md:p-16 bg-white">
              <h3 className="text-4xl font-extrabold tracking-tight mb-3 text-[#0f172a]">Request a Walkthrough</h3>
              <p className="text-gray-600 mb-10 text-lg">Fill out the form and our specialist will reach out within 2 hours.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputWithIcon icon={FaUser} type="text" placeholder="First Name" />
                  <InputWithIcon icon={FaUser} type="text" placeholder="Last Name" />
                </div>
                
                <InputWithIcon icon={FaBuilding} type="text" placeholder="Company Name" />
                
                <InputWithIcon icon={FaEnvelope} type="email" placeholder="Work Email" />
                <InputWithIcon icon={FaPhone} type="tel" placeholder="Phone Number" />
                
                <div className="relative">
                  <FaBox className="absolute top-5 left-4 text-gray-400" />
                  <select className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f1df2] focus:border-[#4f1df2] transition bg-white text-lg text-gray-500 appearance-none">
                    <option value="">Select Product Demo</option>
                    <option value="workflow">AI Workflow</option>
                    <option value="agents">AI Agents</option>
                    <option value="dashboard">AI Dashboard</option>
                  </select>
                </div>

                <div className="relative">
                  <FaCalendarAlt className="absolute top-4 left-4 text-gray-400" />
                  <input type="date" className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f1df2] focus:border-[#4f1df2] transition bg-white text-gray-600 text-lg" />
                </div>
                
                <textarea placeholder="Tell us about your team size or specific needs..." rows="3" className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f1df2] focus:border-[#4f1df2] transition bg-white text-lg"></textarea>
                
                <button type="submit" className="w-full bg-[#0f172a] text-white py-4 rounded-xl text-lg font-semibold hover:bg-black transition shadow-lg flex items-center justify-center gap-2 mt-6">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 2: MOVING TESTIMONIAL CAROUSEL */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tighter text-[#0f172a] mb-12">See How Effortless Productivity Can Be With Kroolo</h2>
          
          
          <div className="bg-indigo-700 p-12 rounded-3xl text-white relative shadow-2xl min-h-[350px] flex flex-col justify-center">
            <FaQuoteLeft className="text-white/20 text-7xl absolute top-6 left-6" />
            
           
            <div 
                className={`relative z-10 transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'} mb-8`}
            >
                <p className="text-2xl leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="flex flex-col items-center mt-8">
                <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-white/80">{testimonials[currentTestimonial].company}</p>
                </div>
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-auto">
              {testimonials.map((_, index) => (
                <div 
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-white w-6' : 'bg-white/40'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FINAL CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 bg-[#0f172a] p-12 rounded-3xl text-white shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center shrink-0">
                <span className="text-[#4f1df2] font-bold text-5xl">K</span>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold tracking-tighter mb-2 leading-tight">Get Kroolo, The best of AI and Work Management</h2>
              <p className="text-white/80 text-lg flex items-center gap-2">
                <span className="text-[#4f1df2]"></span> Start for Free. Upgrade anytime!
              </p>
            </div>
          </div>
          <a href="#" className="bg-[#4f1df2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4f1df2]/90 transition shadow-lg shrink-0">
            Try it free
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// Helper component
const InputWithIcon = ({ icon: Icon, ...props }) => (
  <div className="relative">
    <Icon className="absolute top-5 left-4 text-gray-400" />
    <input 
      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4f1df2] focus:border-[#4f1df2] transition bg-white text-lg" 
      {...props} 
    />
  </div>
);

export default BookDemoPage;