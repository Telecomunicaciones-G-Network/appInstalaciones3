/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary:'#0e0e0e',
      secondary:'#e61919',
      warning:'#fbbf24',
      error:'#dc2626',
    }
  },
  plugins: [],
}

