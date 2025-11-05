// import React, { useState } from 'react';

// // Accordion ka data yahan aek array main store kiya gaya hai
// const approachSteps = [
//   {
//     title: "In-depth Analysis:",
//     description: "We start by conducting a thorough analysis of your current digital presence, market, and competitors."
//   },
//   {
//     title: "Strategy Development",
//     description: "Based on our analysis, we develop a comprehensive digital strategy tailored to your specific goals and target audience."
//   },
//   {
//     title: "Implementation:",
//     description: "Our expert team executes the strategy across various channels, ensuring seamless integration and optimal performance."
//   },
//   {
//     title: "Continuous Optimisation:",
//     description: "We continuously monitor, analyse, and optimise our campaigns to ensure we are delivering the best possible results and ROI."
//   }
// ];

// // Yeh aek chota component hai jo har accordion item ko handle karega
// const AccordionItem = ({ title, description, isOpen, onClick }) => {
//   return (
//     <div className="border-b border-[#B2DFDB]">
//       <button 
//         className="w-full flex justify-between items-center py-4 text-left"
//         onClick={onClick}
//       >
//         <h3 className="font-semibold text-gray-800">{title}</h3>
//         {isOpen ? (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//         )}
//       </button>
//       {/* Description ko smoothly open/close karne ke liye */}
//       <div 
//         className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
//       >
//         <p className="pb-4 text-sm text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };

// const ApproachSection = () => {
//   // State to keep track of which accordion item is open
//   const [openIndex, setOpenIndex] = useState(0); // Pehla item by default open rahega

//   return (
//     <section className="bg-[#EFF2F4] py-20 px-8 md:px-16 lg:px-24">
//       {/* Top separator line */}
//       <hr className="border-t border-[#80CBC4] mb-16 container mx-auto" />

//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
//         {/* Left Column: Heading and Icon */}
//         <div className="flex flex-col items-center text-center">
//           <h2 className="text-5xl md:text-6xl font-normal text-gray-800 leading-tight mb-8">
//             Our Approach
//           </h2>
//           {/* Refresh Icon SVG with gradient */}
//           <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" style={{stopColor: '#78C2A4', stopOpacity: 1}} />
//                 <stop offset="100%" style={{stopColor: '#4DD0E1', stopOpacity: 1}} />
//               </linearGradient>
//             </defs>
//             <path d="M 85,50 A 35,35 0 1 1 95,35 L 80,20 M 15,50 A 35,35 0 1 0 5,65 L 20,80" stroke="url(#grad1)" strokeWidth="6" strokeLinecap="round" fill="none"/>
//           </svg>
//         </div>

//         {/* Right Column: Content and Accordion */}
//         <div>
//           <p className="text-gray-600 leading-relaxed mb-8">
//             At Pixel Focus Media, we believe in a holistic approach to digital marketing. Our process is designed to ensure that every aspect of your online presence is optimised for success. Here's how we do it:
//           </p>
//           <hr className="border-t border-[#B2DFDB] mb-4" />

//           <div className="flex flex-col">
//             {approachSteps.map((step, index) => (
//               <AccordionItem 
//                 key={index}
//                 title={step.title}
//                 description={step.description}
//                 isOpen={openIndex === index}
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)} // Click par open/close toggle
//               />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ApproachSection;












// import React, { useState } from 'react';

// // Accordion ka data yahan aek array main store kiya gaya hai
// const approachSteps = [
//   {
//     title: "In-depth Analysis:",
//     description: "We start by conducting a thorough analysis of your current digital presence, market, and competitors."
//   },
//   {
//     title: "Strategy Development",
//     description: "Based on our analysis, we develop a comprehensive digital strategy tailored to your specific goals and target audience."
//   },
//   {
//     title: "Implementation:",
//     description: "Our expert team executes the strategy across various channels, ensuring seamless integration and optimal performance."
//   },
//   {
//     title: "Continuous Optimisation:",
//     description: "We continuously monitor, analyse, and optimise our campaigns to ensure we are delivering the best possible results and ROI."
//   }
// ];

// // Yeh aek chota component hai jo har accordion item ko handle karega
// const AccordionItem = ({ title, description, isOpen, onClick }) => {
//   return (
//     <div className="border-b border-[#B2DFDB]">
//       <button 
//         className="w-full flex justify-between items-center py-4 text-left"
//         onClick={onClick}
//       >
//         <h3 className="font-semibold text-gray-800">{title}</h3>
//         {isOpen ? (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
//         ) : (
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//         )}
//       </button>
//       {/* Description ko smoothly open/close karne ke liye */}
//       <div 
//         className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
//       >
//         <p className="pb-4 text-sm text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };

// const ApproachSection = () => {
//   // State to keep track of which accordion item is open
//   const [openIndex, setOpenIndex] = useState(0); // Pehla item by default open rahega

//   return (
//     <section className="bg-[#EFF2F4] py-20 px-8 md:px-16 lg:px-24">
//       {/* Top separator line */}
//       <hr className="border-t border-[#80CBC4] mb-16 container mx-auto" />

//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
//         {/* Left Column: Heading and Icon */}
//         <div className="flex flex-col items-center text-center">
//           <h2 className="text-5xl md:text-6xl font-normal text-gray-800 leading-tight mb-8">
//             Our Approach
//           </h2>
          
//           {/* UPDATED SVG ICON */}
//           <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <defs>
//               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" style={{stopColor: '#78C2A4', stopOpacity: 1}} />
//                 <stop offset="100%" style={{stopColor: '#4DD0E1', stopOpacity: 1}} />
//               </linearGradient>
//             </defs>
//             {/* Yeh naya path bilkul aap ki image jaisa icon banaye ga */}
//             <path 
//               d="M 70 25 A 35 35 0 1 0 85 55 L 95 45 M 85 55 L 70 60 M 30 75 A 35 35 0 1 0 15 45 L 5 55 M 15 45 L 30 40"
//               stroke="url(#grad1)" 
//               strokeWidth="8"
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               fill="none"
//             />
//           </svg>

//         </div>

//         {/* Right Column: Content and Accordion */}
//         <div>
//           <p className="text-gray-600 leading-relaxed mb-8">
//             At Pixel Focus Media, we believe in a holistic approach to digital marketing. Our process is designed to ensure that every aspect of your online presence is optimised for success. Here's how we do it:
//           </p>
//           <hr className="border-t border-[#B2DFDB] mb-4" />

//           <div className="flex flex-col">
//             {approachSteps.map((step, index) => (
//               <AccordionItem 
//                 key={index}
//                 title={step.title}
//                 description={step.description}
//                 isOpen={openIndex === index}
//                 onClick={() => setOpenIndex(openIndex === index ? null : index)} // Click par open/close toggle
//               />
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ApproachSection;















import React, { useState } from 'react';

// Accordion ka data yahan aek array main store kiya gaya hai
const approachSteps = [
  {
    title: "In-depth Analysis:",
    description: "We start by conducting a thorough analysis of your current digital presence, market, and competitors."
  },
  {
    title: "Strategy Development",
    description: "Based on our analysis, we develop a comprehensive digital strategy tailored to your specific goals and target audience."
  },
  {
    title: "Implementation:",
    description: "Our expert team executes the strategy across various channels, ensuring seamless integration and optimal performance."
  },
  {
    title: "Continuous Optimisation:",
    description: "We continuously monitor, analyse, and optimise our campaigns to ensure we are delivering the best possible results and ROI."
  }
];

// Yeh aek chota component hai jo har accordion item ko handle karega
const AccordionItem = ({ title, description, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#B2DFDB]">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={onClick}
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <p className="pb-4 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ApproachSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#EFF2F4] pt-8 pb-20 px-8 md:px-16 lg:px-24">
      <hr className="border-t border-[#80CBC4] mb-16 container mx-auto" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div className="flex flex-col items-start text-left">
          <h2 className="text-5xl md:text-6xl font-normal text-gray-800 leading-tight mb-8">
            Our Approach
          </h2>
          
          {/* CHANGE: Icon ko aur right kar diya hai */}
          <svg
            width="150"
            height="150"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-16 mt-16" // Left margin barha diya hai
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#78C2A4', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#4DD0E1', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path
              d="M 70 25 A 35 35 0 1 0 85 55 L 95 45 M 85 55 L 70 60 M 30 75 A 35 35 0 1 0 15 45 L 5 55 M 15 45 L 30 40"
              stroke="url(#grad1)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>

        </div>

        <div>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            At Pixel Focus Media, we believe in a holistic approach to digital marketing. Our process is designed to ensure that every aspect of your online presence is optimised for success. Here's how we do it:
          </p>
          <hr className="border-t border-[#B2DFDB] mb-4" />
          <div className="flex flex-col">
            {approachSteps.map((step, index) => (
              <AccordionItem
                key={index}
                title={step.title}
                description={step.description}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApproachSection;