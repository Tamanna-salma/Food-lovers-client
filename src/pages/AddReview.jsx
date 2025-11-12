import React, { use } from "react";
import { AuthContext } from "../AuthContexts/AuthProvider";
import { toast } from "react-toastify";

const AddReview = () => {

  const { user } = use(AuthContext)

  const handleReview = (e) => {
    e.preventDefault()
    const form = e.target
    const food_name = form.food_name.value
    const photo = form.food_image.value
    const restaurant_name = form.restaurant_name.value
    const restaurant_location = form.location.value
    const rating = form.rating.value
    const review = form.review_text.value

    const newReview = {
      food_name,
      photo,
      restaurant_name,
      restaurant_location,
      rating: parseFloat(rating),
      review,
      email: user?.email,
      reviewer_name: user?.displayName
    }

    fetch('http://localhost:3000/foods', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
      .then(res => res.json())
      .then(data => {
        toast.success('Your review added.',data)
        form.reset()

      })
      .catch(err => {
        toast.error(err.message)
      })
  }

  return (
    <div className=" w-full lg:max-w-2xl mx-auto p-6 mb-6 bg-white rounded-2xl shadow-md mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        Add Review
      </h2>

      <form onSubmit={handleReview} className="space-y-4 ">

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
