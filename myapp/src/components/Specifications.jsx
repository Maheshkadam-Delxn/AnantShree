"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp,Move,Package, Building2, Snowflake, Dumbbell, Bus, Smartphone, Paintbrush, DoorOpen, LayoutGrid, ChefHat, Droplets, Zap, Shield } from 'lucide-react';

const SpecificationsSection = () => {
  // State to track which accordion items are open
  const [openItems, setOpenItems] = useState({
    structure: true, // First item open by default
    doors: false,
    flooring: false,
    kitchen: false,
    bathrooms: false,
    electrical: false,
    painting: false,
    security: false
  });

  // Toggle accordion item
  const toggleItem = (key) => {
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Specifications content
  const specifications = [
    {
      id: 'structure',
      title: 'Structure & Masonry',
      icon: <Building2 size={22} />,
      details: [
        'Earthquake-resistant RCC framed structure',
        'External walls: 6” AAC blocks',
        'Internal walls: 4” AAC blocks',
        'Internal POP Gypsum plaster',
        'External sand-faced plaster'
      ]
    },
    {
      id: 'doors_windows',
      title: 'Doors & Windows',
      icon: <DoorOpen size={22} />,
      details: [
        'Main door: Elegant laminate finish fireproof flush doors',
        'Bathroom doors: Waterproof marine laminate finished doors',
        'Aluminum section windows with mosquito nets & safety grills'
      ]
    },
    {
      id: 'flooring',
      title: 'Flooring',
      icon: <LayoutGrid size={22} />,
      details: [
        '3x3 Marbonite finished tiles',
        'Balcony & terrace: Anti-skid tiles with skirting',
        'ISI standardized tiles from brands like Asian, Nitco, Johnson'
      ]
    },
    {
      id: 'kitchen',
      title: 'Kitchen',
      icon: <ChefHat size={22} />,
      details: [
        'Black granite platform with steel sink',
        'Electrical points for water purifier and exhaust fan'
      ]
    },
    {
      id: 'bathrooms',
      title: 'Bathrooms',
      icon: <Droplets size={22} />,
      details: [
        'Tiles from Asian, Johnson, Kajaria with exclusive color & design',
        'Jaqua, Kohler & similar high-quality CP fittings',
        'CPVC water supply lines & UPVC external drainage'
      ]
    },
    {
      id: 'electrical',
      title: 'Electrical',
      icon: <Zap size={22} />,
      details: [
        'Concealed copper wiring',
        'Adequate electrical points in all rooms',
        'Switches of Legrand make',
        'Electrical wires of Polycab, Finolex & similar brands',
        'TV & telephone connections in the living room & master bedroom',
        'AC provisions in all bedrooms'
      ]
    },
    {
      id: 'painting',
      title: 'Painting',
      icon: <Paintbrush size={22} />,
      details: [
        'External: Apex paint',
        'Internal: Royal emulsion paint'
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Shield size={22} />,
      details: [
        'Video door phone',
        'Access control system',
        'CCTV cameras for entire plot areas',
        'Security cabin with intercom connectivity to each flat'
      ]
    },
    {
      id: 'lift',
      title: 'Lift',
      icon: <Move size={22} />,
      details: [
        'Lifts from OTIS, OMEGA, KONE with power backup'
      ]
    },
    {
      id: 'ancillary',
      title: 'Ancillary Facilities',
      icon: <Package size={22} />,
      details: [
        'Nameplates for each flat',
        'Name board & postal boxes on ground floor',
        'Paper & milk baskets at the main entrance of each flat',
        'Decorative entrance lobby with adequate seating & lighting',
        'Provision for common gas pipeline',
        'Generator/battery backup for lifts & common lights',
        'Latest firefighting system',
        'Pedestrian gate with ramp & stairs',
        'Designer glass panel railings for all balconies',
        'Rainwater harvesting & vermiculture systems'
      ]
    }
  ];

  return (
    <section name="specs" className="py-24 px-6 bg-white font-['Montserrat',sans-serif]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Quality Assurance</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
            Premium Specifications
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Every element of your home is crafted with meticulous attention to detail,
            using premium materials and contemporary design principles.
          </p>
        </div>
        
        {/* Accordion */}
        <div className="space-y-4">
          {specifications.map((item) => (
            <div 
              key={item.id}
              className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0a3a5a]/5 flex items-center justify-center mr-4 text-[#d4af37]">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium text-[#0a3a5a]">{item.title}</h3>
                </div>
                
                <div className="text-[#d4af37]">
                  {openItems[item.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>
              
              {/* Accordion Content */}
              <div 
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openItems[item.id] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <ul className="space-y-3">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 mt-1.5 text-[#d4af37]">
                          <div className="w-3 h-0.5 bg-[#d4af37]"></div>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quality Assurance Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0a3a5a] to-[#0a3a5a]/90 rounded-xl shadow-lg overflow-hidden">
          <div className="p-10 text-center">
            <span className="text-[#d4af37] text-sm uppercase tracking-widest font-medium">Our Promise</span>
            <h3 className="text-3xl font-light text-white mt-3 mb-6">Quality Without Compromise</h3>
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              We adhere to the highest standards of construction and finish, ensuring that your home
              not only looks stunning but stands the test of time.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { label: "Quality Tested Materials", icon: <Dumbbell size={20} /> },
                { label: "10-Year Structural Warranty", icon: <Building2 size={20} /> },
                { label: "Smart Home Compatible", icon: <Smartphone size={20} /> },
                { label: "Energy Efficient Design", icon: <Snowflake size={20} /> }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 text-[#d4af37]">
                    {feature.icon}
                  </div>
                  <span className="text-white text-sm text-center">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <a
            href="#schedule-visit"
            className="inline-flex items-center bg-[#0a3a5a] text-white px-8 py-4 rounded-lg hover:bg-[#0a3a5a]/90 transition-colors duration-300"
          >
            <span>Schedule Site Visit</span>
          </a>
          
          <a
            href="#download-brochure"
            className="inline-flex items-center ml-4 border border-[#0a3a5a] text-[#0a3a5a] px-8 py-4 rounded-lg hover:bg-[#0a3a5a]/5 transition-colors duration-300"
          >
            <span>Download Brochure</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default SpecificationsSection;