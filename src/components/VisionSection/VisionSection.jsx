// import React from 'react';
// import './VisionSection.css'; // CSS فائل کو یہاں لنک کریں

// const VisionSection = () => {
//   return (
//     <div className="relative bg-[#F2F2F2] text-[#333] font-sans">
//       <div className="min-h-screen flex flex-col justify-start items-center text-center px-4">
//         {/* 
//           حل: pt-20 کو pt-10 کر دیا گیا ہے تاکہ ہیڈنگ مزید اوپر چلی جائے
//         */}
//         <h1 className="text-4xl md:text-5xl font-light tracking-wide text-gray-800 mb-16 pt-10">
//           Delivering Results Through Digital Marketing
//         </h1>
//         <div className="flex flex-col items-center">
//           <div className="mouse-icon">
//             <div className="mouse-wheel"></div>
//           </div>
//           <span className="mt-4 text-sm font-light text-gray-600">Scroll Down</span>
//         </div>
//       </div>

//       {/* نچلا حصہ */}
//       <div className="relative py-20 md:py-32 px-8 md:px-16 lg:px-32">
//         <div className="absolute inset-0 top-1/4 bg-gradient-to-t from-[#E0F2F1] to-transparent opacity-60"></div>
//         <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//           <div className="text-left">
//             <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-gray-800">
//               Bringing Your <br />
//               Vision to Life
//             </h2>
//           </div>
//           <div className="text-left">
//             <p className="text-gray-600 leading-relaxed mb-8">
//               Digital marketing is an art, and we are the artists. We have a special touch that ensures the right message reaches your audience through the appropriate media channels. Whether you have a new brand to promote, an older brand in need of revitalisation, or a thriving brand ready to grow even more, we are here to help.
//             </p>
//             <button className="group flex items-center gap-3 px-6 py-3 border border-gray-400 rounded-full text-gray-700 hover:bg-gray-200 transition-colors">
//               Learn More
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 className="h-5 w-5 transition-transform group-hover:translate-x-1" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 stroke="currentColor" 
//                 strokeWidth={1.5}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisionSection;








import React from 'react';
import './VisionSection.css'; // CSS فائل کو یہاں لنک کریں

const VisionSection = () => {
  return (
    <div className="relative bg-[#F2F2F2] text-[#333] font-sans">

      {/* اوپری حصہ */}
      <div className="flex flex-col justify-start items-center text-center px-4 pb-48">
        <h1 className="text-3xl md:text-4xl font-normal tracking-wide text-gray-800 mb-16 pt-10">
          Delivering Results Through Digital Marketing
        </h1>
        <div className="flex flex-col items-center">
          <div className="mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
          <span className="mt-4 text-sm font-light text-gray-600">Scroll Down</span>
        </div>
      </div>

      {/* نچلا حصہ */}
      <div className="relative px-8 pb-20 md:px-16 lg:px-32 md:pb-32">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#B2DFDB] to-transparent opacity-100"></div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight text-gray-800">
              Bringing Your <br />
              Vision to Life
            </h2>
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              Digital marketing is an art, and we are the artists. We have a special touch that ensures the right message reaches your audience through the appropriate media channels. Whether you have a new brand to promote, an older brand in need of revitalisation, or a thriving brand ready to grow even more, we are here to help.
            </p>
            <button className="group flex items-center gap-3 px-6 py-2 border border-gray-400 text-gray-700 hover:bg-gray-200 transition-colors">
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
            </button> {/* حل: یہاں سے اضافی اسپیس ہٹا دی گئی ہے */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;