import React from "react";

const financingOptions = [
  {
    bank: "HDFC Bank",
    loanAmount: "₹5 Lakh - ₹50 Lakh",
    interestRate: "8.5% - 10.5% p.a.",
    tenure: "1 - 7 Years",
    emiExample: "₹2,099/month per ₹1 Lakh",
    logo: "https://logos-world.net/wp-content/uploads/2020/11/HDFC-Bank-Logo.png",
  },
  {
    bank: "SBI Car Loan",
    loanAmount: "₹3 Lakh - ₹50 Lakh",
    interestRate: "8.65% - 9.7% p.a.",
    tenure: "1 - 7 Years",
    emiExample: "₹2,150/month per ₹1 Lakh",
    logo: "https://logos-world.net/wp-content/uploads/2023/02/SBI-Logo.png",
  },
  {
    bank: "ICICI Bank",
    loanAmount: "₹5 Lakh - ₹40 Lakh",
    interestRate: "8.75% - 11.2% p.a.",
    tenure: "1 - 6 Years",
    emiExample: "₹2,180/month per ₹1 Lakh",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqTkQOhAwNC2GCUZc0VuSY0Hgb8SNoPgKbcPdTo_86xRaE1Lf0KnPq-k0efRzwgR2gke8&usqp=CAU",
  },
  {
    bank: "Axis Bank",
    loanAmount: "₹5 Lakh - ₹30 Lakh",
    interestRate: "9.1% - 12.5% p.a.",
    tenure: "1 - 5 Years",
    emiExample: "₹2,200/month per ₹1 Lakh",
    logo: "https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png",
  },
  {
    bank: "Bajaj Finserv",
    loanAmount: "₹1 Lakh - ₹25 Lakh",
    interestRate: "10.5% - 14.0% p.a.",
    tenure: "1 - 5 Years",
    emiExample: "₹2,300/month per ₹1 Lakh",
    logo: "data:image/png;base64,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",
  },
];

const Financing = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex flex-col items-center py-12 px-6">
      <h2 className="text-4xl font-bold text-white mb-6 text-center animate-pulse">
        Car Financing Options 💰🚗
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-2xl">
        Compare loan options from top banks & NBFCs for the best car financing deals.
      </p>

      {/* Financing Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {financingOptions.map((option, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-cyan-500/30 transition transform hover:scale-105 hover:shadow-cyan-500/50"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={option.logo} // Use the image URL
                alt={option.bank}
                className="w-16 h-16 object-contain rounded-md shadow-md bg-white"
                onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=No+Image")}
              />
              <h3 className="text-xl font-semibold text-white">{option.bank}</h3>
            </div>
            <p className="text-gray-300">
              <strong>Loan Amount:</strong> {option.loanAmount}
            </p>
            <p className="text-gray-300">
              <strong>Interest Rate:</strong> {option.interestRate}
            </p>
            <p className="text-gray-300">
              <strong>Tenure:</strong> {option.tenure}
            </p>
            <p className="text-cyan-400 font-medium">
              <strong>EMI Example:</strong> {option.emiExample}
            </p>

            {/* Apply Button */}
            <button className="mt-4 w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Financing;