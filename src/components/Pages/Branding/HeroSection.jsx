

// import React from 'react';

// // ====================================================================
// // Step 1: Background Icons Component (Final Opacity)
// // ====================================================================
// const IconPattern = () => {
//   const icons = [
//     { type: 'Clipboard', className: 'w-14 top-[10%] left-[8%]' },
//     { type: 'Pencil', className: 'w-14 top-[15%] right-[12%]' },
//     { type: 'GraduationCap', className: 'w-20 top-[28%] left-[18%]' },
//     { type: 'Brain', className: 'w-12 top-[38%] right-[22%]' },
//     { type: 'Chart', className: 'w-16 top-[20%] left-[48%]' },
//     { type: 'Cursor', className: 'w-10 top-[12%] left-[35%]' },
//     { type: 'Graph', className: 'w-16 top-[60%] right-[10%]' },
//     { type: 'Play', className: 'w-14 top-[50%] left-[10%]' },
//     { type: 'Message', className: 'w-10 top-[65%] right-[25%]' },
//     { type: 'Clipboard', className: 'w-14 bottom-[15%] left-[20%]' },
//     { type: 'Pencil', className: 'w-14 bottom-[20%] right-[35%]' },
//     { type: 'Brain', className: 'w-12 bottom-[10%] left-[48%]' },
//     { type: 'Graph', className: 'w-16 bottom-[10%] right-[8%]' },
//     { type: 'Chart', className: 'w-16 bottom-[18%] left-[35%]' },
//     { type: 'Cursor', className: 'w-10 bottom-[30%] left-[5%]' },
//     { type: 'Play', className: 'w-14 bottom-[35%] right-[15%]' },
//     { type: 'Line', className: 'w-12 top-[8%] left-[25%]' },
//     { type: 'Line', className: 'w-12 top-[45%] left-[30%]' },
//     { type: 'Line', className: 'w-12 bottom-[8%] right-[28%]' },
//     { type: 'Message', className: 'w-10 top-[8%] right-[45%]' },
//     { type: 'GraduationCap', className: 'w-20 bottom-[25%] right-[5%]' },
//     { type: 'Cursor', className: 'w-10 top-[70%] left-[28%]' },
//     { type: 'Pencil', className: 'w-14 top-[80%] left-[15%]' },
//     { type: 'Brain', className: 'w-12 top-[5%] right-[5%]' },
//     { type: 'Chart', className: 'w-16 top-[90%] left-[40%]' },
//     { type: 'Play', className: 'w-14 top-[35%] right-[5%]' },
//     { type: 'Clipboard', className: 'w-14 top-[75%] right-[40%]' },
//     { type: 'Graph', className: 'w-16 top-[5%] left-[55%]' },
//     { type: 'Line', className: 'w-12 top-[90%] right-[50%]' },
//   ];

//   const renderIconPath = (type) => {
//     switch (type) {
//         case 'Clipboard': return <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0a2 2 0 100 4 2 2 0 000-4z" />;
//         case 'Pencil': return <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536l12.232-12.232z" />;
//         case 'GraduationCap': return <path d="M12 14l9-5-9-5-9 5 9 5z m0 0v5.5a2.5 2.5 0 105 0V14" />;
//         case 'Brain': return <path d="M9 8h.01M15 8h.01M12 16h.01M9 12h.01M15 12h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />;
//         case 'Chart': return <path d="M9 17v-4m3 4v-2m3 2v-6m3 6V7" />;
//         case 'Cursor': return <path d="M14.5 14.5L9 21v-5.5L14.5 9z M9 3l4.5 5.5L9 14V3z" />;
//         case 'Graph': return <path d="M13 13V3m0 18v-2m4-5v-5m-8 5v-1" />;
//         case 'Play': return <path d="M14.752 11.168l-5.197-3.04A1 1 0 008 9.022v6.056a1 1 0 001.555.832l5.197-3.04a1 1 0 000-1.664z" />;
//         case 'Message': return <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />;
//         case 'Line': return <path d="M5 12h14" />;
//         default: return null;
//     }
//   };

//   return (
//     // CHANGE 2: Icons ka color thora sa light kar diya hai
//     <div className="absolute inset-0 z-0 opacity-50">
//       {icons.map((icon, index) => (
//         <div key={index} className={`absolute ${icon.className}`}>
//           <svg className="w-full h-full text-[#78C2A4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
//             {renderIconPath(icon.type)}
//           </svg>
//         </div>
//       ))}
//     </div>
//   );
// };

// // ====================================================================
// // Step 2: Main Hero Section Component
// // ====================================================================
// const HeroSection = () => {

//   return (
//     // CHANGE 1: Section ki height kam kar di hai
//     <section 
//       className="relative flex items-center justify-center h-[85vh] overflow-hidden bg-[#F2F2F2]"
//     >
//       <IconPattern />
      
//       <div className="relative z-10 flex flex-col items-center">
        
//         <div className="absolute -top-24">
//           {/* CHANGE 3 & 4: Button ka color light aur text mota kar diya hai */}
//           <span className="border border-[#A7D7C5] text-[#A7D7C5] rounded-full px-4 py-1 text-sm font-semibold">
//             Branding
//           </span>
//         </div>
        
//         <div className="py-8 bg-[#F2F2F2]">
//             <h1 className="text-4xl md:text-6xl font-normal text-gray-800 leading-tight tracking-wide text-center">
//                 Transforming Ideas Into
//                 <br />
//                 Iconic Brands
//             </h1>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;


















import React from 'react';

// ====================================================================
// 1. Background Icons Component (Responsive Version)
// ====================================================================
const IconPattern = () => {
  const icons = [
    // --- Mobile & Desktop Icons (یہ ہر اسکرین پر نظر آئیں گے) ---
    { type: 'Clipboard', className: 'w-12 top-[10%] left-[8%]' },
    { type: 'Pencil', className: 'w-12 top-[15%] right-[12%]' },
    { type: 'Brain', className: 'w-10 top-[38%] right-[22%]' },
    { type: 'Play', className: 'w-12 top-[50%] left-[10%]' },
    { type: 'Graph', className: 'w-14 bottom-[10%] right-[8%]' },
    { type: 'Cursor', className: 'w-8 bottom-[30%] left-[5%]' },
    { type: 'Message', className: 'w-10 top-[8%] right-[45%]' },
    { type: 'Brain', className: 'w-12 top-[5%] right-[5%]' },
    { type: 'Pencil', className: 'w-14 top-[80%] left-[15%]' },
    { type: 'GraduationCap', className: 'w-20 bottom-[25%] right-[5%]' },
    { type: 'Clipboard', className: 'w-14 bottom-[15%] left-[20%]' },


    // --- Desktop Only Icons (یہ صرف بڑی اسکرینوں پر نظر آئیں گے) ---
    // حل: 'hidden md:block' کلاس کا استعمال کیا گیا ہے
    { type: 'GraduationCap', className: 'w-20 top-[28%] left-[18%] hidden md:block' },
    { type: 'Chart', className: 'w-16 top-[20%] left-[48%] hidden md:block' },
    { type: 'Cursor', className: 'w-10 top-[12%] left-[35%] hidden md:block' },
    { type: 'Graph', className: 'w-16 top-[60%] right-[10%] hidden md:block' },
    { type: 'Message', className: 'w-10 top-[65%] right-[25%] hidden md:block' },
    { type: 'Pencil', className: 'w-14 bottom-[20%] right-[35%] hidden md:block' },
    { type: 'Brain', className: 'w-12 bottom-[10%] left-[48%] hidden md:block' },
    { type: 'Chart', className: 'w-16 bottom-[18%] left-[35%] hidden md:block' },
    { type: 'Play', className: 'w-14 bottom-[35%] right-[15%] hidden md:block' },
    { type: 'Line', className: 'w-12 top-[8%] left-[25%] hidden md:block' },
    { type: 'Line', className: 'w-12 top-[45%] left-[30%] hidden md:block' },
    { type: 'Line', className: 'w-12 bottom-[8%] right-[28%] hidden md:block' },
    { type: 'Cursor', className: 'w-10 top-[70%] left-[28%] hidden md:block' },
    { type: 'Chart', className: 'w-16 top-[90%] left-[40%] hidden md:block' },
    { type: 'Play', className: 'w-14 top-[35%] right-[5%] hidden md:block' },
    { type: 'Clipboard', className: 'w-14 top-[75%] right-[40%] hidden md:block' },
    { type: 'Graph', className: 'w-16 top-[5%] left-[55%] hidden md:block' },
    { type: 'Line', className: 'w-12 top-[90%] right-[50%] hidden md:block' },
  ];

  const renderIconPath = (type) => {
    switch (type) {
        case 'Clipboard': return <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0a2 2 0 100 4 2 2 0 000-4z" />;
        case 'Pencil': return <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536l12.232-12.232z" />;
        case 'GraduationCap': return <path d="M12 14l9-5-9-5-9 5 9 5z m0 0v5.5a2.5 2.5 0 105 0V14" />;
        case 'Brain': return <path d="M9 8h.01M15 8h.01M12 16h.01M9 12h.01M15 12h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />;
        case 'Chart': return <path d="M9 17v-4m3 4v-2m3 2v-6m3 6V7" />;
        case 'Cursor': return <path d="M14.5 14.5L9 21v-5.5L14.5 9z M9 3l4.5 5.5L9 14V3z" />;
        case 'Graph': return <path d="M13 13V3m0 18v-2m4-5v-5m-8 5v-1" />;
        case 'Play': return <path d="M14.752 11.168l-5.197-3.04A1 1 0 008 9.022v6.056a1 1 0 001.555.832l5.197-3.04a1 1 0 000-1.664z" />;
        case 'Message': return <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />;
        case 'Line': return <path d="M5 12h14" />;
        default: return null;
    }
  };

  return (
    <div className="absolute inset-0 z-0 opacity-50">
      {icons.map((icon, index) => (
        <div key={index} className={`absolute ${icon.className}`}>
          <svg className="w-full h-full text-[#78C2A4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            {renderIconPath(icon.type)}
          </svg>
        </div>
      ))}
    </div>
  );
};

// ====================================================================
// 2. Main Hero Section Component (Responsive Version)
// ====================================================================
const HeroSection = () => {
  return (
    // حل: سیکشن کی اونچائی اور پیڈنگ کو ریسپانسیو بنایا گیا ہے
    <section 
      className="relative flex items-center justify-center h-[75vh] md:h-[85vh] overflow-hidden bg-[#F2F2F2] px-4"
    >
      <IconPattern />
      
      <div className="relative z-10 flex flex-col items-center">
        
        {/* حل: بیج کی پوزیشن کو موبائل کے لیے ایڈجسٹ کیا گیا ہے */}
        <div className="absolute -top-16 md:-top-24">
          <span className="border border-[#A7D7C5] text-[#A7D7C5] rounded-full px-4 py-1 text-sm font-semibold">
            Branding
          </span>
        </div>
        
        {/* حل: ہیڈنگ کی پیڈنگ کو موبائل پر کم کیا گیا ہے */}
        <div className="py-4 md:py-8 bg-[#F2F2F2]">
            <h1 className="text-4xl md:text-6xl font-normal text-gray-800 leading-tight tracking-wide text-center">
                Transforming Ideas Into
                <br />
                Iconic Brands
            </h1>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;