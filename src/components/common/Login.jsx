import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "lucide-react"; // Import Home icon
import PrivateRoutes from "../hooks/PrivateRoutes";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    // Play car horn sound **instantly**
     const audio = new Audio("src/assets/sounds/Car Lock Ringtoon  Car Unlock Sound Effect  car horn ringtone  text message ringtone-[AudioTrimmer.com].mp3");
     audio.play();

    try {
      const res = await axios.post("http://localhost:3000/user/login", data);
      
      if (res.status === 200 && res.data?.data?.role) {
        // Store user details
        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.role);
        localStorage.setItem("token", res.data.token);
  
        // Play car horn sound **right before navigating**
        const audio = new Audio("src/assets/sounds/car-horn.mp3");
        audio.play().then(() => {
          navigate(res.data.data.role === "admin" ? "/admin" : "/user");
        }).catch(() => {
          navigate(res.data.data.role === "admin" ? "/admin" : "/user");
        });
  
        // Ensure PrivateRoutes is triggered properly
        PrivateRoutes();
      }
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || "Invalid credentials");
    }
  };
  
  

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      
      {/* 🏠 Home Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 flex items-center gap-2 text-white bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition"
      >
        <Home size={24} /> {/* Home Icon */}
      </button>

      {/* Glowing Logo in Background */}
      <h1 className="absolute top-1/2 left-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2 text-[12rem] font-extrabold text-white opacity-10 animate-glow">
        Auto Vault
      </h1>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-cyan-500/30 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Login</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          
          {/* Role Selection Dropdown */}
          {/* <div>
            <label className="block text-white mb-1">Select Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && <p className="text-red-400 text-sm">{errors.role.message}</p>}
          </div> */}
          
          {/* Email Field */}
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-white mb-1">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
          >
            Login Into Vault
          </button>
        </form>

        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:underline">
            Signup
          </Link>
        </p>
        <div className="flex justify-center">
          <Link to="/forgotpassword" className="text-cyan-400 hover:underline text-center">
            Forgot Password?
          </Link>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />

      {/* Tailwind CSS animation */}
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

export default Login;
