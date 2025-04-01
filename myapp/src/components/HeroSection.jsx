'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link1 from 'next/link';
import { ArrowRight, MapPin, Home } from 'lucide-react';
import { Link } from "react-scroll";

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
    <section className="relative bg-[#1C1B29] text-white py-8 md:py-16 px-4 md:px-6 w-full min-h-screen flex items-center justify-center mt-12">
      <div className="w-full max-w-6xl mx-auto text-center p-4 md:p-12">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <h2 className="text-2xl md:text-3xl font-light order-2 md:order-1 mt-6 md:mt-0">
            <span className="text-yellow-500">An Exclusive Address in</span> <br />
            the Heart of Kothrud
          </h2>
          <Image
            src={"/main/logo..svg"}
            width={1920}
            height={1080}
            className="h-16 md:h-24 w-auto order-1 md:order-2"
            alt="Logo"
          />
        </div>
        
        <div className="mt-8 flex flex-col items-center">
          <Image 
            width={1920} 
            height={1080} 
            src="/logo2.svg" 
            alt="Anantshree Logo" 
            className="w-1/2 md:w-1/4 mb-2" 
          />
          <p className="text-base md:text-lg mt-3">
            Premium 2 & 3 BHK <br />
            <span className="text-yellow-500">Residences in Kothrud</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="floorplan" smooth={true}>
            <button className="cursor-pointer group px-6 md:px-8 py-3 md:py-4 bg-[#d4af37] hover:bg-[#c9a431] text-white rounded-md font-medium transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center">
              <span>View Floor Plans</span>
              <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a href="/document.pdf" download="document.pdf">
            <button className="group px-6 md:px-8 py-3 md:py-4 border-2 border-[#d4af37] text-white hover:bg-white/5 rounded-md font-medium transition-all duration-300 shadow-lg w-full sm:w-auto flex items-center justify-center">
              <span>Download Brochure</span>
              <ArrowRight size={18} className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
            </button>
          </a>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-6">
          {[
            { icon: <Home size={18} />, label: "Modern Architecture" },
            { icon: <MapPin size={18} />, label: "Prime Location" },
            { icon: <Home size={18} />, label: "Smart Homes" }
          ].map((item, index) => (
            <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full">
              <span className="text-[#d4af37] mr-2">{item.icon}</span>
              <span className="text-white text-xs md:text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;