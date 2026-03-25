import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'How quickly can we start using AI Ready School?',
    a: 'Most schools and districts can go live in 4–6 weeks with guided onboarding and a phased rollout plan.',
  },
  {
    q: 'Does it work with existing curriculum?',
    a: 'Yes, our platform supports custom curriculum mapping, standards alignment, and teacher-created resources.',
  },
  {
    q: 'How is student data protected?',
    a: 'We comply with GDPR and COPPA-level data privacy, with end-to-end encryption and school-managed access controls.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-black/70 text-white"> 
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold">Frequently asked questions</h2>
          <p className="text-gray-400 mt-3">Answering teacher, student, and admin concerns so decisions are easier.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div key={index} className="bg-black/50 border border-gray-800 rounded-xl p-5" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
