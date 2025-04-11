import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Aboutcars = () => {
  const { register, reset, handleSubmit } = useForm();
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const submitHandler = async (data) => {
    try {
      const userId = localStorage.getItem("id");
      data.userId = userId;
  
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));
  
      if (image) {
        formData.append("image", image);
      }
  
      const res = await axios.post("http://localhost:3000/addcarwithfile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Car added successfully:", res.data);
  
      // Reset form fields and clear image
      reset(); // Clears all fields
      setImage(null); // Clears the image state
  
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };
  

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-3xl border border-gray-700">
        <h1 className="text-xl font-bold text-white text-center mb-4">Sell Your Car</h1>
        <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
          {/* Car Name & Brand */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm">Car Name</label>
              <input
                type="text"
                {...register("carName")}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm">Brand</label>
              <input
                type="text"
                {...register("brand")}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              />
            </div>
          </div>

          {/* Model & Year */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm">Model</label>
              <input
                type="text"
                {...register("model")}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm">Year of Manufacture</label>
              <input
                type="number"
                {...register("year")}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              />
            </div>
          </div>

          {/* Variant & Mileage */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm">Variant</label>
              <input
                type="text"
                {...register("variant")}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm">Mileage (km)</label>
              <input
                type="number"
                {...register("mileage")}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              />
            </div>
          </div>

          {/* Fuel Type & Price Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm">Fuel Type</label>
              <select
                {...register("fuelType")}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              >
                <option value="">Select Fuel Type</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="CNG">CNG</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-300 text-sm">Price Range</label>
              <select
                {...register("priceRange")}
                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
              >
                <option value="">Select Price Range</option>
                <option value="1-3L">1-3 Lakh</option>
                <option value="3-5L">3-5 Lakh</option>
                <option value="5-10L">5-10 Lakh</option>
                <option value="10-20L">10-20 Lakh</option>
                <option value="20-50L">20-50 Lakh</option>
                <option value="50L-1C">50 Lakh - 1 Crore</option>
              </select>
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-gray-300 text-sm">Color</label>
            <select
              {...register("color")}
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
            >
              <option value="">Select Color</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="silver">Silver</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="grey">Grey</option>
              <option value="brown">Brown</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-300 text-sm">Upload Car Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md cursor-pointer"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <input
              type="submit"
              value="Add Car"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Aboutcars;
