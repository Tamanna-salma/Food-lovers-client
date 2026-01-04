import React from "react";
import { motion } from "framer-motion";
import Service from "./Service";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-800 leading-tight">
            Discover the Real Taste with <span className="text-purple-600">Food Lovers</span>
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Food Lovers is more than just a review site; it's a community for those who live to eat. 
            We bring you authentic reviews and recommendations for the most mouth-watering dishes 
            right in your city. From street food to fine dining, your next favorite meal is just a search away.
          </p>
          <p className="text-gray-600 mb-8 text-lg">
            Our mission is to celebrate culinary art by connecting foodies with local restaurants. 
            We ensure every craving is satisfied with reliable reviews, detailed ratings, and 
            a shared passion for great taste.
          </p>
          <Link to="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-800 transition-all shadow-lg hover:shadow-purple-200">
            Explore Menu
          </Link>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative element */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
            alt="Delicious Food Table"
            className="rounded-[2rem] shadow-2xl w-full h-[450px] object-cover relative z-10"
          />
          
          {/* Floating Card inside image area */}
          <div className="absolute bottom-6 -left-6 bg-gray-300 p-4 rounded-2xl shadow-xl z-20 hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-full text-xl">🔥</div>
              <div>
                <p className="font-bold text-gray-800">100+ Daily Reviews</p>
                <p className="text-xs text-gray-500">Trusted by 5k+ Foodies</p>
              </div>
            </div>
          </div>
        </motion.div>
        
      </div>

     
    </section>
  );
};

export default About;