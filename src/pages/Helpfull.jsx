import React from 'react'
import pic from "../assets/image3.jpg"
import pic2 from "../assets/image1.jpg"
import pic3 from "../assets/image2.jpg"
const Helpfull = () => {
  return (
    <div>
        <section className="bg-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Get Involved in Food Sharing
          </h2>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Be part of our mission to reduce food waste and feed more people.  
            Choose how you want to make a difference:
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <img
              src={pic}
              alt="Home Delivery"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Home Delivery
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Help deliver nutritious food directly to families in need.
              </p>
              <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-md font-medium transition">
                Learn More →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <img
              src={pic3}
              alt="Redistribution"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Redistribution
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Support our efforts to redirect surplus food to local communities.
              </p>
              <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-md font-medium transition">
                Learn More →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <img
              src={pic2}
              alt="Food Recovery"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Food Recovery
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Join us in rescuing fresh food that would otherwise go to waste.
              </p>
              <button className="w-full bg-green-700 hover:bg-green-600 text-white py-2 rounded-md font-medium transition">
                Learn More →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Helpfull