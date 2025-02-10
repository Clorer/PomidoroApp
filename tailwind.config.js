/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'red-950': '#0D0404',
        'red-50': '#FFF2F2',
        'red-alpha-100': '#FF4C4C26',
        'red-alpha-700': '#FF4C4Cb5',
        'green-950': '#040D06',
        'green-50': '#F2FFF5',
        'green-alpha-100': '#4DDA6E26',
        'green-alpha-700': '#4DDA6Eb5',
        'blue-950': '#04090D',
        'blue-50': '#F2F9FF',
        'blue-alpha-100': '#4CACFF26',
        'blue-alpha-700': '#4CACFFb5',
        }
    },
  },
  plugins: [],
  darkMode: ['selector'],
}

