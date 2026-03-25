import React from 'react';
import { motion } from 'framer-motion';

const CaseStudy = () => {
  return (
    <section className="py-20 bg-black/60 backdrop-blur-sm border-t border-b border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-blue-400 uppercase tracking-wide font-semibold mb-2">Success story</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Oak Valley School reduced grading time by 65%</h2>
              <p className="text-gray-300 mb-6">Using AI Ready School, Oak Valley automated assessments and focused teacher effort on student mentorship instead of paperwork.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-200">✅ 1,200 students onboarded in 4 weeks</li>
                <li className="flex items-center gap-2 text-gray-200">✅ 65% faster grading cycle</li>
                <li className="flex items-center gap-2 text-gray-200">✅ 88% student engagement increase</li>
              </ul>
              <a href="#" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300">Read the full case study</a>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-2xl shadow-2xl border border-gray-700">
              <div className="grid grid-cols-2 gap-4 text-center">
                {[
                  { label: 'Teacher hours saved', value: '65%' },
                  { label: 'Engagement increase', value: '88%' },
                  { label: 'Retention growth', value: '23%' },
                  { label: 'Implementation time', value: '4 weeks' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-white">{item.value}</p>
                    <p className="text-gray-300 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
