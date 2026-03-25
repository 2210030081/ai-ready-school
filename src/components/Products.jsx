import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ title, description, delay = 0 }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -10 }}
    >
      <motion.div
        className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-all duration-300 relative overflow-hidden"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          borderColor: "rgba(59, 130, 246, 0.5)"
        }}
      >
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          initial={false}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.h3
            className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {description}
          </motion.p>

          {/* Interactive indicator */}
          <motion.div
            className="mt-4 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -20 }}
            whileHover={{ x: 0 }}
          >
            <span className="text-sm font-medium">Learn More</span>
            <motion.svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <motion.section
      id="products"
      className="py-20 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our AI Products
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard
            title="AI Learning Platform"
            description="Interactive AI-powered learning experiences tailored for modern education."
            delay={0.1}
          />
          <ProductCard
            title="Smart Assessment Tools"
            description="Advanced evaluation systems that adapt to student learning patterns."
            delay={0.2}
          />
          <ProductCard
            title="AI Tutoring System"
            description="Personalized tutoring powered by artificial intelligence for optimal learning outcomes."
            delay={0.3}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
