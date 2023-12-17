/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: '#6922EC',
        black: 'rgba(24, 24, 27, 1)',
        'gray-purpure': 'rgba(112, 93, 142, 1)'
      },
      fontFamily: {
        'pj': '"Plus Jakarta Sans", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;',
        'inter': 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

