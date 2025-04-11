import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCar, FaSearch, FaShieldAlt } from "react-icons/fa";

// Import image
import companyLogo from "../../assets/images/logo.png";
import carImage1 from "../../assets/images/thar.jpg";
import carImage2 from "../../assets/images/defender.jpg";
import carImage3 from "../../assets/images/gwagon.jpg";
import carImage4 from "../../assets/images/david-barros-A5NY2rB2oYY-unsplash.jpg";
import carImage5 from "../../assets/images/sport.jpg";
import carImage6 from "../../assets/images/bently.jpg";
import carImage7 from "../../assets/images/gwagon2.jpg";
import carImage8 from "../../assets/images/defender1.jpg";
import tataLogo from "../../assets/images/tata-motors-logo-5508201279-seeklogo.com.png";
import mahindraLogo from "../../assets/images/images.png";
import suzukiLogo from "../../assets/images/suzuki.png";
import hyundaiLogo from "../../assets/images/hyundai.png";
import toyotaLogo from "../../assets/images/toyoto.png";

const LandingPage = () => {
  const [showButton, setShowButton] = useState(false);
  const slideshowImages = [carImage1, carImage2, carImage3, carImage4, carImage5, carImage6, carImage7, carImage8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-300">

      {/* Navigation Bar */}
      <nav className="bg-black bg-opacity-40 shadow-lg backdrop-blur-lg py-4 fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src={companyLogo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold text-cyan-400">Auto Vault</span>
          </Link>
          <div className="flex space-x-4 items-center">
            {/* Get Started Button (Placed before About) with fade effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showButton ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/signup">
                <motion.button
                  className="bg-cyan-400 text-black py-2 px-5 rounded-lg shadow-lg hover:bg-cyan-500 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>

            <div className="flex space-x-4">
      <Link to="/aboutdup" className="py-2 px-4 bg-transparent text-white border-2 border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition">About</Link>
      <Link to="/service" className="py-2 px-4 bg-transparent text-white border-2 border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition">Services</Link>
      <Link to="/contactus2" className="py-2 px-4 bg-transparent text-white border-2 border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition">Contact</Link>
      <Link to="/login" className="py-2 px-4 bg-transparent text-white border-2 border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition">Login</Link>
      <Link to="/signup" className="py-2 px-4 bg-transparent text-white border-2 border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition">Signup</Link>
    </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slideshow */}
      <div className="h-screen flex items-end justify-center bg-cover bg-center relative overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slideshowImages[currentIndex]})` }}
        />
        {/* Welcome Box */}
        <div className="bg-black bg-opacity-70 py-3 px-5 rounded-t-xl text-center w-full max-w-xl backdrop-blur-md shadow-lg relative z-10">
          <h1 className="text-3xl font-bold text-cyan-400">Welcome to Auto Vault</h1>
          <p className="mt-1 text-sm text-gray-300">Your trusted partner in finding the best cars</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <h2 className="text-4xl text-center font-bold text-cyan-400">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
          {[{icon: <FaCar />, title: "Wide Range of Cars", desc: "Find the perfect car for your needs."},
            {icon: <FaSearch />, title: "Easy Search", desc: "Quickly find the car you're looking for."},
            {icon: <FaShieldAlt />, title: "Secure Transactions", desc: "Safe and secure payment options."}].map((feature, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="bg-gray-900/80 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700 text-center"
            >
              <div className="text-5xl text-cyan-400">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-400 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">Our Partners</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto mt-6">
          {[tataLogo, mahindraLogo, suzukiLogo, hyundaiLogo, toyotaLogo].map((logo, index) => (
            <img key={index} src={logo} alt="Partner Logo" className="h-12 mx-auto opacity-90 hover:opacity-100" />
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">&copy; 2025 Auto Vault. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
