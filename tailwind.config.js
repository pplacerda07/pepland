/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#E3E4DE',
        gold: {
          DEFAULT: '#B08A43',
          light: '#C9A45A',
          dark: '#8E6D30',
        },
        sage: {
          DEFAULT: '#97A79D',
          light: '#B2BFBA',
          dark: '#718078',
        },
        dark: {
          DEFAULT: '#1A1A16',
          light: '#252520',
          card: '#222220',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B08A43 0%, #C9A45A 50%, #8E6D30 100%)',
        'dark-gradient': 'linear-gradient(180deg, #F8F9FA 0%, #E3E4DE 100%)',
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 40%, #E3E4DE 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(176, 138, 67, 0.25)',
        'gold-lg': '0 8px 40px rgba(176, 138, 67, 0.35)',
        'dark-card': '0 4px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
