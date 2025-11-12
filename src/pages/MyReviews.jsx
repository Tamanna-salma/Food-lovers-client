import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContexts/AuthProvider'

const MyReviews = () => {

  const { user } = use(AuthContext)


  const [myReviews, setMyReviews] = useState([])
  const [loading, setloading] = useState(true)


  useEffect(() => {
    setloading(true)
    fetch('http://localhost:3000/foods').
      then(res => res.json())
      .then(data => {


        const reviews = data.filter(review => review?.email === user?.email)
        setMyReviews(reviews)
        setloading(false)


      })
  }, [user])

  return (
    <div>
      <h1>MyReviews</h1>
      {myReviews.map(myReview => <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Food Image */}
        <div className="w-1/4">
          <img
            src={myReview?.photo }
            alt={myReview?.food_name }
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Food details */}
        <div className="w-3/4 flex flex-col space-y-2 md:space-y-4">
          <h3 className="text-xl font-semibold text-blue-800">{myReview?.food_name}</h3>
          <p className="text-gray-600">{myReview?.restaurant_name}</p>
          <p className="text-sm text-gray-500">Posted on: {myReview?.created_at}</p>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-4">
          <button

            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Edit
          </button>
          <button

            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>)}
    </div>
  )
}

export default MyReviews