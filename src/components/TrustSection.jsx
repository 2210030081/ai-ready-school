import React from 'react';
import { motion } from 'framer-motion';
const trustLogos = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80", // students with laptop and AI data overlay
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80", // teacher training via digital classroom
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80", // collaborative school tech session
  "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=900&q=80", // coding/AI lab workspace
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80", // analytics dashboard for education
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold mb-2">Trusted by education leaders</p>
          <h2 className="text-3xl md:text-4xl font-bold">200+ schools, 10,000+ teachers, 50,000+ students</h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">AI Ready School is already powering digital transformation for K-12 and higher ed institutions worldwide.</p>
        </motion.div>

        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          {trustLogos.map((logo, idx) => (
            <div key={idx} className="h-48 rounded-lg overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300">
              <img src={logo} alt={`partner-${idx}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>

        <motion.div className="grid md:grid-cols-3 gap-6 mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
          {[
            { label: 'Average course completion', value: '92%' },
            { label: 'Teacher time saved', value: '1.8 hrs/day' },
            { label: 'NPS score', value: '78' },
          ].map((item, idx) => (
            <div key={idx} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">{item.value}</p>
              <p className="text-gray-300 mt-2">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
