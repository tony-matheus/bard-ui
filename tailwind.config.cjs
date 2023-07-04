/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{ts,tsx}',
    'modules/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red50: 'hsl(var(--red50))',
        red100: 'hsl(var(--red100))',
        red300: 'hsl(var(--red300))',
        red500: 'hsl(var(--red500))',
        red700: 'hsl(var(--red700))',
        red900: 'hsl(var(--red900))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
