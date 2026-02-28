import React from 'react';
import { FaRobot, FaProjectDiagram, FaFileAlt, FaCommentAlt, FaCogs, FaSearch, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiGoogleanalytics } from 'react-icons/si';
import { VscLibrary } from 'react-icons/vsc';
import { MdOutlineSecurity } from 'react-icons/md';
import KrooloLogo from './KrooloLogo'; // !!! UPDATED: Imported the new logo !!!

const AINodeGraphic = () => {
  const width = 800;
  const height = 600;
  const centerX = width / 2;
  const centerY = height / 2;

  const nodes = [
    { icon: FaCogs, title: "AI Workflow", color: "bg-blue-500", x: 200, y: 100 },
    { icon: FaRobot, title: "AI Agents", color: "bg-purple-500", x: 80, y: 180 },
    { icon: FaProjectDiagram, title: "AI Projects", color: "bg-blue-600", x: 70, y: 300 },
    { icon: VscLibrary, title: "AI Dashboard", color: "bg-sky-500", x: 120, y: 420 },
    { icon: FaFileAlt, title: "AI Docs", color: "bg-sky-600", x: 220, y: 500 },
    { icon: SiGoogleanalytics, title: "AI Goals / OKRs", color: "bg-purple-600", x: 350, y: 530 },
    { icon: FaCogs, title: "Automations", color: "bg-blue-400", x: 480, y: 500 },
    { icon: FaDatabase, title: "Data Insights", color: "bg-emerald-500", x: 580, y: 420 },
    { icon: FaCommentAlt, title: "Chat", color: "bg-sky-400", x: 620, y: 300 },
    { icon: FaBrain, title: "AI Brain", color: "bg-amber-500", x: 580, y: 180 },
    { icon: FaSearch, title: "Enterprise Search", color: "bg-purple-500", x: 480, y: 100 },
    { icon: MdOutlineSecurity, title: "Security AI", color: "bg-red-500", x: 350, y: 60 },
  ];

  return (
    <div className="relative w-full flex items-center justify-center overflow-visible">
      
      {/* !!! STYLE TAG FOR SVG ANIMATIONS !!! */}
      <style>
        {`
          @keyframes flow {
            0% { stroke-dashoffset: 20; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-flow {
            animation: flow 1s linear infinite;
            stroke-dasharray: 4 6;
          }
          @keyframes nodeAppear {
            0% { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spin-reverse-slow {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
            50% { box-shadow: 0 0 0 15px rgba(79, 70, 229, 0); }
          }
          .animate-spin-slow { animation: spin-slow 10s linear infinite; }
          .animate-spin-reverse-slow { animation: spin-reverse-slow 15s linear infinite; }
          .animate-pulseGlow { animation: pulseGlow 2s infinite; }
        `}
      </style>

      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        
        {/* Drawing Lines */}
        {nodes.map((node, index) => (
          <path
            key={`line-${index}`}
            d={`M${centerX},${centerY} L${node.x},${node.y}`}
            stroke="#1e293b" 
            strokeWidth="1.5"
            fill="none"
            className="opacity-50 animate-flow"
            style={{ 
                animationDelay: `${index * 50}ms` 
            }}
          />
        ))}

        {/* Placing Nodes */}
        {nodes.map((node, index) => (
          <foreignObject
            key={`node-${index}`}
            x={node.x - 40}
            y={node.y - 50}
            width="80"
            height="120"
            className="overflow-visible"
            style={{ 
                animation: 'nodeAppear 0.5s ease-out forwards', 
                animationDelay: `${index * 50}ms` 
            }}
          >
            <div className="flex flex-col items-center gap-2" style={{ animation: 'float 3s ease-in-out infinite', animationDelay: `${index * 100}ms` }}>
              <div className={`w-16 h-16 ${node.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                <node.icon className="text-white text-3xl" />
              </div>
              <span className="text-xs text-gray-900 font-medium bg-white/70 px-2 py-0.5 rounded-full backdrop-blur-sm text-center w-24 border border-gray-100">
                {node.title}
              </span>
            </div>
          </foreignObject>
        ))}
      </svg>

      {/* Central Logo Container */}
      <div className="absolute w-48 h-48 flex items-center justify-center z-10">
        <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-spin-slow"></div>
        <div className="absolute inset-4 rounded-full border border-indigo-500/10 animate-spin-reverse-slow"></div>
        <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-[6px] border-white animate-pulseGlow p-4">
          <KrooloLogo size="100%" />
        </div>
      </div>
    </div>
  );
};

export default AINodeGraphic;