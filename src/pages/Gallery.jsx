import React from 'react';

const Gallery = () => {
    const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", title: "Healthy Bowls", desc: "Fresh & Organic" },
    { id: 2, src: "https://images.unsplash.com/photo-1513104890138-7c749659a591", title: "Italian Pizza", desc: "Hand-tossed Crust" },
    { id: 3, src: "https://images.unsplash.com/photo-1473093226795-af9932fe5856", title: "Special Pasta", desc: "Italian Masterpiece" },
    { id: 4, src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1", title: "BBQ Specials", desc: "Grilled to Perfection" },
];

    return (
        <section className="my-20 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Explore Our <span className="text-purple-600">Taste Gallery</span>
                </h2>
                <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {images.map((img) => (
                    <div key={img.id} className="group relative overflow-hidden rounded-3xl h-80 shadow-lg">
                        {/* Image */}
                        <img 
                            src={img.src} 
                            alt={img.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <h3 className="text-white text-xl font-bold">{img.title}</h3>
                            <p className="text-purple-200 text-sm">{img.desc}</p>
                            <button className="mt-3 w-max bg-white text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-purple-500 hover:text-white transition">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;