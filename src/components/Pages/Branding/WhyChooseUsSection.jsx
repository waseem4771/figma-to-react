
// import React from 'react';

// // ====================================================================
// // Data for the "Why Choose Us" Cards
// // ====================================================================
// const choices = [
//   {
//     title: "Transform Your Ideas into Impactful Brands",
//     description: "We take your innovative ideas and craft a brand identity that truly resonates with your audience, ensuring your message is clear and compelling."
//   },
//   {
//     title: "Establish a Unique Market Presence",
//     description: "Our expert branding strategies help your product stand out in the market, highlighting what makes your brand unique and appealing."
//   },
//   {
//     title: "Create Consistent and Memorable Impressions",
//     description: "We ensure your brand makes a lasting impact through cohesive and engaging visuals and messaging across all touchpoints."
//   },
//   {
//     title: "Build Strong Brand Loyalty",
//     description: "We develop strategies to foster a deep connection with your customers, turning them into loyal advocates for your brand."
//   }
// ];

// // ====================================================================
// // Reusable Card Component with Custom Shape
// // ====================================================================
// const ChoiceCard = ({ title, description }) => {
//   const cardStyle = {
//     clipPath: 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 56% 100%, 60% 100%, 34% 82%, 0 82%)'
//   };

//   return (
//     <div 
//       className="bg-gradient-to-br from-[#B2DFDB] to-[#E0F2F1] p-8 h-72"
//       style={cardStyle}
//     >
//       <h3 className="text-2xl font-medium text-gray-800 mb-4 leading-tight">
//         {title}
//       </h3>
//       <p className="text-sm text-gray-600 leading-relaxed">
//         {description}
//       </p>
//     </div>
//   );
// };

// // ====================================================================
// // Main "Why Choose Us" Section Component
// // ====================================================================
// const WhyChooseUsSection = () => {
//   return (
//     // CHANGE: Section ke background main neeche ki taraf gradient add kar diya hai
//     <section className="bg-gradient-to-b from-[#F2F2F2] to-[#EAEAEA] py-24 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto">

//         {/* Main Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-normal text-gray-800 leading-tight">
//             Why Choose Pixel Focus Media for Your
//             <br />
//             Branding Needs?
//           </h2>
//         </div>

//         {/* 2x2 Grid for the cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {choices.map((choice, index) => (
//             <ChoiceCard 
//               key={index}
//               title={choice.title}
//               description={choice.description}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUsSection;


















import React from 'react';

// ====================================================================
// Data for the "Why Choose Us" Cards (اس میں کوئی تبدیلی نہیں)
// ====================================================================
const choices = [
  {
    title: "Transform Your Ideas into Impactful Brands",
    description: "We take your innovative ideas and craft a brand identity that truly resonates with your audience, ensuring your message is clear and compelling."
  },
  {
    title: "Establish a Unique Market Presence",
    description: "Our expert branding strategies help your product stand out in the market, highlighting what makes your brand unique and appealing."
  },
  {
    title: "Create Consistent and Memorable Impressions",
    description: "We ensure your brand makes a lasting impact through cohesive and engaging visuals and messaging across all touchpoints."
  },
  {
    title: "Build Strong Brand Loyalty",
    description: "We develop strategies to foster a deep connection with your customers, turning them into loyal advocates for your brand."
  }
];

// ====================================================================
// Reusable Card Component (Responsive Version)
// ====================================================================
const ChoiceCard = ({ title, description }) => {
  // نوٹ: clipPath ڈیزائن کی وجہ سے مکمل طور پر فلوئڈ نہیں ہو سکتا، 
  // لیکن h-auto اور ٹیکسٹ سائز اسے بہتر بناتے ہیں۔
  const cardStyle = {
    clipPath: 'polygon(0% 15%, 0 0, 15% 0%, 85% 0%, 100% 0, 100% 15%, 100% 85%, 100% 100%, 56% 100%, 60% 100%, 34% 82%, 0 82%)'
  };

  return (
    // 
    //   تبدیلیاں:
    //   1. p-6 sm:p-8: موبائل پر پیڈنگ تھوڑی کم کی گئی۔
    //   2. h-auto min-h-[18rem]: اونچائی کو 'auto' کیا گیا تاکہ مواد کے مطابق ایڈجسٹ ہو سکے، اور کم از کم اونچائی دی گئی تاکہ ڈیزائن خراب نہ ہو۔
    // 
    <div 
      className="bg-gradient-to-br from-[#B2DFDB] to-[#E0F2F1] p-6 sm:p-8 h-auto min-h-[18rem]" // h-72 کو h-auto کیا گیا
      style={cardStyle}
    >
      {/* 
        تبدیلیاں:
        1. text-xl sm:text-2xl: کارڈ کی ہیڈنگ کا سائز موبائل پر تھوڑا کم کیا گیا۔
      */}
      <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// ====================================================================
// Main "Why Choose Us" Section Component (Responsive Version)
// ====================================================================
const WhyChooseUsSection = () => {
  return (
    // 
    //   تبدیلیاں:
    //   1. py-16 sm:py-24: عمودی پیڈنگ موبائل پر کم کی گئی۔
    //   2. px-4 sm:px-8: افقی پیڈنگ موبائل پر کم کی گئی۔
    // 
    <section className="bg-gradient-to-b from-[#F2F2F2] to-[#EAEAEA] py-16 sm:py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto">

        {/* 
          تبدیلیاں:
          1. mb-12 sm:mb-16: ہیڈنگ کے نیچے مارجن موبائل پر کم کیا گیا۔
        */}
        <div className="text-center mb-12 sm:mb-16">
          {/* 
            تبدیلیاں:
            1. text-3xl sm:text-4xl: مین ہیڈنگ کا سائز موبائل پر کم کیا گیا۔
          */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-800 leading-tight">
            Why Choose Pixel Focus Media for Your
            <br />
            Branding Needs?
          </h2>
        </div>

        {/* 
          تبدیلی:
          1. gap-6 sm:gap-8: کارڈز کے درمیان فاصلہ موبائل پر کم کیا گیا۔
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {choices.map((choice, index) => (
            <ChoiceCard 
              key={index}
              title={choice.title}
              description={choice.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;