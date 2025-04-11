import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Home, MessageCircle, BarChart2, Users, LogOut, Car, CreditCard } from "lucide-react";
import PaymentList from "./PaymentList";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [cars, setCars] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, carsRes, messagesRes] = await Promise.all([
          axios.get("http://localhost:3000/user"),
          axios.get("http://localhost:5173/getallcars"),
          axios.get("http://localhost:5173/messages"),
          axios.get("http://localhost:5173/payment")
        ]);
        setUsers(usersRes.data.data);
        setCars(carsRes.data.data);
        setMessages(messagesRes.data);
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:3000/user/${id}`);
      setUsers(users.filter(user => user._id !== id));
      toast.success("User deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete user.");
    }
  };

  const logoutHandler = () => {
    localStorage.clear();
    toast.success("Logged out successfully!");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex">
      {/* Glassmorphism Sidebar */}
      <div className="w-64 bg-black/40 backdrop-blur-lg p-6 flex flex-col border-r border-cyan-500/30">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
          Admin Panel
        </h2>
        
        <nav className="space-y-3">
          {[
            { to: "/admincarlist", icon: <Car className="w-5 h-5" />, text: "Car Listings" },
            { to: "/messages", icon: <MessageCircle className="w-5 h-5" />, text: "Messages" },
            { to: "/salesreport", icon: <BarChart2 className="w-5 h-5" />, text: "Sales Reports" },
            { to: "/paymentlist", icon: <CreditCard className="w-5 h-5" />, text: "Payment List" },
            
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 text-cyan-200 border border-transparent"
            >
              {item.icon} {item.text}
            </Link>
          ))}
          
        </nav>

        <button 
          onClick={logoutHandler}
          className="mt-auto flex items-center gap-2 p-3 bg-red-600 hover:bg-red-700 hover:shadow-red-500/30 rounded-xl text-white font-medium transition-all duration-300"
        >
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Admin Dashboard
        </h1>

        {/* User Management Card */}
        <div className="bg-black/20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500/30 shadow-lg mb-8 hover:shadow-cyan-500/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-semibold text-white">User Management</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-cyan-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-800/50 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap text-white">{user.firstName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-cyan-200">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.role === 'admin' 
                            ? 'bg-purple-900/80 text-purple-300' 
                            : 'bg-gray-800/80 text-gray-300'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button 
                          onClick={() => deleteUser(user._id)}
                          className="px-4 py-2 bg-red-600 hover:bg-red-700 hover:shadow-red-500/30 rounded-lg text-white transition-all duration-300"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-4 text-center text-cyan-200">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Styled Toast Notifications */}
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        toastClassName="bg-gray-800/90 backdrop-blur-sm text-white border border-cyan-500/30"
        progressClassName="bg-gradient-to-r from-cyan-400 to-blue-500"
        bodyClassName="font-medium"
      />
    </div>
  );
};

export default AdminDashboard;