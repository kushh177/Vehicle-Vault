import React from "react";
import { Razorpay } from "./RazorPay";

export const BankComponent = ({ onDeposit }) => {
  const fixedAmount = 20000;

  const depositHandler = () => {
    onDeposit(fixedAmount);
  };

  const handlePaymentSuccess = () => {
    // Handle successful payment here
    console.log("Payment successful");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-cyan-400/30 shadow-md rounded-2xl p-8 transition hover:shadow-cyan-500/40">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
Book Your Car Now
        </h1>

        {/* Fixed Deposit Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-cyan-200 mb-2 pl-20">
            TOKEN AMOUNT TO BE PAID (₹)
          </label>
          
          <button
            onClick={depositHandler}
            className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg border border-cyan-400/40 hover:shadow-[0_0_15px_#22d3ee] transition"
          >  <Razorpay amount={fixedAmount} onPaymentSuccess={handlePaymentSuccess} />
          </button>
        </div>
      </div>
    </div>
  );
};
