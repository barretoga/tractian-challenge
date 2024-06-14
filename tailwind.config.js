/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{vue,js,ts}',
    './components/**/*.vue',
    './configs/formKitTheme.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2188FF',
        },
        secondary: {
          DEFAULT: '#023B78'
        },
        tertiary: {
          DEFAULT: '#17192D',
        }
      },
    },
  },
  plugins: [],
}

