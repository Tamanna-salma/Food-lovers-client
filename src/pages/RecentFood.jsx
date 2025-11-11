import React, { use } from 'react'
import Food from './Food';

const RecentFood = ({recentFoodspromise}) => {
    const foods=use(recentFoodspromise);
    console.log(foods);
  return (
    <div className=" mx-auto px-4 mt-7 ">
         <h2 className='font-bold text-xl lg:text-2xl text-center'>Featured <span className='font-bold text-xl lg:text-4xl text-green-600'>Reviews</span></h2>
       <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-3 space-y-5 mt-6'>
         {
         foods.map(food=> <Food key={food._id}
            food={food}
            ></Food>)
        }
       </div>
    </div>
  )
}

export default RecentFood