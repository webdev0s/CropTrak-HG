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
        '17px': '17px',
        '19px': '19px',
        '25px': '25px',
        '18px': '18px',
        'testimonial': '32px'
      },
      lineHeight: {
        '150%': '150%',
        'extra-loose': '2.5',
        '12': '3rem',
      },
      letterSpacing: {
        'wide': '0.03rem',
        'widecustom': '0.03125rem'
      },
      spacing: {
        'arrowspc': 'calc(100% - 150px)',
        '-50%': '-50%',
        '18%': '18%',
        '32rem': '32rem',
        '23': '5.75rem',
        '17': '4.2rem',
        '300px': '300px',
        '75px': '75px',
        '73px': '73px',
        '71px': '71px',
        '69px': '69px',
        '62px': '62px',
        '60px': '60px',
        '50px': '50px',
        '38px': '38px',
        '35px': '35px',
        '30px': '30px',
        '25px': '25px',
        '23px': '23px',
        '18px': '18px',
        '14px': '14px',
        '10px': '10px',
        '5px': '5px',
        '3px': '3px',
        '2px': '2px',
        '0.5px': '0.5px',
        '19.2px': '19.2px',
        '11.2px': '11.2px',
        '56px': '56px',
        '16px': '16px',
        '90px': '90px',
        '68px': '68px',
        '266px': '266px',
        '4px': '4px',
        '8%': '8%',
        '80px': '80px',
        '40px': '40px',
        '12px': '12px',
        '150px': '150px',
        '100px': '100px',
        '13px': '13px',
        '600px': '600px',
        '100%': '100%',
        '2000px': '2000px'
      },
      rotate:{
        '45': '-45deg'
      },
      maxWidth: {
        '1340px': '1340px',
        '95%' : '95%',
        '90%' : '90%',
        '85%' : '85%',
        '80%' : '80%',
        '75%' : '75%',
        '300px': '300px',
        '73%': '73%',
        '88%': '88%',
        '93%': '93%',
        '77%': '77%',
        '70%': '70%',
        '595px': '595px'
      },
      width: {
        '93%' : '93%',
        'half': '50%'
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
        'custom': '1200px',
      },
    },
  },
  plugins: [],
}