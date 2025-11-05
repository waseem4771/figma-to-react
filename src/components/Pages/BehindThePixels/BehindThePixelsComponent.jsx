
// import React, { useEffect, useRef } from 'react';
// import './BehindThePixelsComponent.css';

// const BehindThePixelsComponent = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let pixels = [];

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       pixels.forEach((pixel) => {
//         ctx.globalAlpha = pixel.opacity;
//         const pixelColor = '#B2DFDB';
//         if (pixel.isFilled) {
//           ctx.fillStyle = pixelColor;
//           ctx.beginPath();
//           if (ctx.roundRect) ctx.roundRect(pixel.x, pixel.y, pixel.size, pixel.size, 6);
//           else ctx.rect(pixel.x, pixel.y, pixel.size, pixel.size);
//           ctx.fill();
//         } else {
//           ctx.strokeStyle = pixelColor;
//           ctx.lineWidth = 1.5;
//           ctx.beginPath();
//           if (ctx.roundRect) ctx.roundRect(pixel.x, pixel.y, pixel.size, pixel.size, 6);
//           else ctx.rect(pixel.x, pixel.y, pixel.size, pixel.size);
//           ctx.stroke();
//         }
//       });
//     };
    
//     const init = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       pixels = [];
//       const pixelCount = Math.floor((canvas.width * canvas.height) / 8000); 
//       for (let i = 0; i < pixelCount; i++) {
//         pixels.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           size: Math.random() * 30 + 5,
//           opacity: Math.random() * 0.7 + 0.2,
//           isFilled: Math.random() > 0.5,
//         });
//       }
//       draw();
//     };

//     init();
//     window.addEventListener('resize', init);

//     return () => {
//       window.removeEventListener('resize', init);
//     };
//   }, []);

//   return (
//     // Solution: 'justify-center' hata diya gaya hai aur 'pt-40' (padding-top) add kiya gaya hai
//     <section className="relative min-h-screen bg-[#EFF2F4] flex flex-col items-center text-center overflow-hidden pt-40 pb-20 px-8">
      
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//         style={{ zIndex: 0 }}
//       />

//       {/* Content ab 'relative' hai z-index ke liye */}
//       <div className="relative z-10">
        
//         {/* Solution: Absolute positioning hata di gayi hai */}
//         <div className="mb-12 md:mb-16">
//           <span className="badge-btn">
//             Behind The Pixels
//           </span>
//         </div>

//         {/* Solution: Negative margin hata diya gaya hai */}
//         <h1 className="text-5xl md:text-7xl font-normal text-gray-800 leading-tight">
//           Innovative Digital Strategies
//           <br />
//           For Real Results
//         </h1>
//       </div>

//       {/* <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-xs text-gray-400/40 select-none z-10">
//         Activate Windows
//         <br />
//         Go to Settings to activate Windows.
//       </div> */}
//     </section>
//   );
// };

// export default BehindThePixelsComponent;














import React, { useEffect, useRef } from 'react';
import './BehindThePixelsComponent.css';

const BehindThePixelsComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let pixels = [];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pixels.forEach((pixel) => {
        ctx.globalAlpha = pixel.opacity;
        const pixelColor = '#B2DFDB';
        if (pixel.isFilled) {
          ctx.fillStyle = pixelColor;
          ctx.beginPath();
          // Use roundRect if available, otherwise fallback to rect
          if (ctx.roundRect) {
            ctx.roundRect(pixel.x, pixel.y, pixel.size, pixel.size, 6);
          } else {
            ctx.rect(pixel.x, pixel.y, pixel.size, pixel.size);
          }
          ctx.fill();
        } else {
          ctx.strokeStyle = pixelColor;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(pixel.x, pixel.y, pixel.size, pixel.size, 6);
          } else {
            ctx.rect(pixel.x, pixel.y, pixel.size, pixel.size);
          }
          ctx.stroke();
        }
      });
    };
    
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      pixels = [];
      // Adjust pixel density based on screen area
      const pixelCount = Math.floor((canvas.width * canvas.height) / 8000); 
      for (let i = 0; i < pixelCount; i++) {
        pixels.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 5,
          opacity: Math.random() * 0.7 + 0.2,
          isFilled: Math.random() > 0.5,
        });
      }
      draw();
    };

    init();
    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    // 
    //   تبدیلیاں:
    //   1. pt-32: اوپر سے پیڈنگ موبائل کے لیے کم کی گئی تاکہ مواد زیادہ مرکز میں آئے۔
    //   2. px-4 sm:px-8: افقی پیڈنگ موبائل کے لیے کم کی گئی ہے۔
    //
    <section className="relative min-h-screen bg-[#EFF2F4] flex flex-col items-center text-center overflow-hidden pt-32 md:pt-40 pb-20 px-4 sm:px-8">
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10">
        
        {/* 
          تبدیلی:
          1. mb-8: بیج اور ہیڈنگ کے درمیان فاصلہ موبائل پر کم کیا گیا ہے۔
        */}
        <div className="mb-8 md:mb-12">
          <span className="badge-btn">
            Behind The Pixels
          </span>
        </div>

        {/* 
          تبدیلیاں:
          1. text-4xl sm:text-5xl: ہیڈنگ کا فونٹ سائز موبائل کے لیے (4xl) سے شروع کیا گیا ہے تاکہ یہ اسکرین پر پورا آ سکے۔
        */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-normal text-gray-800 leading-tight">
          Innovative Digital Strategies
          <br />
          For Real Results
        </h1>
      </div>

    </section>
  );
};

export default BehindThePixelsComponent;

