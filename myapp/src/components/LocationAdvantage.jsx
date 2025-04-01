"use client"
import React, { useState } from 'react';
import { MapPin, Clock, School, Hospital, Film, Dumbbell, ChevronRight } from 'lucide-react';

const LocationAdvantage = () => {
  const [activeTab, setActiveTab] = useState('education');

  // Key landmarks with distances
  const keyLandmarks = [
    { name: "Vanaz Metro Station", distance: "1.2 km", time: "5 min" },
    { name: "Sahyadri Hospital", distance: "2.5 km", time: "8 min" },
    { name: "Kothrud IT Park", distance: "3.2 km", time: "10 min" },
    { name: "Chandni Chowk", distance: "4.1 km", time: "12 min" },
    { name: "Pune University", distance: "5.5 km", time: "15 min" },
    { name: "Hinjewadi IT Hub", distance: "12 km", time: "25 min" }
  ];

  // Neighborhood amenities
  const amenities = {
    education: [
      { name: "MIT School", distance: "1.5 km" },
      { name: "Pune University", distance: "5.5 km" },
      { name: "SNDT Women's University", distance: "3.2 km" },
      { name: "Symbiosis College", distance: "4.7 km" }
    ],
    healthcare: [
      { name: "Sahyadri Hospital", distance: "2.5 km" },
      { name: "Deenanath Mangeshkar Hospital", distance: "6.2 km" },
      { name: "Ruby Hall Clinic", distance: "7.5 km" },
      { name: "Lokmanya Hospital", distance: "3.1 km" }
    ],
    entertainment: [
      { name: "Westend Mall", distance: "4.3 km" },
      { name: "PVR Cinemas", distance: "5.2 km" },
      { name: "Panchshil Tech Park", distance: "6.0 km" },
      { name: "Amanora Town Center", distance: "8.5 km" }
    ],
    recreation: [
      { name: "Katraj Lake", distance: "7.2 km" },
      { name: "Pashan Lake", distance: "5.9 km" },
      { name: "Law College Hill", distance: "4.8 km" },
      { name: "Sinhagad Fort", distance: "14 km" }
    ]
  };

  // Reasons to choose Lokmanya Colony
  const reasonsToChoose = [
    "Prime location in the heart of Kothrud",
    "Excellent connectivity to major IT parks",
    "Reputed educational institutions nearby",
    "Well-developed social infrastructure",
    "Safe and established residential neighborhood",
    "Proximity to healthcare facilities"
  ];

  // Tab configuration
  const tabs = [
    { id: 'education', icon: <School size={18} />, label: 'Education' },
    { id: 'healthcare', icon: <Hospital size={18} />, label: 'Healthcare' },
    { id: 'entertainment', icon: <Film size={18} />, label: 'Entertainment' },
    { id: 'recreation', icon: <Dumbbell size={18} />, label: 'Recreation' }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Strategic Location</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
            Location Advantage
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Situated in the prestigious Lokmanya Colony of Kothrud, our project offers 
            unparalleled connectivity and access to Pune's finest amenities.
          </p>
        </div>

        {/* Map and Key Distances */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Interactive Map */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg h-96 bg-gray-100 relative">
            {/* Replace this div with your actual map integration */}
            <div className="w-full h-full bg-[#f5f7fa] flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={48} className="text-[#d4af37] mx-auto mb-4" />
                <p className="text-[#0a3a5a] font-medium">Interactive Map</p>
                <p className="text-sm text-gray-500 mt-2">Google Maps integration would be placed here</p>
              </div>
            </div>
            
            {/* Map Overlay */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
              <h3 className="font-medium text-[#0a3a5a] text-sm mb-2">Lokmanya Colony, Kothrud</h3>
              <p className="text-xs text-gray-500">Pune, Maharashtra 411038</p>
            </div>
          </div>

          {/* Key Landmarks */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 h-full">
              <h3 className="text-xl font-medium text-[#0a3a5a] mb-6 pb-2 border-b border-gray-100">
                Key Distances
              </h3>
              
              <div className="space-y-4">
                {keyLandmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-b-0">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-[#d4af37] mr-3" />
                      <span className="text-gray-700">{landmark.name}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-[#0a3a5a] font-medium mr-2">{landmark.distance}</span>
                      <Clock size={14} className="text-gray-400 mr-1" />
                      <span className="text-gray-400">{landmark.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Lokmanya Colony */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 className="text-2xl font-light text-[#0a3a5a] mb-8 inline-block relative">
              Why Lokmanya Colony?
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#d4af37]"></div>
            </h3>
            
            <ul className="space-y-4">
              {reasonsToChoose.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight size={18} className="text-[#d4af37] mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="rounded-lg overflow-hidden h-64 lg:h-auto relative">
            {/* Replace with your actual neighborhood image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a3a5a]/80 to-[#0a3a5a]/50"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-12">
              <h3 className="text-white text-2xl font-light mb-4">A neighborhood that <br />offers everything</h3>
              <p className="text-white/80 max-w-md">
                From world-class education to premium healthcare, entertainment options to recreational spaces - 
                everything is just minutes away.
              </p>
            </div>
          </div>
        </div>

        {/* Neighborhood Amenities */}
        <div>
          <h3 className="text-2xl font-light text-[#0a3a5a] mb-10 text-center">
            Neighborhood Amenities
          </h3>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-4 transition-colors duration-200 ${
                  activeTab === tab.id 
                    ? 'text-[#d4af37] border-b-2 border-[#d4af37]' 
                    : 'text-gray-500 hover:text-[#0a3a5a]'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          
          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities[activeTab].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-50 transition-all duration-300 hover:shadow-md"
              >
                <h4 className="font-medium text-[#0a3a5a] mb-2">{item.name}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin size={14} className="mr-1 text-[#d4af37]" />
                  <span>{item.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationAdvantage;