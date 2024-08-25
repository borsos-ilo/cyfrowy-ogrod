/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'cream': '#f0f4f5',
      },
      fontFamily: {
        'heading': ['Karla', 'sans-serif'],
        'body': ['Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}