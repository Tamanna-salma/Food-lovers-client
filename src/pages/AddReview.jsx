import React from "react";

const AddReview = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
       Add Review
      </h2>

      <form className="space-y-4">
        {/* User Info */}
        <div>
          <label className="font-medium">User Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="w-full mt-1 p-2 border border-gray-400 rounded-lg "
            required
          />
        </div>

        <div>
          <label className="font-medium">User Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full mt-1 p-2  border border-gray-400 rounded-lg"
            required
          />
        </div>

        {/* Review Info */}
        <div>
          <label className="font-medium">Food Name</label>
          <input
            type="text"
            name="food_name"
            placeholder="Enter food name"
            className="w-full mt-1 p-2  border border-gray-400 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="font-medium">Food Image URL</label>
          <input
            type="text"
            name="food_image"
            placeholder="Paste image URL"
            className="w-full mt-1 p-2 border border-gray-400 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="font-medium">Restaurant Name</label>
          <input
            type="text"
            name="restaurant_name"
            placeholder="Enter restaurant name"
            className="w-full mt-1 p-2  border border-gray-400 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full mt-1 p-2  border border-gray-400 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="font-medium">Star Rating </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            placeholder="Enter rating"
            className="w-full mt-1 p-2  border border-gray-400 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="font-medium">Review Text</label>
          <textarea
            name="review_text"
            rows="4"
            placeholder="Write your review..."
            className="w-full mt-1 p-2  border border-gray-400 rounded-lg"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-800 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
