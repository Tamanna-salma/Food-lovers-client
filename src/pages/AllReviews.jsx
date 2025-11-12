import React, { useEffect, useState } from 'react'
import Food from './Food'

const AllReviews = () => {

    const [review, setReview] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchReviews = async () => {
            
            const query = search ? `?food_name=${search}` : '';
            const response = await fetch(`http://localhost:3000/foods${query}`);
            const data = await response.json();
            setReview(data);
        };

        fetchReviews()
    }, [search]);

    return (
        <div className="mx-auto p-5">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-3xl font-semibold text-blue-800">All Reviews</h1>
                <p className="text-gray-600 mt-2">Find the latest reviews for your favorite foods</p>
            </header>

            {/* Search Input */}
            <div className="flex justify-center mb-8">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search reviews..."
                    className="p-3 w-1/2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-3 space-y-4 lg:space-y-5  mt-6'>
                {
                    review.map(food => <Food key={food._id}
                        food={food}
                    ></Food>)
                }

            </div>

        </div>
    )
}

export default AllReviews