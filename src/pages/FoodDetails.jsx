import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContexts/AuthProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const API_URL = "https://food-lovers-server-3uh2j2e98-salmas-projects-44d38334.vercel.app";

const FoodDetails = () => {
  const food = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!food) return null;

  const {
    _id,
    photo,
    food_name,
    restaurant_name,
    restaurant_location,
    reviewer_name,
    rating,
    review,
  } = food;

  const toggleFavorite = async () => {
    if (!user?.email) {
      toast.error("Please login first!");
      return;
    }

    if (isFavorite) {
      toast.info("Already in favourites ❤️");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/favourites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          food_id: _id,
          food_name,
          restaurant_name,
          restaurant_location,
          reviewer_name,
          rating,
          photo,
          email: user.email,
        }),
      });

      const data = await res.json();

      if (data.insertedId) {
        setIsFavorite(true);
        toast.success("Added to favourites!");
      }
    } catch {
      toast.error("Failed to add favourite");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full lg:w-96 mx-auto mt-10 p-4 shadow-lg rounded-2xl bg-white">
      <img src={photo} alt={food_name} className="rounded-lg w-full h-60 object-cover" />

      <div className="flex justify-between items-center mt-4">
        <h2 className="text-2xl font-bold text-orange-500">{food_name}</h2>

        <button onClick={toggleFavorite} disabled={loading} className="text-2xl">
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-400" />
          )}
        </button>
      </div>

      <p className="text-gray-700 mt-2">
        {restaurant_name} — {restaurant_location}
      </p>

      <div className="flex justify-between mt-2">
        <p className="italic text-gray-600">By {reviewer_name}</p>
        <p className="text-orange-500 font-semibold">⭐ {rating}</p>
      </div>

      {review && <p className="mt-4 border-t pt-2 italic">{review}</p>}
    </div>
  );
};

export default FoodDetails;
