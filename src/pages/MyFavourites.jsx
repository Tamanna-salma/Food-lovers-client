import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MyFavourites = ({ food, user }) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = async () => {
    if (!food || !user) {
      alert("Please log in and select a food item first!");
      return;
    }

    const favoriteData = {
      userEmail: user.email,
      food_name: food.food_name,
      photo: food.photo,
      restaurant_name: food.restaurant_name,
    };

    const res = await fetch("http://localhost:3000/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favoriteData),
    });

    if (res.ok) {
      setIsFav(true);
    }
  };

  return (
    <button onClick={handleFavorite}>
      {isFav ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
    </button>
  );
};

export default MyFavourites;
