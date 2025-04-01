import React from 'react';
import { Clock, Package, Monitor, Shield } from 'lucide-react';

const ProjectHighlights = () => {
  const highlightItems = [
    {
      icon: <Clock size={72} strokeWidth={1.5} className="text-[#0a3a5a]" />,
      value: "30+",
      label: "Years of Experience",
      description: "Decades of architectural excellence and innovation"
    },
    {
      icon: <Package size={72} strokeWidth={1.5} className="text-[#0a3a5a]" />,
      value: "30+",
      label: "Delivered Projects",
      description: "Successful projects completed with precision and care"
    },
    {
      icon: <Monitor size={72} strokeWidth={1.5} className="text-[#0a3a5a]" />,
      value: "12L+",
      label: "Sq. ft. Construction",
      description: "Extensive portfolio of meticulously designed spaces"
    },
    {
      icon: <Shield size={72} strokeWidth={1.5} className="text-[#0a3a5a]" />,
      value: "100%",
      label: "Earthquake Resistant",
      description: "Safety and durability built into every structure"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Our Achievements</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
            Project Highlights
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Our commitment to excellence is reflected in our track record of delivering 
            exceptional projects that stand the test of time. Each milestone represents our 
            dedication to quality and innovation.
          </p>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37] group-hover:h-2 group-hover:w-full group-hover:top-0 transition-all duration-500"></div>
              
              <div className="mb-6 flex justify-center relative z-10">
                <div className="rounded-full p-4 bg-[#0a3a5a]/5 transition-all duration-300 group-hover:bg-[#0a3a5a]/10">
                  {item.icon}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-4xl mb-2 text-[#0a3a5a] font-semibold transition-all duration-300 group-hover:text-[#0a3a5a]">{item.value}</h3>
                <p className="text-gray-700 font-medium tracking-wider uppercase mb-3">{item.label}</p>
                <p className="text-gray-600 text-sm opacity-0 max-h-0 transition-all duration-500 group-hover:opacity-100 group-hover:max-h-20">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Accent Bar */}
        <div className="mt-20 flex justify-center">
          <div className="bg-white/90 backdrop-blur-md py-6 px-10 rounded-lg shadow-xl border-t border-[#d4af37]/20 inline-block">
            <p className="text-[#0a3a5a] text-lg">Excellence in design. Precision in execution. <span className="text-[#d4af37]">Unparalleled results.</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;