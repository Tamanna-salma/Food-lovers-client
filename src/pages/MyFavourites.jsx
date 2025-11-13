import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const MyFavourites = ({ food, user }) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = async () => {
    if (!food || !user) {
     toast ("Please log in and select a food item first!");
      return;
    }

    const favoriteData = {
      userEmail: user.email,
      food_name: food.food_name,
      photo: food.photo,
      restaurant_name: food.restaurant_name,
    };

    const res = await fetch("http://localhost:3000/favourites", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(favoriteData),
});
    if (res.ok) {
      setIsFav(true);
    }
  };

  return (
    <div className="max-w-7xl px-6 py-5 mt-12 mb-10">
      <button onClick={handleFavorite}>
      {isFav ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
    </button>
    </div>
  );
};

export default MyFavourites;
