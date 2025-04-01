"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Building, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your form submission logic
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false
    });
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 font-['Montserrat',sans-serif]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-sm text-[#d4af37] uppercase tracking-widest font-medium">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0a3a5a] mt-3 mb-6 leading-tight">
            Contact Us
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-[#0a3a5a] to-[#d4af37] mx-auto mb-10"></div>
          
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            We're here to answer any questions you may have about our residences.
            Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
        
        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form - 7 columns */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-light text-[#0a3a5a] mb-6">Send us a message</h3>
                
                {formStatus.submitted ? (
                  <div className="bg-green-50 border border-green-100 rounded-lg p-6 flex items-start">
                    <CheckCircle className="text-green-500 mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-green-800 font-medium text-lg mb-2">Thank you for contacting us!</h4>
                      <p className="text-green-700">
                        We've received your message and our team will get back to you shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none transition-all"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none transition-all"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none transition-all"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="inline-flex items-center bg-[#0a3a5a] text-white px-6 py-3 rounded-lg hover:bg-[#0a3a5a]/90 transition-colors duration-300"
                    >
                      <Send size={18} className="mr-2" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Information - 5 columns */}
          <div className="lg:col-span-5">
            <div className="bg-[#0a3a5a] rounded-xl shadow-lg overflow-hidden h-full">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-light mb-8">Contact Information</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={18} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Phone Number</p>
                      <a href="tel:9156767878" className="text-white hover:text-[#d4af37] transition-colors">
                        +91 915 676 7878
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={18} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Email</p>
                      <a href="mailto:sales@anantshree.co.in" className="text-white hover:text-[#d4af37] transition-colors">
                        sales@anantshree.co.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin size={18} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Site Address</p>
                      <p className="text-white">
                        Lokmanya Colony, Kothrud, 
                        <br />Pune, Maharashtra
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#d4af37]/20 flex items-center justify-center mr-4 flex-shrink-0">
                      <Building size={18} className="text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">Corporate Office</p>
                      <p className="text-white">
                        Prabhat Rd., Erandawane,
                        <br />Pune, Maharashtra
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="text-[#d4af37] text-sm uppercase tracking-widest font-medium mb-4">Working Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/70">Monday - Friday:</span>
                      <span className="text-white">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Saturday:</span>
                      <span className="text-white">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Sunday:</span>
                      <span className="text-white">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Maps */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg bg-white">
          <div className="h-[400px] w-full relative">
            {/* Replace the iframe src with your actual Google Maps embed code */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15133.888566592723!2d73.80580702931737!3d18.506082583815815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7c8a53c5b9%3A0x7e1ee9718de4184b!2sLokmanya%20Colony%2C%20Kothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713830765882!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{border: 0}}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
        
        {/* Help Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Sales Inquiries", description: "Interested in our properties? Our sales team is ready to assist you.", email: "sales@anantshree.co.in" },
            { title: "Customer Support", description: "Current customers can reach our dedicated support team for any assistance.", email: "support@anantshree.co.in" },
            { title: "Career Opportunities", description: "Looking to join our team? Send your resume and cover letter to us.", email: "careers@anantshree.co.in" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-[#0a3a5a]/5 flex items-center justify-center mb-4">
                <div className="w-6 h-0.5 bg-[#d4af37]"></div>
              </div>
              <h4 className="text-lg font-medium text-[#0a3a5a] mb-2">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a 
                href={`mailto:${item.email}`} 
                className="text-[#d4af37] hover:underline flex items-center"
              >
                <Mail size={14} className="mr-2" />
                {item.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;