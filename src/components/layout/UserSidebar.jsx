import React, { useEffect, useState } from 'react';
import { UserNavbar } from './UserNavbar';
import { Outlet, Link } from 'react-router-dom';
import { BiCar, BiInfoCircle, BiEnvelope, BiStar, BiCircle } from 'react-icons/bi';
import UserProfile from '../user/UserProfile';

export const UserSidebar = () => {
  const [user, setUser] = useState({ name: "", email: "", profilePic: "" });

  useEffect(() => {
    // Fetch user details from local storage
    const userData = {
      name: localStorage.getItem("userName") || "XYZ",
      email: localStorage.getItem("userEmail") || "YYX@example.com",
      profilePic: localStorage.getItem("userProfilePic") || "https://i.pravatar.cc/150",
    };
    setUser(userData);
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white shadow-lg fixed h-full overflow-y-auto flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="p-4 flex items-center space-x-2">
            <img
              src="src/assets/images/logo.PNG"
              className="h-10 w-10 rounded"
              alt="Auto Vault Logo"
              onError={(e) => {
                e.target.src = 'src/assets/images/logo.PNG';
              }}
            />
            <Link to="/user">
              <span className="text-lg font-semibold">Auto Vault</span>
            </Link>
          </div>

          <UserProfile>
            
          </UserProfile>

          {/* Navigation Links */}
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link to="aboutcars" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
                  <BiCar className="mr-2" /> ABOUT CARS
                </Link>
              </li>
              <li>
                <Link to="comparison" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
                  <BiCircle className="mr-2" /> Comparison
                </Link>
              </li>
              <li>
                <Link to="about" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
                  <BiInfoCircle className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="review" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
                  <BiStar className="mr-2" /> Review
                </Link>
              </li>
              <li>
                <Link to="contact" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
                  <BiEnvelope className="mr-2" /> Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Contact Information at the Bottom */}
        <div className="p-4 text-xs text-gray-400 text-center border-t border-gray-700">
          <h3 className="text-sm font-semibold text-cyan-400 mb-2">Details</h3>
          <p className="hover:text-cyan-400 transition duration-300">✉ support@autovault.com</p>
          <p className="hover:text-cyan-400 transition duration-300">📞 +91 12345 67890</p>
          <p className="hover:text-cyan-400 transition duration-300">📍 123 Street, Ahmedabad, India</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ml-64">
        <UserNavbar />
        <main className="mt-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserSidebar;
