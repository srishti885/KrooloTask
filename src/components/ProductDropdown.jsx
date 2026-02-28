import { BsLightningChargeFill, BsFillGearFill, BsCodeSquare, BsDiagram3Fill, BsRocketTakeoff, BsChatSquareText, BsSearch, BsPlayCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
  { name: 'Kroolo AI', description: 'AI Agent & Enterprise Search', icon: BsLightningChargeFill, color: 'text-purple-600' },
  { name: 'Workflow Automation', description: 'Automate repetitive tasks', icon: BsFillGearFill, color: 'text-sky-600' },
  { name: 'Project Management', description: 'Streamline team projects', icon: BsDiagram3Fill, color: 'text-amber-600' },
  { name: 'Code Assistant', description: 'AI-powered coding help', icon: BsCodeSquare, color: 'text-emerald-600' },
  { name: 'Launchpad', description: 'Go-to-market faster', icon: BsRocketTakeoff, color: 'text-pink-600' },
  { name: 'Team Chat', description: 'Context-aware collaboration', icon: BsChatSquareText, color: 'text-rose-600' },
];

const ProductDropdown = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full -left-10 mt-2 w-[700px] bg-white/95 backdrop-blur-sm border border-gray-100 rounded-3xl shadow-2xl shadow-black/5 p-4 z-50 overflow-hidden"
    >
      
      {/* Search Bar */}
      <div className="relative mb-4">
        <BsSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full bg-white/50 text-sm rounded-full pl-11 pr-4 py-3 border border-gray-100 focus:outline-none focus:border-[#4f1df2]/50 focus:ring-1 focus:ring-[#4f1df2]/30 transition"
        />
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-2">
        {products.map((product) => (
          <a
            key={product.name}
            href="#"
            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors group"
          >
            <div className={`p-3 rounded-2xl bg-gray-100 group-hover:bg-white transition-colors ${product.color}`}>
              <product.icon size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-950 group-hover:text-[#4f1df2] transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                {product.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      
      {/* !!! BOTTOM ACTION BAR (TEXT + BUTTONS) !!! */}
      <div className="mt-4 border-t border-gray-100 pt-4 px-2 flex justify-between items-center bg-gray-50/50 -m-4 -mb-4 p-4">
        
        {/* Instruction Text */}
        <span className="text-sm text-gray-600 font-medium">Want to see how it works?</span>

        <div className="flex gap-3 items-center">
            {/* Watch Video Button */}
            <a 
            href="https://youtu.be/yTM3v5m4upk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#4f1df2] transition px-5 py-2.5 rounded-full hover:bg-white"
            >
            <BsPlayCircle size={20} className="text-[#4f1df2]" />
            Watch Video
            </a>

            {/* Book a Demo Link */}
            <Link 
            to="/book-demo" 
            className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-700 transition"
            >
            Book a Demo &rarr;
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDropdown;