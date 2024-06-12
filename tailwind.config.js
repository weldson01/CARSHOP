/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary: '#A91D3A',
        second: '#C73659',
        white_bg: 'D9D9D9'
      },
      spacing:{
        img_tall: '350px',
        banner_h: '700px'
      }
    },
  },
  plugins: [],
}

