import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'AI Ready School transformed our classroom experience. Teachers now spend 70% less time on grading and more time coaching.',
    author: 'Sai Vaibhav',
    role: 'Lead Educator, Riverside High',
  },
  {
    quote: 'Students love adaptive modules and immediate feedback. Engagement is through the roof.',
    author: 'Rohith',
    role: 'Student, Oakview College',
  },
  {
    quote: 'The admin dashboard gave us insights we never had. This is our highest ROI edtech solution yet.',
    author: 'Sai Prudhvi Raj',
    role: 'Director of Operations, Summit Academy',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-blue-400 uppercase tracking-wider text-sm">Real feedback from real classrooms</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">Success stories from users</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div key={index} className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500 hover:scale-105 hover:shadow-xl transition duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 * index }} viewport={{ once: true }}>
              <p className="text-gray-200 italic leading-relaxed mb-4">"{item.quote}"</p>
              <p className="font-semibold">{item.author}</p>
              <p className="text-gray-400 text-sm">{item.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
