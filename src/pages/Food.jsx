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
    
    fetch(`https://food-lovers-server-blond.vercel.app/favourites?email=${user.email}`)
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
      const response = await fetch("https://food-lovers-server-blond.vercel.app/favourites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
   
    <div className="w-full h-full">
      <div className="flex flex-col h-full rounded-2xl p-3 shadow-md bg-gray-200 hover:shadow-lg transition-all duration-300">
        
        {/* Image  */}
        <div className="relative">
          <img
            src={photo}
            alt={food_name}
            className="w-full h-52 object-cover rounded-xl"
          />
          
        </div>


        <div className="flex flex-col flex-grow p-4 space-y-3">
          
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-lg font-bold text-orange-600 line-clamp-1">
              {food_name}
            </h3>
            <button
              onClick={toggleFavorite}
              className="text-2xl focus:outline-none transition-transform active:scale-90"
            >
              {isFavorite ? (
                <FaHeart className="text-red-600" />
              ) : (
                <FaRegHeart className="text-red-500 hover:scale-110" />
              )}
            </button>
          </div>

          <div className="space-y-1 flex-grow">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold text-gray-700">{restaurant_name}</span>
              <span className="text-indigo-600 font-medium">{restaurant_location}</span>
            </div>

            <div className="flex justify-between items-center text-sm pt-2">
              <span className="text-gray-600 italic">By: {reviewer_name}</span>
              <span className="text-orange-500 font-bold flex items-center gap-1">
                ⭐ {rating}
              </span>
            </div>
          </div>

          <Link
            to={`/fooddetails/${_id}`}
            className="w-full py-2.5 rounded-lg bg-green-800 hover:bg-green-700 text-white transition-colors block text-center font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Food;