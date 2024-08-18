/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate:{
        '17': '17deg',
      },
      animation: {
          'bounce-slow': 'bounce 3s infinite'
      },
      keyframes: {
          bounce: {
              '0%, 100%': { transform: 'translateY(5%)' },
          }
      }
    },
  },
  plugins: [],
}