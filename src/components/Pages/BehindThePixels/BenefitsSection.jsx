


// import React from 'react';

// // Benefits ka data
// const benefitsData = [
//   {
//     title: "Proven Results",
//     description: "Our clients see a measurable increase in revenue and engagement."
//   },
//   {
//     title: "Creative Excellence",
//     description: "We bring a unique blend of creativity and technical expertise."
//   },
//   {
//     title: "Customer Focus",
//     description: "Your goals are our priority, and we tailor our approach to meet your needs."
//   },
//   {
//     title: "Cutting-edge Solutions",
//     description: "We stay ahead of trends to deliver the best digital marketing strategies."
//   }
// ];

// const BenefitsSection = () => {

//   const containerBackgroundStyle = {
//     backgroundImage: `
//       radial-gradient(at 0% 0%, hsla(185, 30%, 90%, 0.6) 0px, transparent 50%),
//       radial-gradient(at 100% 100%, hsla(190, 40%, 85%, 0.6) 0px, transparent 50%)
//     `
//   };

//   const cardBackgroundStyle = {
//     backgroundColor: '#EFF2F4',
//     backgroundImage: `
//       radial-gradient(at 0% 0%, hsla(185, 30%, 90%, 1) 0px, transparent 50%),
//       radial-gradient(at 100% 100%, hsla(190, 40%, 85%, 1) 0px, transparent 50%)
//     `
//   };

//   return (
//     // CHANGE: Section ke background main vertical gradient add kar diya hai
//     <section className="bg-gradient-to-b from-[#EFF2F4] to-[#EAEAEA] py-24 px-8">
      
//       <div 
//         className="container mx-auto text-center"
//         style={containerBackgroundStyle}
//       >
        
//         <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-16">
//           Benefits of Working with Us
//         </h2>

//         <div 
//           className="rounded-lg p-10 md:p-12"
//           style={cardBackgroundStyle}
//         >
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
//             {benefitsData.map((benefit, index) => (
//               <div 
//                 key={index}
//                 className={`text-center px-6 ${index > 0 ? 'md:border-l border-[#B2DFDB]' : ''}`}
//               >
//                 <h3 className="font-medium text-gray-800 text-lg mb-4">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                   {benefit.description}
//                 </p>
//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;
















import React from 'react';

// Benefits ka data
const benefitsData = [
  {
    title: "Proven Results",
    description: "Our clients see a measurable increase in revenue and engagement."
  },
  {
    title: "Creative Excellence",
    description: "We bring a unique blend of creativity and technical expertise."
  },
  {
    title: "Customer Focus",
    description: "Your goals are our priority, and we tailor our approach to meet your needs."
  },
  {
    title: "Cutting-edge Solutions",
    description: "We stay ahead of trends to deliver the best digital marketing strategies."
  }
];

const BenefitsSection = () => {

  const containerBackgroundStyle = {
    backgroundImage: `
      radial-gradient(at 0% 0%, hsla(185, 30%, 90%, 0.6) 0px, transparent 50%),
      radial-gradient(at 100% 100%, hsla(190, 40%, 85%, 0.6) 0px, transparent 50%)
    `
  };

  const cardBackgroundStyle = {
    backgroundColor: '#EFF2F4',
    backgroundImage: `
      radial-gradient(at 0% 0%, hsla(185, 30%, 90%, 1) 0px, transparent 50%),
      radial-gradient(at 100% 100%, hsla(190, 40%, 85%, 1) 0px, transparent 50%)
    `
  };

  return (
    // CHANGE: Section ki padding ko mobile ke liye adjust kiya gaya hai (`py-16 px-4`).
    <section className="bg-gradient-to-b from-[#EFF2F4] to-[#EAEAEA] py-16 px-4 sm:px-6 md:py-24 md:px-8">
      
      <div 
        className="container mx-auto text-center"
        style={containerBackgroundStyle}
      >
        
        {/* CHANGE: Heading ka font size mobile ke liye chhota kiya gaya hai (`text-4xl`). */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-12 md:mb-16">
          Benefits of Working with Us
        </h2>

        <div 
          // CHANGE: Card ke andar ki padding mobile ke liye kam ki gayi hai (`p-6`).
          className="rounded-lg p-6 md:p-12"
          style={cardBackgroundStyle}
        >
          
          {/* CHANGE: Mobile par cards ke beech vertical gap (`gap-y-8`) daala gaya hai. */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 lg:gap-x-0 gap-y-8 md:gap-y-10">
            
            {benefitsData.map((benefit, index) => (
              <div 
                key={index}
                // CHANGE: Border logic ko mobile (koi border nahi), tablet (top/left border), aur desktop (left border) ke liye aalaida kiya gaya hai.
                className={`text-center px-4 md:px-6 
                  ${(index === 1 || index === 3) ? 'md:border-l' : ''} 
                  ${index >= 2 ? 'md:border-t' : ''} 
                  lg:border-t-0 
                  ${index > 0 ? 'lg:border-l' : ''} 
                  border-[#B2DFDB]`}
              >
                <h3 className="font-medium text-gray-800 text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;



