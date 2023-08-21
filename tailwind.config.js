/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      theme:{      
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
    }
            },
  plugins: [],
  }
}
