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
        'hero-news':"url('https://cdn.theatlantic.com/thumbor/Kh7MERWAjXh7T0DlGZDnxW9C7tU=/0x182:3500x2151/1600x900/media/img/mt/2015/07/25_original_24_/original.jpg')",
        'loca-1' : "url('https://www.superkicks.in/cdn/shop/files/3_afafaad5-396c-4123-9db2-62a40dfb8a23.jpg?v=1690967113')",
        'loca-2' : "url('https://www.superkicks.in/cdn/shop/files/1_9f867289-2726-4803-aaf5-46d6042cdf04.jpg?v=1690967178')",
        'loca-3' : "url('https://www.superkicks.in/cdn/shop/files/4_d1ad8724-0844-4f50-a570-0ff794b664a7.jpg?v=1690967231')",
        'loca-4' : "url('https://www.superkicks.in/cdn/shop/files/2_0e31b185-2f03-4d6b-b7ec-695589fe2c5b.jpg?v=1690967272')"
      }
    },
  },
  plugins: [],
}