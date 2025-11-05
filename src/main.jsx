// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )








import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Is line ko add karen

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* App ko BrowserRouter ke andar wrap kar den */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);