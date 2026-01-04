import React from 'react'
import { Link } from 'react-router'

const Featured = () => {
  return (
    <div className='mx-auto max-w-7xl px-4'>
        <h2 className='text-xl lg:text-3xl font-bold text-center mt-8 mb-8 text-green-600'>Featured section</h2>
        <div className="bg-gray-50 rounded-[3rem] p-8 md:p-8 flex flex-col md:flex-row items-center gap-10 my-20">
    <div className="w-full md:w-1/2 relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=600" 
            className="rounded-[2rem] shadow-2xl relative z-10 w-full object-cover h-[400px]"
            alt="Chef of the month"
        />
    </div>
    <div className="w-full md:w-1/2">
        <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">Featured Chef</span>
        <h2 className="text-4xl font-extrabold text-gray-800 mt-6 mb-4">Mastering the Art of <span className="text-purple-600">Italian Cuisine</span></h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Meet Chef Antonio, who has shared over 200 authentic pasta recipes with our community this month. Follow him to get exclusive tips on making the perfect hand-made dough.
        </p>
        <div className="flex gap-4">
            <Link to="/recipes" className="bg-gray-800 text-white px-8 py-3 rounded-2xl font-bold hover:bg-black transition shadow-lg">View Recipes</Link>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-2xl font-bold hover:bg-purple-50 transition">Follow Chef</button>
        </div>
    </div>
</div>

<div className="bg-gradient-to-br from bg-gray-400 to-indigo-800 rounded-[2.5rem] p-10 text-center text-white my-20 shadow-2xl relative overflow-hidden">
    
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white opacity-10 rounded-full"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-purple-400 opacity-20 rounded-full"></div>

    <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Never Miss a Delicious Update!</h2>
        <p className="text-purple-100 mb-8 max-w-xl mx-auto">Join 10,000+ food lovers and get the best recipes and kitchen hacks delivered straight to your inbox.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full sm:w-80 px-6 py-4 outline-2 rounded-2xl  "
            />
            <button className="border-green-600 outline-2 hover:bg-green-800 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg active:scale-95">
                Subscribe Now
            </button>
        </div>
        <p className="text-xs text-purple-200 mt-6 italic">We respect your privacy. Unsubscribe at any time.</p>
    </div>
</div>
    </div>
  )
}

export default Featured