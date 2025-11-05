// import React, { useState } from 'react';

// // ====================================================================
// // Data for the Accordion Items
// // ====================================================================
// const accordionItems = [
//   {
//     title: "Website",
//     description: "Your website serves as the central hub of your brand identity, providing a consistent and engaging experience for visitors."
//   },
//   {
//     title: "Social Media",
//     description: "We create and manage social media profiles that reflect your brand’s personality and engage with your target audience effectively."
//   },
//   {
//     title: "Content Marketing",
//     description: "Developing valuable content such as blogs, videos, and infographics that aligns with your brand message and attracts customers."
//   },
//   {
//     title: "Advertising Campaigns",
//     description: "Launching targeted ad campaigns across various platforms that are consistent with your brand’s visual and messaging guidelines."
//   }
// ];

// // ====================================================================
// // Main Deploy Assets Section Component
// // ====================================================================
// const DeployAssetsSection = () => {
//   // State to track which accordion item is open
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     <section className="bg-[#F5F7F7] py-24 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
//         {/* Column 1: Heading */}
//         <div>
//           <h2 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
//             Deploy Your
//             <br />
//             Brand Assets
//           </h2>
//         </div>

//         {/* Column 2: Paragraph and Accordion */}
//         <div className="flex flex-col gap-8">
//           <p className="text-sm text-gray-600 leading-relaxed">
//             At Pixel Focus Media, we ensure that all brand assets are strategically deployed across digital channels to create a cohesive and compelling brand experience. This includes:
//           </p>
          
//           {/* Accordion Container */}
//           <div className="bg-[#E8F5E9] rounded-xl overflow-hidden">
//             {accordionItems.map((item, index) => (
//               <div key={index} className="border-b border-[#A7D7C5]">
                
//                 {/* Accordion Header */}
//                 <div 
//                   className={`flex justify-between items-center p-5 cursor-pointer transition-all duration-300 ${openIndex === index ? 'bg-gradient-to-r from-[#4DD0E1] to-[#78C2A4] text-white' : 'text-gray-800'}`}
//                   onClick={() => setOpenIndex(index)}
//                 >
//                   <h3 className="font-medium">{item.title}</h3>
//                   {openIndex === index ? (
//                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
//                   ) : (
//                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//                   )}
//                 </div>

//                 {/* Accordion Content */}
//                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
//                   <p className="p-5 text-sm text-gray-600">
//                     {item.description}
//                   </p>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DeployAssetsSection;










// import React, { useState } from 'react';

// // ====================================================================
// // Data for the Accordion Items
// // ====================================================================
// const accordionItems = [
//   {
//     title: "Website",
//     description: "Your website serves as the central hub of your brand identity, providing a consistent and engaging experience for visitors."
//   },
//   {
//     title: "Social Media",
//     description: "We create and manage social media profiles that reflect your brand’s personality and engage with your target audience effectively."
//   },
//   {
//     title: "Content Marketing",
//     description: "Developing valuable content such as blogs, videos, and infographics that aligns with your brand message and attracts customers."
//   },
//   {
//     title: "Advertising Campaigns",
//     description: "Launching targeted ad campaigns across various platforms that are consistent with your brand’s visual and messaging guidelines."
//   }
// ];

// // ====================================================================
// // Main Deploy Assets Section Component
// // ====================================================================
// const DeployAssetsSection = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   return (
//     // CHANGE 1 & 2: Padding adjust ki hai aur background color badal diya hai
//     <section className="bg-[#F2F2F2] pt-12 pb-24 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto">
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
//           {/* Column 1: Heading */}
//           <div>
//             <h2 className="text-5xl md:text-6xl font-normal text-gray-800 leading-tight">
//               Deploy Your
//               <br />
//               Brand Assets
//             </h2>
//           </div>

//           {/* Column 2: Paragraph */}
//           <div>
//             <p className="text-sm text-gray-600 leading-relaxed pt-2">
//               At Pixel Focus Media, we ensure that all brand assets are strategically deployed across digital channels to create a cohesive and compelling brand experience. This includes:
//             </p>
//           </div>
//         </div>

//         <div className="mt-16">
//           <div className="bg-[#E8F5E9] rounded-xl overflow-hidden">
//             {accordionItems.map((item, index) => (
//               <div key={index} className="border-b border-[#A7D7C5]">
                
//                 <div 
//                   className={`flex justify-between items-center p-5 cursor-pointer transition-all duration-300 ${openIndex === index ? 'bg-gradient-to-r from-[#4DD0E1] to-[#78C2A4] text-white' : 'text-gray-800'}`}
//                   onClick={() => setOpenIndex(index)}
//                 >
//                   <h3 className="font-medium">{item.title}</h3>
//                   {openIndex === index ? (
//                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
//                   ) : (
//                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
//                   )}
//                 </div>

//                 <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
//                   <p className="p-5 text-sm text-gray-600">
//                     {item.description}
//                   </p>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DeployAssetsSection;














import React, { useState } from 'react';

// ====================================================================
// Data for the Accordion Items
// ====================================================================
const accordionItems = [
  {
    title: "Website",
    description: "Your website serves as the central hub of your brand identity, providing a consistent and engaging experience for visitors."
  },
  {
    title: "Social Media",
    description: "We create and manage social media profiles that reflect your brand’s personality and engage with your target audience effectively."
  },
  {
    title: "Content Marketing",
    description: "Developing valuable content such as blogs, videos, and infographics that aligns with your brand message and attracts customers."
  },
  {
    title: "Advertising Campaigns",
    description: "Launching targeted ad campaigns across various platforms that are consistent with your brand’s visual and messaging guidelines."
  }
];

// ====================================================================
// Main Deploy Assets Section Component
// ====================================================================
const DeployAssetsSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // CHANGE 1: Yeh style ab poore section par apply hoga
  const sectionStyle = {
    backgroundColor: '#F2F2F2',
    backgroundImage: `
      radial-gradient(at 0% 0%, hsla(185, 30%, 90%, 0.5) 0px, transparent 50%),
      radial-gradient(at 100% 100%, hsla(190, 40%, 85%, 0.5) 0px, transparent 50%)
    `
  };

  return (
    <section 
      className="pt-12 pb-24 px-8 md:px-16 lg:px-24"
      style={sectionStyle}
    >
      <div className="container mx-auto">
        
        {/* CHANGE 2: Is div se background style hata diya hai */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
        >
          
          {/* Column 1: Heading */}
          <div>
            <h2 className="text-5xl md:text-6xl font-normal text-gray-800 leading-tight">
              Deploy Your
              <br />
              Brand Assets
            </h2>
          </div>

          {/* Column 2: Paragraph */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed pt-2">
              At Pixel Focus Media, we ensure that all brand assets are strategically deployed across digital channels to create a cohesive and compelling brand experience. This includes:
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-[#E8F5E9] rounded-xl overflow-hidden">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-b border-[#A7D7C5]">
                
                <div 
                  className={`flex justify-between items-center p-5 cursor-pointer transition-all duration-300 ${openIndex === index ? 'bg-gradient-to-r from-[#4DD0E1] to-[#78C2A4] text-white' : 'text-gray-800'}`}
                  onClick={() => setOpenIndex(index)}
                >
                  <h3 className="font-medium">{item.title}</h3>
                  {openIndex === index ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="p-5 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeployAssetsSection;