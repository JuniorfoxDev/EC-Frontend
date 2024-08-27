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
        'hero-news' : "url('https://cdn.theatlantic.com/thumbor/Kh7MERWAjXh7T0DlGZDnxW9C7tU=/0x182:3500x2151/1600x900/media/img/mt/2015/07/25_original_24_/original.jpg')"
      }
    },
  },
  plugins: [],
}