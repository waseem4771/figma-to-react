

// import React from 'react';

// // ایک دوبارہ قابل استعمال کمپوننٹ ہر فیچر آئٹم کے لیے
// // This is a reusable component for each feature item
// const FeatureColumn = ({ title, description, hasDivider = false }) => (
//   // اگر hasDivider سچ ہے تو بائیں طرف بارڈر اور پیڈنگ شامل کریں
//   // If hasDivider is true, add a left border and padding
//   <div className={hasDivider ? 'md:border-l border-gray-400 md:pl-8' : ''}>
//     <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
//     <p className="text-sm text-gray-600 leading-relaxed">
//       {description}
//     </p>
//   </div>
// );


// // مرکزی سیکشن کمپوننٹ
// // This is the main section component
// const PostRegularlySection = () => {
//   return (
//     // تبدیلی 1: اوپر کی پیڈنگ ختم کر دی گئی ہے
//     // Section's background color and padding
//     <section className="bg-[#EFF2F1] pt-12 pb-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* مرکزی عنوان */}
//         {/* Main Heading */}
//         {/* تبدیلی 2: ہیڈنگ کو font-medium کیا گیا ہے اور اوپر کی پیڈنگ ختم کر دی گئی ہے */}
//         <h2 className="text-4xl font-medium text-center text-gray-900 mb-16">
//           Post Regularly
//         </h2>

//         {/* فیچرز والا کارڈ */}
//         {/* Features card */}
//         {/* تبدیلی 3: شیڈو ختم کر دیا گیا ہے */}
//         {/* تبدیلی 4: بیک گراؤنڈ کو ملا دیا گیا ہے */}
//         <div 
//           className="rounded-2xl p-12"
//           style={{
//             // بیک گراؤنڈ اب اوپر اور نیچے سے ایک جیسا لگے گا
//             background: `linear-gradient(
//               to bottom, 
//               #EFF2F1 0%, 
//               rgba(169, 245, 223, 0.15) 50%, 
//               #EFF2F1 100%
//             )`
//           }}
//         >
          
//           {/* فیچرز کا گرڈ */}
//           {/* Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8">
            
//             <FeatureColumn 
//               title="Regular Updates"
//               description="Regular posting is key to keeping your audience engaged. We develop and implement a content calendar to ensure your brand remains active and relevant."
//             />
            
//             <FeatureColumn 
//               title="Plan and Execute Campaigns"
//               description="Social media allows for easy planning and execution of marketing campaigns. We help you deliver these campaigns effectively to maintain audience interest."
//               hasDivider={true}
//             />
            
//             <FeatureColumn 
//               title="Monitor and Adjust"
//               description="Regularly monitor the performance of your posts and campaigns, making necessary adjustments to maximise engagement and reach."
//               hasDivider={true}
//             />

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default PostRegularlySection;















import React from 'react';

// ایک دوبارہ قابل استعمال کمپوننٹ ہر فیچر آئٹم کے لیے
// This is a reusable component for each feature item
const FeatureColumn = ({ title, description, hasDivider = false }) => (
  // اگر hasDivider سچ ہے تو بائیں طرف بارڈر اور پیڈنگ شامل کریں
  // If hasDivider is true, add a left border and padding
  <div className={hasDivider ? 'md:border-l border-gray-400 md:pl-8' : ''}>
    <h3 className="text-lg font-medium text-gray-800 mb-4">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);


// مرکزی سیکشن کمپوننٹ
// This is the main section component
const PostRegularlySection = () => {
  return (
    // تبدیلی: سیکشن سے اوپر کی پیڈنگ مکمل طور پر ہٹا دی گئی ہے
    // Section's background color and padding
    <section className="bg-[#EFF2F1] pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* مرکزی عنوان */}
        {/* Main Heading */}
        {/* تبدیلی: ہیڈنگ میں اوپر کی پیڈنگ شامل کی گئی ہے */}
        <h2 className="text-4xl font-medium text-center text-gray-900 mb-16 pt-24">
          Post Regularly
        </h2>

        {/* فیچرز والا کارڈ */}
        {/* Features card */}
        <div 
          className="rounded-2xl p-12"
          style={{
            // بیک گراؤنڈ اب اوپر اور نیچے سے ایک جیسا لگے گا
            background: `linear-gradient(
              to bottom, 
              #EFF2F1 0%, 
              rgba(169, 245, 223, 0.15) 50%, 
              #EFF2F1 100%
            )`
          }}
        >
          
          {/* فیچرز کا گرڈ */}
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8">
            
            <FeatureColumn 
              title="Regular Updates"
              description="Regular posting is key to keeping your audience engaged. We develop and implement a content calendar to ensure your brand remains active and relevant."
            />
            
            <FeatureColumn 
              title="Plan and Execute Campaigns"
              description="Social media allows for easy planning and execution of marketing campaigns. We help you deliver these campaigns effectively to maintain audience interest."
              hasDivider={true}
            />
            
            <FeatureColumn 
              title="Monitor and Adjust"
              description="Regularly monitor the performance of your posts and campaigns, making necessary adjustments to maximise engagement and reach."
              hasDivider={true}
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default PostRegularlySection;