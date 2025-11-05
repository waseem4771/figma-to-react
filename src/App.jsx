

// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar.jsx';
// import Home from './components/Pages/Home/Home.jsx';

// import BehindThePixels from './components/Pages/BehindThePixels/BehindThePixels.jsx';
// import Branding from './components/Pages/Branding/Branding.jsx';
// import SocialMediaMarketing from './components/Pages/SocialMediaMarketing/SocialMediaMarketing.jsx';
// import SEO from './components/Pages/SEO/SEO.jsx';
// import SEM from './components/Pages/SEM/SEM.jsx';
// import ContactUs from './components/Pages/ContactUs/ContactUs.jsx';
// import './index.css';

// function App() {
//   // Solution: Yahan par 'setIsMenuOpeIn' ko theek karke 'setIsMenuOpen' kar diya gaya hai
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   }, [isMenuOpen]);

//   return (
//     <div>
//       <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
//       {/* 
//         Yeh div ab tab hi show hoga jab menu close ho
//       */}
//       {!isMenuOpen && (
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/behind-the-pixels" element={<BehindThePixels />} />
//           <Route path="/branding" element={<Branding />} />
//           <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
//           <Route path="/seo" element={<SEO />} />
//           <Route path="/sem" element={<SEM />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//         </Routes>
//       )}
//     </div>
//   );
// }

// export default App;

















import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Pages/Home/Home.jsx';

import BehindThePixels from './components/Pages/BehindThePixels/BehindThePixels.jsx';
import Branding from './components/Pages/Branding/Branding.jsx';
import SocialMediaMarketing from './components/Pages/SocialMediaMarketing/SocialMediaMarketing.jsx';
import SEO from './components/Pages/SEO/SEO.jsx';
import SEM from './components/Pages/SEM/SEM.jsx';
import ContactUs from './components/Pages/ContactUs/ContactUs.jsx';

// اپنے نئے بنائے گئے کسٹم ہک کو امپورٹ کریں
import { useTheme } from './hooks/useTheme'; 
import './index.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // اپنے useTheme ہک کو یہاں استعمال کریں
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <div>
      {/* theme اور toggleTheme کو Navbar میں props کے طور پر بھیجیں */}
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      {!isMenuOpen && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/behind-the-pixels" element={<BehindThePixels />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/sem" element={<SEM />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      )}
    </div>
  );
}

export default App;