import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Loading from "./Loading"; // optional loading spinner

const MyFavourites = ({ food, user }) => {
  const [isFav, setIsFav] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch user's favourites
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`http://localhost:3000/favourites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setFavourites(data))
      .catch(() => toast.error("Failed to load favourites!"))
      .finally(() => setLoading(false));
  }, [user]);

  // ✅ Add favourite
  const handleFavorite = async () => {
    if (!food || !user) {
      toast.warning("Please log in and select a food item first!");
      return;
    }

    const favoriteData = {
      userEmail: user.email,
      userName: user.displayName || "Anonymous",
      food_name: food.food_name,
      photo: food.photo,
      restaurant_name: food.restaurant_name,
    };

    const res = await fetch("http://localhost:3000/favourites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favoriteData),
    });

    const data = await res.json();

    if (res.ok && !data.message) {
      setIsFav(true);
      toast.success("Added to favourites!");
      setFavourites((prev) => [...prev, favoriteData]);
    } else if (data.message === "Already added to favourites!") {
      toast.info("Already in favourites!");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Remove from favourites?");
    if (!confirm) return;

    const res = await fetch(`http://localhost:3000/favourites/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.success("Removed from favourites!");
      setFavourites((prev) => prev.filter((fav) => fav._id !== id));
    }
  };

 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
     <h2 className="text-3xl font-bold text-center  mb-6">
        My Favourites
      </h2>
      <div className="flex justify-center mb-8">
        
        <button
          onClick={handleFavorite}
          className="flex items-center space-x-2 text-xl text-red-700 hover:text-green-500 transition"
        >
          {isFav ? <FaHeart className=""  /> : <FaRegHeart />}
          <span className="text-green-600">Add to Favourites</span>
        </button>
      </div>

      {favourites.length === 0 ? (
        <p className="text-center text-gray-500">No favourites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favourites.map((fav) => (
            <div
              key={fav._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 relative"
            >
              <img
                src={fav.photo}
                alt={fav.food_name}
                className="w-full h-44 object-cover rounded-lg mb-3"
              />
              <h3 className="text-lg font-semibold  mb-1">
                {fav.food_name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {fav.restaurant_name}
              </p>

              <button
                onClick={() => handleDelete(fav._id)}
                className="absolute top-3 right-3 bg-red-100 p-2 rounded-full hover:bg-red-200"
              >
                <FaTrashAlt className="" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavourites;
