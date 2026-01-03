import React, { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa"; 
import Loading from "./Loading";
import { AuthContext } from "../AuthContexts/AuthProvider";
import Swal from "sweetalert2";

const MyFavourites = () => {
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://food-lovers-server-blond.vercel.app/favourites?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setFavourites(data))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this from favourites!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(`https://food-lovers-server-blond.vercel.app/favourites/${id}`, {
          method: "DELETE",
        });

        const data = await res.json();

        if (data.deletedCount > 0) {
          setFavourites((prev) => prev.filter((fav) => fav._id !== id));

          Swal.fire(
            "Deleted!",
            "Item removed from favourites.",
            "success"
          );
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-10 py-10">
      <h2 className=" text-xl lg:text-3xl font-bold text-center mb-6">My Favourites</h2>

      {favourites.length === 0 ? (
        <p className="text-center text-gray-500">No favourites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favourites.map((fav) => (
            <div
              key={fav._id}
              className="bg-gray-200 rounded-xl shadow-md hover:shadow-lg p-4"
            >
              <img
                src={fav.photo}
                alt={fav.food_name}
                className="w-full lg:w-96 h-48 object-cover rounded-lg mb-3"
              />

              <h3 className="text-lg font-semibold mb-1">{fav.food_name}</h3>

              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm">{fav.restaurant_name}</p>

                <button
                  onClick={() => handleDelete(fav._id)}
                  className="p-2 rounded-full hover:bg-gray-300"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavourites;
