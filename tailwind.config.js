/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.md',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        'bs-green': 'rgb(99, 217, 182)',
        'bs-blue': 'rgb(36, 112, 169)',
        'bs-gray': 'rgb(245, 245, 245)',
        'bs-text': 'rgb(33, 37, 41)',
        'bs-menu': 'rgb(35, 48, 61)',
        'bs-menu-hover': 'rgb(237, 239, 240)',
        'bs-code': 'rgb(204, 204, 204)',
        'bs-bg-code': 'rgb(45, 45, 45)'
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif']
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 85s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
