"use client";
import React, { useState } from "react";
import { MapPin, Clock, School, Hospital, Film, Dumbbell, ChevronRight } from "lucide-react";

const LocationAdvantage = () => {
  const [activeTab, setActiveTab] = useState("education");

  const keyLandmarks = [
    { name: "Vanaz Metro Station", distance: "1.2 km", time: "5 min" },
    { name: "Sahyadri Hospital", distance: "2.5 km", time: "8 min" },
    { name: "Kothrud IT Park", distance: "3.2 km", time: "10 min" },
    { name: "Chandni Chowk", distance: "4.1 km", time: "12 min" },
    { name: "Pune University", distance: "5.5 km", time: "15 min" },
    { name: "Hinjewadi IT Hub", distance: "12 km", time: "25 min" }
  ];

  return (
    <section name="location" className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Strategic Location</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">Location Advantage</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Situated in the prestigious Lokmanya Colony of Kothrud, our project offers unparalleled connectivity and access to Pune's finest amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg h-96 bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4506275423846!2d73.79998929798604!3d18.508527635154806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfb0ced18f89%3A0x48248ca210c03fe1!2sLokmanya%20colony%20and%20Open%20Library!5e0!3m2!1sen!2sin!4v1743500141638!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6 h-full">
            <h3 className="text-xl font-medium text-[#0a3a5a] mb-6 pb-2 border-b border-gray-100">Key Distances</h3>
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
    </section>
  );
};

export default LocationAdvantage;
