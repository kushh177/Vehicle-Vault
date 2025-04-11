import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, BarChart2, DollarSign, TrendingUp, Car, Award, Calendar, RefreshCw, Users, Shield, CreditCard } from "lucide-react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const SalesReport = () => {
  // Indian market sales data
  const [salesData, setSalesData] = useState({
    totalCarsSold: 248,
    totalRevenue: "₹34.72 Crore",
    totalProfit: "₹6.94 Crore",
    avgSellingPrice: "₹14 Lakh",
    highestSale: "2023 Range Rover Autobiography - ₹2.75 Crore",
    lowestSale: "2014 Maruti Alto 800 - ₹1.25 Lakh",
    topSellingBrand: "Hyundai",
    topSellingModel: "Hyundai Creta",
    financePenetration: "68%",
    extendedWarranty: "42%",
    averageLoanAmount: "₹9.8 Lakh",
  });

  const [timePeriod, setTimePeriod] = useState("FY 2023-24");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(salesData);

  // Indian cities data
  const topCities = [
    { name: "Delhi NCR", sales: 58 },
    { name: "Mumbai", sales: 47 },
    { name: "Bangalore", sales: 39 },
    { name: "Hyderabad", sales: 32 },
    { name: "Chennai", sales: 28 },
    { name: "Pune", sales: 24 },
    { name: "Kolkata", sales: 20 },
  ];

  // Top selling brands in India
  const topBrands = [
    { name: "Maruti Suzuki", sales: 68, marketShare: 27.4 },
    { name: "Hyundai", sales: 53, marketShare: 21.4 },
    { name: "Tata", sales: 42, marketShare: 16.9 },
    { name: "Mahindra", sales: 38, marketShare: 15.3 },
    { name: "Kia", sales: 25, marketShare: 10.1 },
    { name: "Toyota", sales: 22, marketShare: 8.9 },
  ];

  // Fuel type distribution
  const fuelTypeData = {
    labels: ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"],
    datasets: [
      {
        data: [142, 68, 22, 12, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

  // Monthly sales trend
  const monthlySales = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    datasets: [
      {
        label: "Units Sold",
        data: [18, 22, 20, 19, 21, 23, 25, 27, 26, 24, 22, 21],
        borderColor: "#00f2fe",
        backgroundColor: "rgba(0, 242, 254, 0.1)",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#00f2fe",
        pointBorderColor: "#000",
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#00f2fe",
        pointHoverBorderColor: "#000",
      },
    ],
  };

  // Price segment distribution
  const priceSegments = {
    labels: ["<5L", "5-10L", "10-20L", "20-50L", "50L+"],
    datasets: [
      {
        label: "Units Sold",
        data: [32, 98, 85, 28, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    setSalesData(formData);
    setIsEditing(false);
  };

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <Link 
          to="/admin" 
          className="flex items-center gap-2 bg-black bg-opacity-40 backdrop-blur-md px-4 py-3 rounded-xl border border-cyan-500 border-opacity-30 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
        >
          <Home className="w-5 h-5" /> Home
        </Link>
        
        <div className="flex items-center gap-2 bg-black bg-opacity-40 backdrop-blur-md p-2 rounded-xl border border-cyan-500 border-opacity-30">
          <Calendar className="w-5 h-5 text-cyan-400" />
          <select 
            value={timePeriod}
            onChange={(e) => handleTimePeriodChange(e.target.value)}
            className="bg-transparent border-none focus:ring-0 text-cyan-400"
          >
            <option className="bg-gray-900">FY 2022-23</option>
            <option className="bg-gray-900">FY 2023-24</option>
            <option className="bg-gray-900">Q1 2024</option>
            <option className="bg-gray-900">Q2 2024</option>
          </select>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
          Auto Vault Sales Report
        </h1>
        <p className="text-cyan-200 opacity-80">Indian Market Performance {timePeriod}</p>
      </div>

      {/* Key Metrics Cards - Glassmorphism with Neon */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { 
            title: "Total Sales", 
            value: `${salesData.totalCarsSold} Units`, 
            icon: <Car className="w-6 h-6 text-cyan-400" />,
            change: "↑ 12% from last year",
            border: "border-cyan-500"
          },
          { 
            title: "Total Revenue", 
            value: salesData.totalRevenue, 
            icon: <DollarSign className="w-6 h-6 text-green-400" />,
            change: "↑ 18% from last year",
            border: "border-green-500"
          },
          { 
            title: "Avg. Selling Price", 
            value: salesData.avgSellingPrice, 
            icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
            change: "↑ 5% from last year",
            border: "border-purple-500"
          },
          { 
            title: "Finance Penetration", 
            value: salesData.financePenetration, 
            icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
            change: "↑ 8% from last year",
            border: "border-yellow-500"
          },
        ].map((card, index) => (
          <div 
            key={index}
            className={`bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border ${card.border} border-opacity-30 shadow-lg hover:shadow-${card.border.split('-')[1]}-500/30 hover:border-opacity-60 transition-all duration-300`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1 text-white">{card.value}</h3>
              </div>
              <div className="bg-black bg-opacity-40 p-3 rounded-full border border-cyan-500 border-opacity-20">
                {card.icon}
              </div>
            </div>
            <p className="text-sm text-cyan-200 mt-2 opacity-80">{card.change}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Monthly Sales Trend */}
        <div className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500 border-opacity-30 shadow-lg lg:col-span-2 hover:border-opacity-60 hover:shadow-cyan-500/30 transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Monthly Sales Trend</h2>
            <div className="flex items-center gap-2 text-sm text-cyan-200 opacity-80">
              <RefreshCw className="w-4 h-4" />
              <span>Updated 1 hour ago</span>
            </div>
          </div>
          <div className="h-80">
            <Line 
              data={monthlySales} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: {
                      color: "#e2e8f0",
                    },
                  },
                  tooltip: {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    titleColor: "#00f2fe",
                    bodyColor: "#e2e8f0",
                    borderColor: "#00f2fe",
                    borderWidth: 1,
                    callbacks: {
                      label: function(context) {
                        return `${context.parsed.y} Units`;
                      }
                    }
                  }
                },
                scales: {
                  x: {
                    grid: {
                      color: "rgba(255, 255, 255, 0.1)",
                    },
                    ticks: {
                      color: "#e2e8f0",
                    },
                  },
                  y: {
                    grid: {
                      color: "rgba(255, 255, 255, 0.1)",
                    },
                    ticks: {
                      color: "#e2e8f0",
                    },
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Price Segment Distribution */}
        <div className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500 border-opacity-30 shadow-lg hover:border-opacity-60 hover:shadow-cyan-500/30 transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-4">Price Segment Distribution</h2>
          <div className="h-80">
            <Pie 
              data={priceSegments}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                    labels: {
                      color: "#e2e8f0",
                    },
                  },
                  tooltip: {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    titleColor: "#00f2fe",
                    bodyColor: "#e2e8f0",
                    borderColor: "#00f2fe",
                    borderWidth: 1,
                    callbacks: {
                      label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${label}: ${value} units (${percentage}%)`;
                      }
                    }
                  }
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Additional Data Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Top Selling Brands */}
        <div className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500 border-opacity-30 shadow-lg hover:border-opacity-60 hover:shadow-cyan-500/30 transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-4">Top Selling Brands</h2>
          <div className="space-y-4">
            {topBrands.map((brand, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-white">{brand.name}</span>
                </div>
                <div className="w-1/2 flex items-center gap-3">
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div 
                      className="bg-cyan-500 h-2.5 rounded-full" 
                      style={{ width: `${brand.marketShare}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-cyan-200">{brand.marketShare}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fuel Type Distribution */}
        <div className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500 border-opacity-30 shadow-lg hover:border-opacity-60 hover:shadow-cyan-500/30 transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-4">Fuel Type Distribution</h2>
          <div className="h-64">
            <Pie 
              data={fuelTypeData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                    labels: {
                      color: "#e2e8f0",
                    },
                  },
                  tooltip: {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    titleColor: "#00f2fe",
                    bodyColor: "#e2e8f0",
                    borderColor: "#00f2fe",
                    borderWidth: 1,
                    callbacks: {
                      label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${label}: ${value} units (${percentage}%)`;
                      }
                    }
                  }
                },
              }}
            />
          </div>
        </div>

        {/* Top Cities by Sales */}
        <div className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500 border-opacity-30 shadow-lg hover:border-opacity-60 hover:shadow-cyan-500/30 transition-all duration-300">
          <h2 className="text-xl font-semibold text-white mb-4">Top Cities by Sales</h2>
          <div className="space-y-4">
            {topCities.map((city, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium text-white">{city.name}</span>
                <span className="bg-cyan-900 bg-opacity-40 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-500 border-opacity-30">
                  {city.sales} units
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Sales Data */}
      <div className="bg-black bg-opacity-20 backdrop-blur-lg p-6 rounded-2xl border border-cyan-500 border-opacity-30 shadow-lg hover:border-opacity-60 hover:shadow-cyan-500/30 transition-all duration-300 mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Sales Performance Details</h2>
        {isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <label className="block text-sm font-medium text-cyan-200 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input 
                  type="text" 
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-md text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            ))}
            <div className="flex gap-2 md:col-span-2">
              <button 
                onClick={handleUpdate} 
                className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Save Changes
              </button>
              <button 
                onClick={() => setIsEditing(false)} 
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <tbody className="divide-y divide-gray-700">
                {Object.entries(salesData).map(([key, value]) => (
                  <tr key={key}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-cyan-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button 
              onClick={handleEdit} 
              className="mt-4 bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Edit Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalesReport;