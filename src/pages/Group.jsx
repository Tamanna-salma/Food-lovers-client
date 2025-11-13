import React from 'react'
import group from '../assets/group.png';
import group1 from '../assets/BFN.jpg';

const Group = () => {
  return (
    <div>
          <h2 className='text-center text-sm lg:text-3xl font-bold'>Group Volunteering </h2>
      <div className="space-y-5 lg:space-y-8 max-w-7xl mx-auto lg:px-6 mt-2 lg:mt-5 mb-5">
        
  
        <div className="grid md:grid-cols-2 items-center gap-8 bg-gray-50 p-6 rounded-2xl shadow">
          <img
            src={group}
            alt="Group Volunteering"
            className="w-full h-full object-cover rounded-xl"
          />
          <div>
            <h2 className="text-sm lg:text-3xl font-bold mb-4 text-blue-800">
              Join a Team, Make an Impact
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Groups wishing to volunteer at BFN may support our Food Sorting
              Program or Warehouse Operations. Food Sorting shifts are offered
              once a month on select weekday mornings, Monday through Thursday for
              groups of up to 10 people. Volunteers interested in supporting BFN's
              warehouse operations may sign up groups of up to 8 people on select
              Friday mornings each month to help keep our operations stocked, safe,
              sane and sanitary.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 lg:px-6 py-3 rounded-md font-semibold">
              Build Your Team at BFN!
            </button>
          </div>
        </div>

        {/* Safety & Quality Section */}
        <div className="grid md:grid-cols-2 items-center gap-8 bg-green-50 p-6 rounded-2xl shadow">
          <div>
            <h2 className="text-sm lg:text-3xl font-bold mb-4 text-green-600">
              Safety & Quality
            </h2>
            <p className="text-gray-700 leading-relaxed">
              It's paramount that BFN always provides the safest food possible
              for our community. Four days a week, we pick up pallets of recovered
              food from our partners. Volunteers sort each delivery, composting
              anything that doesn't align with our standards. If we wouldn't eat
              it, we won't distribute it.
            </p>
          </div>
          <img
            src={group1}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Group
