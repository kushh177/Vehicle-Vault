import React from "react";

const dealers = [
  { name: "Maruti Suzuki Arena", location: "Mumbai, Maharashtra", contact: "+91 98765 43210" },
  { name: "Nexa Premium Cars", location: "Bangalore, Karnataka", contact: "+91 87654 32109" },
  { name: "Hyundai Showroom", location: "Delhi, NCR", contact: "+91 76543 21098" },
  { name: "Tata Motors Dealership", location: "Chennai, Tamil Nadu", contact: "+91 65432 10987" },
  { name: "Mahindra First Choice", location: "Kolkata, West Bengal", contact: "+91 54321 09876" },
  { name: "Toyota Bharat Motors", location: "Pune, Maharashtra", contact: "+91 43210 98765" },
  { name: "Kia Motors Showroom", location: "Hyderabad, Telangana", contact: "+91 32109 87654" },
  { name: "Honda Cars India", location: "Ahmedabad, Gujarat", contact: "+91 21098 76543" },
  { name: "Volkswagen India", location: "Jaipur, Rajasthan", contact: "+91 10987 65432" },
  { name: "Renault Nissan", location: "Lucknow, Uttar Pradesh", contact: "+91 98765 43210" },
];

const Dealers = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex flex-col items-center py-12 px-6">
      <h2 className="text-4xl font-bold text-white mb-6 text-center animate-pulse">
        Authorized Car Dealers in India
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-2xl">
        Find trusted car dealers across India for the best deals on new and pre-owned vehicles.
      </p>

      {/* Dealers List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {dealers.map((dealer, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-cyan-500/30 transition transform hover:scale-105 hover:shadow-cyan-500/50"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{dealer.name}</h3>
            <p className="text-gray-300">{dealer.location}</p>
            <p className="text-cyan-400 font-medium">{dealer.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dealers;
