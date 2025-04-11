import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MessageCircle, Bell } from "lucide-react";

export const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-lg p-2 fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left Section (Now Includes Right-Side Items) */}
        <div className="flex items-center gap-x-2 md:gap-x-4 flex-wrap">
          {/* Menu Button */}
          <button className="text-cyan-400 text-xl md:text-2xl hover:text-cyan-300 transition">
            <i className="bi bi-list" />
          </button>
          
          {/* Navigation Links */}
          <Link to="/" className="text-white font-semibold text-sm md:text-base hover:text-cyan-400 transition hidden md:block">
            HOME
          </Link>
          <Link to="/user" className="text-white font-semibold text-sm md:text-base hover:text-cyan-400 transition hidden md:block">
            BUY CAR
          </Link>
          <Link to="dealers" className="text-white font-semibold text-sm md:text-base hover:text-cyan-400 transition hidden md:block">
            DEALERS
          </Link>
          <Link to="listing" className="text-white font-semibold text-sm md:text-base hover:text-cyan-400 transition hidden md:block">
            LISTINGS
          </Link>
          <Link to="financing" className="text-white font-semibold text-sm md:text-base hover:text-cyan-400 transition hidden md:block ">
            FINANCING
          </Link>

          {/* Add margin between Financing and Right-Side Items */}
          <div className="ml-48 flex items-center gap-x-4 md:gap-x-4 pl-52">
            {/* Right Side Icons */}
            <button className="text-cyan-400 text-xl md:text-2xl hover:text-cyan-300 transition ">
              <i className="bi bi-search" />
            </button>

            

<div className="relative">
  <Link to="alert" className="text-cyan-400 text-xl md:text-2xl hover:text-cyan-300 transition">
  <button className="text-cyan-400 text-xl md:text-2xl hover:text-cyan-300 transition relative">
    <Bell className="w-7 h-7" /> 
    <span className="absolute -top-1 -right-2 bg-yellow-500 text-white text-xs rounded-full px-1">
      5
    </span>
  </button>
  </Link>
</div>

            <button className="text-cyan-400 text-xl md:text-2xl hover:text-cyan-300 transition ">
              <i className="bi bi-arrows-fullscreen" />
            </button>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-2 md:px-4 py-1 rounded-md shadow-md transition duration-300 text-sm md:text-base"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
