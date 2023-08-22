/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {        
      colors:{
      'primary-green':'#78B96D',
      'primary-night': '#231F20',
      'primary-navy': '#0D162B',
      'primary-gray': '#F2F1EF',
      'primary-teal': '#54C2AD',
      'primary-gold': '#DBA712',
      'primary-taupe': '#D1CBC0',
      'primary-clay': '#873331',
    },
      fontFamily: {
        'primary-sans': ['IBM Plex Sans', 'sans-serif'],
        'primary-serif': ['IBM Plex Serif', 'serif'],
      },
      spacing: {
        '300px': '300px',
        '71px': '71px',
        '60px': '60px',
        '50px': '50px',
      },
      maxWidth: {
        '1340px': '1340px',
        '90%' : '90%'
      },
      screens: {
        'tablet': '768px',
        'laptop': '980px',
        'desktop': '1400px',
      },
    },
  },
  plugins: [],
}