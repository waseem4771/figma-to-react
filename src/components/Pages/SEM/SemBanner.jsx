
// import React from 'react';

// // ایک دوبارہ قابل استعمال کمپوننٹ ہر حرف کے لیے
// const Letter = ({ children, className = '' }) => (
//   // حروف کا سائز
//   <div className={`w-full h-80 sm:h-96 ${className}`}>
//     {children}
//   </div>
// );

// // مرکزی SEM بینر کمپوننٹ
// const SemBanner = () => {
//   return (
//     <section className="bg-[#F2F2F2] w-full pt-16 pb-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
//       {/* حروف کو قریب لانے کے لیے منفی مارجن کا استعمال */}
//       <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        
//         {/* حرف 'S' */}
//         <Letter className="transform -translate-y-6">
//           <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//             <defs>
//               <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" style={{ stopColor: '#d9fbf0' }} />
//                 <stop offset="100%" style={{ stopColor: '#a1f0d9' }} />
//               </linearGradient>
//             </defs>
            
//             {/* حرف کی شکل */}
//             {/* تبدیلی: filter="url(#glow)" کو ہٹا دیا گیا ہے */}
//             <path 
//               d="M80 30 C80 15, 65 5, 50 5 S 20 15, 20 30 V 50 C 20 55, 25 60, 30 60 H 70 C 75 60, 80 65, 80 70 V 90 C 80 105, 65 115, 50 115 S 20 105, 20 90" 
//               stroke="url(#gradient)" 
//               fill="transparent"
//               strokeWidth="20"
//               strokeLinecap="round"
//             />
//             {/* اندرونی لائن */}
//             <path 
//               d="M65 25 C65 20, 60 15, 50 15 S 35 20, 35 25 V 50 C 35 52.5, 37.5 55, 40 55 H 60 C 62.5 55, 65 57.5, 65 60 V 95 C 65 100, 60 105, 50 105 S 35 100, 35 95" 
//               fill="none" 
//               stroke="white" 
//               strokeWidth="2.5" 
//             />
//             {/* ٹرمینلز */}
//             <circle cx="65" cy="25" r="5" fill="white" />
//             <circle cx="35" cy="95" r="5" fill="white" />
//             <line x1="63" y1="25" x2="67" y2="25" stroke="#333" strokeWidth="1.5" />
//             <line x1="65" y1="23" x2="65" y2="27" stroke="#333" strokeWidth="1.5" />
//             <line x1="33" y1="95" x2="37" y2="95" stroke="#333" strokeWidth="1.5" />
//           </svg>
//         </Letter>
        
//         {/* حرف 'E' (قریب کیا گیا) */}
//         <Letter className="transform translate-y-10 -ml-16 sm:-ml-20">
//           <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//             {/* حرف کی شکل */}
//             <path 
//               d="M85 5 H 15 V 115 H 85 V 95 H 35 V 70 H 80 V 50 H 35 V 25 H 85 Z" 
//               fill="url(#gradient)" 
//               stroke="none"
//             />
//             {/* اندرونی لائن */}
//             <path 
//               d="M30 20 V 100" 
//               fill="none" 
//               stroke="white" 
//               strokeWidth="2.5" 
//             />
//             {/* ٹرمینلز */}
//             <circle cx="30" cy="20" r="5" fill="white" />
//             <circle cx="30" cy="100" r="5" fill="white" />
//             <line x1="28" y1="20" x2="32" y2="20" stroke="#333" strokeWidth="1.5" />
//             <line x1="30" y1="18" x2="30" y2="22" stroke="#333" strokeWidth="1.5" />
//             <line x1="28" y1="100" x2="32" y2="100" stroke="#333" strokeWidth="1.5" />
//           </svg>
//         </Letter>

//         {/* حرف 'M' (قریب کیا گیا) */}
//         <Letter className="transform -translate-y-12 -ml-16 sm:-ml-20">
//           <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//             {/* حرف کی شکل */}
//             <path 
//               d="M5 115 V 5 H 25 L 50 45 L 75 5 H 95 V 115 H 75 V 45 L 50 85 L 25 45 V 115 Z" 
//               fill="url(#gradient)" 
//               stroke="none"
//             />
//             {/* اندرونی لائن */}
//             <path 
//               d="M20 15 L 50 65 L 80 15 V 60 H 65 V 100" 
//               fill="none" 
//               stroke="white" 
//               strokeWidth="2.5" 
//             />
//             {/* ٹرمینلز */}
//             <circle cx="20" cy="15" r="5" fill="white" />
//             <circle cx="50" cy="65" r="5" fill="white" />
//             <circle cx="65" cy="100" r="5" fill="white" />
//             <line x1="18" y1="15" x2="22" y2="15" stroke="#333" strokeWidth="1.5" />
//             <line x1="20" y1="13" x2="20" y2="17" stroke="#333" strokeWidth="1.5" />
//             <line x1="48" y1="65" x2="52" y2="65" stroke="#333" strokeWidth="1.5" />
//             <line x1="50" y1="63" x2="50" y2="67" stroke="#333" strokeWidth="1.5" />
//             <line x1="63" y1="100" x2="67" y2="100" stroke="#333" strokeWidth="1.5" />
//           </svg>
//         </Letter>

//       </div>
//     </section>
//   );
// };

// export default SemBanner;


















// import React from 'react';

// // ====================================================================
// // Letter Component (Responsive Version)
// // ====================================================================
// const Letter = ({ children, className = '' }) => (
//   // 
//   //   حل: حروف کی اونچائی کو موبائل کے لیے (h-48) سے شروع کیا گیا ہے اور
//   //        اسکرین کے بڑھنے کے ساتھ ساتھ اسے بتدریج بڑھایا گیا ہے۔
//   // 
//   <div className={`w-full h-48 sm:h-64 md:h-80 lg:h-96 ${className}`}>
//     {children}
//   </div>
// );

// // ====================================================================
// // Main SemBanner Component (Responsive Version)
// // ====================================================================
// const SemBanner = () => {
//   return (
//     // حل: سیکشن کی پیڈنگ کو موبائل کے لیے ایڈجسٹ کیا گیا
//     <section className="bg-[#F2F2F2] w-full pt-16 pb-20 px-2 sm:px-4 md:px-8 lg:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        
//         {/* حرف 'S' */}
//         {/* حل: عمودی پوزیشن کو ریسپانسیو بنایا گیا */}
//         <Letter className="transform -translate-y-3 sm:-translate-y-4 md:-translate-y-6">
//           <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//             <defs>
//               <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                 <stop offset="0%" style={{ stopColor: '#d9fbf0' }} />
//                 <stop offset="100%" style={{ stopColor: '#a1f0d9' }} />
//               </linearGradient>
//             </defs>
//             <path 
//               d="M80 30 C80 15, 65 5, 50 5 S 20 15, 20 30 V 50 C 20 55, 25 60, 30 60 H 70 C 75 60, 80 65, 80 70 V 90 C 80 105, 65 115, 50 115 S 20 105, 20 90" 
//               stroke="url(#gradient)" 
//               fill="transparent"
//               strokeWidth="20"
//               strokeLinecap="round"
//             />
//             <path 
//               d="M65 25 C65 20, 60 15, 50 15 S 35 20, 35 25 V 50 C 35 52.5, 37.5 55, 40 55 H 60 C 62.5 55, 65 57.5, 65 60 V 95 C 65 100, 60 105, 50 105 S 35 100, 35 95" 
//               fill="none" 
//               stroke="white" 
//               strokeWidth="2.5" 
//             />
//             <circle cx="65" cy="25" r="5" fill="white" />
//             <circle cx="35" cy="95" r="5" fill="white" />
//             <line x1="63" y1="25" x2="67" y2="25" stroke="#333" strokeWidth="1.5" />
//             <line x1="65" y1="23" x2="65" y2="27" stroke="#333" strokeWidth="1.5" />
//             <line x1="33" y1="95" x2="37" y2="95" stroke="#333" strokeWidth="1.5" />
//           </svg>
//         </Letter>
        
//         {/* حرف 'E' */}
//         {/* حل: عمودی پوزیشن اور منفی مارجن دونوں کو ریسپانسیو بنایا گیا */}
//         <Letter className="transform translate-y-5 sm:translate-y-6 md:translate-y-10 -ml-10 sm:-ml-12 md:-ml-16 lg:-ml-20">
//           <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//             <path 
//               d="M85 5 H 15 V 115 H 85 V 95 H 35 V 70 H 80 V 50 H 35 V 25 H 85 Z" 
//               fill="url(#gradient)" 
//               stroke="none"
//             />
//             <path 
//               d="M30 20 V 100" 
//               fill="none" 
//               stroke="white" 
//               strokeWidth="2.5" 
//             />
//             <circle cx="30" cy="20" r="5" fill="white" />
//             <circle cx="30" cy="100" r="5" fill="white" />
//             <line x1="28" y1="20" x2="32" y2="20" stroke="#333" strokeWidth="1.5" />
//             <line x1="30" y1="18" x2="30" y2="22" stroke="#333" strokeWidth="1.5" />
//             <line x1="28" y1="100" x2="32" y2="100" stroke="#333" strokeWidth="1.5" />
//           </svg>
//         </Letter>

//         {/* حرف 'M' */}
//         {/* حل: عمودی پوزیشن اور منفی مارجن دونوں کو ریسپانسیو بنایا گیا */}
//         <Letter className="transform -translate-y-6 sm:-translate-y-8 md:-translate-y-12 -ml-10 sm:-ml-12 md:-ml-16 lg:-ml-20">
//           <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
//             <path 
//               d="M5 115 V 5 H 25 L 50 45 L 75 5 H 95 V 115 H 75 V 45 L 50 85 L 25 45 V 115 Z" 
//               fill="url(#gradient)" 
//               stroke="none"
//             />
//             <path 
//               d="M20 15 L 50 65 L 80 15 V 60 H 65 V 100" 
//               fill="none" 
//               stroke="white" 
//               strokeWidth="2.5" 
//             />
//             <circle cx="20" cy="15" r="5" fill="white" />
//             <circle cx="50" cy="65" r="5" fill="white" />
//             <circle cx="65" cy="100" r="5" fill="white" />
//             <line x1="18" y1="15" x2="22" y2="15" stroke="#333" strokeWidth="1.5" />
//             <line x1="20" y1="13" x2="20" y2="17" stroke="#333" strokeWidth="1.5" />
//             <line x1="48" y1="65" x2="52" y2="65" stroke="#333" strokeWidth="1.5" />
//             <line x1="50" y1="63" x2="50" y2="67" stroke="#333" strokeWidth="1.5" />
//             <line x1="63" y1="100" x2="67" y2="100" stroke="#333" strokeWidth="1.5" />
//           </svg>
//         </Letter>

//       </div>
//     </section>
//   );
// };

// export default SemBanner;










import React from 'react';

// ====================================================================
// Letter Component (Responsive Version - Minimal Changes)
// ====================================================================
const Letter = ({ children, className = '' }) => (
  //
  //   حل: حروف کی اونچائی کو موبائل کے لیے (h-32) سے شروع کیا گیا ہے تاکہ
  //        چھوٹی اسکرینوں پر زیادہ جگہ نہ لے۔ اسکرین کے بڑھنے کے ساتھ
  //        इसे (sm:h-48 md:h-64 lg:h-80 xl:h-96) तक बढ़ाया गया है।
  //
  <div className={`w-full h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 flex items-center justify-center ${className}`}>
    {children}
  </div>
);

// ====================================================================
// Main SemBanner Component (Responsive Version - Minimal Changes)
// ====================================================================
const SemBanner = () => {
  return (
    // حل: سیکشن کی پیڈنگ کو موبائل کے لیے ایڈجسٹ کیا گیا،
    //      और `overflow-hidden` को बरकरार रखा गया ताकि मार्जिन से बाहर निकलने वाला सामग्री छुप जाए।
    //      `py-8` और `px-1` बेस मोबाइल के लिए, फिर `sm:` से ऊपर बढ़ाया गया।
    <section className="bg-[#F2F2F2] w-full pt-8 pb-12 px-1 xs:px-2 sm:px-4 md:px-8 lg:px-16 overflow-hidden">
      {/*
        حل: `grid-cols-3` को बरकरार रखा गया है। अक्षरों के बीच ओवरलैप को
             छोटे स्क्रीन पर प्रबंधित करने के लिए मार्जिन और ट्रांसफॉर्म क्लास
             के लिए अधिक छोटे-ब्रेकपॉइंट वैल्यू जोड़े गए हैं।
             `gap-x-0` डिफ़ॉल्ट रूप से, `sm:` से ऊपर गैप जोड़ा गया।
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center gap-x-0 sm:gap-x-4 md:gap-x-8">

        {/* حرف 'S' */}
        {/* حل: عمودی پوزیشن کو ریسپانسیو بنایا گیا, छोटे सहेज के लिए समायोजित।
             `xs:` और `sm:` ब्रेकपॉइंट पर छोटे `translate-y` वैल्यू जोड़े गए। */}
        <Letter className="transform -translate-y-1 xs:-translate-y-2 sm:-translate-y-3 md:-translate-y-4 lg:-translate-y-6">
          <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#d9fbf0' }} />
                <stop offset="100%" style={{ stopColor: '#a1f0d9' }} />
              </linearGradient>
            </defs>
            <path
              d="M80 30 C80 15, 65 5, 50 5 S 20 15, 20 30 V 50 C 20 55, 25 60, 30 60 H 70 C 75 60, 80 65, 80 70 V 90 C 80 105, 65 115, 50 115 S 20 105, 20 90"
              stroke="url(#gradient)"
              fill="transparent"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M65 25 C65 20, 60 15, 50 15 S 35 20, 35 25 V 50 C 35 52.5, 37.5 55, 40 55 H 60 C 62.5 55, 65 57.5, 65 60 V 95 C 65 100, 60 105, 50 105 S 35 100, 35 95"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="65" cy="25" r="5" fill="white" />
            <circle cx="35" cy="95" r="5" fill="white" />
            <line x1="63" y1="25" x2="67" y2="25" stroke="#333" strokeWidth="1.5" />
            <line x1="65" y1="23" x2="65" y2="27" stroke="#333" strokeWidth="1.5" />
            <line x1="33" y1="95" x2="37" y2="95" stroke="#333" strokeWidth="1.5" />
          </svg>
        </Letter>

        {/* حرف 'E' */}
        {/* حل: عمودی پوزیشن और नकारात्मक मार्जिन दोनों को ریسپانسیو बनाया गया, छोटे स्क्रीन के लिए समायोजित।
             `xs:` और `sm:` ब्रेकपॉइंट पर छोटे `translate-y` और `ml` वैल्यू जोड़े गए। */}
        <Letter className="transform translate-y-2 xs:translate-y-3 sm:translate-y-5 md:translate-y-6 lg:translate-y-10 -ml-4 xs:-ml-6 sm:-ml-10 md:-ml-12 lg:-ml-16">
          <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <path
              d="M85 5 H 15 V 115 H 85 V 95 H 35 V 70 H 80 V 50 H 35 V 25 H 85 Z"
              fill="url(#gradient)"
              stroke="none"
            />
            <path
              d="M30 20 V 100"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="30" cy="20" r="5" fill="white" />
            <circle cx="30" cy="100" r="5" fill="white" />
            <line x1="28" y1="20" x2="32" y2="20" stroke="#333" strokeWidth="1.5" />
            <line x1="30" y1="18" x2="30" y2="22" stroke="#333" strokeWidth="1.5" />
            <line x1="28" y1="100" x2="32" y2="100" stroke="#333" strokeWidth="1.5" />
          </svg>
        </Letter>

        {/* حرف 'M' */}
        {/* حل: عمودی پوزیشن और नकारात्मक मार्जिन दोनों को ریسپانسیو बनाया गया, छोटे स्क्रीन के लिए समायोजित।
             `xs:` और `sm:` ब्रेकपॉइंट पर छोटे `translate-y` और `ml` वैल्यू जोड़े गए। */}
        <Letter className="transform -translate-y-2 xs:-translate-y-3 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-12 -ml-4 xs:-ml-6 sm:-ml-10 md:-ml-12 lg:-ml-16">
          <svg viewBox="0 0 100 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <path
              d="M5 115 V 5 H 25 L 50 45 L 75 5 H 95 V 115 H 75 V 45 L 50 85 L 25 45 V 115 Z"
              fill="url(#gradient)"
              stroke="none"
            />
            <path
              d="M20 15 L 50 65 L 80 15 V 60 H 65 V 100"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
            />
            <circle cx="20" cy="15" r="5" fill="white" />
            <circle cx="50" cy="65" r="5" fill="white" />
            <circle cx="65" cy="100" r="5" fill="white" />
            <line x1="18" y1="15" x2="22" y2="15" stroke="#333" strokeWidth="1.5" />
            <line x1="20" y1="13" x2="20" y2="17" stroke="#333" strokeWidth="1.5" />
            <line x1="48" y1="65" x2="52" y2="65" stroke="#333" strokeWidth="1.5" />
            <line x1="50" y1="63" x2="50" y2="67" stroke="#333" strokeWidth="1.5" />
            <line x1="63" y1="100" x2="67" y2="100" stroke="#333" strokeWidth="1.5" />
          </svg>
        </Letter>

      </div>
    </section>
  );
};

export default SemBanner;













