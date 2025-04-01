'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Home } from 'lucide-react';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen font-['Montserrat',sans-serif]">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`w-full h-[120%] transition-transform duration-1000 ease-out ${scrolled ? 'scale-105' : 'scale-100'}`}>
          <Image
            src="/hero-background.jpg" // Replace with your actual image path
            alt="Premium Residences in Kothrud"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Rich Gradient Overlay with Subtle Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a5a]/80 via-[#0a3a5a]/70 to-[#0a3a5a]/90"></div>
        
        {/* Optional: Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern-overlay.png')] bg-repeat"></div>
      </div>
      
      {/* Subtle light beam animation */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute -inset-x-full top-1/4 bottom-1/2 -rotate-45 bg-gradient-to-r from-transparent via-white to-transparent animate-beam"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <div className="max-w-5xl">
          {/* Elegant Accent */}
          <div className="mb-6 flex justify-center items-center">
            <div className="w-12 h-0.5 bg-[#d4af37]"></div>
            <span className="mx-4 text-[#d4af37] uppercase tracking-widest text-sm font-medium">Luxury Living</span>
            <div className="w-12 h-0.5 bg-[#d4af37]"></div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Premium <span className="font-semibold">2 & 3 BHK</span> Residences
            <span className="block mt-2">in Kothrud</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light">
            An Exclusive Address in the Heart of Kothrud
          </p>
          
          {/* Location Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-10">
            <MapPin size={16} className="text-[#d4af37] mr-2" />
            <span className="text-white text-sm">Prime Location • Close to IT Hub • Modern Amenities</span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <Link href="/floor-plans">
              <button className="group px-8 py-4 bg-[#d4af37] hover:bg-[#c9a431] text-white rounded-md font-medium transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center">
                <span>View Floor Plans</span>
                <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/download-brochure">
              <button className="group px-8 py-4 border-2 border-[#d4af37] text-white hover:bg-white/5 rounded-md font-medium transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center">
                <span>Download Brochure</span>
                <ArrowRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
              </button>
            </Link>
          </div>
          
          {/* Property Features */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { icon: <Home size={18} />, label: "Modern Architecture" },
              { icon: <MapPin size={18} />, label: "Prime Location" },
              { icon: <Home size={18} />, label: "Smart Homes" }
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-[#d4af37] mr-2">{item.icon}</span>
                <span className="text-white text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-xs mb-2 tracking-wider">SCROLL DOWN</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-scroll-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;