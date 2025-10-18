/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
            fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes:{
        fadeinout:{
          '0%':{transform:'scale(0.5)' , opacity:"0"},
         // '35%':{transform:'scale(0.50)' , opacity:"60"},
          '50%':{transform:'scale(1)' , opacity:"50"},
         // '75%':{transform:'scale(0.50)' , opacity:"60"},
          '100%':{transform:'scale(1)' , opacity:"0"}
        },
        fadein:{
          '0%':{opacity:"0"},
          '50%':{opacity:"0.4"}
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        fadein:'fadein 3s ease-in forwards',
        fadeinout:'fadeinout 1s ease-in-out forwards ',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
