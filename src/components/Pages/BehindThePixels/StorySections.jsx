// import React from 'react';

// const storyData = [
//   {
//     heading: "Your Brand, Our Passion",
//     paragraph: "Pixel Focus Media is a digital marketing agency that crafts tailored strategies for brands of all sizes to achieve remarkable growth through smart SEO, innovative design, and targeted campaigns. We are here to make your brand stand out from the crowd and achieve your marketing goals."
//   },
//   {
//     heading: "Our Story & Mission",
//     paragraph: "Pixel Focus Media was founded on the belief that digital marketing can be both inspiring and effective. Too often, digital marketing is mediocre and fails to deliver real ROI. Our mission is to bring innovative digital marketing services to those who need help building an impactful online presence. We employ creative producers, designers, and coders who thoroughly examine your brand and provide solutions that enhance your online image and performance. We elevate your game so you can captivate your audience."
//   },
//   {
//     heading: "With Great Aspirations Comes Great Inspiration",
//     paragraph: "Our small but mighty team is dedicated to transforming your business. We believe in thinking big, regardless of your brand’s size. The beauty of digital marketing lies in its reach, and with greater reach comes larger audiences. Our clients benefit from increased revenue, improved SEO, and a dramatic rise in engagement across multiple social media platforms."
//   }
// ];

// const StorySections = () => {
//   return (
//     <section className="bg-[#EFF2F4] py-20 px-8 md:px-16 lg:px-24">
//       <div className="container mx-auto flex flex-col gap-16">
        
//         {storyData.map((section, index) => (
//           <React.Fragment key={index}>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              
//               <h2 className="text-4xl md:text-5xl font-normal text-gray-800 leading-tight">
//                 {section.heading.split(' ').map((word, i) => (
//                   <React.Fragment key={i}>
//                     {word}
//                     {(i + 1) % 2 === 0 && section.heading !== "Our Story & Mission" && <br />}
//                     {' '}
//                   </React.Fragment>
//                 ))}
//               </h2>

//               {/* Solution 2: Paragraph ka size 'text-sm' kar diya gaya hai */}
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {section.paragraph}
//               </p>
//             </div>

//             {/* 
//               Solution 1: Yahan par condition laga di gayi hai ke pehle section (index 0) ke baad line na aaye
//             */}
//             {index !== 0 && index < storyData.length - 1 && (
//               <hr className="border-t border-[#80CBC4] mt-8" />
//             )}
            
//           </React.Fragment>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default StorySections;

















import React from 'react';

const storyData = [
  {
    heading: "Your Brand, Our Passion",
    paragraph: "Pixel Focus Media is a digital marketing agency that crafts tailored strategies for brands of all sizes to achieve remarkable growth through smart SEO, innovative design, and targeted campaigns. We are here to make your brand stand out from the crowd and achieve your marketing goals."
  },
  {
    heading: "Our Story & Mission",
    paragraph: "Pixel Focus Media was founded on the belief that digital marketing can be both inspiring and effective. Too often, digital marketing is mediocre and fails to deliver real ROI. Our mission is to bring innovative digital marketing services to those who need help building an impactful online presence. We employ creative producers, designers, and coders who thoroughly examine your brand and provide solutions that enhance your online image and performance. We elevate your game so you can captivate your audience."
  },
  {
    heading: "With Great Aspirations Comes Great Inspiration",
    paragraph: "Our small but mighty team is dedicated to transforming your business. We believe in thinking big, regardless of your brand’s size. The beauty of digital marketing lies in its reach, and with greater reach comes larger audiences. Our clients benefit from increased revenue, improved SEO, and a dramatic rise in engagement across multiple social media platforms."
  }
];

const StorySections = () => {
  return (
    // Solution: 'py-20' (padding upar aur neeche) ko kam karke 'pt-10 pb-20' kar diya hai
    // Is se upar se padding kam ho jayegi aur section upar chala jayega
    <section className="bg-[#EFF2F4] pt-10 pb-20 px-8 md:px-16 lg:px-24">
      <div className="container mx-auto flex flex-col gap-16">
        
        {storyData.map((section, index) => (
          <React.Fragment key={index}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              
              <h2 className="text-4xl md:text-5xl font-normal text-gray-800 leading-tight">
                {section.heading.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {(i + 1) % 2 === 0 && section.heading !== "Our Story & Mission" && <br />}
                    {' '}
                  </React.Fragment>
                ))}
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                {section.paragraph}
              </p>
            </div>

            {index !== 0 && index < storyData.length - 1 && (
              <hr className="border-t border-[#80CBC4] mt-8" />
            )}
            
          </React.Fragment>
        ))}

      </div>
    </section>
  );
};

export default StorySections;