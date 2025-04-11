import React, { useState } from "react";

const carsData = [

    {
      _id: "1",
      brand: "BMW",
      model: "X1",
      year: 2023,
      priceRange: "₹45,90,000",
      engine: "2.0L TwinPower Turbo",
      mileage: "16.35 km/l",
      fuelType: "Petrol",
      transmission: "Automatic",
      seats: 5,
      bodyType: "SUV",
      drivetrain: "FWD",
      topSpeed: "222 km/h",
      acceleration: "0-100 km/h in 7.9s",
      bootSpace: "505L",
      infotainment: "10.7-inch touchscreen, Apple CarPlay, Android Auto",
      safetyRating: "5-Star (Euro NCAP)"
    },
    {
      _id: "2",
      brand: "Audi",
      model: "A4",
      year: 2023,
      priceRange: "₹45,34,000",
      engine: "2.0L TFSI Petrol",
      mileage: "17.42 km/l",
      fuelType: "Petrol",
      transmission: "Automatic",
      seats: 5,
      bodyType: "Sedan",
      drivetrain: "FWD",
      topSpeed: "241 km/h",
      acceleration: "0-100 km/h in 6.3s",
      bootSpace: "460L",
      infotainment: "10.1-inch MMI, Virtual Cockpit, CarPlay/Android Auto",
      safetyRating: "5-Star (Euro NCAP)"
    },
    {
      _id: "3",
      brand: "Mercedes",
      model: "C-Class",
      year: 2023,
      priceRange: "₹57,30,000",
      engine: "2.0L Turbo Diesel",
      mileage: "19.50 km/l",
      fuelType: "Diesel",
      transmission: "Automatic",
      seats: 5,
      bodyType: "Sedan",
      drivetrain: "RWD",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 6.1s",
      bootSpace: "455L",
      infotainment: "11.9-inch MBUX OLED display",
      safetyRating: "5-Star (Euro NCAP)"
    },
    {
      _id: "4",
      brand: "Volkswagen",
      model: "Polo",
      year: 2022,
      priceRange: "₹8,50,000",
      engine: "1.0L TSI Petrol",
      mileage: "18.24 km/l",
      fuelType: "Petrol",
      transmission: "Manual",
      seats: 5,
      bodyType: "Hatchback",
      drivetrain: "FWD",
      topSpeed: "165 km/h",
      acceleration: "0-100 km/h in 10.5s",
      bootSpace: "280L",
      infotainment: "6.5-inch infotainment system",
      safetyRating: "4-Star (Global NCAP)"
    },
    {
      _id: "5",
      brand: "Honda",
      model: "Civic",
      year: 2021,
      priceRange: "₹17,95,000",
      engine: "1.8L i-VTEC Petrol",
      mileage: "16.50 km/l",
      fuelType: "Petrol",
      transmission: "CVT",
      seats: 5,
      bodyType: "Sedan",
      drivetrain: "FWD",
      topSpeed: "215 km/h",
      acceleration: "0-100 km/h in 10.2s",
      bootSpace: "430L",
      infotainment: "7-inch touchscreen, Android Auto, Apple CarPlay",
      safetyRating: "5-Star (ASEAN NCAP)"
    },
    {
      _id: "6",
      brand: "Toyota",
      model: "Corolla",
      year: 2021,
      priceRange: "₹16,25,000",
      engine: "1.8L Dual VVT-i",
      mileage: "17.50 km/l",
      fuelType: "Petrol",
      transmission: "Automatic",
      seats: 5,
      bodyType: "Sedan",
      drivetrain: "FWD",
      topSpeed: "200 km/h",
      acceleration: "0-100 km/h in 9.3s",
      bootSpace: "470L",
      infotainment: "8-inch touchscreen with Apple CarPlay/Android Auto",
      safetyRating: "5-Star (NHTSA)"
    },
    {
      _id: "7",
      brand: "Hyundai",
      model: "Elantra",
      year: 2023,
      priceRange: "₹18,50,000",
      engine: "2.0L Petrol",
      mileage: "14.60 km/l",
      fuelType: "Petrol",
      transmission: "Automatic",
      seats: 5,
      bodyType: "Sedan",
      drivetrain: "FWD",
      topSpeed: "210 km/h",
      acceleration: "0-100 km/h in 9.5s",
      bootSpace: "458L",
      infotainment: "10.25-inch HD touchscreen with Bose audio",
      safetyRating: "5-Star (ANCAP)"
    },
    {
      _id: "8",
      brand: "Ford",
      model: "Mustang",
      year: 2023,
      priceRange: "₹74,62,000",
      engine: "5.0L V8",
      mileage: "9.5 km/l",
      fuelType: "Petrol",
      transmission: "Automatic",
      seats: 4,
      bodyType: "Coupe",
      drivetrain: "RWD",
      topSpeed: "250 km/h",
      acceleration: "0-100 km/h in 4.2s",
      bootSpace: "382L",
      infotainment: "12-inch digital cluster, SYNC 4, 8-inch touchscreen",
      safetyRating: "5-Star (NHTSA)"
    },
    {
      _id: "9",
      brand: "Chevrolet",
      model: "Camaro",
      year: 2023,
      priceRange: "₹80,00,000",
      engine: "6.2L V8",
      mileage: "9.0 km/l",
      fuelType: "Petrol",
      transmission: "Automatic",
      seats: 4,
      bodyType: "Coupe",
      drivetrain: "RWD",
      topSpeed: "290 km/h",
      acceleration: "0-100 km/h in 4.0s",
      bootSpace: "258L",
      infotainment: "8-inch HD touchscreen, Bose sound, Apple CarPlay",
      safetyRating: "5-Star (NHTSA)"
    },
    {
      _id: "10",
      brand: "Mahindra",
      model: "Scorpio",
      year: 2023,
      priceRange: "₹18,62,000",
      engine: "2.2L mHawk Diesel",
      mileage: "16.36 km/l",
      fuelType: "Diesel",
      transmission: "Manual",
      seats: 7,
      bodyType: "SUV",
      drivetrain: "RWD",
      topSpeed: "165 km/h",
      acceleration: "0-100 km/h in 11.5s",
      bootSpace: "460L (3rd row folded)",
      infotainment: "8-inch touchscreen, Android Auto, Bluetooth",
      safetyRating: "4-Star (Global NCAP)"
    },  
     {
        "_id": "11",
        "brand": "Tata",
        "model": "Harrier",
        "year": 2023,
        "priceRange": "₹22,35,000",
        "engine": "2.0L Kryotec Diesel",
        "mileage": "16.35 km/l",
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "seats": 5,
        "bodyType": "SUV",
        "drivetrain": "FWD",
        "topSpeed": "190 km/h",
        "acceleration": "0-100 km/h in 9.5s",
        "bootSpace": "425L",
        "infotainment": "10.25-inch touchscreen, JBL audio, Android Auto/Apple CarPlay",
        "safetyRating": "5-Star (Global NCAP)"
      },
      {
        "_id": "12",
        "brand": "Kia",
        "model": "Seltos",
        "year": 2023,
        "priceRange": "₹15,25,000",
        "engine": "1.5L Turbo Petrol",
        "mileage": "18.00 km/l",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "seats": 5,
        "bodyType": "SUV",
        "drivetrain": "FWD",
        "topSpeed": "180 km/h",
        "acceleration": "0-100 km/h in 10.2s",
        "bootSpace": "433L",
        "infotainment": "10.25-inch HD touchscreen, Bose audio, UVO Connect",
        "safetyRating": "5-Star (ASEAN NCAP)"
      },
      {
        "_id": "13",
        "brand": "Jeep",
        "model": "Compass",
        "year": 2023,
        "priceRange": "₹25,30,000",
        "engine": "2.0L Multijet Diesel",
        "mileage": "15.30 km/l",
        "fuelType": "Diesel",
        "transmission": "Automatic",
        "seats": 5,
        "bodyType": "SUV",
        "drivetrain": "FWD",
        "topSpeed": "195 km/h",
        "acceleration": "0-100 km/h in 9.8s",
        "bootSpace": "438L",
        "infotainment": "10.1-inch touchscreen, Alpine audio, Wireless CarPlay",
        "safetyRating": "5-Star (Euro NCAP)"
      },
      {
        "_id": "14",
        "brand": "Nissan",
        "model": "Magnite",
        "year": 2023,
        "priceRange": "₹10,75,000",
        "engine": "1.0L Turbo Petrol",
        "mileage": "20.00 km/l",
        "fuelType": "Petrol",
        "transmission": "Manual",
        "seats": 5,
        "bodyType": "Hatchback",
        "drivetrain": "FWD",
        "topSpeed": "170 km/h",
        "acceleration": "0-100 km/h in 11.2s",
        "bootSpace": "336L",
        "infotainment": "8-inch touchscreen, Wireless Android Auto",
        "safetyRating": "4-Star (Global NCAP)"
      },
      {
        "_id": "15",
        "brand": "Skoda",
        "model": "Superb",
        "year": 2023,
        "priceRange": "₹34,90,000",
        "engine": "2.0L TSI Petrol",
        "mileage": "15.10 km/l",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "seats": 5,
        "bodyType": "Sedan",
        "drivetrain": "FWD",
        "topSpeed": "240 km/h",
        "acceleration": "0-100 km/h in 6.8s",
        "bootSpace": "625L",
        "infotainment": "9.2-inch touchscreen, Canton sound system",
        "safetyRating": "5-Star (Euro NCAP)"
      },
      {
        "_id": "16",
        "brand": "MG",
        "model": "Hector",
        "year": 2023,
        "priceRange": "₹21,50,000",
        "engine": "2.0L Diesel",
        "mileage": "17.50 km/l",
        "fuelType": "Diesel",
        "transmission": "Manual",
        "seats": 5,
        "bodyType": "SUV",
        "drivetrain": "FWD",
        "topSpeed": "185 km/h",
        "acceleration": "0-100 km/h in 10.5s",
        "bootSpace": "587L",
        "infotainment": "10.4-inch vertical touchscreen, i-SMART",
        "safetyRating": "5-Star (ASEAN NCAP)"
      },
      {
        "_id": "17",
        "brand": "Renault",
        "model": "Duster",
        "year": 2022,
        "priceRange": "₹14,85,000",
        "engine": "1.3L Turbo Petrol",
        "mileage": "16.50 km/l",
        "fuelType": "Petrol",
        "transmission": "Manual",
        "seats": 5,
        "bodyType": "SUV",
        "drivetrain": "FWD",
        "topSpeed": "175 km/h",
        "acceleration": "0-100 km/h in 10.8s",
        "bootSpace": "475L",
        "infotainment": "8-inch touchscreen, Arkamys audio",
        "safetyRating": "4-Star (Global NCAP)"
      },
      {
        "_id": "18",
        "brand": "Volkswagen",
        "model": "Virtus",
        "year": 2023,
        "priceRange": "₹18,25,000",
        "engine": "1.5L TSI EVO",
        "mileage": "18.67 km/l",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "seats": 5,
        "bodyType": "Sedan",
        "drivetrain": "FWD",
        "topSpeed": "210 km/h",
        "acceleration": "0-100 km/h in 8.5s",
        "bootSpace": "521L",
        "infotainment": "10-inch touchscreen, Wireless App-Connect",
        "safetyRating": "5-Star (Euro NCAP)"
      },
      {
        "_id": "19",
        "brand": "Honda",
        "model": "City",
        "year": 2023,
        "priceRange": "₹14,90,000",
        "engine": "1.5L i-VTEC Petrol",
        "mileage": "18.40 km/l",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "seats": 5,
        "bodyType": "Sedan",
        "drivetrain": "FWD",
        "topSpeed": "200 km/h",
        "acceleration": "0-100 km/h in 10.0s",
        "bootSpace": "506L",
        "infotainment": "8-inch touchscreen, Alexa compatibility",
        "safetyRating": "5-Star (ASEAN NCAP)"
      },
      {
        "_id": "20",
        "brand": "Maruti Suzuki",
        "model": "Grand Vitara",
        "year": 2023,
        "priceRange": "₹16,89,000",
        "engine": "1.5L Smart Hybrid",
        "mileage": "21.11 km/l",
        "fuelType": "Petrol",
        "transmission": "Automatic",
        "seats": 5,
        "bodyType": "SUV",
        "drivetrain": "FWD",
        "topSpeed": "175 km/h",
        "acceleration": "0-100 km/h in 11.5s",
        "bootSpace": "373L",
        "infotainment": "9-inch touchscreen, Suzuki Connect",
        "safetyRating": "4-Star (Global NCAP)"
      },
        {
          "_id": "21",
          "brand": "Hyundai",
          "model": "Creta",
          "year": 2023,
          "priceRange": "₹14,50,000",
          "engine": "1.5L Petrol",
          "mileage": "17.40 km/l",
          "fuelType": "Petrol",
          "transmission": "Automatic",
          "seats": 5,
          "bodyType": "SUV",
          "drivetrain": "FWD",
          "topSpeed": "185 km/h",
          "acceleration": "0-100 km/h in 11.2s",
          "bootSpace": "433L",
          "infotainment": "10.25-inch touchscreen, Bose audio, Bluelink",
          "safetyRating": "5-Star (ASEAN NCAP)"
        },
        {
          "_id": "22",
          "brand": "Toyota",
          "model": "Fortuner",
          "year": 2023,
          "priceRange": "₹35,20,000",
          "engine": "2.8L Diesel",
          "mileage": "14.50 km/l",
          "fuelType": "Diesel",
          "transmission": "Automatic",
          "seats": 7,
          "bodyType": "SUV",
          "drivetrain": "4WD",
          "topSpeed": "190 km/h",
          "acceleration": "0-100 km/h in 10.0s",
          "bootSpace": "480L",
          "infotainment": "8-inch touchscreen, JBL audio, Apple CarPlay",
          "safetyRating": "5-Star (ASEAN NCAP)"
        },
        {
          "_id": "23",
          "brand": "Mahindra",
          "model": "XUV700",
          "year": 2023,
          "priceRange": "₹23,99,000",
          "engine": "2.2L Turbo Diesel",
          "mileage": "16.00 km/l",
          "fuelType": "Diesel",
          "transmission": "Automatic",
          "seats": 7,
          "bodyType": "SUV",
          "drivetrain": "FWD",
          "topSpeed": "200 km/h",
          "acceleration": "0-100 km/h in 8.5s",
          "bootSpace": "420L (3rd row up)",
          "infotainment": "10.25-inch dual screens, Sony 3D audio",
          "safetyRating": "5-Star (Global NCAP)"
        },
        {
          "_id": "24",
          "brand": "Tata",
          "model": "Safari",
          "year": 2023,
          "priceRange": "₹22,90,000",
          "engine": "2.0L Kryotec Diesel",
          "mileage": "16.14 km/l",
          "fuelType": "Diesel",
          "transmission": "Automatic",
          "seats": 7,
          "bodyType": "SUV",
          "drivetrain": "FWD",
          "topSpeed": "195 km/h",
          "acceleration": "0-100 km/h in 9.2s",
          "bootSpace": "447L (3rd row up)",
          "infotainment": "10.25-inch touchscreen, JBL audio",
          "safetyRating": "5-Star (Global NCAP)"
        },
        {
          "_id": "25",
          "brand": "MG",
          "model": "Gloster",
          "year": 2023,
          "priceRange": "₹42,00,000",
          "engine": "2.0L Twin-Turbo Diesel",
          "mileage": "12.35 km/l",
          "fuelType": "Diesel",
          "transmission": "Automatic",
          "seats": 7,
          "bodyType": "SUV",
          "drivetrain": "4WD",
          "topSpeed": "210 km/h",
          "acceleration": "0-100 km/h in 8.8s",
          "bootSpace": "330L (3rd row up)",
          "infotainment": "12.3-inch touchscreen, 360° camera",
          "safetyRating": "5-Star (ANCAP)"
        },
        {
          "_id": "26",
          "brand": "Ford",
          "model": "Endeavour",
          "year": 2023,
          "priceRange": "₹36,25,000",
          "engine": "2.0L Bi-Turbo Diesel",
          "mileage": "13.90 km/l",
          "fuelType": "Diesel",
          "transmission": "Automatic",
          "seats": 7,
          "bodyType": "SUV",
          "drivetrain": "4WD",
          "topSpeed": "195 km/h",
          "acceleration": "0-100 km/h in 9.9s",
          "bootSpace": "450L (3rd row folded)",
          "infotainment": "8-inch SYNC 3 touchscreen",
          "safetyRating": "5-Star (ANCAP)"
        },
        {
          "_id": "27",
          "brand": "Nissan",
          "model": "Kicks",
          "year": 2023,
          "priceRange": "₹13,50,000",
          "engine": "1.5L Petrol",
          "mileage": "18.00 km/l",
          "fuelType": "Petrol",
          "transmission": "Manual",
          "seats": 5,
          "bodyType": "SUV",
          "drivetrain": "FWD",
          "topSpeed": "175 km/h",
          "acceleration": "0-100 km/h in 11.8s",
          "bootSpace": "400L",
          "infotainment": "8-inch touchscreen, Around View Monitor",
          "safetyRating": "4-Star (Global NCAP)"
        },
        {
          "_id": "28",
          "brand": "Skoda",
          "model": "Kodiaq",
          "year": 2023,
          "priceRange": "₹38,50,000",
          "engine": "2.0L TSI Petrol",
          "mileage": "13.32 km/l",
          "fuelType": "Petrol",
          "transmission": "Automatic",
          "seats": 7,
          "bodyType": "SUV",
          "drivetrain": "4WD",
          "topSpeed": "220 km/h",
          "acceleration": "0-100 km/h in 7.5s",
          "bootSpace": "270L (3rd row up)",
          "infotainment": "10-inch Amundsen display, Canton audio",
          "safetyRating": "5-Star (Euro NCAP)"
        },
        {
          "_id": "29",
          "brand": "Jeep",
          "model": "Wrangler",
          "year": 2023,
          "priceRange": "₹62,65,000",
          "engine": "2.0L Turbo Petrol",
          "mileage": "12.10 km/l",
          "fuelType": "Petrol",
          "transmission": "Automatic",
          "seats": 5,
          "bodyType": "SUV",
          "drivetrain": "4WD",
          "topSpeed": "180 km/h",
          "acceleration": "0-100 km/h in 7.8s",
          "bootSpace": "897L (rear seats folded)",
          "infotainment": "8.4-inch Uconnect, Off-Road Pages",
          "safetyRating": "4-Star (NHTSA)"
        },
        {
          "_id": "30",
          "brand": "Lexus",
          "model": "RX 500h",
          "year": 2023,
          "priceRange": "₹95,80,000",
          "engine": "2.4L Turbo Hybrid",
          "mileage": "16.00 km/l",
          "fuelType": "Hybrid",
          "transmission": "Automatic",
          "seats": 5,
          "bodyType": "SUV",
          "drivetrain": "AWD",
          "topSpeed": "230 km/h",
          "acceleration": "0-100 km/h in 6.2s",
          "bootSpace": "612L",
          "infotainment": "14-inch touchscreen, Mark Levinson audio",
          "safetyRating": "5-Star (Euro NCAP)"
        }
];

const CarComparison = () => {
  const [selectedCars, setSelectedCars] = useState({ car1: null, car2: null });
  const [comparisonStarted, setComparisonStarted] = useState(false);

  const handleSelectCar = (event, carNumber) => {
    const carId = event.target.value;
    const car = carsData.find((c) => c._id === carId);
    setSelectedCars((prev) => ({ ...prev, [carNumber]: car }));
    setComparisonStarted(false);
  };

  const handleCompare = () => {
    if (selectedCars.car1 && selectedCars.car2) {
      setComparisonStarted(true);
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Compare Two Cars</h2>

      {/* Car Selection Dropdowns */}
      <div className="flex justify-center space-x-4 mb-4">
      <select
  value={selectedCars.car1?._id || ""}
  onChange={(e) => handleSelectCar(e, "car1")}
  className="p-2 bg-gray-700 text-white border border-gray-500 rounded-md"
>
  <option value="">Select first car</option>
  {carsData.map((car) => (
    <option
      key={car._id}
      value={car._id}
      disabled={selectedCars.car2?._id === car._id}
    >
      {car.brand} {car.model} ({car.year})
    </option>
  ))}
</select>

<select
  value={selectedCars.car2?._id || ""}
  onChange={(e) => handleSelectCar(e, "car2")}
  className="p-2 bg-gray-700 text-white border border-gray-500 rounded-md"
>
  <option value="">Select second car</option>
  {carsData.map((car) => (
    <option
      key={car._id}
      value={car._id}
      disabled={selectedCars.car1?._id === car._id}
    >
      {car.brand} {car.model} ({car.year})
    </option>
  ))}
</select>


      </div>

      {/* Compare Button */}
      <div className="text-center">
      <button
  onClick={handleCompare}
  disabled={!selectedCars.car1 || !selectedCars.car2}
  className={`px-4 py-2 rounded transition ${
    selectedCars.car1 && selectedCars.car2
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-gray-600 cursor-not-allowed"
  }`}
>
  Compare
</button>

        <button onClick={() => {
  setSelectedCars({ car1: null, car2: null });
  setComparisonStarted(false);
}} className="ml-4 bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">
  Clear
</button>

      </div>

      {/* Comparison Table */}
      {comparisonStarted && selectedCars.car1 && selectedCars.car2 && (
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-gray-300">
                <th className="p-2 border border-gray-700">Feature</th>
                <th className="p-2 border border-gray-700">{selectedCars.car1.brand} {selectedCars.car1.model}</th>
                <th className="p-2 border border-gray-700">{selectedCars.car2.brand} {selectedCars.car2.model}</th>
              </tr>
            </thead>
            <tbody>
              {["brand", "model", "priceRange", "engine", "mileage", "fuelType", "transmission", "seats", "year", "seats", "bodyType", "drivetrain", "topSpeed", "acceleration", "bootSpace", "infotainment", "safetyRating"].map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}>
                  <td className="p-2 border border-gray-600 capitalize">{feature.replace(/([A-Z])/g, " $1")}</td>
                  <td className="p-2 border border-gray-600">{selectedCars.car1[feature]}</td>
                  <td className="p-2 border border-gray-600">{selectedCars.car2[feature]}</td>
                </tr>
              ))}
              {/* Buy Car Buttons */}
              <tr className="bg-gray-900">
                <td className="p-2 border border-gray-600"></td>
                <td className="p-2 border border-gray-600 text-center">
                  <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">
                    Buy {selectedCars.car1.brand} {selectedCars.car1.model}
                  </button>
                </td>
                <td className="p-2 border border-gray-600 text-center">
                  <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">
                    Buy {selectedCars.car2.brand} {selectedCars.car2.model}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CarComparison;
