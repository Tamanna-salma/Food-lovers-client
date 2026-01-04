import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        id: 1,
        icon: "👨‍🍳",
        title: "Expert Chefs",
        desc: "Connect with world-class chefs and learn their secret kitchen techniques.",
        bgColor: "bg-purple-50",
        iconBg: "bg-purple-100"
    },
    {
        id: 2,
        icon: "📖",
        title: "Exclusive Recipes",
        desc: "Access thousands of unique and healthy recipes shared by our community.",
        bgColor: "bg-orange-50",
        iconBg: "bg-orange-100"
    },
    {
        id: 3,
        icon: "💬",
        title: "Food Reviews",
        desc: "Read and share honest reviews about local restaurants and homemade food.",
        bgColor: "bg-green-50",
        iconBg: "bg-green-100"
    },
    {
        id: 4,
        icon: "🚀",
        title: "Fast Discovery",
        desc: "Find your favorite meals and ingredients quickly with our smart search.",
        bgColor: "bg-blue-50",
        iconBg: "bg-blue-100"
    }
];

const Service = () => {
    return (
        <section className="py-10 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-purple-600 font-bold tracking-widest uppercase text-sm">What We Offer</span>
                <h2 className="text-xl lg:text-4xl font-black text-gray-800 mt-3">
                    Premium <span className="text-purple-600">Services</span> For You
                </h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    We provide the best tools and community support to help you discover, cook, and share the joy of food.
                </p>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-3  lg:grid-cols-4 gap-8">
                {services.map((service) => (
                    <motion.div 
                        key={service.id}
                        whileHover={{ y: -10 }}
                        className={`${service.bgColor} p-8 rounded-[2.5rem] bg-purple-300 border-transparent hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-xl`}
                    >
                        <div className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner`}>
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                        
                        <button className="mt-6 text-purple-600 font-bold text-sm flex items-center gap-2 group">
                            Learn More 
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </button>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Service;