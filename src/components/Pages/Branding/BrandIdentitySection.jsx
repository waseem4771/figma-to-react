// import React from 'react';

// const BrandIdentitySection = () => {
//   return (
//     // Poore section ka halka grey background
//     <section className="bg-[#F7F7F7] py-24 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
//         {/* Column 1: Heading */}
//         <div className="flex flex-col">
//           {/* Heading ke ooper wali choti line */}
//           <div className="w-16 h-1 bg-[#4DD0E1] mb-6"></div>
          
//           <h1 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
//             Developing
//             <br />
//             Brand Identities
//             <br />
//             That Resonate
//             <br />
//             With Consumers
//           </h1>
//         </div>

//         {/* Column 2: Paragraph aur Icon */}
//         <div className="relative pt-8">
//           {/* Ooper right corner main Message Icon */}
//           <div className="absolute -top-4 right-0">
//             <svg className="w-12 h-12 text-[#A7D7C5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
//             </svg>
//           </div>
          
//           {/* Paragraphs jinke darmiyan aek jaisi spacing hai */}
//           <div className="text-gray-600 leading-relaxed flex flex-col gap-6">
//             <p>
//               Your brand is the unique set of features that distinguish your identity from competitors. It’s what makes you stand out in a crowded marketplace. At Pixel Focus Media, we have extensive experience in developing and rebranding identities, offering valuable insights into what works and what doesn’t.
//             </p>
//             <p>
//               Our branding services align your corporate image with your objectives and goals. Our team of analysts and designers combine data-driven market research with creative flair to develop brand identities that are conceptually unique, engaging, and primed for success in their target markets.
//             </p>
//             <p>
//               Every business benefits from a modern, appealing, and clear brand presence. We provide comprehensive branding services to increase brand awareness and improve customer experience.
//             </p>
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default BrandIdentitySection;












// import React from 'react';

// const BrandIdentitySection = () => {
//   return (
//     // CHANGE 3: Section ka background color badal diya hai
//     <section className="bg-[#F2F2F2] py-24 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
//         {/* Column 1: Heading */}
//         <div className="flex flex-col">
//           <div className="w-16 h-1 bg-[#4DD0E1] mb-6"></div>
          
//           {/* CHANGE 1: Heading ko thora chota aur mota kar diya hai */}
//           <h1 className="text-4xl md:text-5xl font-normal text-gray-800 leading-tight">
//             Developing
//             <br />
//             Brand Identities
//             <br />
//             That Resonate
//             <br />
//             With Consumers
//           </h1>
//         </div>

//         {/* Column 2: Paragraph aur Icon */}
//         <div className="relative pt-8">
//           <div className="absolute -top-4 right-0">
//             <svg className="w-12 h-12 text-[#A7D7C5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
//             </svg>
//           </div>
          
//           {/* CHANGE 2: Paragraph ka text chota kar diya hai */}
//           <div className="text-sm text-gray-600 leading-relaxed flex flex-col gap-6">
//             <p>
//               Your brand is the unique set of features that distinguish your identity from competitors. It’s what makes you stand out in a crowded marketplace. At Pixel Focus Media, we have extensive experience in developing and rebranding identities, offering valuable insights into what works and what doesn’t.
//             </p>
//             <p>
//               Our branding services align your corporate image with your objectives and goals. Our team of analysts and designers combine data-driven market research with creative flair to develop brand identities that are conceptually unique, engaging, and primed for success in their target markets.
//             </p>
//             <p>
//               Every business benefits from a modern, appealing, and clear brand presence. We provide comprehensive branding services to increase brand awareness and improve customer experience.
//             </p>
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default BrandIdentitySection;














import React from 'react';

const BrandIdentitySection = () => {
  return (
    // CHANGE: Ooper ki padding kam kar di hai
    <section className="bg-[#F2F2F2] pt-12 pb-24 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Column 1: Heading */}
        <div className="flex flex-col">
          <div className="w-16 h-1 bg-[#4DD0E1] mb-6"></div>
          
          <h1 className="text-4xl md:text-5xl font-normal text-gray-800 leading-tight">
            Developing
            <br />
            Brand Identities
            <br />
            That Resonate
            <br />
            With Consumers
          </h1>
        </div>

        {/* Column 2: Paragraph aur Icon */}
        <div className="relative pt-8">
          <div className="absolute -top-4 right-0">
            <svg className="w-12 h-12 text-[#A7D7C5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
          </div>
          
          <div className="text-sm text-gray-600 leading-relaxed flex flex-col gap-6">
            <p>
              Your brand is the unique set of features that distinguish your identity from competitors. It’s what makes you stand out in a crowded marketplace. At Pixel Focus Media, we have extensive experience in developing and rebranding identities, offering valuable insights into what works and what doesn’t.
            </p>
            <p>
              Our branding services align your corporate image with your objectives and goals. Our team of analysts and designers combine data-driven market research with creative flair to develop brand identities that are conceptually unique, engaging, and primed for success in their target markets.
            </p>
            <p>
              Every business benefits from a modern, appealing, and clear brand presence. We provide comprehensive branding services to increase brand awareness and improve customer experience.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default BrandIdentitySection;