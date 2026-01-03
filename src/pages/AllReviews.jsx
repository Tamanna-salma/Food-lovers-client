import React, { useEffect, useState } from "react";
import Food from "./Food";
import Loading from "./Loading";
import match from '../assets/match.jpeg';
const AllReviews = () => {
  const [review, setReview] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const query = search ? `?food_name=${search}` : "";
        const response = await fetch(`https://food-lovers-server-blond.vercel.app/foods${query}`);
        const data = await response.json();
        setReview(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [search]);

  return (
    <div className="mx-auto p-5">
     
      <header className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-blue-800">All Reviews</h1>
        <p className="text-gray-600 mt-2">
          Find the latest reviews for your favorite foods
        </p>
      </header>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search reviews..."
          className="p-3 w-1/2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {loading ? (
        <Loading></Loading>
      ) : review.length === 0 ? (
    
        <div className="flex flex-col justify-center items-center ">
         <img src={match} alt="" />
          <p className="text-sm  mt-2">
            Try searching with a different food name.
          </p>
        </div>
      ) : (
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
          {review.map((food) => (
            <Food key={food._id} food={food}></Food>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;
