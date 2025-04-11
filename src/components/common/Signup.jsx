import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const submitHandler = async (data) => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/user/signup", data);

      if (res.status === 201) {
        toast.success("Signup successful! Redirecting to login...", { autoClose: 2000 });
        setTimeout(() => navigate("/login"), 2500);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      
      <h1 className="absolute top-1/2 left-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2 text-[12rem] font-extrabold text-white opacity-10 animate-glow">
        Auto Vault
      </h1>

      <div className="w-full max-w-lg p-10 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg border border-white/20">

        <h2 className="text-2xl font-semibold text-center text-cyan-400 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
        <div>
        <label className="block text-white text-sm font-medium mb-2">First Name</label>
        <input type="text" {...register("firstName", { required: "First Name is required" })} className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition" placeholder="Enter your first name"/>
         {errors.firstName && <p className="text-red-400 text-sm">{errors.firstName.message}</p>}
        </div>

       <div>
       <label className="block text-white text-sm font-medium mb-2">Last Name</label>
       <input type="text" {...register("lastName", { required: "Last Name is required" })} className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition" placeholder="Enter your last name"/>
       {errors.lastName && <p className="text-red-400 text-sm">{errors.lastName.message}</p>}
       </div>
      </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
          </div>

          {/* Role Selection Dropdown */}
          {/* <div>
            <label className="block text-white text-sm font-medium mb-2">Role</label>
            <select
              {...register("roleId", { required: "Role is required" })}
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white outline-none focus:ring-2 focus:ring-cyan-400 transition"
            >
              <option value="67be8e1e070c471e9f2c5210">User</option> 
              <option value="67be8e1e070c471e9f2c5211">Admin</option> 
            </select>
            {errors.roleId && <p className="text-red-400 text-sm">{errors.roleId.message}</p>}
          </div> */}

          <div>
            <label className="block text-white text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters long" },
              })}
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-400 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block text-white text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === password || "Passwords do not match",
              })}
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Re-enter your password"
            />
            {errors.confirmPassword && <p className="text-red-400 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md hover:opacity-90 transition-transform transform hover:-translate-y-1"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">Login here</Link>
        </p>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />

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

export default Signup;
