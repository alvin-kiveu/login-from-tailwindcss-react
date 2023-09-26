/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'primary':{
            "main": "purple",
            "light": "#FFFFFF",
            'black': '#000000',
        },
        'primarydark':{
            "main": "#121212",
            "light": "#060382",
        },
    },
    },
  },
  plugins: [],
}

