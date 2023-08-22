/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {        
      colors:{
      'primary-white': '#FEFEFE',
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
      lineHeight: {
        '150%': '150%',
        'extra-loose': '2.5',
        '12': '3rem',
      },
      spacing: {
        'arrowspc': 'calc(100% - 150px)',
        '-50%': '-50%',
        '32rem': '32rem',
        '17': '4.2rem',
        '300px': '300px',
        '71px': '71px',
        '60px': '60px',
        '50px': '50px',
        '38px': '38px',
        '30px': '30px',
        '23px': '23px',
        '10px': '10px',
        '5px': '5px',
        '3px': '3px',
        '2px': '2px',
      },
      rotate:{
        '45': '-45deg'
      },
      maxWidth: {
        '1340px': '1340px',
        '95%' : '95%',
        '90%' : '90%',
        '80%' : '80%',
        '75%' : '75%',
        '300px': '300px',
      },
      width: {
        '93%' : '93%',
      },
      minWidth:{
        '1400px': '1400px',
        '300px': '300px',
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