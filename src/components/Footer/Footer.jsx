import React from 'react';

// Aap yahan apne logo ka path de sakte hain
import footerLogo from '../../assets/pixel_focus_logo.png';

const Footer = () => {
  return (
    // Solution: yahan se pt-4 (padding-top) ko hata diya gaya hai
    // taake poora footer section upar ho jaye
    <footer className="bg-[#EAEAEA] pb-20 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-600">
        
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col">
          <img src={footerLogo} alt="Pixel Focus Media Logo" className="h-48 w-auto self-start" />
          <p className="text-sm leading-relaxed mt-2">
            Digital marketing is an art, and we are the artists. We have a special touch that ensures the right message reaches your audience through the appropriate media channels. Whether you have a new brand to promote, an older brand in need of revitalisation, or a thriving brand ready to grow even more, we are here to help.
          </p>
        </div>

        {/* Column 2: Site Map */}
        <div className="flex flex-col gap-3 md:pt-24">
          <h4 className="font-semibold text-gray-800 mb-2">Site Map</h4>
          <a href="#" className="hover:text-gray-800">Home</a>
          <a href="#" className="hover:text-gray-800">Behind The Pixels</a>
          <a href="#" className="hover:text-gray-800">Branding</a>
          <a href="#" className="hover:text-gray-800">Social Media Marketing</a>
          <a href="#" className="hover:text-gray-800">SEO</a>
          <a href="#" className="hover:text-gray-800">SEM</a>
          <a href="#" className="hover:text-gray-800">Contact Us</a>
        </div>

        {/* Column 3: Legal */}
        <div className="flex flex-col gap-3 md:pt-24">
          <h4 className="font-semibold text-gray-800 mb-2">Legal</h4>
          <a href="#" className="hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800">Terms & Conditions</a>
          <a href="#" className="hover:text-gray-800">Cookie Policy</a>
        </div>

        {/* Column 4: Contact Information */}
        <div className="flex flex-col gap-3 md:pt-24">
          <h4 className="font-semibold text-gray-800 mb-2">Contact Information</h4>
          <div>
            <span className="font-semibold text-gray-800">Address:</span>
            <p>XCOMPANYADDRESSX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;