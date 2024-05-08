/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        lightShadow: '0 4px 8px rgba(30, 30, 46, 0.2)', // Example light shadow
        darkShadow: '0 4px 8px rgba(0, 0, 0, 0.8)', // Example dark shadow
      },
      colors: {
      // Example custom colors
      lightBg: '#E2E8F0', // Example light mode background
      lightText: '#1A202C', // Light mode text color
      darkBg: '#1A202C', // Dark mode background color
      darkText: '#E2E8F0', // Dark mode text color
      primary: '#4F46E5', // Example primary color
      secondary: '#10B981', // Example secondary color
    },},
    fontFamily:{
      'signature' : [ "Fasthand"],
    }
  },
  plugins: [],
}