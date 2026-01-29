/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. 搬過來的顏色設定
      colors: {
        lab: {
          primary: '#003366', // 深藍色
          light: '#ffffff',   // 白色
          gray: '#f3f4f6',    // 淺灰色
          accent: '#E63946',  // 紅色點綴
        }
      },
      // 2. 搬過來的字型設定
      fontFamily: {
        sans: ['"Noto Sans TC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}