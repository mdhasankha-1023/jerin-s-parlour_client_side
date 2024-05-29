/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'btnPrimary' : '#F63E7B',
      'primaryBg': '#F63E7B',
      'secondaryBg': '#FFF8F5' 
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

