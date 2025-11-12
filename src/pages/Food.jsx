import React, { use, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContexts/AuthProvider';

const Food = ({ food }) => {

  const {user} = use(AuthContext)
  const [isFavorite, setIsFavorite] = useState(false);
  const { _id, photo, food_name, restaurant_name, restaurant_location, reviewer_name, rating } = food;

  const toggleFavorite = async () => {
    setIsFavorite(true); 

        if (isFavorite) {
      const favorite = {
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
        const response = await fetch('http://localhost:3000/favorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(favorite),
        });

        const data = await response.json();
        if (data) {
          console.log('Food added to favourites:', data);
        } else {
          console.log('Error adding to favourites');
        }
      } catch (error) {
        console.error('Error adding to favourites:', error);
      }
    }
  };

  return (
    <div className=" mx-auto px-4 ">
      <div className=" rounded-2xl px-3 py-3 w-full lg:w-96 shadow-md overflow-hidden bg-white hover:shadow-lg">
        <img
          src={photo}
          alt=""
          className="w-full h-48 object-cover rounded-xl" />

        <div className="p-4 space-y-2 ">
         <div className='flex justify-between'>
           <h3 className=" text-sm lg:text-lg font-bold text-orange-500">
            {food_name}
            </h3>
            
             <div className="flex justify-end">
            <button
              onClick={toggleFavorite}
              className="text-2xl p-1 focus:outline-none">
            
              <span className={`text-red-500 ${isFavorite ? 'fill-current' : 'text-gray-400'}`}>
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
              </span>
            </button>
          </div>
          
         </div>
         

          <div className="flex justify-between items-center text-sm lg:text-lg mb-4">
            <span className="font-medium">
              {restaurant_name}
            </span>
            <span className="text-indigo-600 font-semibold">
              {restaurant_location}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">
              {reviewer_name}
            </span>
            <span className="text-orange-500 font-medium">
              ⭐ {rating}
            </span>
          </div>


          <Link to={`/fooddetails/${_id}`} className=" w-full lg:w-full  p-3 py-2 rounded-lg font-medium btn bg-green-800 hover:bg-green-600 text-white transition" > View Details
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Food