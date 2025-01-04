import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Zoom, Fade } from "react-awesome-reveal";

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 5,
      feedback: "Great work! Very professional and creative.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      feedback: "I loved the design and attention to detail. Keep it up!",
    },
  ]);
  const [formData, setFormData] = useState({ name: "", rating: 0, feedback: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.rating && formData.feedback) {
      setReviews([...reviews, formData]);
      setFormData({ name: "", rating: 0, feedback: "" }); // Reset form
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-20 text-white">
      <Zoom>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4 tracking-wider">Your Reviews Matter</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Share your experience with my work. Your feedback helps me grow and improve.
          </p>
        </div>
      </Zoom>

      {/* Review Form */}
      <Fade delay={200}>
        <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Rating</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      formData.rating >= star ? "text-yellow-400" : "text-gray-500"
                    }`}
                    onClick={() => setFormData({ ...formData, rating: star })}
                  />
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Feedback</label>
              <textarea
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your feedback"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-pink-400 to-purple-600 text-white rounded-lg transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      </Fade>

      {/* Display Reviews */}
      <Fade delay={300}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <div className="flex mb-3 text-yellow-400">
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-300 italic">{`"${review.feedback}"`}</p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Review;
