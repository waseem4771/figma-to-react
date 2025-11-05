

// import React from 'react';
// import pixelFocusLogo from '../../assets/pixel_focus_logo.png'; 
// import OverlayMenu from '../OverlayMenu/OverlayMenu'; // Make sure this path is correct

// // Props (isMenuOpen, setIsMenuOpen) ko yahan receive karen
// const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
//   // State ab yahan nahi hai, yeh App.js se aa rahi hai

//   return (
//     <>
//       <nav className="relative h-28 w-full px-8 md:px-12 bg-[#F2F2F2] z-30">
        
//         <div className="absolute top-0 left-0 h-full flex items-center">
//           <img 
//             src={pixelFocusLogo} 
//             alt="Pixel Focus Media Logo" 
//             className="w-[18rem] md:w-[28rem] h-auto" 
//           />
//         </div>

//         <div className="absolute top-0 right-8 md:right-12 h-full flex items-center space-x-8"> 
          
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="#525252"
//             className="w-7 h-7 cursor-pointer opacity-70 hover-opacity-100 transition-opacity"
//           >
//             <circle cx="12" cy="12" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 2V4M12 20V22M4 12H2M22 12H20M6.343 6.343l-1.414-1.414M19.071 19.071l-1.414-1.414M19.071 4.929l-1.414 1.414M4.929 19.071l1.414-1.414"
//             />
//           </svg>

//           {/* Ab yeh button App.js ki state ko update karega */}
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? (
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#525252" className="w-8 h-8">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8 M5 15h14" />
//               </svg>
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Yahan se 'closeMenu' prop hata den */}
//       <OverlayMenu isMenuOpen={isMenuOpen} />
//     </>
//   );
// };

// export default Navbar;












//--------------------------------------------------------------



import React from 'react';
import pixelFocusLogo from '../../assets/pixel_focus_logo.png'; 
import OverlayMenu from '../OverlayMenu/OverlayMenu'; // Make sure this path is correct

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* 
        تبدیلیاں:
        1. Navbar کی اونچائی (height) کو چھوٹی اسکرین پر کم کیا گیا (h-20) اور درمیانی اسکرین پر زیادہ (md:h-28)۔
        2. دائیں اور بائیں جانب کی پیڈنگ (padding) کو چھوٹی اسکرین کے لیے کم کیا گیا (px-4)۔
      */}
      <nav className="relative h-20 md:h-28 w-full px-4 sm:px-8 md:px-12 bg-[#F2F2F2] z-30">
        
        <div className="absolute top-0 left-0 h-full flex items-center">
          {/* 
            تبدیلی:
            3. لوگو کا سائز چھوٹی اسکرینوں کے لیے کم کیا گیا (w-[14rem]) اور بڑی اسکرینوں پر بتدریج بڑھایا گیا۔
          */}
          <img 
            src={pixelFocusLogo} 
            alt="Pixel Focus Media Logo" 
            className="w-[14rem] sm:w-[18rem] md:w-[28rem] h-auto" 
          />
        </div>

        {/* 
          تبدیلیاں:
          4. آئیکنز کو دائیں کنارے سے تھوڑا قریب کیا گیا ہے (right-4)۔
          5. آئیکنز کے درمیان فاصلہ (space-x) چھوٹی اسکرینوں کے لیے کم کیا گیا (space-x-4)۔
        */}
        <div className="absolute top-0 right-4 sm:right-8 md:right-12 h-full flex items-center space-x-4 sm:space-x-6"> 
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#525252"
            // تبدیلی: آئیکن کا سائز چھوٹی اسکرین پر تھوڑا کم کیا (w-6, h-6)۔
            className="w-6 h-6 md:w-7 md:h-7 cursor-pointer opacity-70 hover-opacity-100 transition-opacity"
          >
            <circle cx="12" cy="12" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2V4M12 20V22M4 12H2M22 12H20M6.343 6.343l-1.414-1.414M19.071 19.071l-1.414-1.414M19.071 4.929l-1.414 1.414M4.929 19.071l1.414-1.414"
            />
          </svg>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
               // تبدیلی: آئیکن کا سائز چھوٹی اسکرین پر تھوڑا کم کیا (h-6, w-6)۔
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
               // تبدیلی: آئیکن کا سائز چھوٹی اسکرین پر تھوڑا کم کیا (w-7, h-7)۔
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#525252" className="w-7 h-7 md:w-8 md:h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8 M5 15h14" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <OverlayMenu isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Navbar;














