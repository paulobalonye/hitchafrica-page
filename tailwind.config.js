/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03464A',
        secondary: '#abd1c6',
        dark: '#001E1D'
      },
      backgroundSize: {
        half: '50% auto',
        '16': '4rem',
      }
    },
  },
  plugins: [],
}
