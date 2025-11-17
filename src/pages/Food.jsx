import React, { useContext, useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../AuthContexts/AuthProvider";
import { toast } from "react-toastify";

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

  useEffect(() => {
    if (!user?.email) return;

    fetch("http://localhost:3000/favourites?email=${user.email")
      .then((res) => res.json())
      .then((data) => {
        const alreadyFav = data.find((fav) => fav.food_id === _id);
        if (alreadyFav) setIsFavorite(true);
      });
  }, [user, _id]);

  const toggleFavorite = async () => {
    if (!user?.email) {
      toast.error("Please login to add favourites!");
      return;
    }

    if (isFavorite) {
      toast.warning("Already in favourites!");
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
      added_at: new Date(),
    };

    try {
      const response = await fetch("http://localhost:3000/favourites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favouriteData),
      });

      const data = await response.json();

      if (data.insertedId) {
        setIsFavorite(true);
        toast.success("Added to favourites!");
      }
    } catch (error) {
      console.error("Error adding to favourites:", error);
    }
  };

  return (
    <div className="mx-auto px-4">
      <div className="rounded-2xl px-3 py-3 w-full lg:w-96 shadow-md bg-white hover:shadow-lg overflow-hidden">
        
        <img
          src={photo}
          alt=""
          className="w-full h-48 object-cover rounded-xl"
        />

        <div className="p-4 space-y-2">
          
          <div className="flex justify-between">
            <h3 className="text-sm lg:text-lg font-bold text-orange-500">
              {food_name}
            </h3>

             {/* Heart Button  */}
            <button
              onClick={toggleFavorite}
              className="text-2xl p-1 focus:outline-none"
            >
              {isFavorite ? (
                <FaHeart className="text-red-600" />
              ) : (
                <FaRegHeart className="text-red-500" />
              )}
            </button>
          </div>

          <div className="flex justify-between items-center text-sm lg:text-lg mb-4">
            <span className="font-medium">{restaurant_name}</span>
            <span className="text-indigo-600 font-semibold">
              {restaurant_location}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium">{reviewer_name}</span>
            <span className="text-orange-500 font-medium">⭐ {rating}</span>
          </div>

          <Link
            to={`/fooddetails/${_id}`}
            className="w-full mt-3 p-3 rounded-lg bg-green-800 hover:bg-green-600 text-white transition block text-center font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;
