import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch reviews from backend
  const fetchReviews = async () => {
    try {
      const response = await axios.get("/getreviews");
      setReviews(response.data.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/addreview", data);
      console.log("Review submitted:", res.data);
  
      // Ensure `setReviews` always sets an array
      setReviews((prevReviews) => [...prevReviews, res.data.review]); 
      reset(); // Reset form after submission
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  

  // Watch the rating field to update stars dynamically
  const rating = watch("rating", 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center py-10 px-4">
      <h2 className="text-4xl font-bold text-white mb-6 text-center animate-pulse">
        Customer Reviews
      </h2>

      {/* Review Form */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-cyan-500/30 max-w-lg w-full mb-10">
        <h3 className="text-lg font-semibold text-white mb-4">Write a Review</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full p-3 mb-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <textarea
            {...register("comment", { required: "Review cannot be empty" })}
            placeholder="Your Review"
            className="w-full p-3 mb-3 bg-gray-800 text-white rounded-lg border border-cyan-500/50 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
          {errors.comment && <p className="text-red-500 text-sm">{errors.comment.message}</p>}

          {/* Star Rating */}
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-3xl ${
                  rating >= star ? "text-yellow-400" : "text-gray-500"
                }`}
                onClick={() => setValue("rating", star)}
              >
                ★
              </span>
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      {reviews.length === 0 ? (
        <p className="text-gray-400 text-lg">No reviews available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-cyan-500/50 border border-cyan-500/30"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://i.pravatar.cc/150" // Placeholder avatar
                  alt={review.name}
                  className="w-14 h-14 rounded-full border-2 border-cyan-400 shadow-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{review.name}</h3>
                  <p className="text-yellow-400 text-sm">
                    {"★".repeat(review.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
