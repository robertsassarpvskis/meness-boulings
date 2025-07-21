import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Header';
const GoldenGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery data
 const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1587731641243-14e5b79f3fc6', // Nebula
    category: 'space',
    title: 'Nebula Dreams',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7', // Starry Night Sky
    category: 'space',
    title: 'Starry Voyage',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1611382537084-8a420097bba7', // Alien Surface
    category: 'planets',
    title: 'Alien Landscape',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde', // Galactic Core
    category: 'space',
    title: 'Galactic Center',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', // Ice Planet
    category: 'planets',
    title: 'Frozen World',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1604079628040-94372f7da477', // Explosion / Supernova
    category: 'events',
    title: 'Stellar Birth',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1535930749574-1399327ce78f', // Asteroid field concept
    category: 'space',
    title: 'Danger Zone',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1616161615884-0efb9a12b712', // Lava Planet
    category: 'planets',
    title: 'Molten Realm',
  },
];


  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
        <Hero
        title="Mēness Boulings"
        highlight="Gallery"
        subtitle={
            "Mēness Boulings piedāvā izcilu boulinga pieredzi ar kosmisku atmosfēru.\n" +
            "Mēs esam vieta, kur draudzība, jautrība un sacensības satiekas.\n" +
            "Nāc un izbaudi neaizmirstamus mirkļus kopā ar ģimeni un draugiem!"
        }
        backgroundClass="header-1" 
        />
        <div className="min-h-screen bg-[#FED273] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2A1A3A] mb-4">
                <span className="text-[#8A5A44]">GOLDEN</span> COSMOS
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#8A5A44] to-transparent mx-auto rounded-full" />
            <p className="mt-6 text-lg text-[#2A1A3A]/80 max-w-3xl mx-auto">
                Explore stunning visual journeys through golden cosmic realms
            </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            >
            {['all', 'space', 'planets', 'events'].map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 cursor-pointer transform 
                        ${
                        activeCategory === category
                            ? 'bg-[#8A5A44] text-[#FED273] shadow-md scale-105'
                            : 'bg-[#FED273]/80 text-[#2A1A3A] hover:bg-[#FED273] hover:text-[#2A1A3A] hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-[#8A5A44]/50 border border-[#8A5A44]/30'
                        }`}
                    >
                    {category}
                </button>
            ))}
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
                <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-xl shadow-[#8A5A44]/20"
                onClick={() => setSelectedImage(item)}
                >
                {/* Image with overlay */}
                <div className="aspect-square relative">
                    <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A3A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-[#FED273] font-bold text-lg">{item.title}</h3>
                    <div className="h-0.5 w-8 bg-[#FED273] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FED273]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -rotate-45 -translate-x-full group-hover:translate-x-full" />
                </motion.div>
            ))}
            </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
            {selectedImage && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#2A1A3A]/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
            >
                <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
                >
                <button
                    className="absolute -top-12 right-0 text-[#FED273] hover:text-white transition-colors"
                    onClick={() => setSelectedImage(null)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <div className="bg-[#FED273]/10 backdrop-blur-md rounded-xl overflow-hidden border border-[#FED273]/30">
                    <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    <div className="p-6 bg-gradient-to-b from-[#8A5A44]/50 to-[#2A1A3A]/70">
                    <h3 className="text-2xl font-bold text-[#FED273] mb-2">{selectedImage.title}</h3>
                    <p className="text-[#FED273]/80">Category: <span className="capitalize text-[#FED273]">{selectedImage.category}</span></p>
                    </div>
                </div>
                </motion.div>
            </motion.div>
            )}
        </AnimatePresence>
        </div>
    </>
  );
};

export default GoldenGallery;