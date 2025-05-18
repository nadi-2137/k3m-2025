// tailwind.config.js - konfiguracja Tailwind CSS
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'konstytucja-red': {
          DEFAULT: '#B71C1C',
          50: '#FDE8E8',
          100: '#F9C6C6',
          200: '#F09494',
          300: '#E66262',
          400: '#DC3030',
          500: '#B71C1C',
          600: '#921616',
          700: '#6D1111',
          800: '#490B0B',
          900: '#240505',
        },
        'konstytucja-gold': {
          DEFAULT: '#D4AF37',
          50: '#FAF5E6',
          100: '#F2E7C2',
          200: '#EAD89E',
          300: '#E2C97A',
          400: '#DABB57',
          500: '#D4AF37',
          600: '#A98C29',
          700: '#7F691F',
          800: '#544615',
          900: '#2A230A',
        },
      },
      fontFamily: {
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.red.700'),
              '&:hover': {
                color: theme('colors.red.800'),
              },
            },
            h1: {
              color: theme('colors.gray.900'),
            },
            h2: {
              color: theme('colors.gray.900'),
            },
            h3: {
              color: theme('colors.gray.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}