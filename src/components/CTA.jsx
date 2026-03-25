import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Education?</h2>
        <p className="text-xl text-gray-300 mb-8">
          Join thousands of educators and students already using AI Ready School to revolutionize learning.
        </p>
        <button className="bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Start Your AI Journey Today
        </button>
      </div>
    </section>
  );
};

export default CTA;
