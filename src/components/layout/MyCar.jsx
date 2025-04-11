import React, { useState } from "react";
import { Link } from "react-router-dom";

const cars = [
  {
    name: "Maruti Alto K10",
    price: "₹3.99 - ₹5.96 Lakh",
    image: "https://www.autovista.in/assets/product_images/gallery/new-alto-k10-front.jpg",
    colors: ["Red", "Blue", "White", "Grey"],
    description: "An entry-level hatchback with great fuel efficiency and affordability.",
    engine: "1.0L K10C Petrol",
    mileage: "24.39 km/l",
    transmission: "5-speed Manual / AMT",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol / CNG",
  },
  {
    name: "Tata Tiago",
    price: "₹5.60 - ₹8.20 Lakh",
    image: "https://autothrustindia.com/wp-content/uploads/2024/07/digital-showroom-1.webp",
    colors: ["Orange", "White", "Grey", "Red"],
    description: "A stylish hatchback with good safety ratings and modern features.",
    engine: "1.2L Revotron Petrol",
    mileage: "20.09 km/l",
    transmission: "5-speed Manual / AMT",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol / CNG",
  },
  {
    name: "Maruti Suzuki Swift",
    price: "₹6.49 - ₹9.14 Lakh",
    image: "https://www.autovista.in/assets/img/new_cars_colour_variants/swift-colour-solid-fire-red.jpg",
    colors: ["Red", "Blue", "White"],
    description: "A budget-friendly hatchback known for its fuel efficiency and sporty look.",
    engine: "1.2L DualJet Petrol",
    mileage: "22.56 km/l",
    transmission: "5-speed Manual / AMT",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol",
  },
  {
    name: "Tata Nexon",
    price: "₹8.10 - ₹14.70 Lakh",
    image: "https://c.ndtvimg.com/2025-01/4gkffbro_2025-tata-nexon_625x300_14_January_25.jpg?im=FaceCrop,algorithm=dnn,width=545,height=307",
    colors: ["Grey", "Green", "Orange"],
    description: "A compact SUV with a 5-star safety rating and a bold design.",
    engine: "1.2L Turbo Petrol / 1.5L Diesel",
    mileage: "17.4 km/l",
    transmission: "6-speed Manual / AMT / DCT",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol / Diesel",
  },
  {
    name: "Hyundai Creta",
    price: "₹11.00 - ₹20.00 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/7695/1651645683867/front-left-side-47.jpg?imwidth=420&impolicy=resize",
    colors: ["Black", "Silver", "Blue"],
    description: "A premium SUV with advanced safety features and modern interiors.",
    engine: "1.5L Petrol / Diesel",
    mileage: "19.2 km/l",
    transmission: "6-speed Manual / CVT / DCT",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol / Diesel",
  },
  {
    name: "Honda City",
    price: "₹11.70 - ₹16.20 Lakh",
    image: "https://imgcdn.zigwheels.com.au/large/gallery/exterior/2/17/honda-city-front-angle-low-view-440384.jpg",
    colors: ["Silver", "White", "Red"],
    description: "A premium sedan with a spacious interior and smooth driving experience.",
    engine: "1.5L i-VTEC Petrol / Diesel",
    mileage: "18.4 km/l",
    transmission: "6-speed Manual / CVT",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol / Diesel",
  },
  {
    name: "Mahindra Thar",
    price: "₹11.25 - ₹17.00 Lakh",
    image: "https://etimg.etb2bimg.com/photo/108063089.cms",
    colors: ["Red", "Black", "Green"],
    description: "An off-road beast with a rugged design and powerful performance.",
    engine: "2.0L Turbo Petrol / 2.2L Diesel",
    mileage: "15.2 km/l",
    transmission: "6-speed Manual / Automatic",
    seatingCapacity: "4 Seater",
    fuelType: "Petrol / Diesel",
  },
  {
    name: "Kia Seltos",
    price: "₹10.90 - ₹19.65 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg",
    colors: ["Blue", "White", "Grey"],
    description: "A stylish SUV with cutting-edge technology and great fuel efficiency.",
    engine: "1.5L Petrol / 1.5L Diesel",
    mileage: "18.6 km/l",
    transmission: "6-speed Manual / CVT / DCT",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol / Diesel",
  },
  {
    name: "Toyota Fortuner",
    price: "₹32.99 - ₹50.74 Lakh",
    image: "https://img.philkotse.com/crop/640x360/2021/09/20/WFFKkBCT/img-2945-ca9d_wm.jpg",
    colors: ["Black", "White", "Brown"],
    description: "A powerful SUV known for its road presence, reliability, and performance.",
    engine: "2.7L Petrol / 2.8L Diesel",
    mileage: "10.0 - 14.2 km/l",
    transmission: "6-speed Manual / Automatic",
    seatingCapacity: "7 Seater",
    fuelType: "Petrol / Diesel",
  },
  {
    name: "BMW X5",
    price: "₹96.00 Lakh - ₹1.10 Crore",
    image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230223023913_x5.jpg",
    colors: ["Black", "White", "Grey", "Blue"],
    description: "A luxury SUV with high-end features and outstanding performance.",
    engine: "3.0L Twin-Turbo Petrol / Diesel",
    mileage: "12.5 km/l",
    transmission: "8-speed Automatic",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol / Diesel",
  },
  {
    name: "Renault Kwid",
    price: "₹4.70 - ₹6.45 Lakh",
    image: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20191001124129_Renault-Kwid-facelift.JPG&w=700&c=1",
    colors: ["Red", "White", "Silver", "Grey"],
    description: "A stylish and compact hatchback with SUV-inspired design and great fuel efficiency.",
    engine: "1.0L SCe Petrol",
    mileage: "22 km/l",
    transmission: "5-speed Manual / AMT",
    seatingCapacity: "5 Seater",
    fuelType: "Petrol",
  },
  {
    name: "DC Avanti",
    price: "₹34.17 Lakh",
    image: "https://www.motorbeam.com/wp-content/uploads/DC-Avanti-Action-1200x900.jpg",
    colors: ["Red", "Yellow", "White", "Black"],
    description: "India's first homegrown sports car, designed by DC Design, offering an exotic and aerodynamic look.",
    engine: "2.0L Turbocharged Petrol",
    mileage: "10.0 km/l",
    transmission: "6-speed Manual",
    seatingCapacity: "2 Seater",
    fuelType: "Petrol",
  }

];

const MyCar = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const extractMinPrice = (priceRange) => {
    // Extract the first price in the range and remove non-numeric characters
    return parseFloat(priceRange.replace(/[^0-9.]/g, "").split(".")[0]);
  };

  const filteredCars = cars
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "priceLow") return extractMinPrice(a.price) - extractMinPrice(b.price);
      if (sortBy === "priceHigh") return extractMinPrice(b.price) - extractMinPrice(a.price);
      return 0;
    });


  return (
    <div className="font-sans bg-gray-900 min-h-screen flex flex-col items-center py-12 px-6">
      <h2 className="text-4xl font-bold text-white mb-6 text-center animate-pulse drop-shadow-lg">
        Explore Cars 🚗
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-md mb-6 gap-4">
        {/* Search Field */}
        <input
          type="text"
          placeholder="Search for a car..."
          className="p-3 w-full rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort Dropdown */}
        <select
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Sort by Name (A-Z)</option>
          <option value="priceLow">Sort by Price (Low to High)</option>
          <option value="priceHigh">Sort by Price (High to Low)</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {filteredCars.map((car, index) => (
          <div
            key={index}
            className="bg-white/10 p-6 rounded-2xl shadow-lg border border-cyan-500/30 transition transform hover:scale-105"
          >
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl font-semibold text-white mt-4">{car.name}</h3>
            <p className="text-cyan-400 font-medium">{car.price}</p>
            <div className="mt-4 flex gap-4">
              <button
                className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition w-1/2"
                onClick={() => setSelectedCar(car)}
              >
                More Details
              </button>
              <Link
                to="payment"
                className="bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition w-1/2 flex justify-center items-center"
              >
                <span>Buy</span>
              </Link>

            </div>
          </div>
        ))}
      </div>
      {selectedCar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
              onClick={() => setSelectedCar(null)}
            >
              ✖
            </button>
            <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-3xl font-bold mt-4">{selectedCar.name}</h2>
            <p className="text-cyan-400 text-lg font-semibold">{selectedCar.price}</p>
            <p className="text-gray-300 mt-2">{selectedCar.description}</p>
            <ul className="text-gray-300 mt-4">
              <li>
                <strong>Engine:</strong> {selectedCar.engine}
              </li>
              <li>
                <strong>Mileage:</strong> {selectedCar.mileage}
              </li>
              <li>
                <strong>Transmission:</strong> {selectedCar.transmission}
              </li>
              <li>
                <strong>Seating Capacity:</strong> {selectedCar.seatingCapacity}
              </li>
              <li>
                <strong>Fuel Type:</strong> {selectedCar.fuelType}
              </li>
            </ul>
            <button
              className="mt-6 bg-cyan-500 text-white py-2 px-6 rounded-lg hover:bg-cyan-600 transition w-full"
              onClick={() => setSelectedCar(null)}
            >
              Close
            </button>
          </div>x
        </div>
      )}
    </div>
  );
};

export default MyCar;
