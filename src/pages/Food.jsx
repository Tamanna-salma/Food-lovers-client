import React from 'react'

const Food = ({food}) => {

    const {photo,food_name,restaurant_name,restaurant_location,reviewer_name,rating}=food;

  return (
   <div className=" mx-auto px-4 "> 
            <div className=" rounded-2xl px-3 py-3 w-96 shadow-md overflow-hidden bg-white hover:shadow-lg">
              <img
                src={photo}
                alt=""
                className="w-full h-48 object-cover rounded-xl"/>

              <div className="p-4 space-y-2">
                <h3 className=" text-sm lg:text-lg font-bold text-orange-500">
                  {food_name}
                </h3>

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

                <button  className=" w-full lg:w-full  p-3 py-2 rounded-lg font-medium btn bg-green-800 hover:bg-green-600 text-white transition" > View Details
                </button>
              </div>
            </div>
       
        
      
    </div>
  )
}

export default Food