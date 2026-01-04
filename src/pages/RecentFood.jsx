import React from "react";
import Food from "./Food";
import { Link } from "react-router";
import { MdOutlineShowChart } from "react-icons/md";

const RecentFood = ({ recentFoods }) => {
  if (!recentFoods || recentFoods.length === 0) {
    return (
      <div className="text-center mt-12 text-gray-500">
        No recent reviews found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 mt-12 mb-12">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="font-bold text-2xl lg:text-4xl">
          Featured <span className="text-green-600">Reviews</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Explore our most recent food experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {recentFoods.map((food) => (
          <div key={food._id} className="h-full">
            <Food food={food} />
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="text-center mt-12">
        <Link
          to="/allreviews"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg bg-green-800 hover:bg-green-700 text-white transition-all duration-300 shadow-lg hover:shadow-green-900/20"
        >
          <MdOutlineShowChart className="text-2xl" />
          Show All Reviews
        </Link>
      </div>
    </div>
  );
};

export default RecentFood;
