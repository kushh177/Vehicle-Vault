import React, { useEffect, useState } from "react";
import axios from "axios";
import { CreditCard, Loader2, Home } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
  
        // Get data from localStorage
        const localData = localStorage.getItem("paymentInfo");
        if (localData) {
          const parsedData = JSON.parse(localData);
          setPayments(Array.isArray(parsedData) ? parsedData : [parsedData]);
        } else {
          setPayments([]);
        }
      } catch (error) {
        toast.error("Failed to load payments from local storage.");
        console.error("LocalStorage error:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPayments();
  }, []);
  

  const filteredPayments = payments.filter(payment => 
    payment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    payment.paymentId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Home Button */}
        <button
          onClick={() => navigate('/admin')}
          className="mb-4 flex items-center gap-2 px-4 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 rounded-lg border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>

        {/* Main Card */}
        <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Payment Records
                <span className="ml-2 text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full">
                  {payments.length} total
                </span>
              </h2>
            </div>
            
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search payments..."
                className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-full md:w-64 placeholder-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-2 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-700/50 backdrop-blur-sm">
            {loading ? (
              <div className="flex justify-center items-center p-12">
                <Loader2 className="w-10 h-10 text-cyan-400 animate-spin" />
                <span className="ml-3 text-cyan-200">Loading payments...</span>
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-700/50">
                <thead className="bg-gray-800/80">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-300 uppercase tracking-wider">Payment ID</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-900/30 divide-y divide-gray-700/50">
                  {filteredPayments.length > 0 ? (
                    filteredPayments.map((payment) => (
                      <tr 
                        key={payment._id} 
                        className="hover:bg-gray-800/40 transition-all duration-200 group"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white group-hover:text-cyan-100">
                          {payment.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-200 group-hover:text-cyan-100">
                          {payment.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-200 group-hover:text-cyan-100">
                          {payment.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-200 group-hover:text-cyan-100">
                          ₹{payment.amount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-cyan-200 font-mono group-hover:text-cyan-100">
                          <span className="bg-cyan-500/10 px-2 py-1 rounded">
                            {payment.paymentId}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-8 text-center">
                        <div className="text-cyan-200/70 flex flex-col items-center justify-center">
                          <CreditCard className="w-10 h-10 mb-2 opacity-50" />
                          {payments.length === 0 ? "No payments found" : "No matching payments found"}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>

          {/* Count */}
          {!loading && (
            <div className="mt-4 text-sm text-gray-400 flex justify-between items-center">
              <div>
                Showing <span className="text-cyan-300">{filteredPayments.length}</span> of{" "}
                <span className="text-cyan-300">{payments.length}</span> payments
              </div>
              {filteredPayments.length > 0 && (
                <div className="text-xs bg-gray-800/50 px-2 py-1 rounded">
                  Scroll horizontally to view all data →
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentList;