import React, { use } from 'react'
import Food from './Food';
import { Link } from 'react-router';
import { MdOutlineShowChart } from "react-icons/md";
const RecentFood = ({recentFoodspromise}) => {
    const foods=use(recentFoodspromise);
    console.log(foods);
  return (
    <div className=" mx-auto px-4 mt-7 mb-6">
         <h2 className='font-bold text-xl lg:text-2xl text-center'>Featured <span className='font-bold text-xl lg:text-4xl text-green-600'>Reviews</span></h2>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-3 space-y-4 lg:space-y-5  mt-6'>
         {
         foods.map(food=> <Food key={food._id}
            food={food}
            ></Food>)
        }
        
       </div>
        <div className='text-center mt-4'>
        
        <Link to="/allreviews" className='p-6 py-7 ounded-lg font-medium text-xl btn bg-green-800 hover:bg-green-600 text-white'><MdOutlineShowChart /> Show All</Link>
      
       </div>
    </div>
  )
}

export default RecentFood