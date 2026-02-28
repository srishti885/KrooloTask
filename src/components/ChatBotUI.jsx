import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsRobot, BsSend, BsX, BsCalendarEvent } from 'react-icons/bs'; 
import { useNavigate } from 'react-router-dom';

const ChatBotUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm Kroolo AI. How can I help you today? Would you like to book a demo?" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  // BOOK DEMO FUNCTION 
  const handleBookDemo = () => {
    setMessages(prev => [...prev, { type: 'user', text: "Book Demo" }]);
    setIsOpen(false);
    navigate('/book-demo'); 
  };

  //  MOCK/DEMO LOGIC 
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { type: 'user', text: inputValue };
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsLoading(true);

      // Simulate a delay for thinking
      setTimeout(() => {
        let botReply = "I am currently in demo mode. Try asking about 'features' or 'pricing'!";
        const lowerInput = inputValue.toLowerCase();

        // Basic keywords
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
          botReply = "Hello there! How can I assist you with Kroolo?";
        } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
          botReply = "Kroolo offers flexible pricing plans. Would you like to see our pricing page?";
        } else if (lowerInput.includes('feature')) {
          botReply = "Kroolo helps manage projects, tasks, and teams efficiently!";
        }

        setMessages(prevMessages => [...prevMessages, { type: 'bot', text: botReply }]);
        setIsLoading(false);
      }, 1000); // 1 second delay
    }
  };

  return (
    <>
      {/* ROBOT TOGGLE BUTTON  */}
      <motion.button
        className="fixed bottom-6 right-6 bg-[#4f1df2] text-white rounded-full p-4 shadow-2xl z-[999999] flex items-center justify-center cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999999 }}
      >
        {isOpen ? <BsX size={35} /> : <BsRobot size={35} className="text-white" />}
      </motion.button>

      {/* ROBOT WINDOW  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-[450px] bg-white rounded-3xl shadow-2xl flex flex-col z-[999999] border-4 border-[#4f1df2]/20 overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{ zIndex: 999999 }}
          >
            {/* Header with Robot Icon */}
            <div className="bg-[#4f1df2] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <BsRobot size={24} />
                </div>
                <h3 className="font-bold text-xl">Kroolo Bot</h3>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gray-50 custom-scrollbar">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-sm font-medium ${
                    msg.type === 'user' 
                      ? 'bg-[#4f1df2] text-white rounded-3xl rounded-br-none'
                      : 'bg-white text-gray-800 rounded-3xl rounded-bl-none shadow-sm'
                  }`}>
                    {msg.text}
                    
                    {/*  BOOK DEMO BUTTON  */}
                    {index === 0 && (
                      <button 
                        onClick={handleBookDemo}
                        className="flex items-center gap-2 mt-3 bg-[#4f1df2] text-white text-xs px-4 py-2 rounded-full hover:bg-[#3d16c2] transition"
                      >
                        <BsCalendarEvent size={14} /> Book Demo
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-400 p-4 rounded-3xl rounded-bl-none shadow-sm text-sm flex items-center gap-2">
                    <BsRobot size={18} /> Thinking...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-100 bg-white rounded-b-3xl">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1 pl-3">
                <input
                  type="text"
                  placeholder="Ask me something..."
                  className="flex-1 bg-transparent focus:outline-none text-sm"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <motion.button
                  className="bg-[#4f1df2] text-white rounded-full p-3 disabled:bg-gray-400"
                  whileHover={{ scale: 1.05 }}
                  onClick={handleSendMessage}
                  disabled={isLoading}
                >
                  <BsSend size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBotUI;