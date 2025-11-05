


import React from 'react';

// آپ یہاں اپنی تصویر کا پاتھ دے سکتے ہیں
const missionImage = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const MissionSectionFirst = () => {
  return (
    // حل 1: py-20 (اوپر نیچے پیڈنگ) کو pb-20 (صرف نیچے پیڈنگ) سے بدل دیا گیا ہے
    // تاکہ یہ سیکشن بالکل اوپر سے شروع ہو
    <section className="bg-[#EAEAEA] pb-20 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* بایاں کالم: تصویر */}
        <div className="w-full h-full">
          <img 
            src={missionImage} 
            alt="Team working on laptops" 
            className="w-full h-full object-cover filter grayscale" 
          />
        </div>

        {/* دایاں کالم: مواد */}
        <div className="flex flex-col justify-center text-left">
          
          {/* چھوٹا بٹن */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1 border border-[#80CBC4] text-[#00796B] text-sm rounded-full">
              Our Mission
            </span>
          </div>

          {/* ہیڈنگ */}
          <h2 className="text-4xl md:text-5xl font-medium leading-tight text-gray-800 mb-6">
            Your Brand is Our <br />
            Mission
          </h2>

          {/* پیراگراف */}
          {/* حل 2: پیراگراف کا سائز text-sm کر دیا گیا ہے */}
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            At the heart of everything we do is a commitment to our clients. We begin with an in-depth understanding of your products, services, and vision. Our mission is to craft targeted messages and content that cut through the noise, focusing on increased recognition and market share for your company.
          </p>
          
          {/* 'Learn More' بٹن */}
          {/* حل 2: بٹن کے ٹیکسٹ کا سائز text-sm کر دیا گیا ہے */}
          <button className="group flex items-center gap-3 px-6 py-2 border border-[#80CBC4] rounded-lg text-sm text-gray-700 hover:bg-[#E0F2F1] transition-colors self-start">
            Learn More
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
      </div>
    </section>
  );
};

export default MissionSectionFirst;