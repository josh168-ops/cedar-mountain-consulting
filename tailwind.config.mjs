/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cedar: {
          50:  '#f1f7f1',
          100: '#d9ecda',
          200: '#b5d8b7',
          300: '#85bc88',
          400: '#559b59',
          500: '#377d3b',
          600: '#28632c',
          700: '#1f4f23',
          800: '#184020',  // primary dark green
          900: '#102b15',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
