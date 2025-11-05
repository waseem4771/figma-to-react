// import React from 'react';

// // ایک دوبارہ قابل استعمال کمپوننٹ ہر فارم فیلڈ کے لیے
// // A reusable component for each form field
// const FormField = ({ label, type = 'text', name, className = '' }) => (
//   <div className={`relative ${className}`}>
//     <label 
//       htmlFor={name} 
//       className="block text-sm text-gray-500 mb-2"
//     >
//       {label}
//     </label>
//     <input 
//       type={type} 
//       id={name} 
//       name={name}
//       className="w-full bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none pb-2"
//     />
//   </div>
// );

// // مرکزی Contact Us سیکشن کمپوننٹ
// // The main Contact Us Section component
// const ContactSection = () => {
//   return (
//     // سیکشن کا بیک گراؤنڈ اور پیڈنگ
//     <section 
//       className="w-full py-24 px-4 sm:px-8 lg:px-16"
//       style={{
//         background: 'linear-gradient(to bottom right, #f0f4f3, #e9f1f0)'
//       }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
//         {/* بائیں طرف کا حصہ */}
//         <div className="flex flex-col">
//           {/* "Contact Us" ٹیگ */}
//           <div className="mb-8">
//             <span className="border border-[#A7D7C5] text-[#6ee7b7] text-sm font-medium px-4 py-2 rounded-full">
//               Contact Us
//             </span>
//           </div>
          
//           {/* مرکزی ہیڈنگ */}
//           <h2 className="text-5xl sm:text-6xl font-light text-gray-900 leading-tight mb-8">
//             Unlock Your 
//             <br />
//             Digital Potential
//           </h2>
          
//           {/* پیراگراف */}
//           <p className="text-gray-600 leading-relaxed">
//             Get in touch with Pixel Focus Media today! Our team of experts is here to help you optimise your online presence, drive traffic, and boost conversions. Fill out the form below, and we'll get back to you promptly to discuss your marketing goals and how we can achieve them together.
//           </p>
//         </div>
        
//         {/* دائیں طرف کا فارم */}
//         <form className="w-full">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
//             <FormField label="First Name" name="firstName" />
//             <FormField label="Last Name" name="lastName" />
//             <FormField label="Email" name="email" type="email" />
//             <FormField label="Phone Number" name="phone" type="tel" />
//             <FormField label="Message" name="message" className="sm:col-span-2" />
//           </div>
          
//           {/* Submit بٹن */}
//           <button 
//             type="submit" 
//             className="w-full mt-12 border border-[#A7D7C5] rounded-lg p-4 flex items-center justify-between hover:bg-[#A7D7C5]/10 transition-colors"
//           >
//             <span className="text-gray-700">Submit</span>
//             {/* تیر کا آئیکن */}
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               width="24" 
//               height="24" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="currentColor" 
//               strokeWidth="1.5" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//               className="text-gray-700"
//             >
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//               <polyline points="12 5 19 12 12 19"></polyline>
//             </svg>
//           </button>
//         </form>

//       </div>
//     </section>
//   );
// };

// export default ContactSection;
















import React from 'react';

// ایک دوبارہ قابل استعمال کمپوننٹ ہر فارم فیلڈ کے لیے
// A reusable component for each form field
const FormField = ({ label, type = 'text', name, className = '' }) => (
  <div className={`relative ${className}`}>
    <label 
      htmlFor={name} 
      className="block text-sm text-gray-500 mb-2"
    >
      {label}
    </label>
    <input 
      type={type} 
      id={name} 
      name={name}
      className="w-full bg-transparent border-b border-gray-400 focus:border-gray-600 outline-none pb-2"
    />
  </div>
);

// مرکزی Contact Us سیکشن کمپوننٹ
// The main Contact Us Section component
const ContactSection = () => {
  return (
    // سیکشن کا بیک گراؤنڈ اور پیڈنگ
    <section 
      className="w-full py-24 px-4 sm:px-8 lg:px-16"
      style={{
        background: 'linear-gradient(to bottom right, #f0f4f3, #e9f1f0)'
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* بائیں طرف کا حصہ */}
        <div className="flex flex-col">
          {/* "Contact Us" ٹیگ */}
          <div className="mb-8">
            <span className="border border-[#A7D7C5] text-[#6ee7b7] text-sm font-medium px-4 py-2 rounded-full">
              Contact Us
            </span>
          </div>
          
          {/* مرکزی ہیڈنگ */}
          {/* تبدیلی: font-light کو font-normal سے بدل دیا گیا ہے */}
          <h2 className="text-5xl sm:text-6xl font-normal text-gray-900 leading-tight mb-8">
            Unlock Your 
            <br />
            Digital Potential
          </h2>
          
          {/* پیراگراف */}
          {/* تبدیلی: ٹیکسٹ کا سائز text-sm کر دیا گیا ہے */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Get in touch with Pixel Focus Media today! Our team of experts is here to help you optimise your online presence, drive traffic, and boost conversions. Fill out the form below, and we'll get back to you promptly to discuss your marketing goals and how we can achieve them together.
          </p>
        </div>
        
        {/* دائیں طرف کا فارم */}
        <form className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            <FormField label="First Name" name="firstName" />
            <FormField label="Last Name" name="lastName" />
            <FormField label="Email" name="email" type="email" />
            <FormField label="Phone Number" name="phone" type="tel" />
            <FormField label="Message" name="message" className="sm:col-span-2" />
          </div>
          
          {/* Submit بٹن */}
          {/* تبدیلی: پیڈنگ کو p-4 سے py-3 px-4 کر دیا گیا ہے */}
          <button 
            type="submit" 
            className="w-full mt-12 border border-[#A7D7C5] rounded-lg py-3 px-4 flex items-center justify-between hover:bg-[#A7D7C5]/10 transition-colors"
          >
            <span className="text-gray-700">Submit</span>
            {/* تیر کا آئیکن */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;