// import React from 'react';

// // ====================================================================
// // Data for the Audit Process Steps
// // ====================================================================
// const auditSteps = [
//   {
//     title: "Market Analysis",
//     description: "Evaluating market trends and your brand’s position relative to competitors.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v18h16" />
//   },
//   {
//     title: "Customer Feedback",
//     description: "Gathering and analysing customer feedback to understand perceptions and experiences.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//   },
//   {
//     title: "Performance Metrics",
//     description: "Assessing key performance indicators (KPIs) such as brand awareness, engagement, and loyalty.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   },
//   {
//     title: "Visual Identity Review",
//     description: "Examining the consistency and impact of your brand’s visual elements across all platforms.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//   },
//   {
//     title: "Strategic Recommendations",
//     description: "Providing actionable insights and recommendations to strengthen your brand’s presence and performance.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0a2 2 0 100 4 2 2 0 000-4z" />
//   }
// ];

// // ====================================================================
// // Main Audit Process Section Component
// // ====================================================================
// const AuditProcessSection = () => {
//   return (
//     <section className="bg-[#F2F2F2] py-20 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto">
        
//         {/* Container for all the steps */}
//         <div className="flex flex-col gap-16">
          
//           {auditSteps.map((step, index) => (
//             <div key={index} className="flex items-center gap-8">
              
//               {/* Gradient Icon */}
//               <div className="w-24 h-24 flex-shrink-0">
//                 <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth="1">
//                   <defs>
//                     <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" style={{ stopColor: '#4DD0E1' }} />
//                       <stop offset="100%" style={{ stopColor: '#78C2A4' }} />
//                     </linearGradient>
//                   </defs>
//                   <g stroke="url(#icon-gradient)">
//                     {step.icon}
//                   </g>
//                 </svg>
//               </div>

//               {/* Vertical Separator */}
//               <div className="h-16 border-l border-gray-300"></div>

//               {/* Text Content */}
//               <div>
//                 <h3 className="text-4xl font-light text-gray-800 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   {step.description}
//                 </p>
//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AuditProcessSection;












// import React from 'react';

// // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// // Data for the Audit Process Steps
// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// const auditSteps = [
//   {
//     title: "Market Analysis",
//     description: "Evaluating market trends and your brand’s position relative to competitors.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v18h16" />
//   },
//   {
//     title: "Customer Feedback",
//     description: "Gathering and analysing customer feedback to understand perceptions and experiences.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//   },
//   {
//     title: "Performance Metrics",
//     description: "Assessing key performance indicators (KPIs) such as brand awareness, engagement, and loyalty.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//   },
//   {
//     title: "Visual Identity Review",
//     description: "Examining the consistency and impact of your brand’s visual elements across all platforms.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//   },
//   {
//     title: "Strategic Recommendations",
//     description: "Providing actionable insights and recommendations to strengthen your brand’s presence and performance.",
//     icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0a2 2 0 100 4 2 2 0 000-4z" />
//   }
// ];

// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// // Main Audit Process Section Component
// // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// const AuditProcessSection = () => {
//   return (
//     // CHANGE 1: Section ko ooper karne ke liye padding adjust ki hai
//     <section className="bg-[#F2F2F2] pt-0 pb-20 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto">
        
//         <div className="flex flex-col gap-16">
          
//           {auditSteps.map((step, index) => (
//             <div key={index} className="flex items-center gap-8">
              
//               <div className="w-24 h-24 flex-shrink-0">
//                 {/* CHANGE 3: Icons ka stroke mota kiya hai takay color tez lage */}
//                 <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
//                   <defs>
//                     <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" style={{ stopColor: '#4DD0E1' }} />
//                       <stop offset="100%" style={{ stopColor: '#78C2A4' }} />
//                     </linearGradient>
//                   </defs>
//                   <g stroke="url(#icon-gradient)">
//                     {step.icon}
//                   </g>
//                 </svg>
//               </div>

//               <div className="h-16 border-l border-gray-300"></div>

//               <div>
//                 {/* CHANGE 2: Heading ko mota kiya hai */}
//                 <h3 className="text-4xl font-normal text-gray-800 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   {step.description}
//                 </p>
//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AuditProcessSection;





















import React from 'react';

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Data for the Audit Process Steps (اس میں کوئی تبدیلی نہیں)
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const auditSteps = [
  {
    title: "Market Analysis",
    description: "Evaluating market trends and your brand’s position relative to competitors.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4v18h16" />
  },
  {
    title: "Customer Feedback",
    description: "Gathering and analysing customer feedback to understand perceptions and experiences.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  },
  {
    title: "Performance Metrics",
    description: "Assessing key performance indicators (KPIs) such as brand awareness, engagement, and loyalty.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  },
  {
    title: "Visual Identity Review",
    description: "Examining the consistency and impact of your brand’s visual elements across all platforms.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  },
  {
    title: "Strategic Recommendations",
    description: "Providing actionable insights and recommendations to strengthen your brand’s presence and performance.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0a2 2 0 100 4 2 2 0 000-4z" />
  }
];

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Main Audit Process Section Component (Responsive Version)
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
const AuditProcessSection = () => {
  return (
    // 
    //   تبدیلیاں:
    //   1. py-16 sm:py-20: سیکشن کی عمودی پیڈنگ کو ریسپانسیو بنایا گیا۔
    //   2. px-4 sm:px-8: افقی پیڈنگ موبائل کے لیے کم کی گئی۔
    // 
    <section className="bg-[#F2F2F2] pt-16 pb-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">
        
        {/* 
          تبدیلی:
          1. gap-12 sm:gap-16: مراحل کے درمیان عمودی فاصلہ موبائل پر کم کیا گیا۔
        */}
        <div className="flex flex-col gap-12 sm:gap-16">
          
          {auditSteps.map((step, index) => (
            // 
            //   تبدیلی:
            //   1. gap-4 sm:gap-8: آئیکن اور متن کے درمیان فاصلہ موبائل پر کم کیا گیا۔
            // 
            <div key={index} className="flex items-center gap-4 sm:gap-8">
              
              {/* 
                تبدیلی:
                1. w-16 h-16...: آئیکن کا سائز موبائل کے لیے (w-16) سے شروع کیا گیا ہے۔
              */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <defs>
                    <linearGradient id={`icon-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#4DD0E1' }} />
                      <stop offset="100%" style={{ stopColor: '#78C2A4' }} />
                    </linearGradient>
                  </defs>
                  {/* ہر آئیکن کے لیے منفرد ID استعمال کی گئی */}
                  <g stroke={`url(#icon-gradient-${index})`}>
                    {step.icon}
                  </g>
                </svg>
              </div>

              <div className="h-12 sm:h-16 border-l border-gray-300"></div>

              <div>
                {/* 
                  تبدیلی:
                  1. text-xl sm:text-2xl...: ہیڈنگ کا سائز موبائل کے لیے (text-xl) سے شروع کیا گیا ہے۔
                */}
                <h3 className="text-xl sm:text-2xl md:text-4xl font-normal text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {step.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AuditProcessSection;