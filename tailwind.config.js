module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#00040d',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
