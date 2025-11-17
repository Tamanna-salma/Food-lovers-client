import React, { useContext, useState } from "react";

import { AuthContext } from "../AuthContexts/AuthProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const food = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!food || loading) {
    return (
      <div className="flex justify-center mt-20">
    
      </div>
    );
  }

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
    setIsFavorite(true);
    setLoading(true);

    const favorite = {
      food_id: _id,
      food_name,
      restaurant_name,
      restaurant_location,
      reviewer_name,
      rating,
      photo,
      email: user?.email,
      added_at: new Date(),
    };

    try {
      const response = await fetch("https://food-lovers-server-blond.vercel.app/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favorite),
      });

      const data = await response.json();
      if (data.insertedId) {
        console.log(" Food added to favourites:", data);
      } else {
        console.log(" Error adding to favourites");
      }
    } catch (error) {
      console.error(" Error adding to favourites:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-96 mx-auto mb-6 mt-10 p-4 shadow-lg rounded-2xl bg-white hover:shadow-xl transition">
      <img
        src={photo}
        alt={food_name}
        className="rounded-lg w-full h-64 object-cover"
      />

      <div className="flex justify-between items-center mt-4">
        <h2 className="text-2xl font-bold text-orange-500">{food_name}</h2>
        <button onClick={toggleFavorite} className="text-2xl">
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

      <div className="flex justify-between">
        <p className="mt-3 text-gray-600">
        Reviewed by: <span className="font-medium">{reviewer_name}</span>
      </p>

      <p className="text-orange-500 font-semibold mt-2">⭐ {rating}</p>

      </div>
      {review && (
        <p className="mt-4 text-gray-700 border-t pt-2 italic">{review}</p>
      )}
    </div>
  );
};

export default FoodDetails;
