import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaApple, FaGooglePlay } from 'react-icons/fa6';
import KrooloLogo from './KrooloLogo'; 

const ModernFooter = () => {
  const footerSections = [
    {
      title: "Products",
      links: ["Kroolo AI", "Project & Sprints", "Portfolio", "Tasks", "Automations", "Goal & OKRs", "Docs", "Chats", "Forms", "Track Time"]
    },
    {
      title: "AI Tools",
      links: ["Grammar Checker", "Paraphraser", "Summarizer", "Translator", "Chat with PDF"]
    },
    {
      title: "Solutions",
      links: ["Project management", "Product Management", "Marketing", "Engineering", "Support & Business Operations", "HR & Recruitment", "Education"]
    },
    {
      title: "Industries",
      links: ["Agencies", "Financial Services", "Retail", "Manufacturing", "Education", "Real Estate", "IT Consulting and Services", "Healthcare", "Travel and Hospitality", "Media"]
    },
    {
      title: "Resources",
      links: ["Help center", "Blogs", "Videos", "WhitePapers", "Changelog", "Feedback"]
    },
    
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          
          {/* LOGO & SOCIALS */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <KrooloLogo className="w-9 h-9" />
              <span className="text-3xl font-extrabold text-white tracking-tighter">kroolo</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              One integrated platform for all your work needs.
            </p>
            <div className="flex gap-4 text-gray-400 text-lg">
              <a href="https://www.linkedin.com/company/getkroolo/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedinIn /></a>
              <a href="https://www.facebook.com/people/Kroolo/61553808299270/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaFacebookF /></a>
              <a href="https://www.instagram.com/getkroolo/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaInstagram /></a>
              <a href="https://x.com/getkroolo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaXTwitter /></a>
              <a href="https://www.youtube.com/@getkroolo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaYoutube /></a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          {footerSections.map((section, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">{section.title}</h3>
              <ul className="space-y-2.5 text-xs"> {/* text-xs for cleaner look */}
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span className="text-white font-semibold">© 2026 Kroolo Inc.</span>
            <div className="flex gap-5 flex-wrap justify-center">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Use</a>
                <a href="#" className="hover:text-white">Security</a>
                <a href="#" className="group hover:text-white flex items-center gap-1.5 relative">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    System Status
                    <span className="absolute bottom-full mb-2 hidden group-hover:block bg-white text-black text-xs rounded py-1 px-2 whitespace-nowrap shadow-lg">
                        All systems operational
                    </span>
                </a>
            </div>
          </div>
          
          {/* APP BUTTONS */}
          <div className="flex items-center gap-3">
            <span className="text-white font-semibold text-xs">Get the app</span>
            {/*  APPLE APP STORE LINK ADDED  */}
            <a 
              href="https://apps.apple.com/in/app/kroolo/id6740263578" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-950 border border-white/10 text-white px-3 py-1.5 rounded-lg hover:border-white/30 transition"
            >
              <FaApple className="text-lg" />
              <div className="flex flex-col text-left">
                <span className="text-[9px] leading-tight">Download on the</span>
                <span className="font-semibold text-xs leading-tight">App Store</span>
              </div>
            </a>
            {/*  GOOGLE PLAY STORE LINK ADDED  */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.kroolo.app&pli=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-950 border border-white/10 text-white px-3 py-1.5 rounded-lg hover:border-white/30 transition"
            >
              <FaGooglePlay className="text-lg" />
              <div className="flex flex-col text-left">
                <span className="text-[9px] leading-tight">Get it on</span>
                <span className="font-semibold text-xs leading-tight">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;