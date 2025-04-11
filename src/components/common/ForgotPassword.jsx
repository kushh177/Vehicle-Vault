import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { em } from "framer-motion/client";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        return
      }
      const res = await axios.post("/forgotpassword", { email });
      if (res.status === 200) {
        toast.success("Password reset link sent to your email.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
      console.log(error);
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="bg-white/10 p-8 rounded-lg shadow-md border border-cyan-500/30 max-w-md w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ForgotPassword;
