import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    category: "Healthy Eating",
    title: "10 Secret Ingredients to Make Your Salad Taste Divine",
    author: "Chef Sarah",
    date: "Jan 04, 2026",
    desc: "Discover how to turn a boring bowl of greens into a restaurant-quality masterpiece with these 10 ingredients."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    category: "Cooking Tips",
    title: "The Ultimate Guide to Baking the Perfect Homemade Pizza",
    author: "Marco Rossi",
    date: "Jan 02, 2026",
    desc: "Master the art of dough making and sauce layering to get that crispy, golden crust every single time."
  },
  {
  id: 3,
  image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
  category: "Street Food",
  title: "The Rise of Fusion Street Food: Why Everyone Loves It",
  author: "Chef Jayson",
  date: "Jan 03, 2026",
  desc: "Exploring how traditional street food is being reimagined with modern twists and global flavors."
}
];

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl text-center mx-auto">
            <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">Our Blog</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 mt-3">
              Latest Food <span className="text-purple-600">Articles</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 text-purple-600 font-bold border-b-2 border-purple-600 hover:text-purple-800 hover:border-purple-800 transition-all">
            View All Posts
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div 
              key={blog.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Area */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold text-purple-600 shadow-sm">
                  {blog.category}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex items-center gap-3 text-gray-400 text-xs mb-4">
                  <span>By {blog.author}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-snug hover:text-purple-600 cursor-pointer transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {blog.desc}
                </p>
                <button className="font-bold text-purple-600 flex items-center gap-2 group">
                  Read More 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;