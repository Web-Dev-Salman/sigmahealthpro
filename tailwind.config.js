/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      mainColor: '#01b140',
      seconderyColor: '#00274C',
      bgColor: '#CAC8C8',
      sideBarTextColor:'#727272'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

