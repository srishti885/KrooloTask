import React from 'react';
import { motion } from 'framer-motion';
import { BsStars } from 'react-icons/bs';
//  LOGO IMPORT 
import KrooloLogo from './KrooloLogo'; 

const KrooloActionSection = () => {
  // Data for compliance logos with real URLs
  const logos = [
    { src: "https://www.infocreditgroup.com/wp-content/uploads/2024/01/AICPA-SOC2.png", alt: "AICPA SOC 2" },
    { src: "https://static.vecteezy.com/system/resources/previews/029/891/207/original/hipaa-compliant-checkmark-icon-design-logo-symbol-stock-illustration-vector.jpg", alt: "HIPAA" },
    { src: "https://thumbs.dreamstime.com/b/print-174842377.jpg", alt: "GDPR" },
    { src: "https://static.vecteezy.com/system/resources/previews/028/132/349/original/iso-27001-certified-badge-or-information-security-management-system-iso-27001-icon-rubber-stamp-seal-label-emblem-with-check-mark-glossy-and-golden-badge-illustration-vector.jpg", alt: "ISO 27001" },
  ];

  //  ANIMATION VARIANTS 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/*  CTA BANNER BLOCK   */}
        <motion.div
          //  BANNER ANIMATION 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#1a1b4b] rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden mb-24 shadow-2xl"
        >
          {/* Subtle Background Sparkles Animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -left-10 text-white/10"
          >
            <BsStars size={200} />
          </motion.div>

          {/* Left Side: Logo and Text */}
          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
            <div className="bg-white rounded-full p-6 shadow-xl">
              <KrooloLogo className="w-16 h-16 md:w-20 md:h-20" />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
                Get Kroolo, The best of AI <br /> and Work Management
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mt-4 flex items-center justify-center sm:justify-start gap-2">
                <BsStars className="text-yellow-400" /> Start for Free. Upgrade anytime!
              </p>
            </div>
          </div>

          {/* Right Side: Button */}
          <div className="relative z-10 flex-shrink-0">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[#1a1b4b] px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-colors shadow-2xl"
            >
              Try it free
            </motion.a>
          </div>
        </motion.div>

        {/*  SECURITY & COMPLIANCE BLOCK */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#0f172a] mb-5">
              Enterprise-grade security & compliance
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kroolo ensures top-tier security with SOC 2, HIPAA, GDPR, and ISO compliance to protect your data.
            </p>
          </motion.div>

          {/* Logos Container with Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
          >
            {logos.map((logo, index) => (
              <motion.img
                key={index}
                variants={logoVariants}
                src={logo.src}
                alt={logo.alt}
                whileHover={{ scale: 1.1, filter: "grayscale(0%)", opacity: 1 }}
                className="h-14 md:h-16 w-auto object-contain filter grayscale opacity-50 transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KrooloActionSection;