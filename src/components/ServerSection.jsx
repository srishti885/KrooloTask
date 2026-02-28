import React from "react";
import { motion } from "framer-motion";
import {
  BsBox,
  BsGear,
  BsMegaphone,
  BsGraphUp,
  BsRocketTakeoff,
  BsCpu,
  BsShare,
  BsDatabase,
  BsRobot,
  BsGlobe,
} from "react-icons/bs";
// Import React icon for floating
import { FaReact } from "react-icons/fa";

/* ================= SVG CONNECTION LINES ================= */

const ConnectionLines = () => {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.8,
      transition: { duration: 2, ease: "easeInOut", delay: 0.3 },
    },
  };

  const lineStyle = {
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round",
  };

  // --- SPECIFIC SINGLE PATH ---
  const mainPath = "M 50% 18% V 52% V 84%"; 

  const FlowDot = ({ path, delay }) => (
    <motion.circle
      r="2.5"
      fill="#38bdf8"
      filter="url(#glow)"
      initial={{ offsetDistance: "0%" }}
      animate={{ offsetDistance: "100%" }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
      style={{ offsetPath: `path("${path}")` }}
    />
  );

  return (
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g>
        <motion.path
          d={mainPath}
          {...lineStyle}
          stroke="#1f2937"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
        />

        <motion.path
          d={mainPath}
          {...lineStyle}
          stroke="url(#flowGradient)"
          filter="url(#glow)"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
        />

        <FlowDot path={mainPath} delay={0} />
        <FlowDot path={mainPath} delay={1.5} />
      </g>
    </svg>
  );
};

/* ================= BACKGROUND ICONS ================= */

const FloatingIcons = () => {
  const icons = Array.from({ length: 25 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((_, i) => (
        <motion.div
          key={i}
          
          className="absolute text-sky-500/20"
          initial={{
            // Properly randomize initial position
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
            rotate: 0,
          }}
          animate={{
            // Animate movement to another random position
            x: [null, Math.random() * 100 + "vw"],
            y: [null, Math.random() * 100 + "vh"],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 20, // Slower
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          <FaReact size={Math.random() * 30 + 15} />
        </motion.div>
      ))}
    </div>
  );
};

/* ================= MAIN SECTION ================= */

const ServerSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const leftPanels = [
    { icon: BsBox, title: "Product" },
    { icon: BsGear, title: "Engineering" },
    { icon: BsMegaphone, title: "Marketing" },
    { icon: BsGraphUp, title: "Sales" },
    { icon: BsRocketTakeoff, title: "Operations" },
  ];

  const centerNodes = [
    { icon: BsCpu, title: "LLM Orchestration", color: "text-sky-400" },
    { icon: BsShare, title: "Generative Engine", color: "text-purple-400" },
    { icon: BsDatabase, title: "Data Governance", color: "text-indigo-400" },
  ];

  const externalNodes = [
    { icon: BsRobot, color: "text-green-400" },
    { icon: BsDatabase, color: "text-orange-400" },
    { icon: BsGlobe, color: "text-blue-400" },
    { icon: BsRobot, color: "text-gray-300" },
    { icon: BsCpu, color: "text-yellow-400" },
  ];

  const rightFeatures = [
    "AI Agents",
    "Create and Chat with Projects",
    "Create Forms",
    "Create Goals / OKRs",
    "Create and Chat with Docs",
    "Chat with Docs, PDFs",
    "Create Dashboards",
  ];

  return (
    <section className="py-24 px-6 bg-[#030305] text-white overflow-hidden relative">
      {/* Floating Icons Background */}
      <FloatingIcons />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.2] z-10"
        style={{
          backgroundImage:
            "linear-gradient(#555555 1px, transparent 1px), linear-gradient(90deg, #555555 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanning Line Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-sky-500/20 shadow-[0_0_15px_4px_rgba(56,189,248,0.5)] animate-scan z-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">
            GenAI isn't an add-on; <br />
            <span className="text-sky-400">it's our core</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Kroolo's supercharged AI is built into every pixel. Experience the
            power of multiple LLMs orchestrated intelligently across all your
            workflows.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-[#060608] rounded-3xl border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <ConnectionLines />

          {/* LEFT PANELS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-4 relative z-10"
          >
            {leftPanels.map((panel, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  borderColor: "#38bdf8",
                  backgroundColor: "#0c0c0e",
                }}
                className="flex items-center gap-4 bg-[#0a0a0c] p-5 rounded-2xl border border-gray-800 cursor-pointer"
              >
                <panel.icon className="w-6 h-6 text-gray-400" />
                <h3 className="text-lg font-semibold">{panel.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* CENTER NODES */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center justify-between relative z-10"
          >
            <div className="flex flex-col gap-4 w-full">
              {centerNodes.map((node, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
                  className="flex items-center gap-3 bg-[#0a0a0c] p-4 rounded-xl border border-gray-800 justify-center cursor-pointer"
                >
                  <node.icon className={`w-5 h-5 ${node.color}`} />
                  <h3 className="text-sm font-bold">{node.title}</h3>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center gap-3 mt-10">
              {externalNodes.map((ext, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="bg-[#0a0a0c] p-3 rounded-full border border-gray-800"
                >
                  <ext.icon className={`w-6 h-6 ${ext.color}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT FEATURES */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-3 relative z-10"
          >
            {rightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5, color: "#38bdf8" }}
                className="flex items-center gap-3 bg-[#0a0a0c] p-4 rounded-xl border border-gray-800 cursor-pointer"
              >
                <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                <h3 className="text-sm font-medium text-gray-200">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ServerSection;