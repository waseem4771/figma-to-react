

// import React from 'react';
// // CHANGE: useEffect hook ko import kiya hai
// import { useState, useEffect } from 'react';

// // ====================================================================
// // Data for the Branding Services
// // ====================================================================
// const services = [
//   {
//     title: "Brand Positioning",
//     description: "Strategically positioning your brand in the market to stand out from the competition.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//   },
//   {
//     title: "Brand Messaging",
//     description: "Crafting a unique voice and message that communicates your brand’s value to the audience.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
//   },
//   {
//     title: "Visual Identity",
//     description: "Designing a memorable visual system, including logos and color palettes, that defines your brand.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536l12.232-12.232z" />
//   },
//   {
//     title: "Brand Guidelines",
//     description: "Creating a comprehensive rulebook that ensures consistency across all brand communications.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//   },
// ];

// // ====================================================================
// // Main Branding Services Component
// // ====================================================================
// const BrandingServices = () => {
//   const [activeServiceIndex, setActiveServiceIndex] = useState(0);

//   // CHANGE 1: Yeh code har 2 second ke baad service ko automatically change karega
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveServiceIndex(prevIndex => (prevIndex + 1) % services.length);
//     }, 2000); // 2000 milliseconds = 2 seconds

//     // Jab component khatam ho to interval ko bhi saaf kar den
//     return () => clearInterval(interval);
//   }, []); // Empty array ka matlab hai ke yeh effect sirf aek baar chalega

//   const activeService = services[activeServiceIndex];
//   const numServices = services.length;

//   return (
//     // CHANGE 4: Section ko ooper karne ke liye padding adjust ki hai
//     <section className="bg-[#F2F2F2] pt-10 pb-20 px-8 text-center">
//       <div className="container mx-auto">
//         {/* CHANGE 2: Main heading ko mota kiya hai */}
//         <h2 className="text-4xl md:text-5xl font-normal text-gray-800 mb-20">
//           Our Branding Services Include
//         </h2>

//         <div className="relative w-full max-w-lg mx-auto aspect-square">
//           <div className="w-full h-full rounded-full border border-[#A7D7C5]"></div>

//           {services.map((_, index) => {
//             const angle = (index / numServices) * 360 - 90;
//             return (
//               <button
//                 key={index}
//                 onClick={() => setActiveServiceIndex(index)}
//                 className="absolute w-5 h-5 rounded-full transition-all duration-300"
//                 style={{ 
//                   top: '50%', 
//                   left: '50%', 
//                   transform: `rotate(${angle}deg) translate(288px) rotate(${-angle}deg)`
//                 }}
//               >
//                 <div className={`w-full h-full rounded-full ${index === activeServiceIndex ? 'bg-[#4DD0E1]' : 'bg-white border-2 border-gray-400'}`}></div>
//               </button>
//             );
//           })}

//           <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
//             <div className="w-16 h-16 text-[#4DD0E1] mb-4">
//               <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
//                 {activeService.icon}
//               </svg>
//             </div>
//             {/* CHANGE 3: Circle ke andar wali heading ko mota kiya hai */}
//             <h3 className="text-3xl font-medium text-gray-800 mb-2">
//               {activeService.title}
//             </h3>
//             <p className="text-sm text-gray-500 max-w-xs">
//               {activeService.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandingServices;












//-----------------------------------------------------------








import React, { useState, useEffect } from 'react';

// ====================================================================
// Data for the Branding Services (اس میں کوئی تبدیلی نہیں)
// ====================================================================
const services = [
  {
    title: "Brand Positioning",
    description: "Strategically positioning your brand in the market to stand out from the competition.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  },
  {
    title: "Brand Messaging",
    description: "Crafting a unique voice and message that communicates your brand’s value to the audience.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
  },
  {
    title: "Visual Identity",
    description: "Designing a memorable visual system, including logos and color palettes, that defines your brand.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536l12.232-12.232z" />
  },
  {
    title: "Brand Guidelines",
    description: "Creating a comprehensive rulebook that ensures consistency across all brand communications.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  },
];

// ====================================================================
// Main Branding Services Component (Responsive Version)
// ====================================================================
const BrandingServices = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  // حل 1: دائرے کے ریڈیس (radius) کو کنٹرول کرنے کے لیے اسٹیٹ (state) بنائی گئی
  const [circleRadius, setCircleRadius] = useState(140);

  // یہ ایفیکٹ (effect) خودکار طور پر سروسز کو تبدیل کرتا رہتا ہے
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex(prevIndex => (prevIndex + 1) % services.length);
    }, 2500); // وقت کو 2.5 سیکنڈ کر دیا گیا ہے تاکہ پڑھنے میں آسانی ہو

    return () => clearInterval(interval);
  }, []);

  // حل 2: یہ ایفیکٹ اسکرین کا سائز تبدیل ہونے پر دائرے کا ریڈیس اپڈیٹ کرتا ہے
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // موبائل کے لیے
        setCircleRadius(140);
      } else if (window.innerWidth < 1024) { // ٹیبلٹ کے لیے
        setCircleRadius(220);
      } else { // ڈیسک ٹاپ کے لیے
        setCircleRadius(240); // اصل سائز سے تھوڑا کم تاکہ max-w-lg میں فٹ ہو
      }
    };

    handleResize(); // کمپوننٹ لوڈ ہونے پر ایک بار چلایا گیا
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeService = services[activeServiceIndex];
  const numServices = services.length;

  return (
    // حل 3: سیکشن کی پیڈنگ اور ہیڈنگ کو ریسپانسیو بنایا گیا
    <section className="bg-[#F2F2F2] pt-10 pb-20 px-4 sm:px-8 text-center overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-800 mb-16 sm:mb-20">
          Our Branding Services Include
        </h2>

        {/* حل 4: دائرے کے کنٹینر کا سائز بھی ریسپانسیو بنایا گیا */}
        <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[512px] lg:h-[512px] mx-auto">
          <div className="w-full h-full rounded-full border border-[#A7D7C5]"></div>

          {services.map((_, index) => {
            const angle = (index / numServices) * 360 - 90;
            return (
              <button
                key={index}
                onClick={() => setActiveServiceIndex(index)}
                className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300"
                style={{ 
                  top: '50%', 
                  left: '50%', 
                  // حل 5: یہاں فکسڈ ویلیو کی جگہ ڈائنامک 'circleRadius' استعمال کیا گیا
                  transform: `rotate(${angle}deg) translate(${circleRadius}px) rotate(${-angle}deg)`
                }}
              >
                <div className={`w-full h-full rounded-full ${index === activeServiceIndex ? 'bg-[#4DD0E1]' : 'bg-white border-2 border-gray-400'}`}></div>
              </button>
            );
          })}

          {/* حل 6: دائرے کے اندر موجود مواد (content) کو بھی ریسپانسیو بنایا گیا */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 text-[#4DD0E1] mb-2 sm:mb-4">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                {activeService.icon}
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 mb-2">
              {activeService.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xs">
              {activeService.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingServices;