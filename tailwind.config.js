/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: '#6922EC'
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

