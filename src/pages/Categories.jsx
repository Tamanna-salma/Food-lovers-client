import React from 'react'

const Categories = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
        <div className="my-20">
    <div className="flex flex-col md:flex-row justify-between items-end mb-10">
        <div className='text-center mx-auto'>
            <h2 className="text-xl lg:text-3xl font-bold  text-gray-800">Trending <span className="text-purple-600">Categories</span></h2>
            <p className="text-gray-500 mt-2">Explore the most loved food types this week</p>
        </div>
        <button className="text-purple-600 font-semibold hover:underline mt-4 md:mt-0">View All</button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
            { name: 'Healthy', icon: '🥗', color: 'bg-green-50' },
            { name: 'Fast Food', icon: '🍔', color: 'bg-orange-50' },
            { name: 'Desserts', icon: '🍰', color: 'bg-pink-50' },
            { name: 'Drinks', icon: '🍹', color: 'bg-blue-50' },
            { name: 'Spicy', icon: '🌶️', color: 'bg-red-50' },
            { name: 'Bakery', icon: '🥐', color: 'bg-yellow-50' },
        ].map((item, index) => (
            <div key={index} className={`${item.color} p-6 bg-gray-200 border-purple-500 rounded-3xl text-center hover:scale-105 transition-transform cursor-pointer border  hover:border-purple-200`}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-700">{item.name}</h4>
            </div>
        ))}
    </div>
</div>


    </div>
  )
}

export default Categories