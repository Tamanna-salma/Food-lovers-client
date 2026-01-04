import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContexts/AuthProvider";
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaUtensils, FaUserCircle, FaQuoteLeft } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const food = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!food) return <div className="text-center mt-20 text-xl font-bold">Food not found!</div>;

  const { _id, photo, food_name, restaurant_name, restaurant_location, reviewer_name, rating, review } = food;

  const toggleFavorite = async () => {
    if (isFavorite) return;
    setIsFavorite(true);

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
      const response = await fetch("https://food-lovers-server-hlpche9q7-salmas-projects-44d38334.vercel.app/favourites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(favorite),
      });
      const data = await response.json();
      if (data.insertedId) {
        Swal.fire({ icon: "success", title: "Added to Favourites", showConfirmButton: false, timer: 1500 });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
     
      <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col lg:flex-row items-center border border-gray-100 mb-10">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 h-80 lg:h-[400px]">
          <img src={photo} alt={food_name} className="w-full h-full object-cover" />
        </div>

        {/* Right: Essential Info */}
        <div className="w-full lg:w-1/2 p-8 md:p-10 relative">
          <button onClick={toggleFavorite} className="absolute top-6 right-6 text-3xl p-3 bg-gray-50 rounded-full hover:scale-110 transition">
            {isFavorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-300" />}
          </button>

          <div className="space-y-5">
            <h2 className="text-4xl font-black text-gray-800">{food_name}</h2>
            
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-lg font-bold text-purple-600">
                <FaUtensils /> {restaurant_name}
              </p>
              <p className="flex items-center gap-3 text-gray-500">
                <FaMapMarkerAlt className="text-red-400" /> {restaurant_location}
              </p>
            </div>

            <div className="flex items-center gap-8 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <FaUserCircle className="text-3xl text-gray-300" />
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Reviewer</p>
                        <p className="font-bold text-gray-700">{reviewer_name}</p>
                    </div>
                </div>
                <div className="bg-orange-50 px-4 py-2 rounded-xl">
                    <p className="text-[10px] text-orange-400 uppercase font-bold text-center">Rating</p>
                    <p className="text-xl font-black text-orange-500 text-center">⭐ {rating}</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Description Section (Outside the Card) */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-50 relative overflow-hidden">
        
        <FaQuoteLeft className="absolute top-10 right-10 text-9xl text-gray-50 opacity-50" />
        
        <div className="relative z-10">
            <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
                Detailed Review & Description
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:mr-3 first-letter:float-left">
              {review || "The reviewer hasn't provided a detailed description yet, but based on the rating, this dish seems to be a must-try for everyone! The presentation and the restaurant's reputation suggest a high-quality culinary experience."}
            </p>
            
            <div className="mt-10 p-6 bg-purple-50 rounded-2xl border-l-4 border-purple-500">
                <p className="text-purple-700 font-medium italic text-sm">
                    "This review represents the personal experience of {reviewer_name} at {restaurant_name}."
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;