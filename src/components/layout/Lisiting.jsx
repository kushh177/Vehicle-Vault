import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Listing = () => {
  const navigate = useNavigate();
  const [carListings, setCarListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getAllCars")
      .then((response) => {
        if (response.data && response.data.data) {
          setCarListings(response.data.data);
        } else {
          setError("Invalid response from server");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching car listings:", error);
        setError("Failed to load car listings");
        setLoading(false);
      });
  }, []);

  // Fetch additional details for a specific car
  const fetchCarDetails = async (carId) => {
    console.log("Fetching details for car ID:", carId);

    if (selectedCar && selectedCar._id === carId) {
      setSelectedCar(null);
      return;
    }

    setDetailsLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/getcarbyid/${carId}`);
      console.log("API Response:", response.data);

      if (response.data && response.data.data) {
        setSelectedCar(response.data.data);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching car details:", error);
    }
    setDetailsLoading(false);
  };

  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex flex-col items-center py-12 px-6">
      <h2 className="text-4xl font-bold text-white mb-6 text-center animate-pulse">
        Available Car Listings 🚗🔥
      </h2>

      {loading && <p className="text-white text-lg">Loading cars...</p>}
      {error && <p className="text-red-400">{error}</p>}

      <div className="w-full max-w-5xl space-y-6">
        {carListings.map((car) => (
          <div
            key={car._id}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-cyan-500/30 flex gap-6 items-center transition transform hover:scale-105 hover:shadow-cyan-500/50 relative"
          >
            {/* Car Image */}
            <img src={car.image} alt={car.carName} className="w-40 h-32 object-cover rounded-lg shadow-md" />

            {/* Car Info */}
            <div className="flex-1 flex items-center">
              <div>
                <h3 className="text-xl font-semibold text-white">{car.carName}</h3>
                <p className="text-cyan-400 text-lg"><strong>Price: </strong>{car.priceRange}</p>
                <p className="text-gray-300"><strong>Brand:</strong> {car.brand}</p>
                <p className="text-gray-300"><strong>Fuel Type:</strong> {car.fuelType}</p>
              </div>
              {selectedCar && selectedCar._id === car._id && (
                <div className={`text-gray-300 ml-4 transition-opacity duration-500 ${selectedCar ? 'opacity-100' : 'opacity-0'}`}>
                  <p><strong>Year:</strong> {selectedCar.year}</p>
                  <p><strong>Variant:</strong> {selectedCar.variant}</p>
                  <p><strong>Mileage:</strong> {selectedCar.mileage} km/l</p>
                  <p><strong>Model:</strong> {selectedCar.model}</p>
                  <p><strong>Color:</strong> {selectedCar.color}</p>
                </div>
              )}
            </div>

            {/* Buttons */}
            <button 
              onClick={() => navigate("/user/testdrive")} 
              className="w-16 h-16 bg-orange-400 text-white font-semibold rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition"
            >
              Test Drive
            </button>

            <button
              onClick={() => fetchCarDetails(car._id)}
              className="w-24 h-12 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center"
            >
              {selectedCar && selectedCar._id === car._id ? "Hide Details" : "More Details"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;