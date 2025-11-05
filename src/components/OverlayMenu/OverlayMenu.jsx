

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './OverlayMenu.css';

// const menuLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'Behind The Pixels', path: '/behind-the-pixels' },
//   { name: 'Branding', path: '/branding' },
//   { name: 'Social Media Marketing', path: '/social-media-marketing' },
//   { name: 'SEO', path: '/seo' },
//   { name: 'SEM', path: '/sem' },
//   { name: 'Contact Us', path: '/contact-us' }
// ];

// // 'setIsMenuOpen' ko props ke zariye receive karen
// const OverlayMenu = ({ isMenuOpen, setIsMenuOpen }) => {
//   return (
//     <div 
//       className={`fixed top-0 left-0 w-full h-full bg-[#EAEAEA] z-10 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
//     >
//       <div id="menu-scroll-container" className="pt-32 h-full flex flex-col items-end pr-8 md:pr-16 overflow-y-auto">
//         <nav className="flex flex-col items-end gap-10 text-right pb-10 w-full">
//           {menuLinks.map((link, index) => (
//             <Link 
//               key={index} 
//               to={link.path} 
//               className="menu-link text-5xl md:text-7xl text-gray-400"
//               onClick={() => setIsMenuOpen(false)} // Click par menu band ho jayega
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default OverlayMenu;














//------------------------------------------------


import React from 'react';
import { Link } from 'react-router-dom';
import './OverlayMenu.css';

const menuLinks = [
  { name: 'Home', path: '/' },
  { name: 'Behind The Pixels', path: '/behind-the-pixels' },
  { name: 'Branding', path: '/branding' },
  { name: 'Social Media Marketing', path: '/social-media-marketing' },
  { name: 'SEO', path: '/seo' },
  { name: 'SEM', path: '/sem' },
  { name: 'Contact Us', path: '/contact-us' }
];

const OverlayMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div 
      className={`fixed top-0 left-0 w-full h-full bg-[#EAEAEA] z-20 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* 
        تبدیلیاں:
        1. pt-28: اوپر سے پیڈنگ تھوڑی کم کی گئی ہے تاکہ لنکس navbar کے نیچے سے شروع ہوں۔
        2. pr-6: دائیں طرف سے پیڈنگ موبائل کے لیے کم کی گئی ہے۔
      */}
      <div id="menu-scroll-container" className="pt-28 h-full flex flex-col items-end pr-6 sm:pr-8 md:pr-16 overflow-y-auto">
        {/* 
          تبدیلیاں:
          1. gap-6: لنکس کے درمیان عمودی فاصلہ موبائل پر کم کیا گیا ہے۔
        */}
        <nav className="flex flex-col items-end gap-6 sm:gap-8 md:gap-10 text-right pb-10 w-full">
          {menuLinks.map((link, index) => (
            <Link 
              key={index} 
              to={link.path} 
              // تبدیلی: موبائل کے لیے فونٹ سائز (text-4xl) سے شروع کیا گیا ہے۔
              className="menu-link text-4xl sm:text-5xl md:text-7xl text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default OverlayMenu;