

// import './SeoBanner.css';
// // آئیکنز کو SVG کے طور پر شامل کیا گیا ہے
// const icons = {
// wifi: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
// settings: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
// globe: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
// atSign: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>,
// mapPin: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
// pieChart: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
// };
// const Icon = ({ name, ...props }) => {
// const IconComponent = icons[name];
// return IconComponent ? <IconComponent {...props} /> : null;
// };
// // SVG کے اندر آئیکن کو رکھنے کے لیے کمپوننٹ
// const IconInSvg = ({ x, y, name, size = 'large' }) => {
// const wrapperSize = size === 'large' ? 52 : 40;
// const iconSize = size === 'large' ? 28 : 20;
// return (
// <foreignObject x={x - wrapperSize / 2} y={y - wrapperSize / 2} width={wrapperSize} height={wrapperSize}>
// <div className="icon-wrapper" style={{ width: wrapperSize, height: wrapperSize }}>
// <Icon name={name} style={{ width: iconSize, height: iconSize }} className="icon-svg" />
// </div>
// </foreignObject>
// );
// };
// // سرکٹ لائنوں کا SVG
// const CircuitGraphic = () => (
// <svg viewBox="0 0 250 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
// {/* لائنیں */}
// <path d="M250 30 L100 30" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
// <path d="M150 70 L100 70" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
// <path d="M200 110 L100 110 L100 70" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
// <path d="M150 150 L100 150" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
// <path d="M250 190 L100 190 L100 150" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
// <path d="M250 270 L100 270 L100 230" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
// <path d="M150 230 L100 230" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />

// {/* ڈاٹس */}
//     <circle cx="100" cy="30" r="4" fill="#a7ddc9" />
//     <circle cx="100" cy="70" r="4" fill="#a7ddc9" />
//     <circle cx="100" cy="110" r="4" fill="#a7ddc9" />
//     <circle cx="100" cy="150" r="4" fill="#a7ddc9" />
//     <circle cx="100" cy="190" r="4" fill="#a7ddc9" />
//     <circle cx="100" cy="230" r="4" fill="#a7ddc9" />
//     <circle cx="100" cy="270" r="4" fill="#a7ddc9" />
    
//     {/* آئیکنز */}
//     <IconInSvg x={250} y={30} name="wifi" size="large" />
//     <IconInSvg x={150} y={70} name="settings" size="small" />
//     <IconInSvg x={200} y={110} name="globe" size="large" />
//     <IconInSvg x={150} y={150} name="atSign" size="small" />
//     <IconInSvg x={250} y={190} name="mapPin" size="small" />
//     <IconInSvg x={150} y={230} name="pieChart" size="large" />
// </svg>
// );
// const SeoBanner = () => {
// return (
// // تبدیلی 1: بیک گراؤنڈ کلر تبدیل اور اوپر کی پیڈنگ ختم کر دی گئی ہے
// <section className="bg-[#F2F2F2] w-full pt-16 pb-16 px-4 sm:px-6 lg:px-8">
// <div className="max-w-full mx-auto flex items-center justify-center gap-4">

// {/* بائیں طرف کا سرکٹ */}
//     <div className="w-full h-96">
//       <CircuitGraphic />
//     </div>

//     {/* مرکزی حصہ: میگنیفائنگ گلاس */}
//     <div className="flex-shrink-0 mx-4 sm:mx-8">
//       <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#a7f3d0]/90 to-[#6ee7b7]/90 p-2.5 relative">
//         {/* تبدیلی 2: میگنیفائنگ گلاس کے اندر کا بیک گراؤنڈ بھی تبدیل کر دیا گیا ہے */}
//         <div className="w-full h-full bg-[#F2F2F2] rounded-full flex items-center justify-center relative overflow-hidden">
//           <svg viewBox="0 0 1024 512" className="absolute w-full h-full object-cover opacity-10 text-[#a7ddc9] scale-150 -translate-y-4">
//               <path d="M1024 256c0 141.375-229.25 256-512 256S0 397.375 0 256 229.25 0 512 0s512 114.625 512 256zM768 256c0-106-114.5-192-256-192S256 150 256 256s114.5 192 256 192 256-86 256-192z"></path>
//           </svg>
//           <h1 className="text-7xl sm:text-9xl font-bold text-gray-500 z-10">SEO</h1>
//         </div>
//       </div>
//       <div className="w-20 h-24 sm:w-24 sm:h-28 bg-gradient-to-b from-[#a7f3d0]/90 to-[#6ee7b7]/90 mx-auto -mt-8 sm:-mt-10"></div>
//     </div>

//     {/* دائیں طرف کا سرکٹ */}
//     <div className="w-full h-96" style={{ transform: 'scaleX(-1)' }}>
//       <CircuitGraphic />
//     </div>

//   </div>
// </section>
// );
// };
// export default SeoBanner;




















import React from 'react';
import './SeoBanner.css'; // یقینی بنائیں کہ آپ کے پاس یہ CSS فائل موجود ہے

// ====================================================================
// آئیکنز اور ان کے کمپوننٹس (اس میں کوئی تبدیلی نہیں)
// ====================================================================
const icons = {
  wifi: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>,
  settings: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
  globe: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  atSign: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/></svg>,
  mapPin: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  pieChart: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
};

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent {...props} /> : null;
};

const IconInSvg = ({ x, y, name, size = 'large' }) => {
  const wrapperSize = size === 'large' ? 52 : 40;
  const iconSize = size === 'large' ? 28 : 20;
  return (
    <foreignObject x={x - wrapperSize / 2} y={y - wrapperSize / 2} width={wrapperSize} height={wrapperSize}>
      <div className="icon-wrapper" style={{ width: wrapperSize, height: wrapperSize }}>
        <Icon name={name} style={{ width: iconSize, height: iconSize }} className="icon-svg" />
      </div>
    </foreignObject>
  );
};

const CircuitGraphic = () => (
  <svg viewBox="0 0 250 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <path d="M250 30 L100 30" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
    <path d="M150 70 L100 70" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
    <path d="M200 110 L100 110 L100 70" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
    <path d="M150 150 L100 150" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
    <path d="M250 190 L100 190 L100 150" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
    <path d="M250 270 L100 270 L100 230" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
    <path d="M150 230 L100 230" fill="none" stroke="#a7ddc9" strokeWidth="1.5" />
    <circle cx="100" cy="30" r="4" fill="#a7ddc9" />
    <circle cx="100" cy="70" r="4" fill="#a7ddc9" />
    <circle cx="100" cy="110" r="4" fill="#a7ddc9" />
    <circle cx="100" cy="150" r="4" fill="#a7ddc9" />
    <circle cx="100" cy="190" r="4" fill="#a7ddc9" />
    <circle cx="100" cy="230" r="4" fill="#a7ddc9" />
    <circle cx="100" cy="270" r="4" fill="#a7ddc9" />
    <IconInSvg x={250} y={30} name="wifi" size="large" />
    <IconInSvg x={150} y={70} name="settings" size="small" />
    <IconInSvg x={200} y={110} name="globe" size="large" />
    <IconInSvg x={150} y={150} name="atSign" size="small" />
    <IconInSvg x={250} y={190} name="mapPin" size="small" />
    <IconInSvg x={150} y={230} name="pieChart" size="large" />
  </svg>
);

// ====================================================================
// Main SeoBanner Component (Responsive Version)
// ====================================================================
const SeoBanner = () => {
  return (
    <section className="bg-[#F2F2F2] w-full pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      {/* 
        حل 1: 
        - لے آؤٹ کو `flex` سے `grid` میں تبدیل کیا گیا تاکہ ریسپانسیو کنٹرول آسان ہو۔
        - موبائل پر صرف ایک کالم (مرکزی حصہ) اور بڑی اسکرینوں پر تین کالم (`lg:grid-cols-3`) ہوں گے۔
      */}
      <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-4">
        
        {/* 
          حل 2: 
          - بائیں طرف کی سرکٹ گرافک کو موبائل پر چھپا دیا گیا ہے (`hidden lg:block`)۔
        */}
        <div className="w-full h-96 hidden lg:block">
          <CircuitGraphic />
        </div>
        
        {/* مرکزی حصہ: میگنیفائنگ گلاس */}
        <div className="flex-shrink-0 w-full flex flex-col items-center">
          {/* 
            حل 3: 
            - سائز کو چھوٹی اسکرینوں کے لیے ایڈجسٹ کیا گیا ہے۔
          */}
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#a7f3d0]/90 to-[#6ee7b7]/90 p-2.5 relative">
            <div className="w-full h-full bg-[#F2F2F2] rounded-full flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 1024 512" className="absolute w-full h-full object-cover opacity-10 text-[#a7ddc9] scale-150 -translate-y-4">
                  <path d="M1024 256c0 141.375-229.25 256-512 256S0 397.375 0 256 229.25 0 512 0s512 114.625 512 256zM768 256c0-106-114.5-192-256-192S256 150 256 256s114.5 192 256 192 256-86 256-192z"></path>
              </svg>
              {/* 
                حل 4: 
                - 'SEO' ٹیکسٹ کا سائز موبائل پر چھوٹا کیا گیا ہے۔
              */}
              <h1 className="text-8xl lg:text-9xl font-bold text-gray-500 z-10">SEO</h1>
            </div>
          </div>
          <div className="w-20 h-24 sm:w-24 sm:h-28 bg-gradient-to-b from-[#a7f3d0]/90 to-[#6ee7b7]/90 mx-auto -mt-8 sm:-mt-10"></div>
        </div>
        
        {/* 
          حل 5: 
          - دائیں طرف کی سرکٹ گرافک کو بھی موبائل پر چھپا دیا گیا ہے (`hidden lg:block`)۔
        */}
        <div className="w-full h-96 hidden lg:block" style={{ transform: 'scaleX(-1)' }}>
          <CircuitGraphic />
        </div>

      </div>
    </section>
  );
};

export default SeoBanner;