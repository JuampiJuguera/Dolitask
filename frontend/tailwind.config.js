/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    colors: {
      primary: '#374151',
      primary2: '#1f2937',
      dark:'#111827',
      dark2: '#0C121D',
      secondary: '#AB92BF',
      primaryText: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Mono']
      },
      height: {
        '82': '82rem'
      }
    },
  },
  plugins: [],
}

