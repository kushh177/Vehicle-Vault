import React from 'react';

export const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-black p-4">
      
      {/* Header Section */}
      <header className="text-center text-gray-200 mb-6">
        <h1 className="text-4xl font-bold text-cyan-400 drop-shadow-lg">About Auto Vault</h1>
        <p className="text-md mt-1 font-light text-gray-400">Your Trusted Partner in Car Buying & Selling</p>
      </header>

      {/* Content Section */}
      <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-3xl w-full border border-gray-800 hover:shadow-cyan-500/40 transition duration-300">
        
        <p className="text-gray-300 text-md leading-relaxed mb-4">
          Welcome to <span className="text-cyan-400 font-semibold">Auto Vault</span>, your go-to platform for seamless car transactions.
          We prioritize transparency, security, and customer satisfaction.
        </p>

        <h2 className="text-2xl font-bold text-cyan-500 mt-4">Our Mission</h2>
        <p className="text-gray-400 mt-2">
          At <span className="text-blue-400 font-semibold">Auto Vault</span>, we provide a safe and efficient marketplace for car buyers and sellers.
        </p>

        <h2 className="text-2xl font-bold text-blue-500 mt-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
          <li><span className="text-cyan-400 font-semibold">Diverse Selection:</span> Trusted vehicles for every need.</li>
          <li><span className="text-blue-400 font-semibold">Secure Transactions:</span> Safe and quick deals.</li>
          <li><span className="text-cyan-400 font-semibold">Expert Comparisons:</span> Reviews & insights to guide you.</li>
          <li><span className="text-blue-400 font-semibold">24/7 Support:</span> We're always here to assist.</li>
        </ul>

        <h2 className="text-2xl font-bold text-cyan-500 mt-4">Get in Touch</h2>
        <p className="text-gray-400 mt-2">
          Questions? Visit our <a href="contact" className="text-blue-400 font-semibold hover:underline">Contact Page</a>.
        </p>
      </div>
    </div>
  );
};

export default About;