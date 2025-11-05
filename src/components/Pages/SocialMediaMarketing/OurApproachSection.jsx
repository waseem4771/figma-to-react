// import React from 'react';

// const Feature = ({ title, description, showBottomBorder = true }) => (
//   <div className="flex flex-col">
//     <div className="w-full border-t border-[#A7D7C5] mb-6"></div>
//     <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
//     <p className="text-gray-600 text-base leading-relaxed">
//       {description}
//     </p>
//     {showBottomBorder && <div className="w-full border-b border-[#A7D7C5] mt-6"></div>}
//   </div>
// );

// const OurApproachSection = () => {
//   return (
//     <section className="bg-[#F2F2F2] py-24 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-16">

//         {/* Left Side: Main Heading */}
//         <div className="lg:w-2/5 mb-12 lg:mb-0">
//           <h2 className="text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
//             Our Approach to Social Media Marketing
//           </h2>
//           <p className="mt-6 text-xl text-gray-500">
//             Engage with Your Audience
//           </p>
//         </div>

//         {/* Right Side: Features Grid */}
//         <div className="lg:w-3/5">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
//             <Feature 
//               title="Start Conversations"
//               description="Social media allows unprecedented engagement with your customers. We help you start and sustain meaningful conversations, fostering positive brand recognition."
//             />
//             <Feature 
//               title="Humanise Your Brand"
//               description="Show the people and processes behind your products, creating relatable and engaging content that resonates with your audience."
//             />
//             <Feature 
//               title="Immediate Feedback"
//               description="Leverage the immediate feedback loop of social media to understand customer sentiments and adjust your strategies in real time."
//               showBottomBorder={false} // This will hide the bottom border for the last item
//             />
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default OurApproachSection;


















// import React from 'react';

// // A re-usable component for each feature item
// const Feature = ({ title, description }) => (
//   <div className="w-full">
//     <div className="border-t border-[#A7D7C5] pt-6">
//       <h3 className="text-2xl font-medium text-gray-800 mb-3">{title}</h3>
//       <p className="text-gray-500 text-sm leading-relaxed">
//         {description}
//       </p>
//     </div>
//   </div>
// );

// const OurApproachSection = () => {
//   return (
//     <section className="bg-[#F2F2F2] py-20 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-20">

//         {/* Left Side: Main Heading */}
//         <div className="lg:w-2/5 mb-16 lg:mb-0 text-center lg:text-left">
//           <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
//             Our Approach to Social Media Marketing
//           </h2>
//           <p className="mt-6 text-xl text-gray-500">
//             Engage with Your Audience
//           </p>
//         </div>

//         {/* Right Side: Features */}
//         <div className="lg:w-3/5">
//           <div className="flex flex-wrap -mx-6">
            
//             {/* Feature 1 */}
//             <div className="w-full sm:w-1/2 px-6 mb-12">
//               <Feature 
//                 title="Start Conversations"
//                 description="Social media allows unprecedented engagement with your customers. We help you start and sustain meaningful conversations, fostering positive brand recognition."
//               />
//             </div>
            
//             {/* Feature 2 */}
//             <div className="w-full sm:w-1/2 px-6 mb-12">
//               <Feature 
//                 title="Humanise Your Brand"
//                 description="Show the people and processes behind your products, creating relatable and engaging content that resonates with your audience."
//               />
//             </div>
            
//             {/* Feature 3 (Centered below) */}
//             <div className="w-full flex justify-center px-6">
//               <div className="sm:w-1/2">
//                 <Feature 
//                   title="Immediate Feedback"
//                   description="Leverage the immediate feedback loop of social media to understand customer sentiments and adjust your strategies in real time."
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default OurApproachSection;










// import React from 'react';

// // A re-usable component for each feature item
// const Feature = ({ title, description }) => (
//   <div className="w-full">
//     <div className="border-t-2 border-primary pt-6">
//       <h3 className="text-2xl font-normal text-foreground mb-3">{title}</h3>
//       <p className="text-muted-foreground text-sm leading-relaxed">
//         {description}
//       </p>
//     </div>
//   </div>
// );

// const OurApproachSection = () => {
//   return (
//     <section className="bg-background py-20 px-4 sm:px-6 lg:px-12">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-20">

//         {/* Left Side: Main Heading */}
//         <div className="lg:w-2/5 mb-16 lg:mb-0">
//           <h2 className="text-5xl lg:text-6xl font-light text-foreground leading-tight">
//             Our Approach to Social Media Marketing
//           </h2>
//           <p className="mt-6 text-xl text-muted-foreground">
//             Engage with Your Audience
//           </p>
//         </div>

//         {/* Right Side: Features */}
//         <div className="lg:w-3/5">
//           <div className="flex flex-wrap -mx-6">
            
//             {/* Feature 1 */}
//             <div className="w-full sm:w-1/2 px-6 mb-12">
//               <Feature 
//                 title="Start Conversations"
//                 description="Social media allows unprecedented engagement with your customers. We help you start and sustain meaningful conversations, fostering positive brand recognition."
//               />
//             </div>
            
//             {/* Feature 2 */}
//             <div className="w-full sm:w-1/2 px-6 mb-12">
//               <Feature 
//                 title="Humanise Your Brand"
//                 description="Show the people and processes behind your products, creating relatable and engaging content that resonates with your audience."
//               />
//             </div>
            
//             {/* Feature 3 (Centered below) */}
//             <div className="w-full flex justify-center px-6">
//               <div className="sm:w-1/2">
//                 <Feature 
//                   title="Immediate Feedback"
//                   description="Leverage the immediate feedback loop of social media to understand customer sentiments and adjust your strategies in real time."
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default OurApproachSection;












// import React from 'react';

// // A re-usable component for each feature item
// const Feature = ({ title, description }) => (
//   <div className="w-full">
//     <div className="border-t-2 border-primary pt-6">
//       <h3 className="text-2xl font-normal text-foreground mb-3">{title}</h3>
//       <p className="text-muted-foreground text-sm leading-relaxed">
//         {description}
//       </p>
//     </div>
//   </div>
// );

// const OurApproachSection = () => {
//   return (
//     // میں نے یہاں تبدیلیاں کی ہیں
//     <section 
//       className="py-20 px-4 sm:px-6 lg:px-12"
//       style={{
//         backgroundColor: '#F2F2F2',
//         backgroundImage: 'linear-gradient(to bottom right, rgba(169, 245, 223, 0.15), rgba(143, 240, 209, 0.15))'
//       }}
//     >
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-20">

//         {/* Left Side: Main Heading */}
//         <div className="lg:w-2/5 mb-16 lg:mb-0">
//           <h2 className="text-5xl lg:text-6xl font-light text-foreground leading-tight">
//             Our Approach to Social Media Marketing
//           </h2>
//           <p className="mt-6 text-xl text-muted-foreground">
//             Engage with Your Audience
//           </p>
//         </div>

//         {/* Right Side: Features */}
//         <div className="lg:w-3/5">
//           <div className="flex flex-wrap -mx-6">
            
//             {/* Feature 1 */}
//             <div className="w-full sm:w-1/2 px-6 mb-12">
//               <Feature 
//                 title="Start Conversations"
//                 description="Social media allows unprecedented engagement with your customers. We help you start and sustain meaningful conversations, fostering positive brand recognition."
//               />
//             </div>
            
//             {/* Feature 2 */}
//             <div className="w-full sm:w-1/2 px-6 mb-12">
//               <Feature 
//                 title="Humanise Your Brand"
//                 description="Show the people and processes behind your products, creating relatable and engaging content that resonates with your audience."
//               />
//             </div>
            
//             {/* Feature 3 (Centered below) */}
//             <div className="w-full flex justify-center px-6">
//               <div className="sm:w-1/2">
//                 <Feature 
//                   title="Immediate Feedback"
//                   description="Leverage the immediate feedback loop of social media to understand customer sentiments and adjust your strategies in real time."
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default OurApproachSection;



















// import React from 'react';

// // A re-usable component for each feature item
// const Feature = ({ title, description }) => (
//   <div className="w-full">
//     <div className="border-t-2 border-primary pt-6">
//       <h3 className="text-2xl font-normal text-foreground mb-3">{title}</h3>
//       <p className="text-muted-foreground text-sm leading-relaxed">
//         {description}
//       </p>
//     </div>
//   </div>
// );

// const OurApproachSection = () => {
//   return (
//     // Step 1: Outer section for solid background and vertical padding (top/bottom space)
//     <section 
//       style={{ backgroundColor: '#F2F2F2' }}
//       className="py-20" // Vertical padding is applied here
//     >
//       {/* Step 2: Inner div for the gradient background and content */}
//       <div 
//         style={{
//           backgroundImage: 'linear-gradient(to bottom right, rgba(169, 245, 223, 0.15), rgba(143, 240, 209, 0.15))'
//         }}
//         className="px-4 sm:px-6 lg:px-12" // Horizontal padding moved here
//       >
//         {/* Your original content container */}
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-20">

//           {/* Left Side: Main Heading */}
//           <div className="lg:w-2/5 mb-16 lg:mb-0">
//             <h2 className="text-5xl lg:text-6xl font-light text-foreground leading-tight">
//               Our Approach to Social Media Marketing
//             </h2>
//             <p className="mt-6 text-xl text-muted-foreground">
//               Engage with Your Audience
//             </p>
//           </div>

//           {/* Right Side: Features */}
//           <div className="lg:w-3/5">
//             <div className="flex flex-wrap -mx-6">
              
//               {/* Feature 1 */}
//               <div className="w-full sm:w-1/2 px-6 mb-12">
//                 <Feature 
//                   title="Start Conversations"
//                   description="Social media allows unprecedented engagement with your customers. We help you start and sustain meaningful conversations, fostering positive brand recognition."
//                 />
//               </div>
              
//               {/* Feature 2 */}
//               <div className="w-full sm:w-1/2 px-6 mb-12">
//                 <Feature 
//                   title="Humanise Your Brand"
//                   description="Show the people and processes behind your products, creating relatable and engaging content that resonates with your audience."
//                 />
//               </div>
              
//               {/* Feature 3 (Centered below) */}
//               <div className="w-full flex justify-center px-6">
//                 <div className="sm:w-1/2">
//                   <Feature 
//                     title="Immediate Feedback"
//                     description="Leverage the immediate feedback loop of social media to understand customer sentiments and adjust your strategies in real time."
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurApproachSection;













import React from 'react';

// A re-usable component for each feature item
const Feature = ({ title, description }) => (
  <div className="w-full">
    <div className="border-t-2 border-primary pt-6">
      <h3 className="text-2xl font-normal text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const OurApproachSection = () => {
  return (
    // میں نے یہاں تبدیلی کی ہے
    <section 
      className="py-20 px-4 sm:px-6 lg:px-12"
      style={{
        // یہ گریڈینٹ اب پورے سیکشن پر بغیر کسی جوڑ کے اپلائی ہوگا
        background: `linear-gradient(
          to bottom, 
          #F2F2F2 0%, 
          rgba(169, 245, 223, 0.15) 25%, 
          rgba(143, 240, 209, 0.15) 75%, 
          #F2F2F2 100%
        )`
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-20">

        {/* Left Side: Main Heading */}
        <div className="lg:w-2/5 mb-16 lg:mb-0">
          <h2 className="text-5xl lg:text-6xl font-light text-foreground leading-tight">
            Our Approach to Social Media Marketing
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            Engage with Your Audience
          </p>
        </div>

        {/* Right Side: Features */}
        <div className="lg:w-3/5">
          <div className="flex flex-wrap -mx-6">
            
            {/* Feature 1 */}
            <div className="w-full sm:w-1/2 px-6 mb-12">
              <Feature 
                title="Start Conversations"
                description="Social media allows unprecedented engagement with your customers. We help you start and sustain meaningful conversations, fostering positive brand recognition."
              />
            </div>
            
            {/* Feature 2 */}
            <div className="w-full sm:w-1/2 px-6 mb-12">
              <Feature 
                title="Humanise Your Brand"
                description="Show the people and processes behind your products, creating relatable and engaging content that resonates with your audience."
              />
            </div>
            
            {/* Feature 3 (Centered below) */}
            <div className="w-full flex justify-center px-6">
              <div className="sm:w-1/2">
                <Feature 
                  title="Immediate Feedback"
                  description="Leverage the immediate feedback loop of social media to understand customer sentiments and adjust your strategies in real time."
                />
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default OurApproachSection;