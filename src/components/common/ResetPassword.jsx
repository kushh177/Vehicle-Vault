import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post(`/resetpassword/${token}`, { password });
      setMessage(res.data.message);
      setError("");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setMessage("");
      setError(err.response?.data?.message || "Something went wrong!");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md border border-cyan-400/50 hover:border-cyan-300/90 transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Reset Your Password</h2>

        {message && <p className="text-green-400 text-center mb-4">{message}</p>}
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full bg-cyan-400 text-gray-900 py-2 rounded-md font-semibold hover:bg-cyan-300 transition duration-300 shadow-lg shadow-cyan-500/50"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;