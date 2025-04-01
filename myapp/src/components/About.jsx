import React from 'react';
import Image from 'next/image';

const AboutProject = () => {
  // Sample image paths - replace with your actual images
  const images = [
    '/images/project-image-1.jpg',
    '/images/project-image-2.jpg',
    '/images/project-image-3.jpg',
    '/images/project-image-4.jpg',
    '/images/project-image-5.jpg',
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">About the Project</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
            Where Timeless Design Meets Modern Living
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Our project seamlessly blends architectural excellence with contemporary comfort, 
            creating living spaces that honor tradition while embracing innovation. 
            Each residence is thoughtfully designed to provide an unparalleled living experience 
            that stands the test of time.
          </p>
        </div>
        
        {/* Image Collage - Modern Asymmetrical Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-8 h-80 md:h-96 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.01]">
            <Image 
              src={images[0]} 
              alt="Project architectural highlight" 
              layout="fill" 
              objectFit="cover"
              className="transition-all duration-700 hover:filter hover:brightness-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70"></div>
          </div>
          
          <div className="col-span-6 md:col-span-4 h-60 md:h-96 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.01]">
            <Image 
              src={images[1]} 
              alt="Interior design showcase" 
              layout="fill" 
              objectFit="cover"
              className="transition-all duration-700 hover:filter hover:brightness-105"
            />
          </div>
          
          <div className="col-span-6 md:col-span-4 h-60 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.01]">
            <Image 
              src={images[2]} 
              alt="Modern living space" 
              layout="fill" 
              objectFit="cover"
              className="transition-all duration-700 hover:filter hover:brightness-105"
            />
          </div>
          
          <div className="col-span-12 md:col-span-8 h-60 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-[1.01]">
            <Image 
              src={images[3]} 
              alt="Luxury amenities" 
              layout="fill" 
              objectFit="cover"
              className="transition-all duration-700 hover:filter hover:brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-70"></div>
          </div>
          
          {/* Overlay Text */}
          <div className="col-span-12 -mt-24 md:-mt-32 mx-auto z-10 text-center px-6">
            <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-xl border-t border-[#d4af37]/20 inline-block">
              <h3 className="text-xl md:text-2xl font-medium text-[#0a3a5a] mb-2">Elegance in Every Detail</h3>
              <p className="text-gray-600">Discover a harmonious blend of luxury, comfort, and sustainable design</p>
            </div>
          </div>
        </div>
        
        {/* Additional Features List */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Sustainable Architecture', 'Premium Finishes', 'Smart Home Technology'].map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0a3a5a]/5 mb-4">
                <div className="w-6 h-0.5 bg-[#d4af37]"></div>
              </div>
              <h4 className="text-lg font-medium text-[#0a3a5a] mb-2">{feature}</h4>
              <p className="text-gray-600 text-sm">
                Our commitment to excellence ensures that every aspect of your living experience is thoughtfully crafted.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProject;