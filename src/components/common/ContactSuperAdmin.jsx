import React from "react";
import { Link } from "react-router-dom";

const ContactSuperAdmin = () => {
  // Dummy super admin data with Indian names
  const superAdmins = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.kumar@autovault.in",
      phone: "+91 98765 43210",
      availability: "Mon-Sat, 10AM-7PM IST",
      designation: "Chief Admin Officer"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@autovault.in",
      phone: "+91 87654 32109",
      availability: "24/7 Emergency Access",
      designation: "Head of System Security"
    },
    {
      id: 3,
      name: "Arjun Patel",
      email: "arjun.patel@autovault.in",
      phone: "+91 78965 43210",
      availability: "Sun-Thu, 9AM-6PM IST",
      designation: "Senior Admin Manager"
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      {/* Back to Admin Login Button */}
      <Link 
        to="/adminlogin" 
        className="absolute top-6 left-6 py-2 px-4 text-lg font-bold text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition shadow-lg"
      >
        ← Back to Login
      </Link>

      {/* Glowing Logo in Background */}
      <h1 className="absolute top-1/2 left-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2 text-[12rem] font-extrabold text-white opacity-10 animate-glow">
        Auto Vault
      </h1>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-cyan-500/30 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Super Admin</h2>
        
        <div className="space-y-6">
          <div className="text-white text-center">
            <p className="mb-4">For urgent admin access or system issues, contact one of our super administrators:</p>
          </div>

          {/* Super Admin Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {superAdmins.map((admin) => (
              <div key={admin.id} className="bg-gray-800/50 p-5 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition">
                <h3 className="text-xl font-bold text-cyan-400 mb-1">{admin.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{admin.designation}</p>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{admin.email}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{admin.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{admin.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center text-gray-400">
            <p>For non-urgent matters, please use the <Link to="/admin/support" className="text-cyan-400 hover:underline">support portal</Link>.</p>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes glow {
            0% { text-shadow: 0 0 5px cyan, 0 0 10px cyan, 0 0 20px cyan; opacity: 0.1; }
            50% { text-shadow: 0 0 10px cyan, 0 0 20px cyan, 0 0 40px cyan; opacity: 0.2; }
            100% { text-shadow: 0 0 5px cyan, 0 0 10px cyan, 0 0 20px cyan; opacity: 0.1; }
          }
          .animate-glow {
            animation: glow 3s infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default ContactSuperAdmin;