"use client"
import React from 'react';
import { Award, Users, Building, Calendar, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
const AboutKherGroup = () => {
  // Group companies data
  const groupCompanies = [
    { id: 1, name: "Kher Realty", logo: "/images/logos/kher-realty.png" },
    { id: 2, name: "Kher Constructions", logo: "/images/logos/kher-constructions.png" },
    { id: 3, name: "Kher Hospitality", logo: "/images/logos/kher-hospitality.png" },
    { id: 4, name: "Kher Ventures", logo: "/images/logos/kher-ventures.png" },
    { id: 5, name: "Kher Foundation", logo: "/images/logos/kher-foundation.png" }
  ];

  // Achievements data
  const achievements = [
    { year: "2023", title: "Developer of the Year Award", description: "Recognized for excellence in premium residential projects" },
    { year: "2021", title: "Green Building Certification", description: "Awarded for sustainable construction practices across all projects" },
    { year: "2019", title: "Customer Satisfaction Excellence", description: "Highest rated developer for customer service and satisfaction" },
    { year: "2017", title: "Urban Design Innovation Award", description: "For pioneering space-efficient luxury living concepts" },
    { year: "2015", title: "Architectural Excellence", description: "Recognition for distinctive design philosophy and execution" }
  ];

  // Collaboration partners
  const partners = [
    { category: "Architects", count: "25+" },
    { category: "Interior Designers", count: "40+" },
    { category: "Technology Partners", count: "15+" },
    { category: "Material Suppliers", count: "100+" }
  ];

  return (
    <section name="aboutkg" className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Our Journey of Excellence</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
            About Kher Group
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            For over three decades, Kher Group has been redefining premium living spaces 
            through innovative design, sustainable practices, and unwavering commitment to quality.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-light text-[#0a3a5a] mb-6">Our Vision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Kher Group, we envision creating living spaces that harmoniously blend luxury, functionality, 
              and sustainability. Our developments are designed to enrich lives while respecting the 
              environment and community around us.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From conceptualization to completion, every project reflects our dedication to 
              craftsmanship, attention to detail, and innovative solutions that address the evolving 
              needs of modern homeowners.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#0a3a5a]/5 flex items-center justify-center mr-4">
                  <Calendar size={20} className="text-[#d4af37]" />
                </div>
                <div>
                  <span className="block text-2xl font-medium text-[#0a3a5a]">1989</span>
                  <span className="text-gray-500 text-sm">Established</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#0a3a5a]/5 flex items-center justify-center mr-4">
                  <Building size={20} className="text-[#d4af37]" />
                </div>
                <div>
                  <span className="block text-2xl font-medium text-[#0a3a5a]">120+</span>
                  <span className="text-gray-500 text-sm">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[400px] bg-gray-100 rounded-xl overflow-hidden">
  {/* Using Next.js Image component */}
  <Image
    src="/main/logo..svg" // Use your actual headquarters image path here
    alt="Kher Group"
    layout="fill"
    objectFit="contain"
    priority
  />
</div>
        </div>

        {/* Collaborating for Excellence Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Together We Build Better</span>
            <h3 className="text-3xl font-light text-[#0a3a5a] mt-3 mb-6">Collaborating for Excellence</h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
            <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
              Our success is built on strategic partnerships with industry leaders, craftsmen, and specialists 
              who share our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-[#0a3a5a] text-white p-8 flex flex-col justify-center">
                  <Users size={36} className="text-[#d4af37] mb-4" />
                  <h4 className="text-xl font-light mb-2">Our Collaborative Network</h4>
                  <p className="text-white/80 text-sm">
                    A diverse ecosystem of specialists working together to create exceptional living spaces
                  </p>
                </div>
                <div className="md:col-span-3 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {partners.map((partner, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg p-4">
                        <p className="text-2xl font-medium text-[#d4af37]">{partner.count}</p>
                        <p className="text-[#0a3a5a] text-sm">{partner.category}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h4 className="text-xl font-medium text-[#0a3a5a] mb-6">Our Collaborative Approach</h4>
                
                {[
                  { title: "Design Thinking", description: "Engaging architects and designers from concept to execution" },
                  { title: "Quality Assurance", description: "Rigorous standards upheld through expert partnerships" },
                  { title: "Innovation Integration", description: "Collaborating with technology leaders for smart living solutions" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start mb-6 last:mb-0">
                    <div className="w-8 h-8 rounded-full bg-[#0a3a5a]/5 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <ArrowRight size={14} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <h5 className="font-medium text-[#0a3a5a] mb-1">{item.title}</h5>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legacy and Achievements */}
     
        <div className="mb-24 px-4 sm:px-6">
      <div className="text-center mb-16">
        <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Our Proud Journey</span>
        <h3 className="text-3xl font-light text-[#0a3a5a] mt-3 mb-6">Legacy and Achievements</h3>
        <div className="w-20 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
      </div>
      
      <div className="relative">
        {/* Timeline line - hidden on mobile, visible on md screens and up */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#0a3a5a] to-[#d4af37]/30"></div>
        
        {/* Timeline line - visible only on mobile, positioned on left side */}
        <div className="md:hidden absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#0a3a5a] to-[#d4af37]/30"></div>
        
        {/* Achievement items */}
        <div className="space-y-16 relative">
          {achievements.map((achievement, index) => (
            <div key={index} className={`flex flex-col md:items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Content section */}
              <div className={`
                w-full pl-12 md:pl-0 
                md:w-1/2 
                ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}
              `}>
                <span className="text-sm text-[#d4af37] font-medium">{achievement.year}</span>
                <h4 className="text-xl font-medium text-[#0a3a5a] mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
              
              {/* Timeline dot for desktop */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-[#d4af37] items-center justify-center z-10">
                <Award size={16} className="text-white" />
              </div>
              
              {/* Timeline dot for mobile */}
              <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-8 h-8 rounded-full border-3 border-white bg-[#d4af37] flex items-center justify-center z-10">
                <Award size={12} className="text-white" />
              </div>
              
              {/* Empty div for desktop layout */}
              <div className="hidden md:block w-full md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
        

        {/* Group Companies Logos */}
        <div>
          <div className="text-center mb-16">
            <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Our Family of Companies</span>
            <h3 className="text-3xl font-light text-[#0a3a5a] mt-3 mb-6">Group Companies</h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {groupCompanies.map((company) => (
              <div key={company.id} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300 h-32 border border-gray-50">
                {/* This would be your actual Image component */}
                <div className="w-16 h-16 bg-[#f5f7f9] rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-0.5 bg-[#d4af37]"></div>
                </div>
                <p className="text-[#0a3a5a] font-medium text-center">{company.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-24 bg-gradient-to-r from-[#0a3a5a] to-[#0a3a5a]/90 rounded-xl overflow-hidden">
          <div className="px-8 py-12 text-center">
            <h3 className="text-2xl font-light text-white mb-4">Interested in partnering with us?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              We're always looking for collaborators who share our vision and passion for excellence.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-[#d4af37] text-[#0a3a5a] px-8 py-4 rounded-lg hover:bg-[#d4af37]/90 transition-colors duration-300 font-medium"
            >
              <span>Connect With Us</span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutKherGroup;