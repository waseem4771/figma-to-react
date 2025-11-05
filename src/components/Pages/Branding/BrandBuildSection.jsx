// import React from 'react';

// // ====================================================================
// // Data for the Brand Building Steps
// // Aap yahan content aur image paths ko aasani se badal sakte hain
// // ====================================================================

// // **IMPORTANT**: In placeholder URLs ko apni asal images ke path se badal den
// const placeholderHands = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80';
// const placeholderAudience = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80';
// const placeholderMessage = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80';
// const placeholderAssets = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80';

// const buildSteps = [
//   {
//     title: "Identify Your Audience",
//     description: "We start by identifying your target customer. We work with you from day one to understand what your audience likes, dislikes, and what they truly need. We build detailed buyer personas by analysing your products and services and determining who benefits most from them.",
//     image: placeholderAudience,
//     imageOnLeft: false, // Text left, Image right
//   },
//   {
//     title: "Craft Your Message",
//     description: "Your brand message, often encapsulated in a Mission Statement, highlights your values, benefits, and the qualities your brand brings to customers. This informs the voice of your brand. Pixel Focus Media helps you find this voice, ensuring your message resonates with your audience and effectively communicates how your products or services enhance their lives.",
//     image: placeholderMessage,
//     imageOnLeft: true, // Image left, Text right
//   },
//   {
//     title: "Create Your Brand Assets",
//     description: "This is the exciting part. The “feel” of a successful brand comes from a mix of physical and visual assets used across various media channels. We assist you in developing visual assets such as logos, colour palettes, icons, fonts, layouts, photography, and video styles. This results in a comprehensive style guide that maintains consistency across all brand communications, even as your team grows.",
//     image: placeholderAssets,
//     imageOnLeft: false, // Text left, Image right
//   }
// ];

// // ====================================================================
// // Main Brand Build Section Component
// // ====================================================================

// const BrandBuildSection = () => {
//   return (
//     <section className="bg-[#F2F2F2] py-20 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto">

//         {/* Main Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-light text-gray-800">
//             How Pixel Focus Media Builds Your Brand
//           </h2>
//         </div>

//         {/* First Section with a single image */}
//         <div className="mb-24 flex justify-center">
//             <div className="w-full md:w-1/2">
//                 <img 
//                     src={placeholderHands} 
//                     alt="Crowd with hands up" 
//                     className="w-full h-auto object-cover rounded-lg grayscale" 
//                 />
//             </div>
//         </div>

//         {/* Alternating Sections */}
//         <div className="flex flex-col gap-24">
//           {buildSteps.map((step, index) => (
//             <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
//               {/* Text Column */}
//               <div className={`flex flex-col justify-center ${step.imageOnLeft ? 'md:order-2' : 'md:order-1'}`}>
//                 <h3 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>

//               {/* Image Column */}
//               <div className={`flex justify-center ${step.imageOnLeft ? 'md:order-1' : 'md:order-2'}`}>
//                 <img 
//                   src={step.image} 
//                   alt={step.title} 
//                   className="w-full h-auto object-cover rounded-lg grayscale" 
//                 />
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandBuildSection;















// import React from 'react';

// // ====================================================================
// // Data for the Brand Building Steps
// // ====================================================================

// // **IMPORTANT**: In placeholder URLs ko apni asal images ke path se badal den
// const placeholderHands = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80';
// const placeholderAudience = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80';
// const placeholderMessage = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80';

// const buildSteps = [
//   {
//     title: "Identify Your Audience",
//     description: "We start by identifying your target customer. We work with you from day one to understand what your audience likes, dislikes, and what they truly need. We build detailed buyer personas by analysing your products and services and determining who benefits most from them.",
//     image: placeholderAudience,
//     imageOnLeft: false,
//   },
//   {
//     title: "Craft Your Message",
//     description: "Your brand message, often encapsulated in a Mission Statement, highlights your values, benefits, and the qualities your brand brings to customers. This informs the voice of your brand. Pixel Focus Media helps you find this voice, ensuring your message resonates with your audience and effectively communicates how your products or services enhance their lives.",
//     image: placeholderMessage,
//     imageOnLeft: true,
//   },
//   {
//     title: "Create Your Brand Assets",
//     description: "This is the exciting part. The “feel” of a successful brand comes from a mix of physical and visual assets used across various media channels. We assist you in developing visual assets such as logos, colour palettes, icons, fonts, layouts, photography, and video styles. This results in a comprehensive style guide that maintains consistency across all brand communications, even as your team grows.",
//     // CHANGE 3: Last image ko yahan se hata diya hai
//     image: null, 
//     imageOnLeft: false,
//   }
// ];

// // ====================================================================
// // Main Brand Build Section Component
// // ====================================================================

// const BrandBuildSection = () => {
//   return (
//     <section className="bg-[#F2F2F2] py-20 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto">

//         {/* Main Heading */}
//         <div className="text-center mb-16">
//           {/* CHANGE 4: Heading ko mota kiya hai */}
//           <h2 className="text-4xl md:text-5xl font-normal text-gray-800">
//             How Pixel Focus Media Builds Your Brand
//           </h2>
//         </div>

//         {/* First Section with a single image */}
//         {/* CHANGE 2: Image ko left align kiya hai */}
//         <div className="mb-24 flex justify-start">
//             <div className="w-full md:w-1/2">
//                 {/* CHANGE 1: Image ki height kam kar di hai */}
//                 <img 
//                     src={placeholderHands} 
//                     alt="Crowd with hands up" 
//                     className="w-full h-96 object-cover rounded-lg grayscale" 
//                 />
//             </div>
//         </div>

//         {/* Alternating Sections */}
//         <div className="flex flex-col gap-24">
//           {buildSteps.map((step, index) => (
//             <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
//               {/* Text Column */}
//               <div className={`flex flex-col justify-center ${step.imageOnLeft ? 'md:order-2' : 'md:order-1'}`}>
//                 {/* CHANGE 4: Heading ko mota kiya hai */}
//                 <h3 className="text-5xl md:text-6xl font-normal text-gray-800 mb-6 leading-tight">
//                   {step.title}
//                 </h3>
//                 {/* CHANGE 5: Paragraph ka text chota kiya hai */}
//                 <p className="text-xs text-gray-600 leading-relaxed">
//                   {step.description}
//                 </p>
//               </div>

//               {/* Image Column */}
//               {/* CHANGE 3: Ab yeh sirf tabhi nazar ayega jab image mojood ho */}
//               {step.image && (
//                 <div className={`flex justify-center ${step.imageOnLeft ? 'md:order-1' : 'md:order-2'}`}>
//                   {/* CHANGE 1: Image ki height kam kar di hai */}
//                   <img 
//                     src={step.image} 
//                     alt={step.title} 
//                     className="w-full h-96 object-cover rounded-lg grayscale" 
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandBuildSection;















import React from 'react';

// ====================================================================
// Data for the Brand Building Steps
// ====================================================================

// Image links bilkul waisay hi hain jaisa aap ne diye thay
const placeholderHands = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80';
const placeholderAudience = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80';
const placeholderMessage = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80';

const buildSteps = [
  {
    title: "Identify Your Audience",
    description: "We start by identifying your target customer. We work with you from day one to understand what your audience likes, dislikes, and what they truly need. We build detailed buyer personas by analysing your products and services and determining who benefits most from them.",
    image: placeholderAudience,
    imageOnLeft: false,
  },
  {
    title: "Craft Your Message",
    description: "Your brand message, often encapsulated in a Mission Statement, highlights your values, benefits, and the qualities your brand brings to customers. This informs the voice of your brand. Pixel Focus Media helps you find this voice, ensuring your message resonates with your audience and effectively communicates how your products or services enhance their lives.",
    image: placeholderMessage,
    imageOnLeft: true,
  },
  {
    title: "Create Your Brand Assets",
    description: "This is the exciting part. The “feel” of a successful brand comes from a mix of physical and visual assets used across various media channels. We assist you in developing visual assets such as logos, colour palettes, icons, fonts, layouts, photography, and video styles. This results in a comprehensive style guide that maintains consistency across all brand communications, even as your team grows.",
    image: null, 
    imageOnLeft: false,
  }
];

// ====================================================================
// Main Brand Build Section Component
// ====================================================================

const BrandBuildSection = () => {
  return (
    <section className="bg-[#F2F2F2] py-20 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-800">
            How Pixel Focus Media Builds Your Brand
          </h2>
        </div>

        {/* First Section with a single image */}
        <div className="mb-24 flex justify-start">
            <div className="w-full md:w-1/2">
                {/* CHANGE: Image ki height ko aur kam kar diya hai */}
                <img 
                    src={placeholderHands} 
                    alt="Crowd with hands up" 
                    className="w-full h-80 object-cover rounded-lg grayscale" 
                />
            </div>
        </div>

        {/* Alternating Sections */}
        <div className="flex flex-col gap-24">
          {buildSteps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              
              {/* Text Column */}
              <div className={`flex flex-col justify-center ${step.imageOnLeft ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-5xl md:text-6xl font-normal text-gray-800 mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image Column */}
              {step.image && (
                <div className={`flex justify-center ${step.imageOnLeft ? 'md:order-1' : 'md:order-2'}`}>
                  {/* CHANGE: Image ki height ko aur kam kar diya hai */}
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-80 object-cover rounded-lg grayscale" 
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandBuildSection;