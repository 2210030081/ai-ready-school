import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Brand */}
          <motion.div
            className="font-bold text-xl md:text-2xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
              AI Ready School
            </span>
          </motion.div>

          {/* Right: Navigation Links and CTA */}
          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <motion.a
                href="#products"
                className="text-white hover:text-purple-400 transition font-medium relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Products
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
              <motion.a
                href="#about"
                className="text-white hover:text-purple-400 transition font-medium relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                About
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
              <motion.a
                href="#contact"
                className="text-white hover:text-purple-400 transition font-medium relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Contact
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            </div>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Book Demo
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
