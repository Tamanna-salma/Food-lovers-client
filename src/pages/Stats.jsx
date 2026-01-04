import { motion } from "framer-motion";

const stats = [
  { value: "15K+", label: "Delicious Meals Served" },
  { value: "8K+", label: "Positive Reviews" },
  { value: "120+", label: "Expert Chefs" },
  { value: "250+", label: "Unique Recipes" },
  { value: "10+", label: "Active Locations" },
  { value: "98%", label: "Satisfaction Rate" },
];

const Stats = () => {
  return (
    
    <section className="py-16 max-w-7xl mx-auto px-4 bg-gradient-to-r from-purple-600 to-indigo-600 mt-8 mb-8 text-white overflow-hidden shadow-2xl rounded-[2rem] ">
      
      <div className="text-center mb-10 px-4">
        <h2 className="text-xl md:text-4xl font-extrabold tracking-tight">
          Our Culinary Journey
        </h2>
        <p className="mt-2 text-purple-100/90 max-w-xl mx-auto">
          From passion to plate, here is why Food Lover is the most trusted platform for taste hunters.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full flex overflow-hidden">
        <motion.div
          className="flex gap-20 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
        
          {[...stats, ...stats].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[220px]"
            >
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors cursor-default">
                <h3 className="text-4xl md:text-5xl font-black text-white text-center">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm md:text-base font-medium text-purple-100 text-center uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
     
      
    </section>
  );
};

export default Stats;