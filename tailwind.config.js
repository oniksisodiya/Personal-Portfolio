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
        lightBg: '#E2E8F0',
        lightText: '#1A202C',
        darkBg: '#1A202C',
        darkText: '#E2E8F0',
        primary: '#4F46E5',
        secondary: '#10B981',
        // Add new gradient colors for the animation
        lightGradient: '#ffe4e1, #add8e6, #e6e6fa',
        darkGradient: '#4b5563, #374151, #1f2937',
      },
      fontFamily: {
        'signature': ["Fasthand"],
      },
      keyframes: {
        movingBg: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        movingBg: 'movingBg 15s ease infinite',
      }
    },
  },
  plugins: [],
};
