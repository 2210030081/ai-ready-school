import React from 'react';
import { motion } from 'framer-motion';

const roles = [
  {
    title: 'For Teachers',
    description: 'Auto-grade quizzes, plan lessons, and get AI teaching tips for 1:1 learning.',
    icon: '🧑‍🏫',
  },
  {
    title: 'For Students',
    description: 'Personalized learning paths, gamified progress, and confidence tracking.',
    icon: '🎓',
  },
  {
    title: 'For Administrators',
    description: 'Analytics dashboard, curriculum compliance, and resource optimization.',
    icon: '🏫',
  },
];

const RoleHighlights = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold">Built for every edtech role</h2>
          <p className="text-gray-400 mt-3">Check how AI Ready School delivers tailored value for teams of every size.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div key={index} className="bg-black/60 border border-gray-800 rounded-xl p-6 hover:border-blue-500 hover:scale-105 hover:shadow-xl transition duration-300" whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.25)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }}>
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{role.description}</p>
              <span className="inline-flex items-center gap-2 text-blue-400 font-semibold cursor-pointer">Learn more →</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleHighlights;
