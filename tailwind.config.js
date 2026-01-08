/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        salesforce: {
          blue: '#0176D3',
          darkBlue: '#032D60',
          lightBlue: '#1B96FF',
          cloud: '#00A1E0',
          navy: '#16325C',
        },
        success: '#2E844A',
        warning: '#DD7A01',
        error: '#EA001E',
        info: '#0176D3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
