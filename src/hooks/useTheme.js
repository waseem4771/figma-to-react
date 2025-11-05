import { useState, useEffect } from 'react';

// یہ ہک تھیم کو سنبھالے گا
export const useTheme = () => {
  // localStorage سے تھیم حاصل کریں، اگر نہیں ہے تو 'light' استعمال کریں
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // جب بھی تھیم تبدیل ہو، یہ useEffect چلے گا
  useEffect(() => {
    const root = window.document.documentElement; // <html> ٹیگ

    // پرانی کلاس کو ہٹائیں
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    // نئی کلاس شامل کریں
    root.classList.add(theme);

    // منتخب تھیم کو localStorage میں محفوظ کریں
    localStorage.setItem('theme', theme);
  }, [theme]);

  // تھیم کو تبدیل کرنے کے لیے فنکشن
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // موجودہ تھیم اور ٹوگل فنکشن کو واپس بھیجیں
  return { theme, toggleTheme };
};