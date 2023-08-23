/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-white': '#FEFEFE',
        'primary-green': '#78B96D',
        'primary-night': '#231F20',
        'primary-navy': '#0D162B',
        'primary-teal': '#54C2AD',
        'primary-gold': '#DBA712',
        'primary-taupe': '#D1CBC0',
        'primary-clay': '#873331'
      },
      fontFamily: {
        'primary-sans': ['IBM Plex Sans', 'sans-serif'],
        'primary-serif': ['IBM Plex Serif', 'serif']
      },
      spacing: {
        '50px': '50px',
        '67px': '67px',
        '15px': '15px',
        '0.5px': '0.5px',
        '71px': '71px',
        '35px': '35px',
        '72px': '72px',
        '363px': '363px',
        '300px': '300px'
      },
      maxWidth: {
        '1340px': '1340px',
        '90%': '90%'
      },
      lineHeight: {
        '150%': '150%'
      },
      minWidth: {
        '300px': '300px'
      },
      screens: {
        'tablet': '768px',
        'laptop': '980px',
        'desktop': '1400px'
      }

    }
  },
  plugins: [],
}