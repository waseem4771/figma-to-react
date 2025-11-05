import React from 'react';

const featuresData = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00897B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: 'Tailored Strategies',
      description: 'We create bespoke marketing strategies that align perfectly with your business goals.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00897B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Expert Team',
      description: 'Our team of experienced professionals is dedicated to delivering exceptional results.',
    },
    {
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00897B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M16.143 13.857l-2.286 2.286m0 0l-2.286-2.286m2.286 2.286V3.429A2.571 2.571 0 009 1H7.143A2.571 2.571 0 004.57 3.571V12" />
              <path d="M7.714 13.857l2.286 2.286m0 0l2.286-2.286m-2.286 2.286V22.286m0-8.429A2.571 2.571 0 0012.572 12h1.857a2.571 2.571 0 002.571-2.571V1" />
              <path d="M4.571 12a5.143 5.143 0 0110.286 0" stroke="none" />
              <path d="M12.571 12H4.571a5.143 5.143 0 0110.286 0h-2.286z" />
          </svg>
      ),
      title: 'Long-term Partnerships',
      description: 'We believe in building lasting relationships with our clients.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#00897B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" clipRule="evenodd" fill="currentColor" opacity={0.3} />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4.5 4.5 0 00-6.364 0" />
        </svg>
      ),
      title: 'Scalable Services',
      description: 'Our services are designed to grow with your business.',
    }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 px-8 bg-[#EAEAEA]">
      
      {/* 
        Solution 3: Background gradient ko gehra aur tez kar diya gaya hai
        - via-[#D4E9E6] ko via-[#B2DFDB] kar diya hai
        - opacity-70 ko opacity-100 kar diya hai
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#B2DFDB] to-transparent opacity-100"></div>
      
      <div className="relative container mx-auto text-center">
        
        <div className="mb-6">
          <span className="inline-block px-4 py-1 bg-[#B2DFDB] text-[#00695C] text-sm rounded-full">
            Why Choose Us?
          </span>
        </div>
        
        {/* Solution 1: font-medium ko font-normal kar diya gaya hai (patla karne ke liye) */}
        <h2 className="text-4xl md:text-5xl font-normal text-gray-800 mb-16">
          Why Choose Pixel Focus <br /> Media?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              // Solution 2: Padding ko p-8 se py-12 px-8 kar diya gaya hai
              className="bg-white/40 py-12 px-8 rounded-2xl border border-white/30 shadow-lg backdrop-blur-lg flex flex-col items-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;