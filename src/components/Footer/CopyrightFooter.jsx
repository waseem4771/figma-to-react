import React from 'react';
import './CopyrightFooter.css'; // CSS file link hai

const CopyrightFooter = () => {
  return (
    // Solution: yahan se 'py-8' ko 'pb-8' kar diya gaya hai
    // taake sirf neeche padding rahe, upar se yeh bilkul chipak jaye
    <footer className="bg-[#EAEAEA] pb-8 px-8">
      <div>

        {/* Top horizontal line */}
        <hr className="border-t border-gray-400" />

        {/* Scrolling text */}
        <div className="py-12 scrolling-text-container">
          <h1 className="scrolling-text text-6xl md:text-8xl font-bold text-gray-900 tracking-wider">
            BRANDING - SOCIAL MEDIA - MARKETING - SEO - SEM - 
          </h1>
        </div>

        {/* Bottom horizontal line */}
        <hr className="border-t border-gray-400" />

        {/* Copyright text */}
        <div className="pt-8 text-left">
          <p className="text-xs text-gray-500 tracking-widest">
            2024 PIXEL FOCUS MEDIA, ALL RIGHTS RESERVED
          </p>
        </div>

      </div>
    </footer>
  );
};

export default CopyrightFooter;