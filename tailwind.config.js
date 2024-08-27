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
      },
      backgroundImage: {
        'hero-bag': "url('https://www.superkicks.in/cdn/shop/files/1_-_2024-08-15T111625.903.jpg?v=1723700975')",        
      }
    },
  },
  plugins: [],
}