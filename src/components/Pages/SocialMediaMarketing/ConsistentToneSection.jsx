// import React from 'react';

// // ایک دوبارہ قابل استعمال کمپوننٹ ہر ٹائم لائن آئٹم کے لیے
// // This is a reusable component for each timeline item
// const TimelineItem = ({ title, description, isLast = false }) => (
//   <div className="flex">
//     {/* بائیں طرف: دائرہ اور لائن */}
//     {/* Left Side: Circle and Line */}
//     <div className="flex flex-col items-center mr-6">
//       {/* دائرہ */}
//       {/* Circle */}
//       <div className="flex-shrink-0 w-5 h-5 bg-[#5EEAD4] rounded-full"></div>
      
//       {/* لائن (آخری آئٹم کے علاوہ) */}
//       {/* Line (except for the last item) */}
//       {!isLast && (
//         <div className="w-px h-full border-l-2 border-dotted border-[#5EEAD4] mt-2"></div>
//       )}
//     </div>

//     {/* دائیں طرف: ٹیکسٹ مواد */}
//     {/* Right Side: Text Content */}
//     <div className="pb-12">
//       <h3 className="text-xl font-medium text-gray-800 mb-3">{title}</h3>
//       <p className="text-sm text-gray-600 leading-relaxed">
//         {description}
//       </p>
//     </div>
//   </div>
// );


// // مرکزی سیکشن کمپوننٹ
// // This is the main section component
// const ConsistentToneSection = () => {
//   return (
//     <section className="bg-[#F2F2F2] py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 items-center">

//         {/* بائیں کالم: مرکزی ہیڈنگ */}
//         {/* Left Column: Main Heading */}
//         <div className="lg:pr-8">
//           <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
//             Maintain a 
//             <br />
//             Consistent Tone
//           </h2>
//         </div>

//         {/* دائیں کالم: ٹائم لائن فیچرز */}
//         {/* Right Column: Timeline Features */}
//         <div>
//           <TimelineItem 
//             title="Unified Brand Voice"
//             description="Your brand identity should have a consistent tone across all platforms. We ensure that your visuals and messages are cohesive, maintaining brand integrity."
//           />
//           <TimelineItem 
//             title="Platform-Specific Content"
//             description="Each platform has its nuances. We tailor your content to fit each platform while keeping your brand’s voice consistent."
//           />
//           <TimelineItem 
//             title="Content Calendars"
//             description="Develop a content calendar to plan and schedule posts, ensuring regular and timely updates that keep your audience engaged."
//             isLast={true} // آخری آئٹم کے طور پر نشان زد کریں
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ConsistentToneSection;












import React from 'react';

// ایک دوبارہ قابل استعمال کمپوننٹ ہر ٹائم لائن آئٹم کے لیے
// This is a reusable component for each timeline item
const TimelineItem = ({ title, description, isLast = false }) => (
  <div className="flex">
    {/* بائیں طرف: دائرہ اور لائن */}
    {/* Left Side: Circle and Line */}
    <div className="flex flex-col items-center mr-6">
      {/* دائرہ */}
      {/* Circle */}
      <div className="flex-shrink-0 w-5 h-5 bg-[#5EEAD4] rounded-full"></div>
      
      {/* لائن (آخری آئٹم کے علاوہ) */}
      {/* Line (except for the last item) */}
      {!isLast && (
        <div className="w-px h-full border-l-2 border-dotted border-[#5EEAD4] mt-2"></div>
      )}
    </div>

    {/* دائیں طرف: ٹیکسٹ مواد */}
    {/* Right Side: Text Content */}
    <div className="pb-12">
      <h3 className="text-xl font-medium text-gray-800 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);


// مرکزی سیکشن کمپوننٹ
// This is the main section component
const ConsistentToneSection = () => {
  return (
    // تبدیلی 1: اوپر کی پیڈنگ ختم کر دی گئی ہے
    <section className="bg-[#F2F2F2] pb-24 px-4 sm:px-6 lg:px-8">
      {/* تبدیلی 2: آئٹمز کو اوپر الائن کیا گیا ہے */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16 items-start">

        {/* بائیں کالم: مرکزی ہیڈنگ */}
        {/* Left Column: Main Heading */}
        <div className="lg:pr-8">
          {/* تبدیلی 3: ہیڈنگ کا سائز اور وزن تبدیل کیا گیا ہے */}
          <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">
            Maintain a 
            <br />
            Consistent Tone
          </h2>
        </div>

        {/* دائیں کالم: ٹائم لائن فیچرز */}
        {/* Right Column: Timeline Features */}
        <div>
          <TimelineItem 
            title="Unified Brand Voice"
            description="Your brand identity should have a consistent tone across all platforms. We ensure that your visuals and messages are cohesive, maintaining brand integrity."
          />
          <TimelineItem 
            title="Platform-Specific Content"
            description="Each platform has its nuances. We tailor your content to fit each platform while keeping your brand’s voice consistent."
          />
          <TimelineItem 
            title="Content Calendars"
            description="Develop a content calendar to plan and schedule posts, ensuring regular and timely updates that keep your audience engaged."
            isLast={true} // آخری آئٹم کے طور پر نشان زد کریں
          />
        </div>

      </div>
    </section>
  );
};

export default ConsistentToneSection;












