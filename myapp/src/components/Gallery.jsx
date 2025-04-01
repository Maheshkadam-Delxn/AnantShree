"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Square, Maximize2, Minimize2 } from 'lucide-react';

const GallerySection = () => {
  // State for active category and slide
  const [activeCategory, setActiveCategory] = useState('living');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Gallery categories configuration
  const categories = [
    { id: 'living', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'workspace', label: 'Workspace' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'common', label: 'Common Areas' }
  ];
  
  // Gallery images configuration (placeholder data)
  const galleryImages = {
    living: [
      { url: "/api/placeholder/1200/800", title: "Spacious Living Room with Floor-to-ceiling Windows" },
      { url: "/api/placeholder/1200/800", title: "Elegant Living Space with Premium Finishes" },
      { url: "/api/placeholder/1200/800", title: "Modern Living Area with Designer Furniture" }
    ],
    bedroom: [
      { url: "/api/placeholder/1200/800", title: "Luxurious Master Bedroom with Walk-in Closet" },
      { url: "/api/placeholder/1200/800", title: "Serene Guest Bedroom with Natural Lighting" },
      { url: "/api/placeholder/1200/800", title: "Cozy Bedroom with Premium Wood Flooring" }
    ],
    kitchen: [
      { url: "/api/placeholder/1200/800", title: "Gourmet Kitchen with Premium Appliances" },
      { url: "/api/placeholder/1200/800", title: "Modular Kitchen with Elegant Stone Countertops" },
      { url: "/api/placeholder/1200/800", title: "Open-concept Kitchen with Breakfast Bar" }
    ],
    workspace: [
      { url: "/api/placeholder/1200/800", title: "Dedicated Home Office Space with Built-in Storage" },
      { url: "/api/placeholder/1200/800", title: "Functional Workspace with High-speed Connectivity" },
      { url: "/api/placeholder/1200/800", title: "Ergonomic Work Area with Natural Lighting" }
    ],
    exterior: [
      { url: "/api/placeholder/1200/800", title: "Modern Building Façade with Contemporary Architecture" },
      { url: "/api/placeholder/1200/800", title: "Stunning Exterior with Landscaped Gardens" },
      { url: "/api/placeholder/1200/800", title: "Grand Entrance with Water Features" }
    ],
    common: [
      { url: "/api/placeholder/1200/800", title: "Luxurious Lobby with Concierge Services" },
      { url: "/api/placeholder/1200/800", title: "State-of-the-art Fitness Center" },
      { url: "/api/placeholder/1200/800", title: "Rooftop Terrace with Panoramic Views" }
    ]
  };

  // Reset current slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeCategory]);

  // Handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === galleryImages[activeCategory].length - 1 ? 0 : prev + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? galleryImages[activeCategory].length - 1 : prev - 1
    );
  };

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <section className={`py-24 px-6 bg-gradient-to-br from-gray-50 to-white font-['Montserrat',sans-serif] ${isFullscreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center' : ''}`}>
      <div className={`${isFullscreen ? 'w-full h-full' : 'max-w-7xl mx-auto'}`}>
        
        {/* Section Header - Hide in fullscreen mode */}
        {!isFullscreen && (
          <div className="mb-16 text-center">
            <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Visual Tour</span>
            <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
              Project Gallery
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
            
            <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
              Experience the elegance and sophistication of our carefully crafted spaces,
              designed to provide the perfect balance of luxury and comfort.
            </p>
          </div>
        )}
        
        {/* Category Tabs - Hide in fullscreen mode */}
        {!isFullscreen && (
          <div className="mb-12 flex flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex flex-col items-center px-6 py-3 transition-all duration-300 relative mx-2 mb-4
                  ${activeCategory === category.id 
                    ? 'text-[#0a3a5a]' 
                    : 'text-gray-400 hover:text-gray-600'}
                `}
              >
                <span className="font-medium text-current">{category.label}</span>
                {activeCategory === category.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4af37]"></div>
                )}
              </button>
            ))}
          </div>
        )}
        
        {/* Gallery Slider */}
        <div className={`relative rounded-xl overflow-hidden ${isFullscreen ? 'h-full' : 'shadow-lg'}`}>
          {/* Main Image */}
          <div className="relative aspect-[16/9] bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              {/* This would be your actual Image component */}
              <div className="w-full h-full bg-[#f5f7f9] flex items-center justify-center">
                <div className="text-center">
                  <Square size={64} className="text-[#d4af37]/30 mx-auto mb-4" />
                  <p className="text-[#0a3a5a] font-medium">
                    {galleryImages[activeCategory][currentSlide].title}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-[#0a3a5a] hover:bg-white transition-colors duration-300 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 flex items-center justify-center text-[#0a3a5a] hover:bg-white transition-colors duration-300 z-10"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Fullscreen Toggle */}
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-[#0a3a5a] hover:bg-white transition-colors duration-300 z-10"
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
            
            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a3a5a] to-transparent text-white p-6 pt-16">
              <h3 className="text-xl font-light">{galleryImages[activeCategory][currentSlide].title}</h3>
              <p className="text-white/80">{categories.find(c => c.id === activeCategory).label}</p>
            </div>
          </div>
          
          {/* Thumbnails - Hide in fullscreen mode */}
          {!isFullscreen && (
            <div className="flex p-4 bg-white border-t border-gray-100 overflow-x-auto">
              {galleryImages[activeCategory].map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`
                    relative min-w-[100px] h-16 mx-2 cursor-pointer overflow-hidden rounded
                    ${currentSlide === index ? 'ring-2 ring-[#d4af37]' : 'opacity-60 hover:opacity-100'}
                    transition-all duration-300
                  `}
                >
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <Square size={24} className="text-[#d4af37]/30" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Image Counter and Fullscreen Controls */}
        <div className={`flex justify-between items-center mt-4 ${isFullscreen ? 'text-white px-4' : 'text-[#0a3a5a]'}`}>
          <div>
            <span className="font-medium">{currentSlide + 1}</span>
            <span className="mx-2">/</span>
            <span>{galleryImages[activeCategory].length}</span>
          </div>
          
          {isFullscreen && (
            <div className="space-x-4">
              <button 
                onClick={prevSlide}
                className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors text-white"
              >
                Previous
              </button>
              
              <button 
                onClick={nextSlide}
                className="px-4 py-2 bg-white/10 rounded hover:bg-white/20 transition-colors text-white"
              >
                Next
              </button>
              
              <button 
                onClick={toggleFullscreen}
                className="px-4 py-2 bg-[#d4af37] text-[#0a3a5a] rounded hover:bg-[#d4af37]/90 transition-colors font-medium"
              >
                Exit Fullscreen
              </button>
            </div>
          )}
        </div>
        
        {/* Additional Information - Hide in fullscreen mode */}
        {!isFullscreen && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Virtual Tour Available", description: "Experience our property from the comfort of your home with our immersive virtual tour" },
              { title: "Professional Photography", description: "All images showcase the actual finished interiors and exterior spaces" },
              { title: "Schedule a Visit", description: "Contact our sales team to arrange a personal tour of our model apartment" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#0a3a5a]/5 flex items-center justify-center mb-4">
                  <div className="w-6 h-0.5 bg-[#d4af37]"></div>
                </div>
                <h4 className="text-lg font-medium text-[#0a3a5a] mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;