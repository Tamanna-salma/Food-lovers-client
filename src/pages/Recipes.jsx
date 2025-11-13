import React, { useEffect, useState } from "react";
import Loading from "./Loading"; 

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/recipe")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => console.error("Error fetching recipes:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        <Loading />
      </div>
    );
  }

  return ( 
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
      Our Top Dinner Recipes
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={recipe.photo}
              alt={recipe.food_name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {recipe.food_name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
