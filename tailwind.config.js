/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {   
      backgroundImage: {
        'globe-pattern': "url(https://staging3.croptrak.com/wp-content/uploads/2023/08/bg-about.svg)"
      },
      backgroundPosition: {
        'mobile-position': 'center top 2%'
      },
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
      fontSize: {
        'custom':'1.3rem',
        '56px' : '56px',
      },
      borderWidth:{
        '3px': '3px',
      },
      lineHeight: {
        '130%': '130%',
        '150%': '150%',
        'extra-loose': '2.5',
        '12': '3rem',
      },
      letterSpacing: {
        'wide' : '0.03rem'
      },
      spacing: {
        'arrowspc': 'calc(100% - 150px)',
        'linecustom': '2.25rem',
        '-50%': '-50%',
        '18%': '18%',
        '16%': '16%',
        '8%': '8%',
        '32rem': '32rem',
        '23': '5.75rem',
        '17': '4.2rem',
        '300px': '300px',
        '145px': '145px',
        '75px': '75px',
        '73px': '73px',
        '71px': '71px',
        '69px': '69px',
        '62px': '62px',
        '60px': '60px',
        '50px': '50px',
        '38px': '38px',
        '30px': '30px',
        '25px': '25px',
        '23px': '23px',
        '18px': '18px',
        '14px': '14px',
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
        '938px': '938px',
        '95%' : '95%', 
        'custom': '90.17%',
        '90%' : '90%',
        '85%' : '85%',
        '80%' : '80%',
        '75%' : '75%',
        '300px': '300px',
      },
      width: {
        '93%' : '93%',
        '815.844px': '815.844px',
        '72.27%': '850.812px',
        '400px': '400px',
        '80%' : '80%',
        'text' : '70%',
        'textl': '73%',
      },
      minWidth:{
        '1400px': '1400px',
        '85%' : '85%',
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