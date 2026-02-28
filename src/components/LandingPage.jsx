import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go'; 
import { Link } from 'react-router-dom'; 
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'; 
import AINodeGraphic from './AINodeGraphic'; 
import Footer from './Footer'; 
import ProductDropdown from './ProductDropdown';
import SolutionsDropdown from './SolutionsDropdown';
import ResourcesDropdown from './ResourcesDropdown'; 
import AIToolsDropdown from './AIToolsDropdown';
import KrooloLogo from './KrooloLogo'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import ServerSection from './ServerSection'; 
import SecuritySection from './KrooloActionSection'; 
import ChatBotUI from './ChatBotUI';

import { 
  BsStars, BsSearch, BsPalette, BsDatabase,BsArrowRight,
  BsLightningChargeFill, BsFillGearFill, BsCodeSquare, 
  BsDiagram3Fill, BsCpuFill, BsFolderFill, 
  BsChevronDown, BsBriefcase, BsTools, BsBook, 
  BsPlayCircle, BsFileText, BsChatDots, BsLightbulb, 
  BsAppIndicator, BsShieldLockFill, BsPersonLinesFill, 
  BsGraphUpArrow, BsCloudUpload, BsBarChartLine, 
  BsGlobe, BsCode, BsCpu 
} from 'react-icons/bs';
const products = [
  { name: 'Kroolo AI', description: 'AI Agent & Enterprise Search', icon: BsLightningChargeFill },
  { name: 'Workflow Automation', description: 'Automate repetitive tasks', icon: BsFillGearFill },
  { name: 'Project Management', description: 'Streamline team projects', icon: BsDiagram3Fill },
];

const solutions = [
  { name: 'Project Management', description: 'Streamline workflows', icon: BsBriefcase },
  { name: 'Marketing', description: 'Campaign planning', icon: BsPalette },
  { name: 'Engineering', description: 'Sprint planning', icon: BsTools },
];

const resources = [
  { name: 'Help Center', description: 'FAQs and guides', icon: BsBook },
  { name: 'Videos', description: 'Tutorials and demos', icon: BsPlayCircle },
  { name: 'Blog', description: 'Latest updates', icon: BsFileText },
];
  
const FloatingIcon = ({ Icon, delay, duration }) => {
  // Hum position ko 'style' mein handle karenge, 'animate' mein nahi
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;

  return (
    <motion.div
      className="absolute text-[#4f1df2]/30 z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 0.5, 0],
        // Yahan 'y' ko pixels mein rakhein ya relative value dein (bina % ke)
        y: [0, -30, 0], 
      }}
      transition={{
        duration: duration || 8,
        delay: delay || 0,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ 
        left: `${randomX}%`, 
        top: `${randomY}%`,
        position: 'absolute'
      }}
    >
      <Icon size={Math.random() * 40 + 20} />
    </motion.div>
  );
};
const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("https://www.youtube.com/embed/yTM3v5m4upk?autoplay=1&rel=0");
  
  // !!! DROPDOWN STATE !!!
  const [activeDropdown, setActiveDropdown] = useState(null);

  const videoList = [
      { title: "Product Overview", url: "https://www.youtube.com/embed/yTM3v5m4upk?autoplay=1&rel=0" },
      { title: "AI Agents Demo", url: "https://www.youtube.com/embed/sIrmSQuMkk0?autoplay=1&rel=0" },
      { title: "Enterprise Search", url: "https://www.youtube.com/embed/rQckpCTjTpc?autoplay=1&rel=0" }
  ];

  const openModal = (videoUrl) => {
      setActiveVideo(videoUrl);
      setIsModalOpen(true);
  };


  // ... (Rest of components: cardDesignClass, items, animationProps, etc. remain same)
  const cardDesignClass = "border border-gray-100 rounded-3xl p-8 bg-white flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4f1df2]/10 hover:border-[#4f1df2]/20 relative overflow-hidden group hover:bg-gradient-to-br hover:from-sky-50 hover:to-pink-50";
  const cardGradientOverlay = "absolute inset-0 bg-gradient-to-br from-[#4f1df2]/0 via-[#4f1df2]/0 to-[#4f1df2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300";
  const floatingIconClass = "absolute -bottom-6 -right-6 text-[120px] text-[#4f1df2]/5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500";

  const workManagementItems = [
    { icon: BsFillGearFill, title: "Goals & OKRs" },
    { icon: BsDiagram3Fill, title: "Portfolios & Projects" },
    { icon: BsLightningChargeFill, title: "Tasks & Sprints" },
    { icon: BsFolderFill, title: "Docs & Forms" },
    { icon: BsCodeSquare, title: "Team Chat & Collaboration" },
    { icon: BsCpuFill, title: "Time Tracking & Invoicing" }
  ];

  const aiAgentsItems = [
    { icon: BsFillGearFill, title: "Custom AI Agents" },
    { icon: BsDiagram3Fill, title: "Knowledge Base Training" },
    { icon: BsLightningChargeFill, title: "AI Actions & Integrations" },
    { icon: BsFolderFill, title: "Multi-Channel Deployment" },
    { icon: BsCodeSquare, title: "Intelligent Workflows" },
    { icon: BsCpuFill, title: "Analytics & Insights" }
  ];

  const enterpriseSearchItems = [
    { icon: BsSearch, title: "Hybrid AI Search" },
    { icon: BsAppIndicator, title: "Multiple Apps Connectors" },
    { icon: BsCodeSquare, title: "Generative AI Answers" },
    { icon: BsShieldLockFill, title: "Permission-Aware Results" },
    { icon: BsPersonLinesFill, title: "Personalized Discovery" },
    { icon: BsGraphUpArrow, title: "Enterprise Analytics" }
  ];

  const prebuiltAgents = [
    { icon: BsBook, title: "Education", description: "Transform learning and teaching with AI-powered educational tools...", color: "bg-blue-100 text-blue-600", bgIcon: BsBook },
    { icon: BsPalette, title: "Creative & Marketing", description: "Elevate your creative potential and marketing output with AI-generated...", color: "bg-pink-100 text-pink-600", bgIcon: BsPalette },
    { icon: BsTools, title: "Engineering", description: "Effective sprint planning, building engineering strategies, test execution...", color: "bg-green-100 text-green-600", bgIcon: BsTools },
  ];

  const integrations = [
    { icon: BsCloudUpload, title: "Cloud Connectors", description: "Seamlessly sync data from Drive, Dropbox, and OneDrive.", color: "bg-orange-100 text-orange-600", bgIcon: BsCloudUpload },
    { icon: BsBarChartLine, title: "Analytics Tools", description: "Push insights directly to Tableau, Looker, and PowerBI.", color: "bg-purple-100 text-purple-600", bgIcon: BsBarChartLine },
    { icon: BsGlobe, title: "Webhook Support", description: "Trigger actions across custom applications and APIs.", color: "bg-sky-100 text-sky-600", bgIcon: BsGlobe },
  ];

  const integratedPlatformCards = [
    { title: "Kroolo Assistant", icon: BsStars },
    { title: "Kroolo Agents", icon: BsStars },
    { title: "Kroolo Enterprise Search", description: "AI-powered enterprise search", icon: BsStars },
    { title: "Kroolo Work Management", description: "Unified work management", icon: BsStars },
  ];

  const animationProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#0f172a] font-sans antialiased">
      
      
      {/* NAVBAR */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-6">
          <div className="flex items-center gap-2">
            <KrooloLogo size={36} className="text-[#4f1df2]" />
            <span className="text-2xl font-bold tracking-tighter text-[#0f172a]">kroolo</span>
          </div>
          
          {/* NAVIGATION LINKS */}
          <div className="hidden md:flex gap-2 text-sm font-medium text-gray-600 items-center">
            
            {/* 1. PRODUCTS */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('Products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-gray-50 hover:text-[#4f1df2] transition-colors">
                Products
                <BsChevronDown className={`text-xs transition-transform ${activeDropdown === 'Products' ? 'rotate-180 text-[#4f1df2]' : 'text-gray-400'}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'Products' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    // Mega menu wrapper
                    className="absolute top-full -left-10 mt-2 z-50"
                  >
                    {/* !!! AAPKA COMPONENT YAHAN AAYEGA !!! */}
                    <ProductDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pricing in center */}
            <a href="#" className="px-3 py-2 rounded-full hover:bg-gray-50 hover:text-[#4f1df2] transition-colors font-semibold text-gray-800">Pricing</a>

            {/* 2. SOLUTIONS */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('Solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-gray-50 hover:text-[#4f1df2] transition-colors">
                Solutions
                <BsChevronDown className={`text-xs transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180 text-[#4f1df2]' : 'text-gray-400'}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'Solutions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-10 mt-2 z-50"
                  >
                    {/* !!! AAPKA COMPONENT YAHAN AAYEGA !!! */}
                    <SolutionsDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* 3. AI TOOLS */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('AITools')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-gray-50 hover:text-[#4f1df2] transition-colors">
                AI Tools
                <BsChevronDown className={`text-xs transition-transform ${activeDropdown === 'AITools' ? 'rotate-180 text-[#4f1df2]' : 'text-gray-400'}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'AITools' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-10 mt-2 z-50"
                  >
                    {/* !!! AAPKA COMPONENT YAHAN AAYEGA !!! */}
                    <AIToolsDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. RESOURCES */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('Resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-gray-50 hover:text-[#4f1df2] transition-colors">
                Resources
                <BsChevronDown className={`text-xs transition-transform ${activeDropdown === 'Resources' ? 'rotate-180 text-[#4f1df2]' : 'text-gray-400'}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'Resources' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-10 mt-2 z-50"
                  >
                    {/* !!! AAPKA COMPONENT YAHAN AAYEGA !!! */}
                    <ResourcesDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
          
          {/* CTA Buttons */}
          <div className="flex gap-3 items-center">
            <Link to="/book-demo" className="text-sm font-semibold text-gray-600 hover:text-[#4f1df2] transition-colors px-4 py-2 border border-gray-200 rounded-full hover:border-[#4f1df2]/50">
              Book a Demo
            </Link>

            <SignedOut>
              <Link to="/login" className="text-sm font-semibold text-gray-600 hover:text-[#4f1df2] transition-colors px-4 py-2">
                Login
              </Link>
              <Link to="/signup" className="bg-[#4f1df2] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4f1df2]/90 transition shadow-sm">
                Sign Up
              </Link>
            </SignedOut>
            
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      </nav>
{/* Hero Section */}
<header className="relative py-24 md:py-32 px-6 overflow-hidden pointer-events-none"> 
  <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-[#e0e7ff] to-[#fae8ff]"></div>
  <div className="absolute inset-0 opacity-40 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
{/* 1. Static Icons (Increased Size - Brand Color) */}
  {[
    { icon: BsStars, top: '15%', left: '10%' },
    { icon: BsSearch, top: '20%', left: '80%' },
    { icon: BsPalette, top: '60%', left: '20%' },
    { icon: BsDatabase, top: '75%', left: '75%' },
  ].map((item, i) => {
    const Icon = item.icon;
    return (
      <div
        key={`static-${i}`}
        className="absolute text-[#4f1df2]/10 z-10" // Subtle Brand Color
        style={{ top: item.top, left: item.left }}
      >
        {/* !!! CHANGE: SIZE INCREASED !!! */}
        <Icon size={Math.random() * 30 + 50} /> 
      </div>
    );
  })}

  {/* !!! FLOATING ICONS BACKGROUND !!! */}
  <div className="absolute inset-0 z-0 overflow-hidden"> 
    {[BsLightningChargeFill, BsFillGearFill, BsCodeSquare, BsDiagram3Fill, BsCpuFill, BsFolderFill].map((Icon, i) => {
      // Har icon ke liye random positions
      const randomLeft = Math.random() * 90 + 5; 
      const randomTop = Math.random() * 90 + 5;
      
      return (
        <motion.div
          key={i}
          className="absolute text-gray-700 z-10" 
          initial={{ 
            opacity: 0, 
            scale: 0.5,
            // Shuruwat ki position
            left: `${randomLeft}%`,
            top: `${randomTop}%`
          }}
          animate={{ 
            opacity: [0, 0.7, 0], 
            // Float karega apni jagah se thoda upar-neeche
            y: [0, -30, 0], 
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            delay: Math.random() * 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Icon size={Math.random() * 50 + 20} />
        </motion.div>
      );
    })}
  </div>

  <div className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Content ... */}
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
      <span className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-gray-100 shadow-sm">
        <GoDotFill className="text-green-500 animate-pulse text-sm" />
        #1 Enterprise AI Platform
      </span>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tighter bg-gradient-to-r from-[#0f172a] to-[#4f1df2] bg-clip-text text-transparent">
        One Platform. <br /> All Your AI Needs.
      </h1>
      <p className="text-xl md:text-2xl text-gray-900 mb-6 leading-relaxed">
        Reduce tools clutter by 50%. Reduce fragmented experience. 3X productivity and reduce fragmented apps.
      </p>
      <div className="flex gap-4">
        <Link to="/book-demo" className="bg-[#0f172a] text-white px-8 py-4 rounded-full font-semibold hover:bg-black transition text-lg shadow-lg flex items-center gap-2 group">
          Book a Demo <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <button 
          onClick={() => openModal(videoList[0].url)}
          className="bg-white border border-gray-200 text-[#0f172a] px-8 py-4 rounded-full font-semibold hover:border-gray-300 transition text-lg flex items-center gap-2"
        >
          <BsPlayCircle className="text-xl text-[#4f1df2]" /> Watch Video
        </button>
      </div>
    </motion.div>
    <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{duration:0.8}} className="relative flex justify-center items-center">
      <AINodeGraphic />
    </motion.div>
  </div>
</header>

      {/* Products Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 tracking-tighter">
            3 Powerful Products. One Unified Experience.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Work Management Card */}
            <motion.div {...animationProps} className={cardDesignClass}>
              <div className={cardGradientOverlay}></div>
              <BsFolderFill className={floatingIconClass} />
              
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-100 text-blue-600 rounded-2xl">
                    <BsFolderFill className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-[#0f172a]">Work Management</h3>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-8 flex-grow">
                {workManagementItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <item.icon className="text-blue-500 text-xl" />
                    <span className="font-semibold text-gray-800 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="relative z-10 flex gap-4 pt-4 border-t border-gray-100">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-black transition text-sm">
                  Explore Work <BsArrowRight />
                </button>
                <button 
                  onClick={() => openModal(videoList[0].url)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#0f172a] px-5 py-3 rounded-full font-semibold hover:border-gray-300 transition text-sm"
                >
                  <BsPlayCircle className="text-lg text-[#4f1df2]" /> Watch Video
                </button>
              </div>
            </motion.div>

            {/* AI Agents Card */}
            <motion.div {...animationProps} transition={{...animationProps.transition, delay: 0.1}} className={cardDesignClass}>
              <div className={cardGradientOverlay}></div>
              <BsCpuFill className={floatingIconClass} />
              
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="p-4 bg-purple-100 text-purple-600 rounded-2xl">
                    <BsCpuFill className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-[#0f172a]">AI Agents</h3>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-8 flex-grow">
                {aiAgentsItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <item.icon className="text-purple-500 text-xl" />
                    <span className="font-semibold text-gray-800 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="relative z-10 flex gap-4 pt-4 border-t border-gray-100">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-black transition text-sm">
                  Explore Agents <BsArrowRight />
                </button>
                <button 
                  onClick={() => openModal(videoList[1].url)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#0f172a] px-5 py-3 rounded-full font-semibold hover:border-gray-300 transition text-sm"
                >
                  <BsPlayCircle className="text-lg text-[#4f1df2]" /> Watch Video
                </button>
              </div>
            </motion.div>
            
            {/* Enterprise Search Column */}
            <motion.div {...animationProps} transition={{...animationProps.transition, delay: 0.2}} className={cardDesignClass}>
              <div className={cardGradientOverlay}></div>
              <BsSearch className={floatingIconClass} />
              
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="p-4 bg-green-100 text-green-600 rounded-2xl">
                    <BsSearch className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-[#0f172a]">Enterprise Search</h3>
              </div>
              
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-8 flex-grow">
                {enterpriseSearchItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <item.icon className="text-green-500 text-xl" />
                    <span className="font-semibold text-gray-800 text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
              <div className="relative z-10 flex gap-4 pt-4 border-t border-gray-100">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-full font-semibold hover:bg-black transition text-sm">
                  Explore Search <BsArrowRight />
                </button>
                <button 
                  onClick={() => openModal(videoList[2].url)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-[#0f172a] px-5 py-3 rounded-full font-semibold hover:border-gray-300 transition text-sm"
                >
                  <BsPlayCircle className="text-lg text-[#4f1df2]" /> Watch Video
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prebuilt Agents Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-6 tracking-tighter">
            Prebuilt AI agents perform tasks in seconds
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Turn every employee into a rockstar of efficiency with prebuilt AI agents.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {prebuiltAgents.map((agent, idx) => (
              <motion.div {...animationProps} transition={{...animationProps.transition, delay: idx * 0.1}} key={idx} className={cardDesignClass}>
                <div className={cardGradientOverlay}></div>
                <agent.bgIcon className={floatingIconClass} />
                
                <div className={`relative z-10 p-4 ${agent.color} rounded-2xl w-fit mb-6`}>
                    <agent.icon className="w-8 h-8" />
                </div>
                <h3 className="relative z-10 text-2xl font-bold tracking-tight mb-4 text-[#0f172a]">{agent.title}</h3>
                <p className="relative z-10 text-gray-600 flex-grow mb-6">{agent.description}</p>
                <button className="relative z-10 flex items-center gap-2 text-[#4f1df2] font-semibold hover:gap-3 transition-all">
                    Explore <BsArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Platform Section */}
      <section className="py-24 px-6 bg-[#0f172a] text-white relative overflow-hidden">
        {/* Background Gradient Sparkles */}
        <div className="absolute inset-0 opacity-10">
          <BsStars className="absolute top-10 left-10 text-white w-12 h-12 rotate-12" />
          <BsStars className="absolute bottom-20 left-1/3 text-white w-20 h-20 -rotate-12" />
          <BsStars className="absolute top-1/4 right-20 text-white w-16 h-16 rotate-45" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}

            <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }}
  className="relative z-20" // Z-index bada diya hai
>
            <motion.h1 
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white leading-tight mb-6 relative z-30"
  >
    The Complete Enterprise AI Platform
  </motion.h1>
            
            <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6">
              One integrated platform for <br /> all your needs
            </motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-xl text-gray-300 mb-10 leading-relaxed">
              Deploy AI quickly and securely across your entire organization with Kroolo's unified platform.
              Seamlessly integrate work management, intelligent agents, and enterprise search in one solution.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Link to="/overview" className="inline-flex items-center gap-2 bg-[#4f1df2] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#4f1df2]/90 transition text-lg group">
                See Platform Overview <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="space-y-4"
          >
            {integratedPlatformCards.map((card, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 bg-white/10 rounded-xl">
                  <card.icon className="text-[#6366f1] w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  {card.description && (
                    <p className="text-gray-400 text-sm">{card.description}</p>
                  )}
                </div>
                <BsArrowRight className="ml-auto text-gray-500 group-hover:text-white transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-6 tracking-tighter">
            Connect your existing stack
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
            Kroolo integrates with the tools you already use to maximize productivity.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((integration, idx) => (
              <motion.div {...animationProps} transition={{...animationProps.transition, delay: idx * 0.1}} key={idx} className={cardDesignClass}>
                <div className={cardGradientOverlay}></div>
                <integration.bgIcon className={floatingIconClass} />
                
                <div className={`relative z-10 p-4 ${integration.color} rounded-2xl w-fit mb-6`}>
                    <integration.icon className="w-8 h-8" />
                </div>
                <h3 className="relative z-10 text-2xl font-bold tracking-tight mb-4 text-[#0f172a]">{integration.title}</h3>
                <p className="relative z-10 text-gray-600 flex-grow mb-6">{integration.description}</p>
                <button className="relative z-10 flex items-center gap-2 text-[#4f1df2] font-semibold hover:gap-3 transition-all">
                    Configure <BsArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Server Section */}
      <ServerSection />

      {/* Security Section */}
      <SecuritySection />

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10" onClick={e => e.stopPropagation()}>
            <div className="aspect-video">
                <iframe
                    width="100%"
                    height="100%"
                    src={activeVideo}
                    title="Kroolo Product Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0"
                ></iframe>
            </div>

            <div className="p-4 grid grid-cols-3 gap-3 bg-gray-950">
                {videoList.map(video => (
                    <button 
                        key={video.title}
                        onClick={() => setActiveVideo(video.url)}
                        className={`text-left p-3 rounded-xl border ${activeVideo === video.url ? 'border-[#4f1df2] bg-[#4f1df2]/10' : 'border-gray-800 bg-gray-900'} hover:border-gray-600 transition`}
                    >
                        <p className={`font-semibold ${activeVideo === video.url ? 'text-white' : 'text-gray-300'}`}>{video.title}</p>
                        <p className="text-xs text-gray-500">Play video</p>
                    </button>
                ))}
            </div>

            <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white bg-black/60 p-3 rounded-full hover:bg-black/90 transition z-50"
            >
                <BsX size={24} />
            </button>
          </div>
        
        </div>
      )}
     <div>
      <ChatBotUI />
     </div>
    
    </div>
  );
};

export default LandingPage;