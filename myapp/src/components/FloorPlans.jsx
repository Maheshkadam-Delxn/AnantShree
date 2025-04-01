"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Download, Square, Maximize, Home } from 'lucide-react';

const FloorPlans = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('elegance');
  
  // Floor plan configuration data
  const floorPlans = {
    elegance: {
      title: "Elegance",
      type: "2 BHK",
      carpetArea: "700.00 sq.ft.",
      superArea: "700.00 sq.ft.",
      price: "₹95L onwards",
      image: "/img/interior.jpg",
      dimensions: [
        { room: "Master Bedroom", size: "12'3 x 10'0" },
        { room: "Second Bedroom", size: "10'6 x 12'0" },
        { room: "Living & Dining", size: "14' x 10'5" },
        { room: "Kitchen", size: "14'8 x 8'2" },
        { room: "Balcony", size: "4'4 x 10'5" },
        { room: "Toilet", size: "7'0 x 4'5" },
      ]
    },
    royale: {
      title: "Royale",
      type: "2 BHK",
      carpetArea: "704.00 sq.ft.",
      superArea: "704.00 sq.ft.",
      price: "₹1.45Cr onwards",
      image: "/img/interiorr.jpg",
      dimensions: [
        { room: "Master Bedroom", size: "12'3 x 10'0" },
        { room: "Second Bedroom", size: "10'6 x 12'0" },
        { room: "Living & Dining", size: "14' x 10'5" },
        { room: "Kitchen", size: "14'8 x 8'2" },
        { room: "Balcony", size: "4'4 x 10'5" },
        { room: "Toilet", size: "7'0 x 4'5" },
      ]
    },
    grande: {
      title: "Grande",
      type: "2 BHK",
      carpetArea: "751.00 sq.ft.",
      superArea: "751.00 sq.ft.",
      price: "₹1.45Cr onwards",
      image: "/img/interiorr.jpg",
      dimensions: [
        { room: "Master Bedroom", size: "12'3 x 10'0" },
        { room: "Second Bedroom", size: "10'6 x 12'0" },
        { room: "Living & Dining", size: "14' x 10'5" },
        { room: "Kitchen", size: "14'8 x 8'2" },
        { room: "Balcony", size: "4'4 x 10'5" },
        { room: "Toilet", size: "7'0 x 4'5" },
      ]
    },
    majestic: {
      title: "Majestic",
      type: "3 BHK",
      carpetArea: "865.00 sq.ft.",
      superArea: "865.00 sq.ft.",
      price: "₹1.45Cr onwards",
      image: "/img/interiorr.jpg",
      dimensions: [
        { room: "Master Bedroom", size: "14'0 x 10'6" },
        { room: "Second Bedroom", size: "10'6 x 11'5" },
        { room: "Living & Dining", size: "14'10 x 10'5" },
        { room: "Kitchen", size: "15'3 x 8'2" },
        { room: "Balcony", size: "4'4 x 10'5" },
        { room: "Toilet", size: "7'0 x 4'5" },
      ]
    },
  
  };

  // Tabs configuration
  const tabs = [
    { id: 'elegance', label: 'Elegance', type: '2 BHK' },
    { id: 'royale', label: 'Royale', type: '2 BHK' },
    { id: 'grande', label: 'Grande', type: '2 BHK' },
    { id: 'majestic', label: 'Majestic', type: '3 BHK' },
  ];

  return (
    <section name="floorplan" className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Designed for Modern Living</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
            Floor Plans
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Thoughtfully designed layouts that maximize space utilization while ensuring comfort and elegance.
            Choose from our premium 2 BHK and 3 BHK configurations.
          </p>
        </div>
        
        {/* Floor Plan Tabs */}
        <div className="mb-12 flex flex-wrap justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex flex-col items-center px-8 py-4 transition-all duration-300 relative mx-2 mb-4
                ${activeTab === tab.id 
                  ? 'text-[#0a3a5a]' 
                  : 'text-gray-400 hover:text-gray-600'}
              `}
            >
              <span className="text-sm text-[#d4af37] mb-1">{tab.type}</span>
              <span className="font-medium text-current">{tab.label}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4af37]"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Active Floor Plan Display */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Floor Plan Image - Takes up 3/5 of the space on desktop */}
            <div className="lg:col-span-3 relative min-h-[400px] lg:min-h-[600px] bg-gray-50">
              {/* Using the image from floorPlans data */}
              <div className="relative w-full h-full">
                <Image 
                  src={floorPlans[activeTab].image}
                  alt={`${floorPlans[activeTab].title} Floor Plan`}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
              
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a3a5a] to-transparent text-white p-8 pt-16">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-light">{floorPlans[activeTab].title}</h3>
                    <p className="text-white/80">{floorPlans[activeTab].type} Premium Configuration</p>
                  </div>
                  <div className="bg-[#d4af37] text-[#0a3a5a] text-sm font-bold px-4 py-2 rounded">
                    {floorPlans[activeTab].price}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floor Plan Details - Takes up 2/5 of the space on desktop */}
            <div className="lg:col-span-2 p-8">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#0a3a5a] mb-4">Area Specifications</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center text-[#d4af37] mb-1">
                      <Square size={16} className="mr-2" />
                      <span className="text-xs uppercase font-medium">Carpet Area</span>
                    </div>
                    <p className="text-xl font-medium text-[#0a3a5a]">{floorPlans[activeTab].carpetArea}</p>
                  </div>
                  
                  <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                    <div className="flex items-center text-[#d4af37] mb-1">
                      <Maximize size={16} className="mr-2" />
                      <span className="text-xs uppercase font-medium">Super Area</span>
                    </div>
                    <p className="text-xl font-medium text-[#0a3a5a]">{floorPlans[activeTab].superArea}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#0a3a5a] mb-4">Room Dimensions</h3>
                
                <div className="space-y-3 max-h-64 overflow-y-auto pr-4 custom-scrollbar">
                  {floorPlans[activeTab].dimensions.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700">{item.room}</span>
                      <span className="text-[#0a3a5a] font-medium">{item.size}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* <div className="mt-8">
                <a
                  href="#download-floorplan"
                  className="inline-flex items-center bg-[#0a3a5a] text-white px-6 py-3 rounded-lg hover:bg-[#0a3a5a]/90 transition-colors duration-300"
                >
                  <Download size={18} className="mr-2" />
                  <span>Download PDF</span>
                </a>
                
                <a
                  href="#schedule-visit"
                  className="inline-flex items-center ml-4 border border-[#0a3a5a] text-[#0a3a5a] px-6 py-3 rounded-lg hover:bg-[#0a3a5a]/5 transition-colors duration-300"
                >
                  <Home size={18} className="mr-2" />
                  <span>Schedule Visit</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
        
        {/* Key Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Spacious Balconies", description: "Enjoy panoramic views from generously sized private balconies" },
            { title: "Premium Finishes", description: "Imported marble flooring, modular kitchen and premium sanitary ware" },
            { title: "Optimal Ventilation", description: "Designed for maximum natural light and cross-ventilation" }
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
      </div>
      
      {/* Custom CSS for scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default FloorPlans;