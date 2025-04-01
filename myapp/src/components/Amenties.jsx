"use client"
import React, { useState } from 'react';
import { Shield, Droplets, TreePalm , Building, Camera, ArrowUp } from 'lucide-react';

const AmenitiesSection = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState('lifestyle');
  
  // Categories configuration
  const categories = [
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'security', label: 'Security' }
  ];
  
  // Amenities configuration
  const amenities = {
    lifestyle: [
      {
        icon: <Building size={24} />,
        title: "Spacious & Elegant Layouts",
        description: "Well-planned layouts with premium finishes ensuring comfort and luxury."
      },
      {
        icon: <Building size={24} />,
        title: "Grand Entrance Lobby",
        description: "Impressive double-height lobby with designer lighting, premium marble flooring, and professional concierge services."
      },
      {
        icon: <Building size={24} />,
        title: "Premium Fittings & Fixtures",
        description: "Ultra-modern fittings and fixtures for an elegant living experience."
      },
      {
        icon: <Building size={24} />,
        title: "Terrace Amenities",
        description: "Expansive rooftop terrace featuring panoramic city views, landscaped gardens, and entertainment areas for social gatherings."
      }
    ],
    sustainability: [
      {
        icon: <Droplets size={24} />,
        title: "Rainwater Harvesting",
        description: "State-of-the-art rainwater collection system that conserves water resources while reducing utility costs."
      },
      {
        icon: <TreePalm size={24} />,
        title: "Eco-Friendly Features",
        description: "Energy-efficient design with solar panels, LED lighting throughout common areas, and sustainable construction materials."
      }
    ],
    security: [
      {
        icon: <Camera size={24} />,
        title: "Worldclass Security",
        description: "Advanced 24/7 surveillance with CCTV monitoring, secure access controls, and smart video door phones for complete peace of mind."
      },
      {
        icon: <Shield size={24} />,
        title: "Gated Community",
        description: "Secure perimeter with professional security personnel and controlled entry points for residents and visitors."
      }
    ]
  };

  return (
    <section name="amenities" className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Luxury & Convenience</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
            Project Amenities
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Discover a world of luxury and convenience designed to elevate your everyday living experience.
            Every detail is crafted to ensure comfort, security, and sustainability.
          </p>
        </div>
        
        {/* Amenities Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                flex flex-col items-center px-8 py-4 transition-all duration-300 relative mx-2 mb-4
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
        
        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities[activeCategory].map((amenity, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-[#0a3a5a]/5 flex items-center justify-center mb-6 text-[#d4af37]">
                  {amenity.icon}
                </div>
                
                <h3 className="text-xl font-medium text-[#0a3a5a] mb-3">{amenity.title}</h3>
                <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37]"></div>
            </div>
          ))}
        </div>
        
        {/* Amenities Highlight */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative min-h-[400px] bg-gray-50">
              <div className="absolute inset-0 flex items-center justify-center bg-[#0a3a5a]">
                <div className="text-center p-8">
                  <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Experience Excellence</span>
                  <h3 className="text-3xl font-light text-white mt-3 mb-6">Luxury Living Redefined</h3>
                  <p className="text-white/80 max-w-md mx-auto leading-relaxed">
                    Every amenity has been thoughtfully designed to provide an unparalleled living experience.
                    Immerse yourself in comfort, convenience, and elegance.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Details Side */}
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-light text-[#0a3a5a] mb-6">Comprehensive Amenities Package</h3>
              
              <div className="space-y-6">
                {Object.keys(amenities).flatMap(category => 
                  amenities[category].map((amenity, index) => (
                    <div key={`${category}-${index}`} className="flex items-start">
                      <div className="mr-4 mt-1 text-[#d4af37]">
                        <div className="w-5 h-0.5 bg-[#d4af37]"></div>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#0a3a5a]">{amenity.title}</h4>
                      </div>
                    </div>
                  ))
                ).slice(0, 6)}
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;