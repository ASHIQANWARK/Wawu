import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  // Show scroll-to-top button on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Load chatbot message
  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      setTimeout(() => {
        setMessages(["Hello! 👋 How can I assist you today?"]);
      }, 1000);
    }
  }, [isOpen]);

  // Close chatbot on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed z-50">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-[6rem] right-4 sm:right-6 bg-[#07293d] text-white p-3 sm:p-4 rounded-full shadow-md transition-transform duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } hover:bg-white hover:text-[#1d375f]`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-xl sm:text-2xl" />
      </button>

      {/* WhatsApp ChatBot */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 flex flex-col items-end gap-3">
        {/* Chat Window */}
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-xl rounded-lg w-[90vw] max-w-sm border border-gray-300 p-4"
          >
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <h3 className="text-lg font-semibold text-gray-700">Chat Support</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500"
                aria-label="Close chat"
              >
                <FaTimes size={18} />
              </button>
            </div>
            <div className="max-h-60 overflow-y-auto space-y-2 pr-1">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.4 }}
                  className="bg-green-100 text-gray-700 p-2 rounded-md text-sm"
                >
                  {msg}
                </motion.div>
              ))}
            </div>
            <a
              href="https://wa.me/9035140187"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600 transition"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}

        {/* Floating WhatsApp Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Open WhatsApp Chat"
        >
          <FaWhatsapp size={28} />
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingButtons;
