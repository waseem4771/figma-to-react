


// import React from 'react';
// import pixelFocusCircleLogo from '../../assets/pixel_focus_circle_logo.png';
// import './HeroSection.css'; // Make sure HeroSection.css is linked

// const HeroSection = () => {
//   return (
//     <div className="relative min-h-screen bg-[#F2F2F2] overflow-hidden">
      
//       {/* SEO Text - Top Left */}
//       {/* حل: top-[15%] کو top-[18%] کیا گیا ہے (مزید نیچے کرنے کے لیے) */}
//       <div className="absolute top-[18%] left-0 z-10">
//         <h1 className="hero-text-seo opacity-40">
//           SEO
//         </h1>
//       </div>

//       {/* BRANDING Text - Center */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//         <h2 className="hero-text-branding">
//           BRANDING
//         </h2>
//       </div>

//       {/* SEM Text - Bottom Right */}
//       {/* حل: bottom-[15%] کو bottom-[18%] کیا گیا ہے (مزید اوپر کرنے کے لیے) */}
//       <div className="absolute bottom-[18%] right-0 z-10">
//         <h3 className="hero-text-sem opacity-40">
//           SEM
//         </h3>
//       </div>

//       {/* Logo Image - Top Right */}
//       {/* حل: top-2 کو top-0 کیا گیا ہے (بالکل اوپر کرنے کے لیے) */}
//       <div className="absolute top-0 right-2 z-10">
//         <img 
//           src={pixelFocusCircleLogo} 
//           alt="Pixel Focus Circle Logo" 
//           className="w-48 h-48 md:w-64 md:h-64 object-contain logo-glow" 
//         />
//       </div>

//       {/* Activate Windows Text (Optional) */}
//       {/* <div className="absolute bottom-4 right-4 text-xs text-gray-400 opacity-50 select-none">
//         Activate Windows <br />
//         Go to Settings to activate Windows.
//       </div> */}
//     </div>
//   );
// };

// export default HeroSection;











//-------------------------------------------------------------------


// import React from 'react';
// import pixelFocusCircleLogo from '../../assets/pixel_focus_circle_logo.png';
// import './HeroSection.css'; // Make sure HeroSection.css is linked

// const HeroSection = () => {
//   return (
//     // overflow-x-hidden: موبائل پر ٹیکسٹ کو ہلکا سا باہر نکالنے پر افقی اسکرول بار کو روکتا ہے
//     <div className="relative min-h-screen bg-[#F2F2F2] overflow-x-hidden">
      
//       {/* 
//         تبدیلیاں:
//         1. top-[20%]: ٹیکسٹ کو عمودی طور پر تھوڑا سا مرکز کی طرف کیا گیا ہے۔
//         2. left-[-1rem] sm:left-0: موبائل پر 'SEO' ٹیکسٹ کو تھوڑا سا بائیں طرف اسکرین سے باہر نکالا گیا ہے تاکہ کٹا ہوا نظر نہ آئے۔ بڑی اسکرینوں پر یہ واپس اپنی جگہ پر آ جائے گا۔
//       */}
//       <div className="absolute top-[20%] left-[-1rem] sm:left-0 z-10">
//         <h1 className="hero-text-seo opacity-40">
//           SEO
//         </h1>
//       </div>

//       {/* BRANDING Text - Center (اس میں کوئی تبدیلی نہیں کی گئی کیونکہ یہ پہلے سے ہی بہترین طریقے سے مرکز میں ہے) */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
//         <h2 className="hero-text-branding">
//           BRANDING
//         </h2>
//       </div>

//       {/* 
//         تبدیلیاں:
//         1. bottom-[20%]: ٹیکسٹ کو عمودی طور پر تھوڑا سا مرکز کی طرف کیا گیا ہے۔
//         2. right-[-1rem] sm:right-0: موبائل پر 'SEM' ٹیکسٹ کو تھوڑا سا دائیں طرف اسکرین سے باہر نکالا گیا ہے۔
//       */}
//       <div className="absolute bottom-[20%] right-[-1rem] sm:right-0 z-10">
//         <h3 className="hero-text-sem opacity-40">
//           SEM
//         </h3>
//       </div>

//       {/* 
//         تبدیلیاں:
//         1. top-4: لوگو کو اوپر سے تھوڑا نیچے کیا گیا ہے تاکہ یہ بالکل کنارے پر نہ ہو۔
//         2. w-32 h-32 ...: لوگو کا سائز موبائل کے لیے (w-32) سے شروع کیا گیا ہے اور اسکرین کے بڑھنے کے ساتھ ساتھ بڑا کیا گیا ہے۔
//       */}
//       <div className="absolute top-4 right-0 z-10">
//         <img 
//           src={pixelFocusCircleLogo} 
//           alt="Pixel Focus Circle Logo" 
//           className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain logo-glow" 
//         />
//       </div>

//     </div>
//   );
// };

// export default HeroSection;








import React from 'react';
import pixelFocusCircleLogo from '../../assets/pixel_focus_circle_logo.png';
import './HeroSection.css'; // Make sure HeroSection.css is linked

const HeroSection = () => {
  return (
    // overflow-x-hidden: موبائل پر افقی اسکرول بار کو روکتا ہے
    <div className="relative min-h-screen bg-[#F2F2F2] overflow-x-hidden">
      
      {/* SEO Text */}
      <div className="absolute top-[20%] left-[-1rem] sm:left-0 z-10">
        <h1 className="hero-text-seo opacity-40">
          SEO
        </h1>
      </div>

      {/* 
        حل:
        - یہاں 'w-full' کلاس شامل کی گئی ہے تاکہ 'BRANDING' کا کنٹینر پوری چوڑائی لے۔
      */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full">
        <h2 className="hero-text-branding">
          BRANDING
        </h2>
      </div>

      {/* SEM Text */}
      <div className="absolute bottom-[20%] right-[-1rem] sm:right-0 z-10">
        <h3 className="hero-text-sem opacity-40">
          SEM
        </h3>
      </div>

      {/* Logo Image */}
      <div className="absolute top-4 right-0 z-10">
        <img 
          src={pixelFocusCircleLogo} 
          alt="Pixel Focus Circle Logo" 
          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain logo-glow" 
        />
      </div>

    </div>
  );
};

export default HeroSection;