"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Snowflake, Dumbbell, Bus, Smartphone, Paintbrush, DoorOpen, LayoutGrid, ChefHat, Droplets, Zap, Shield } from 'lucide-react';

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
        'RCC framed structure designed for seismic zone compliance',
        'External walls with premium quality bricks and thermal insulation',
        'Internal walls with AAC blocks for better sound insulation',
        'Waterproofing treatment in wet areas and terraces',
        'Weather-resistant exterior paint for lasting durability'
      ]
    },
    {
      id: 'doors',
      title: 'Doors & Windows',
      icon: <DoorOpen size={22} />,
      details: [
        'Main door: Premium teak wood frame with designer veneer finish',
        'Internal doors: Engineered wood with laminate finish and quality hardware',
        'Windows: UPVC/aluminum frames with double glazed glass for sound insulation',
        'Balcony doors: Sliding UPVC/aluminum with toughened glass',
        'Premium quality architectural hardware from renowned brands'
      ]
    },
    {
      id: 'flooring',
      title: 'Flooring',
      icon: <LayoutGrid size={22} />,
      details: [
        'Living & Dining: Premium imported marble/vitrified tiles',
        'Bedrooms: Engineered wooden flooring/premium vitrified tiles',
        'Kitchen: Anti-skid vitrified tiles',
        'Bathrooms: Designer ceramic tiles',
        'Balconies: Weather-resistant ceramic tiles',
        'Staircase & lobbies: Premium marble flooring'
      ]
    },
    {
      id: 'kitchen',
      title: 'Kitchen',
      icon: <ChefHat size={22} />,
      details: [
        'Modular kitchen with premium countertops',
        'Designer ceramic tile dado up to 2 feet above counter',
        'Stainless steel single bowl sink with premium faucet',
        'Provision for water purifier, refrigerator, and microwave',
        'Adequate electrical points for kitchen appliances',
        'Premium quality CP fittings from leading brands'
      ]
    },
    {
      id: 'bathrooms',
      title: 'Bathrooms',
      icon: <Droplets size={22} />,
      details: [
        'Premium sanitary ware from leading brands',
        'CP fittings from renowned manufacturers',
        'Designer ceramic tile dado up to door height',
        'Concealed plumbing with premium quality CPVC/UPVC pipes',
        'Provision for geysers in all bathrooms',
        'Anti-skid flooring for safety',
        'Modern shower panels in master bathrooms'
      ]
    },
    {
      id: 'electrical',
      title: 'Electrical',
      icon: <Zap size={22} />,
      details: [
        'Concealed copper wiring with modular switches',
        'MCB distribution board with safety features',
        'Adequate light points, power points, and TV/telephone outlets',
        'Provision for air conditioners in all bedrooms and living area',
        'USB charging points in living area and master bedroom',
        '100% power backup for common areas and essential services',
        'Energy-efficient lighting in common areas'
      ]
    },
    {
      id: 'painting',
      title: 'Painting',
      icon: <Paintbrush size={22} />,
      details: [
        'Interior: Premium emulsion paint with smooth finish',
        'Exterior: Weather-resistant, high-quality exterior paint',
        'Doors and frames: Durable enamel paint/polish',
        'Textured paint in designated common areas',
        'Anti-fungal paint in bathrooms and kitchens',
        'Eco-friendly, low VOC paints for better indoor air quality'
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Shield size={22} />,
      details: [
        'CCTV surveillance at main entrance, lobbies, and common areas',
        'Video door phone for each apartment',
        'Multi-tier security with trained personnel',
        'Access-controlled main entrance',
        'Secure fire alarm system with smoke detectors',
        'Intercom facility connecting all apartments to main security',
        'Burglar alarm provision in each apartment'
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