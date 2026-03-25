import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto text-center px-6 space-y-6">
        <h2 className="text-4xl font-bold text-white">Ready to Transform Education?</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          Join thousands of educators and students already using AI Ready School to revolutionize learning.
        </p>
        <button className="bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg hover:scale-105 transition duration-300 hover:shadow-xl">
          Start Your AI Journey Today
        </button>
      </div>
    </section>
  );
};

export default CTA;
