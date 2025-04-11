import React from "react";
import { FaCar, FaBalanceScale, FaCreditCard, FaUniversity, FaFileAlt } from "react-icons/fa";

const services = [
  {
    title: "Car Buying & Selling",
    description: "We provide a seamless platform for buying and selling cars with verified sellers and buyers.",
    icon: <FaCar />,
  },
  {
    title: "Car Comparison",
    description: "Compare multiple car models based on specifications, pricing, and features before making a decision.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Online Booking & Payment",
    description: "Book your dream car online with secure payment options and hassle-free transactions.",
    icon: <FaCreditCard />,
  },
  {
    title: "Vehicle Financing Assistance",
    description: "Get expert guidance on car loans, EMI options, and financing plans tailored for you.",
    icon: <FaUniversity />,
  },
  {
    title: "Insurance & Documentation",
    description: "We assist in getting car insurance and managing all necessary documentation effortlessly.",
    icon: <FaFileAlt />,
  },
];

const Service = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-cyan-500/30 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-cyan-500/50 hover:shadow-cyan-500/50 hover:scale-105 transition transform duration-300"
            >
              <div className="text-4xl text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
