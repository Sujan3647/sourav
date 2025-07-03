/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#c7d2fe',
          DEFAULT: '#6366f1',
          dark: '#4338ca',
        },
        accent: '#f472b6',
        bg: '#f9fafb',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'fade-up': 'fadeUp 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
