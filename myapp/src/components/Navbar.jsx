'use client';
import logo from "../../public/main/logo..svg"
import React, { useState, useEffect } from 'react';
import Link1 from 'next/link';
import Image from 'next/image';
import { Link } from "react-scroll";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link1 href="/">
            <div className="cursor-pointer">
              <Image 
                src={logo} 
                alt="Kher Group + Anantshree" 
                width={1920} 
                height={1080} 
                className="h-12 w-auto"
                priority
              />
            </div>
          </Link1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="home" smooth={true} className="text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors">
            Home
          </Link>
          <Link to="about" smooth={true} className="text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors">
            About
          </Link>
          <Link to="amenities" smooth={true}  className="text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors">
            Amenities
          </Link>
          <Link to="specs" smooth={true} className="text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors">
            Specifications
          </Link>
          <Link to="location" smooth={true} className="text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors">
            Location
          </Link>
          <Link to="gallery" smooth={true}  className="text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors">
            Gallery
          </Link>
          <Link to="contact" smooth={true} className="text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* Contact & CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="tel:9156767878" className="flex items-center text-[#1a365d] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            9156767878
          </a>
          <a href="/document.pdf" download="document.pdf">
  <button className="bg-[#d4af37] hover:bg-[#b8960d] text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md text-center">
    <span>Download Brochure</span>
   
  </button>
</a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#1a365d] focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link to="home" smooth={true} className="block text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors py-2">
              Home
            </Link>
            <Link to="about" smooth={true} className="block text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors py-2">
              About
            </Link>
            <Link to="amenities" smooth={true} className="block text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors py-2">
              Amenities
            </Link>
            <Link to="specs" smooth={true} className="block text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors py-2">
              Specifications
            </Link>
            <Link to="location" smooth={true} className="block text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors py-2">
              Location
            </Link>
            <Link to="gallery" smooth={true} className="block text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors py-2">
              Gallery
            </Link>
            <Link to="contact" smooth={true} className="block text-[#1a365d] hover:text-[#d4af37] font-medium transition-colors py-2">
              Contact
            </Link>
            <a href="tel:9156767878" className="flex items-center text-[#1a365d] font-medium py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              9156767878
            </a>
            <a href="/document.pdf" download="document.pdf">
  <button className="bg-[#d4af37] hover:bg-[#b8960d] text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md text-center">
    <span>Download Brochure</span>
   
  </button>
</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;