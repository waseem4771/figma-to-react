

// import React from 'react';

// // ====================================================================
// // Component for the Faint World Map in the Background
// // ====================================================================
// const WorldMap = () => (
//   // CHANGE 1: Map ki opacity barha di hai takay color tez ho jaye
//   // CHANGE 2: Map ko thorra sa barra kr diya hai (scale-110)
//   <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50 transform scale-110">
//     <svg 
//       className="w-full h-auto max-w-6xl text-[#A7D7C5]" // Color ko thora tez kar diya hai
//       viewBox="0 0 1000 500" 
//       fill="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       {/* Simplified world map continents */}
//       {/* North America */}
//       <path d="M150 100 L180 90 L200 95 L210 85 L230 90 L240 110 L250 130 L245 150 L235 160 L220 155 L200 165 L180 160 L170 145 L160 130 L155 115 Z" />
//       {/* South America */}
//       <path d="M230 200 L240 190 L250 200 L255 220 L260 250 L255 280 L245 300 L235 310 L225 305 L220 285 L215 260 L220 230 L225 210 Z" />
//       {/* Europe */}
//       <path d="M480 80 L500 75 L520 80 L530 90 L525 105 L515 115 L500 120 L485 115 L475 100 L478 85 Z" />
//       {/* Africa */}
//       <path d="M470 150 L490 145 L510 150 L525 165 L535 190 L540 220 L535 250 L525 275 L510 285 L490 280 L475 265 L465 240 L460 210 L465 180 L468 165 Z" />
//       {/* Asia */}
//       <path d="M550 70 L590 65 L630 70 L670 80 L700 95 L720 115 L725 135 L720 155 L700 170 L670 175 L640 170 L610 160 L580 145 L560 125 L555 105 L552 85 Z" />
//       {/* Australia */}
//       <path d="M700 280 L730 275 L755 280 L770 295 L765 315 L750 325 L725 320 L705 310 L698 295 Z" />
//       {/* Additional landmass details */}
//       <ellipse cx="300" cy="180" rx="25" ry="15" opacity="0.6" />
//       <ellipse cx="600" cy="240" rx="35" ry="20" opacity="0.6" />
//       <ellipse cx="420" cy="110" rx="20" ry="12" opacity="0.6" />
//     </svg>
//   </div>
// );

// // ====================================================================
// // Component for the Floating Social Media Icons
// // ====================================================================
// const SocialIcons = () => {
//   const icons = [
//     { type: 'heart', top: '18%', left: '25%', delay: '0s' },
//     { type: 'like', top: '22%', left: '32%', delay: '0.5s' },
//     { type: 'heart', top: '15%', left: '42%', delay: '1s' },
//     { type: 'like', top: '28%', left: '48%', delay: '1.5s' },
//     { type: 'heart', top: '20%', left: '58%', delay: '2s' },
//     { type: 'like', top: '32%', left: '65%', delay: '2.5s' },
//     { type: 'heart', top: '25%', left: '72%', delay: '3s' },
//     { type: 'like', top: '45%', left: '18%', delay: '0.3s' },
//     { type: 'heart', top: '50%', left: '28%', delay: '0.8s' },
//     { type: 'like', top: '55%', left: '38%', delay: '1.3s' },
//     { type: 'heart', top: '48%', left: '52%', delay: '1.8s' },
//     { type: 'like', top: '58%', left: '62%', delay: '2.3s' },
//     { type: 'heart', top: '52%', left: '75%', delay: '2.8s' },
//     { type: 'like', top: '70%', left: '22%', delay: '0.6s' },
//     { type: 'heart', top: '75%', left: '35%', delay: '1.1s' },
//     { type: 'like', top: '72%', left: '50%', delay: '1.6s' },
//     { type: 'heart', top: '78%', left: '60%', delay: '2.1s' },
//     { type: 'like', top: '68%', left: '70%', delay: '2.6s' },
//   ];

//   const renderIcon = (type) => {
//     if (type === 'heart') {
//       return (
//         <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
//       );
//     }
//     return (
//       <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.72l1.28-6.86A2 2 0 0019 9h-5z" />
//     );
//   };

//   return (
//     <div className="absolute inset-0 z-10 pointer-events-none">
//       {icons.map((icon, i) => (
//         <div
//           key={i}
//           className="absolute w-12 h-12 animate-float"
//           style={{
//             top: icon.top,
//             left: icon.left,
//             animationDelay: icon.delay,
//             animationDuration: '6s',
//           }}
//         >
//           <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
//             <svg
//               className="w-6 h-6 text-[#A7D7C5]"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               {renderIcon(icon.type)}
//             </svg>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // ====================================================================
// // Main Social Media Hero Section Component
// // ====================================================================
// const SocialHeroSection = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center h-[85vh] bg-[#F2F2F2] overflow-hidden px-4">
//       <WorldMap />
//       <SocialIcons />
      
//       {/* Main Content */}
//       <div className="relative z-20 flex flex-col items-center text-center max-w-6xl">
        
//         {/* Top Tag */}
//         <div className="mb-2 animate-fade-in"> 
//           <span className="border-2 border-[#A7D7C5] text-[#A7D7C5] rounded-full px-6 py-2 text-sm font-bold tracking-wide">
//             Social Media Marketing
//           </span>
//         </div>
        
//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
//           Amplify Your Brand With Expert Social
//           <br />
//           Media Strategies
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default SocialHeroSection;
























import React from 'react';

// ====================================================================
// Component for the Faint World Map in the Background
// ====================================================================
const WorldMap = () => (
  // 
  //   حل: نقشے کا سائز موبائل پر تھوڑا کم (scale-150) اور ڈیسک ٹاپ پر بڑا (lg:scale-110) کیا گیا ہے
  //        تاکہ یہ ہر اسکرین پر بہتر نظر آئے۔
  // 
  <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50 transform scale-150 lg:scale-110">
    <svg 
      className="w-full h-auto max-w-6xl text-[#A7D7C5]"
      viewBox="0 0 1000 500" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified world map paths (کوئی تبدیلی نہیں) */}
      <path d="M150 100 L180 90 L200 95 L210 85 L230 90 L240 110 L250 130 L245 150 L235 160 L220 155 L200 165 L180 160 L170 145 L160 130 L155 115 Z" />
      <path d="M230 200 L240 190 L250 200 L255 220 L260 250 L255 280 L245 300 L235 310 L225 305 L220 285 L215 260 L220 230 L225 210 Z" />
      <path d="M480 80 L500 75 L520 80 L530 90 L525 105 L515 115 L500 120 L485 115 L475 100 L478 85 Z" />
      <path d="M470 150 L490 145 L510 150 L525 165 L535 190 L540 220 L535 250 L525 275 L510 285 L490 280 L475 265 L465 240 L460 210 L465 180 L468 165 Z" />
      <path d="M550 70 L590 65 L630 70 L670 80 L700 95 L720 115 L725 135 L720 155 L700 170 L670 175 L640 170 L610 160 L580 145 L560 125 L555 105 L552 85 Z" />
      <path d="M700 280 L730 275 L755 280 L770 295 L765 315 L750 325 L725 320 L705 310 L698 295 Z" />
      <ellipse cx="300" cy="180" rx="25" ry="15" opacity="0.6" />
      <ellipse cx="600" cy="240" rx="35" ry="20" opacity="0.6" />
      <ellipse cx="420" cy="110" rx="20" ry="12" opacity="0.6" />
    </svg>
  </div>
);

// ====================================================================
// Component for the Floating Social Media Icons
// ====================================================================
const SocialIcons = () => {
  const icons = [
    // --- موبائل اور ڈیسک ٹاپ دونوں کے لیے ---
    { type: 'heart', top: '18%', left: '15%', delay: '0s' },
    { type: 'like', top: '22%', left: '72%', delay: '0.5s' },
    { type: 'heart', top: '45%', left: '8%', delay: '0.3s' },
    { type: 'like', top: '50%', left: '80%', delay: '0.8s' },
    { type: 'heart', top: '70%', left: '12%', delay: '0.6s' },
    { type: 'like', top: '75%', left: '75%', delay: '1.1s' },
    { type: 'heart', top: '80%', left: '45%', delay: '1.4s' },
    
    // --- صرف ڈیسک ٹاپ کے لیے (hidden on mobile) ---
    { type: 'heart', top: '15%', left: '42%', delay: '1s', desktopOnly: true },
    { type: 'like', top: '28%', left: '48%', delay: '1.5s', desktopOnly: true },
    { type: 'heart', top: '20%', left: '58%', delay: '2s', desktopOnly: true },
    { type: 'like', top: '32%', left: '65%', delay: '2.5s', desktopOnly: true },
    { type: 'heart', top: '48%', left: '52%', delay: '1.8s', desktopOnly: true },
    { type: 'like', top: '58%', left: '62%', delay: '2.3s', desktopOnly: true },
    { type: 'heart', top: '78%', left: '60%', delay: '2.1s', desktopOnly: true },
    { type: 'like', top: '68%', left: '70%', delay: '2.6s', desktopOnly: true },
  ];

  const renderIcon = (type) => {
    // ... (renderIcon function same as before, no changes needed)
    if (type === 'heart') return <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />;
    return <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.72l1.28-6.86A2 2 0 0019 9h-5z" />;
  };

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {icons.map((icon, i) => (
        <div
          key={i}
          // 
          //   حل: آئیکن کا سائز موبائل پر چھوٹا (w-10 h-10) اور ڈیسک ٹاپ پر بڑا (md:w-12 md:h-12) کیا گیا ہے۔
          //        'desktopOnly' والے آئیکنز کو موبائل پر چھپا دیا گیا ہے۔
          // 
          className={`absolute w-10 h-10 md:w-12 md:h-12 animate-float ${icon.desktopOnly ? 'hidden md:block' : ''}`}
          style={{
            top: icon.top, left: icon.left,
            animationDelay: icon.delay, animationDuration: '6s',
          }}
        >
          <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-[#A7D7C5]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              {renderIcon(icon.type)}
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

// ====================================================================
// Main Social Media Hero Section Component (Responsive Version)
// ====================================================================
const SocialHeroSection = () => {
  return (
    // 
    //   حل: سیکشن کی اونچائی موبائل پر کم (h-[80vh]) کی گئی ہے۔
    // 
    <section className="relative flex flex-col items-center justify-center h-[80vh] md:h-[85vh] bg-[#F2F2F2] overflow-hidden px-4">
      <WorldMap />
      <SocialIcons />
      
      <div className="relative z-20 flex flex-col items-center text-center max-w-6xl">
        
        {/* 
          حل: بیج کا سائز اور پیڈنگ موبائل پر تھوڑی کم کی گئی ہے۔
        */}
        <div className="mb-4 animate-fade-in"> 
          <span className="border-2 border-[#A7D7C5] text-[#A7D7C5] rounded-full px-5 py-2 text-xs sm:text-sm font-bold tracking-wide">
            Social Media Marketing
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Amplify Your Brand With Expert Social
          <br />
          Media Strategies
        </h1>
      </div>
    </section>
  );
};

export default SocialHeroSection;