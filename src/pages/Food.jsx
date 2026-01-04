import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../AuthContexts/AuthProvider";
import { toast } from "react-toastify";

const API_URL = "https://food-lovers-server-3uh2j2e98-salmas-projects-44d38334.vercel.app";

const Food = ({ food }) => {
  const { user } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    _id,
    photo,
    food_name,
    restaurant_name,
    restaurant_location,
    reviewer_name,
    rating,
  } = food;

  // ✅ check favourite
  useEffect(() => {
    if (!user?.email || !_id) return;

    fetch(`${API_URL}/favourites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.some((fav) => fav.food_id === _id);
        setIsFavorite(found);
      })
      .catch(() => {
        console.error("Failed to load favourites");
      });
  }, [user?.email, _id]);

  const toggleFavorite = async () => {
    if (!user?.email) {
      toast.error("Please login first!");
      return;
    }

    if (isFavorite) {
      toast.info("Already in favourites ❤️");
      return;
    }

    const favouriteData = {
      food_id: _id,
      food_name,
      restaurant_name,
      restaurant_location,
      reviewer_name,
      rating,
      photo,
      email: user.email,
    };

    try {
      const res = await fetch(`${API_URL}/favourites`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favouriteData),
      });

      const data = await res.json();

      if (data.insertedId) {
        setIsFavorite(true);
        toast.success("Added to favourites!");
      }
    } catch (err) {
      toast.error("Failed to add favourite");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col h-full rounded-2xl p-3 shadow-md bg-gray-200">
        <img
          src={photo}
          alt={food_name}
          className="w-full h-52 object-cover rounded-xl"
        />

        <div className="flex flex-col flex-grow p-4 space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-orange-600 line-clamp-1">
              {food_name}
            </h3>

            <button onClick={toggleFavorite} className="text-2xl">
              {isFavorite ? (
                <FaHeart className="text-red-600" />
              ) : (
                <FaRegHeart className="text-red-500" />
              )}
            </button>
          </div>

          <div className="text-sm">
            <p className="font-semibold">{restaurant_name}</p>
            <p className="text-indigo-600">{restaurant_location}</p>
            <p className="italic text-gray-600">By {reviewer_name}</p>
            <p className="text-orange-500 font-bold">⭐ {rating}</p>
          </div>

          <Link
            to={`/fooddetails/${_id}`}
            className="w-full py-2 rounded-lg bg-green-800 text-white text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
