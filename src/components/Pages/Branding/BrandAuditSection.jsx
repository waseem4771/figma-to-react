// import React from 'react';

// const BrandAuditSection = () => {
//   return (
//     <section className="bg-[#F2F2F2] py-24 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto">

//         {/* ==================================================================== */}
//         {/* Top Section: 2-Column Layout */}
//         {/* ==================================================================== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          
//           {/* Column 1: Heading */}
//           <div>
//             <h2 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
//               Brand Auditing
//               <br />
//               and Analysis
//             </h2>
//           </div>

//           {/* Column 2: Paragraph */}
//           <div className="pt-2">
//             <p className="text-sm text-gray-600 leading-relaxed">
//               Understanding the current state of your brand is crucial for its growth and evolution. At Pixel Focus Media, we offer comprehensive brand auditing and analysis services to help you gain valuable insights into your brand's performance.
//             </p>
//           </div>
//         </div>

//         {/* ==================================================================== */}
//         {/* Bottom Section: Center-Aligned */}
//         {/* ==================================================================== */}
//         <div className="mt-24 text-center flex flex-col items-center">
          
//           <h3 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
//             Our Brand Auditing Process Includes
//           </h3>

//           <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
//             Understanding the current state of your brand is crucial for its growth and evolution. At Pixel Focus Media, we offer comprehensive brand auditing and analysis services to help you gain valuable insights into your brand's performance.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BrandAuditSection;













import React from 'react';

const BrandAuditSection = () => {
  // CHANGE 2: Section ke background ke liye naya style object
  const sectionStyle = {
    backgroundColor: '#F2F2F2', // Base color waisa hi hai
    // Iske ooper aek halka sa color tint add kiya gaya hai jo sirf top par hai
    backgroundImage: 'linear-gradient(to bottom, hsla(180, 50%, 90%, 0.6), transparent 50%)'
  };

  return (
    // CHANGE 2 & 3: Naya background style apply kiya hai aur padding adjust ki hai
    <section 
      className="pt-12 pb-24 px-8 md:px-16 lg:px-24"
      style={sectionStyle}
    >
      <div className="container mx-auto">

        {/* ==================================================================== */}
        {/* Top Section: 2-Column Layout */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
          
          <div>
            {/* CHANGE 1: Heading ko chota aur mota kiya hai */}
            <h2 className="text-4xl md:text-5xl font-normal text-gray-800 leading-tight">
              Brand Auditing
              <br />
              and Analysis
            </h2>
          </div>

          <div className="pt-2">
            <p className="text-sm text-gray-600 leading-relaxed">
              Understanding the current state of your brand is crucial for its growth and evolution. At Pixel Focus Media, we offer comprehensive brand auditing and analysis services to help you gain valuable insights into your brand's performance.
            </p>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* Bottom Section: Center-Aligned */}
        {/* ==================================================================== */}
        <div className="mt-24 text-center flex flex-col items-center">
          
          {/* CHANGE 1: Heading ko chota aur mota kiya hai */}
          <h3 className="text-3xl md:text-4xl font-normal text-gray-800 mb-6">
            Our Brand Auditing Process Includes
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
            Understanding the current state of your brand is crucial for its growth and evolution. At Pixel Focus Media, we offer comprehensive brand auditing and analysis services to help you gain valuable insights into your brand's performance.
          </p>
        </div>

      </div>
    </section>
  );
};

export default BrandAuditSection;