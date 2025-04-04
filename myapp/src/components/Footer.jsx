"use client"
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, Mail, Phone } from 'lucide-react';
import Link1 from 'next/link';
import { Link } from "react-scroll";
import Image from 'next/image';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Quick links configuration - using react-scroll for same-page navigation
  const quickLinks = [
    { label: "Home", id: "home", isScroll: true },
    { label: "About Us", id: "about", isScroll: true },
    { label: "Amenities", id: "amenities", isScroll: true },
    { label: "Specifications", id: "specs", isScroll: true },
    { label: "Location", id: "location", isScroll: true },
    { label: "Gallery", id: "gallery", isScroll: true },
    { label: "Contact", id: "contact", isScroll: true }
  ];
  
  // Resources links - using Next.js Link for page navigation
  const resourceLinks = [
    { label: "Brochure", href: "/brochure" },
    { label: "Payment Plans", href: "/payment-plans" },
    { label: "Site Progress", href: "/progress" },
    { label: "FAQs", href: "/faqs" },
    { label: "Testimonials", href: "/testimonials" }
  ];
  
  // Social media links
  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Youtube size={18} />, href: "https://youtube.com", label: "YouTube" }
  ];
  
  return (
    <footer className="bg-[#1C1B29] font-['Montserrat',sans-serif]">
    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Logo and Description - Span 4 columns */}
        <div className="lg:col-span-4">
          <div className="mb-6">
            {/* Replace with your actual logo */}
            <Link1 href="/">
              <div className="text-white text-2xl font-light flex flex-col items-center cursor-pointer">
                <Image src="/logo2.svg" width={1920} height={1080} className='w-56 h-56' />
              </div>
            </Link1>
          </div>
          
          <p className="text-white/70 mb-8 leading-relaxed">
            Crafting premium living spaces that exemplify luxury, comfort, and timeless elegance. 
            Our commitment to quality and attention to detail sets us apart.
          </p>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center">
              <Mail size={16} className="text-[#d4af37] mr-3" />
              <a href="mailto:sales@anantshree.co.in" className="text-white hover:text-[#d4af37] transition-colors">
                sales@anantshree.co.in
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="text-[#d4af37] mr-3" />
              <a href="tel:9156767878" className="text-white hover:text-[#d4af37] transition-colors">
                +91 915 676 7878
              </a>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h4 className="text-[#d4af37] text-sm font-medium uppercase tracking-wider mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-[#0a3a5a] flex items-center justify-center transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Quick Links - Span 3 columns */}
        <div className="lg:col-span-3">
          <h4 className="text-white font-medium text-lg mb-6">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                {link.isScroll ? (
                  <Link
                    to={link.id}
                    smooth={true}
                    className="text-white/70 hover:text-[#d4af37] transition-colors flex items-center cursor-pointer"
                  >
                    <ArrowRight size={14} className="mr-2 text-[#d4af37]" />
                    <span>{link.label}</span>
                  </Link>
                ) : (
                  <Link1 href={link.href || "/"}>
                    <div className="text-white/70 hover:text-[#d4af37] transition-colors flex items-center cursor-pointer">
                      <ArrowRight size={14} className="mr-2 text-[#d4af37]" />
                      <span>{link.label}</span>
                    </div>
                  </Link1>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Disclaimer - Span 5 columns */}
        <div className="lg:col-span-5">
          <h4 className="text-white font-medium text-lg mb-6">
            Disclaimer
          </h4>
          <div className="bg-white/5 rounded-lg p-6">
            <p className="text-white/70 text-sm leading-relaxed">
              The information and visuals contained herein are artistic impressions and indicative only. The 
              layouts, dimensions, specifications, and amenities shown are tentative and subject to change as may 
              be decided by the Company or the competent authority. All images used are for representational purposes 
              only and do not constitute an offer. The Company reserves the right to add, delete or alter any details 
              and facilities as may be required.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mt-4">
              This document does not constitute a legal offering. The Company reserves the right to change, 
              alter, add or delete any of the specifications mentioned herein. RERA registration number: 
              MAHA0000XXXXX, available at https://maharera.gov.in
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Copyright Bar */}
    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/70 text-sm mb-4 md:mb-0">
          © {currentYear} Kher Group | All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;