import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Home } from "lucide-react";

const AdminCarList = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await axios.get("http://localhost:3000/getallcars");
                setCars(res.data.data);
            } catch (error) {
                console.error("Failed to fetch car listings.");
            }
        };
        fetchCars();
    }, []);

    const deleteCar = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this car?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:3000/deletecar/${id}`);
            setCars(cars.filter((car) => car._id !== id));
        } catch (error) {
            console.error("Error deleting car:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6">
            {/* Home Button */}
            <button 
                onClick={() => navigate("/admin")}
                className="flex items-center gap-2 bg-black bg-opacity-40 backdrop-blur-md px-4 py-3 rounded-xl border border-cyan-500 border-opacity-30 text-cyan-400 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-max mb-8"
            >
                <Home className="w-5 h-5" /> Home
            </button>

            <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Car Listings
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cars.map((car) => (
                    <CarCard key={car._id} car={car} deleteCar={deleteCar} />
                ))}
            </div>
        </div>
    );
};

const CarCard = ({ car, deleteCar }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="bg-black bg-opacity-20 backdrop-blur-lg p-4 rounded-2xl border border-cyan-500 border-opacity-30 shadow-lg hover:border-opacity-60 hover:shadow-cyan-500/30 transition-all duration-300">
            <img 
                src={car.image} 
                alt={car.carName} 
                className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-700" 
            />

            <h3 className="text-xl font-bold text-center text-white">{car.carName}</h3>

            <button
                className="mt-3 w-full py-2 bg-cyan-600 hover:bg-cyan-700 hover:shadow-cyan-500/30 rounded-lg text-white font-bold transition-all duration-300"
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Hide Details" : "More Details"}
            </button>

            {showDetails && (
                <div className="mt-3 bg-gray-900 bg-opacity-50 p-3 rounded-lg border border-gray-700 text-cyan-200">
                    <p className="mb-2"><span className="text-white font-semibold">Model:</span> {car.model}</p>
                    <p className="mb-2"><span className="text-white font-semibold">Brand:</span> {car.brand}</p>
                    <p className="mb-2"><span className="text-white font-semibold">Fuel:</span> {car.fuelType}</p>
                    <p className="mb-2"><span className="text-white font-semibold">Year:</span> {car.year}</p>
                    <p className="mb-2"><span className="text-white font-semibold">Mileage:</span> {car.mileage} Kmpl</p>
                    <p className="mb-2"><span className="text-white font-semibold">Color:</span> {car.color}</p>
                    <p className="text-lg font-semibold text-cyan-400 mt-3">₹ {car.priceRange}</p>
                </div>
            )}

            <button
                className="mt-4 w-full py-2 bg-red-600 hover:bg-red-700 hover:shadow-red-500/30 rounded-lg text-white font-bold transition-all duration-300"
                onClick={() => deleteCar(car._id)}
            >
                Delete
            </button>
        </div>
    );
};

export default AdminCarList;