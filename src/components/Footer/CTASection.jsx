import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-[#EAEAEA] py-20 text-center">
      <div className="container mx-auto">
        {/* Solution 1: font-medium ko font-normal kar diya gaya hai (patla karne ke liye) */}
        <h2 className="text-4xl md:text-5xl font-normal text-gray-800 mb-6">
          Let's Get Started
        </h2>
        {/* Solution 2: Paragraph ka size text-sm kar diya gaya hai (chota karne ke liye) */}
        <p className="text-sm text-gray-500 mb-8 max-w-2xl mx-auto">
          Pixel Focus Media is ready to embark on your brand's journey. We look forward to partnering with you to achieve your marketing goals
        </p>
        <button className="group flex items-center gap-3 px-6 py-2 border border-[#80CBC4] rounded-lg text-gray-700 hover:bg-[#E0F2F1] transition-colors mx-auto">
          Contact Us Today To Begin
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CTASection;