// // // "use client";
// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // // import { MessageCircle, Lightbulb, Code, Rocket } from 'lucide-react';

// // // const HowItWorks = () => {
// // //   const steps = [
// // //     {
// // //       step: "01",
// // //     //   icon: <MessageCircle className="w-10 h-10" />,
// // //       title: "Consultation",
// // //       desc: "We listen to your ideas and understand your business goals thoroughly."
// // //     },
// // //     {
// // //       step: "02",
// // //     //   icon: <Lightbulb className="w-10 h-10" />,
// // //       title: "Planning",
// // //       desc: "Create comprehensive roadmap and design specification for your project."
// // //     },
// // //     {
// // //       step: "03",
// // //     //   icon: <Code className="w-10 h-10" />,
// // //       title: "Development",
// // //       desc: "Build with latest technologies using best practices and clean code."
// // //     },
// // //     {
// // //       step: "04",
// // //     //   icon: <Rocket className="w-10 h-10" />,
// // //       title: "Delivery",
// // //       desc: "Launch your project and provide ongoing support and maintenance."
// // //     }
// // //   ];

// // //   return (
// // //     <section className="py-14 bg-gray-50 dark:bg-[#0a0f1d]">
// // //       <div className="max-w-7xl mx-auto px-6 md:px-24 p-14">
        
// // //         {/* Header */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-3xl md:text-4xl font-bold dark:text-white">
// // //             How We <span className="text-blue-600">Work</span>
// // //           </h2>
// // //           <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
// // //             Our proven process ensures your project is delivered on time and exceeds expectations.
// // //           </p>
// // //         </div>

// // //         {/* Steps Grid */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //           {steps.map((item, i) => (
// // //             <motion.div
// // //               key={i}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: i * 0.1 }}
// // //               whileHover={{ scale: 1.05 }}
// // //               className="relative"
// // //             >
// // //               {/* Connector Line */}
// // //               {i < steps.length - 1 && (
// // //                 <div className="hidden lg:block absolute -right-4 top-20 w-8 h-0.5 bg-blue-600/30"></div>
// // //               )}

// // //               <div className="p-8 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all">
                
// // //                 {/* Step Number */}
// // //                 <div className="flex items-center gap-4 mb-4">
// // //                   <span className="text-4xl font-black text-blue-600">{item.step}</span>
// // //                   <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600">
// // //                     {item.icon}
// // //                   </div>
// // //                 </div>

// // //                 {/* Content */}
// // //                 <h3 className="text-2xl font-bold mb-3 dark:text-white">{item.title}</h3>
// // //                 <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>

// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //         {/* Bottom CTA */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           className="text-center mt-16"
// // //         >
// // //           <p className="text-gray-600 dark:text-gray-400 mb-6">
// // //             Ready to start your project? Let's work together!
// // //           </p>
// // //           <button className="px-10 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
// // //             Get Started Now
// // //           </button>
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowItWorks;



// // "use client";
// // import { motion } from 'framer-motion';
// // import { ArrowRight, Sparkles } from 'lucide-react';

// // const CTA = () => {
// //   return (
// //     <section className="py-14 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
// //       {/* Background Elements */}
// //       <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
// //       <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

// //       <div className="max-w-7xl mx-auto px-6 md:px-24 p-14">
        
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center"
// //         >
          
// //           {/* Badge */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full mb-8 border border-white/20"
// //           >
// //             <Sparkles size={18} />
// //             <span className="font-semibold">Ready to Get Started?</span>
// //           </motion.div>

// //           {/* Main Heading */}
// //           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
// //             Transform Your Business <br /> With Our Solutions
// //           </h2>

// //           {/* Description */}
// //           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
// //             Let's collaborate and create something amazing together. Our expert team is ready to turn your vision into reality.
// //           </p>

// //           {/* CTA Buttons */}
// //           <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:shadow-2xl transition-all flex items-center gap-2 group"
// //             >
// //               Contact Us Now
// //               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
// //             </motion.button>

// //             <motion.button
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               className="px-10 py-4 bg-transparent text-white font-bold text-lg rounded-lg border-2 border-white hover:bg-white/10 transition-all"
// //             >
// //               View Our Portfolio
// //             </motion.button>
// //           </div>

// //           {/* Stats */}
// //           <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
// //             <motion.div
// //               initial={{ opacity: 0, y: 10 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0 }}
// //             >
// //               <h4 className="text-3xl font-bold text-white">500+</h4>
// //               <p className="text-white/80 text-sm mt-1">Projects Done</p>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 10 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 }}
// //             >
// //               <h4 className="text-3xl font-bold text-white">250+</h4>
// //               <p className="text-white/80 text-sm mt-1">Happy Clients</p>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 10 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2 }}
// //             >
// //               <h4 className="text-3xl font-bold text-white">10+</h4>
// //               <p className="text-white/80 text-sm mt-1">Years Experience</p>
// //             </motion.div>
// //           </div>

// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CTA;
// // ****


// //  {/* Section 2: Features */}
// //       <section className="py-20 bg-white dark:bg-[#0a0f1d]">
// //         <div className="container mx-auto px-6 md:px-24">
// //           <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
// //             Why Choose <span className="text-blue-600">LumenSoft?</span>
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// //             {features.map((feature, i) => (
// //               <motion.div
// //                 key={i}
// //                 whileHover={{ y: -10 }}
// //                 className="p-8 bg-gray-50 dark:bg-slate-800 rounded-xl text-center"
// //               >
// //                 <div className="flex justify-center mb-4 text-blue-600">{feature.icon}</div>
// //                 <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
// //                 <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Section 3: Stats */}
// //       <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
// //         <div className="container mx-auto px-6 md:px-24">
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               className="text-center"
// //             >
// //               <h3 className="text-5xl font-bold">500+</h3>
// //               <p className="text-lg mt-2">Projects Completed</p>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 }}
// //               className="text-center"
// //             >
// //               <h3 className="text-5xl font-bold">250+</h3>
// //               <p className="text-lg mt-2">Happy Clients</p>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.2 }}
// //               className="text-center"
// //             >
// //               <h3 className="text-5xl font-bold">50+</h3>
// //               <p className="text-lg mt-2">Expert Team Members</p>
// //             </motion.div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.3 }}
// //               className="text-center"
// //             >
// //               <h3 className="text-5xl font-bold">10+</h3>
// //               <p className="text-lg mt-2">Years Experience</p>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Section 4: How It Works */}
// //       <section className="py-20 bg-gray-50 dark:bg-[#0a0f1d]">
// //         <div className="container mx-auto px-6 md:px-24">
// //           <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
// //             How We <span className="text-blue-600">Work</span>
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// //             {[
// //               { step: "01", title: "Consultation", desc: "Understand your requirements" },
// //               { step: "02", title: "Planning", desc: "Create comprehensive roadmap" },
// //               { step: "03", title: "Development", desc: "Build with latest technologies" },
// //               { step: "04", title: "Delivery", desc: "Launch and ongoing support" }
// //             ].map((item, i) => (
// //               <motion.div
// //                 key={i}
// //                 whileHover={{ scale: 1.05 }}
// //                 className="p-6 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-blue-600"
// //               >
// //                 <span className="text-4xl font-bold text-blue-600">{item.step}</span>
// //                 <h3 className="text-xl font-bold mt-4 dark:text-white">{item.title}</h3>
// //                 <p className="text-gray-600 dark:text-gray-400 mt-2">{item.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Section 5: Testimonials */}
// //       <section className="py-20 bg-white dark:bg-[#0a0f1d]">
// //         <div className="container mx-auto px-6 md:px-24">
// //           <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
// //             What Our Clients <span className="text-blue-600">Say</span>
// //           </h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {testimonials.map((testimonial, i) => (
// //               <motion.div
// //                 key={i}
// //                 whileHover={{ y: -5 }}
// //                 className="p-8 bg-gray-50 dark:bg-slate-800 rounded-xl"
// //               >
// //                 <div className="flex gap-1 mb-4">
// //                   {[...Array(5)].map((_, j) => (
// //                     <span key={j} className="text-yellow-400">★</span>
// //                   ))}
// //                 </div>
// //                 <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.text}"</p>
// //                 <h4 className="font-bold dark:text-white">{testimonial.name}</h4>
// //                 <p className="text-sm text-gray-500">{testimonial.role}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Section 6: Technologies */}
// //       <section className="py-20 bg-gray-50 dark:bg-[#0a0f1d]">
// //         <div className="container mx-auto px-6 md:px-24">
// //           <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">
// //             Technologies We <span className="text-blue-600">Master</span>
// //           </h2>
// //           <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
// //             {["React", "Next.js", "Node.js", "Python", "MongoDB", "PostgreSQL", "Docker", "AWS", "Firebase", "GraphQL"].map((tech, i) => (
// //               <motion.div
// //                 key={i}
// //                 whileHover={{ scale: 1.1 }}
// //                 className="p-6 bg-white dark:bg-slate-800 rounded-lg font-bold text-gray-800 dark:text-white shadow-md"
// //               >
// //                 {tech}
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Section 7: CTA */}
// //       <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
// //         <div className="container mx-auto px-6 md:px-24 text-center">
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //             Ready to Transform Your Business?
// //           </h2>
// //           <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
// //             Let's collaborate and create something amazing together. Get in touch with us today!
// //           </p>
// //           <motion.button
// //             whileHover={{ scale: 1.05 }}
// //             className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg text-lg hover:shadow-xl transition-all"
// //           >
// //             Contact Us Now
// //           </motion.button>
// //         </div>
// //       </section>***
// //       const features = [
// //     { icon: <Zap className="w-8 h-8" />, title: "Lightning Fast", desc: "Optimized performance" },
// //     { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Worldwide support" },
// //     { icon: <Award className="w-8 h-8" />, title: "Award Winning", desc: "Industry recognized" },
// //     { icon: <Code className="w-8 h-8" />, title: "Clean Code", desc: "Best practices" }
// //   ];

// //   const testimonials = [
// //     { name: "John Smith", role: "CEO, TechCorp", text: "LumenSoft transformed our digital presence. Highly recommended!" },
// //     { name: "Sarah Johnson", role: "Product Manager, StartupXYZ", text: "Great team, excellent results. They delivered on time and exceeded expectations." },
// //     { name: "Michael Chen", role: "Founder, Digital Solutions", text: "Best investment we made for our business transformation journey." }
// //   ];
// ****

// {/* Stats */}
//           <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0 }}
//             >
//               <h4 className="text-3xl font-bold text-white">500+</h4>
//               <p className="text-white/80 text-sm mt-1">Projects Done</p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               <h4 className="text-3xl font-bold text-white">250+</h4>
//               <p className="text-white/80 text-sm mt-1">Happy Clients</p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               <h4 className="text-3xl font-bold text-white">10+</h4>
//               <p className="text-white/80 text-sm mt-1">Years Experience</p>
//             </motion.div>
//           </div>



// ****
// {/* Marquee - Trusted By */}
//  const brands = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Tesla", "Stripe"];

//           <div className="mb-12 pt-8 border-t border-white/20">
//             <p className="text-white/80 text-sm font-semibold mb-6 uppercase tracking-widest">Trusted by leading companies</p>
//             <Marquee 
//               speed={40} 
//               gradient={true}
//               gradientColor="rgba(88, 28, 135, 1)"
//               pauseOnHover={true}
//             >
//               {brands.map((brand, i) => (
//                 <div
//                   key={i}
//                   className="px-8 py-3 mx-4 text-white/70 font-bold text-lg hover:text-white transition-colors"
//                 >
//                   {brand}
//                 </div>
//               ))}
//             </Marquee>
//           </div>