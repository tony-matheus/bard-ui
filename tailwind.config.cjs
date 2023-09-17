/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{ts,tsx}',
    'modules/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // BLACK
        white: 'hsl(var(--white))',
        black: 'hsl(var(--black))',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // RED
        red50: 'hsl(var(--red50))',
        red100: 'hsl(var(--red100))',
        red300: 'hsl(var(--red300))',
        red500: 'hsl(var(--red500))',
        red700: 'hsl(var(--red700))',
        red900: 'hsl(var(--red900))',

        // GREEN
        green50: 'hsl(var(--green50))',
        green100: 'hsl(var(--green100))',
        green200: 'hsl(var(--green200))',
        green300: 'hsl(var(--green300))',
        green400: 'hsl(var(--green400))',
        green500: 'hsl(var(--green500))',
        green600: 'hsl(var(--green600))',
        green700: 'hsl(var(--green700))',
        green800: 'hsl(var(--green800))',
        green900: 'hsl(var(--green900))',

        // YELLOW
        yellow50: 'hsl(var(--yellow50))',
        yellow100: 'hsl(var(--yellow100))',
        yellow200: 'hsl(var(--yellow200))',
        yellow300: 'hsl(var(--yellow300))',
        yellow400: 'hsl(var(--yellow400))',
        yellow500: 'hsl(var(--yellow500))',
        yellow600: 'hsl(var(--yellow600))',
        yellow700: 'hsl(var(--yellow700))',
        yellow800: 'hsl(var(--yellow800))',
        yellow900: 'hsl(var(--yellow900))',

        // BLUE
        blue50: 'hsl(var(--blue50))',
        blue100: 'hsl(var(--blue100))',
        blue200: 'hsl(var(--blue200))',
        blue300: 'hsl(var(--blue300))',
        blue400: 'hsl(var(--blue400))',
        blue500: 'hsl(var(--blue500))',
        blue600: 'hsl(var(--blue600))',
        blue700: 'hsl(var(--blue700))',
        blue800: 'hsl(var(--blue800))',
        blue900: 'hsl(var(--blue900))',

        primary: {
          DEFAULT: 'hsl(var(--green500) / <alpha-value>)',
          foreground: 'hsl(var(--white) / <alpha-value>)',
          hover: 'hsl(var(--green700) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--blue500) / <alpha-value>)',
          foreground: 'hsl(var(--white) / <alpha-value>)',
          hover: 'hsl(var(--blue700) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--red500) / <alpha-value>)',
          foreground: 'hsl(var(--white) / <alpha-value>)',
          hover: 'hsl(var(--red700) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        input: '0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
        'input-hover': ' 0px 0px 0px 5px rgba(37, 164, 86, 0.30)',
        primary: '0px 0px 0px 2px hs(var(--green500)) inset',
        'primary-active': '0px 0px 0px 2px hsl(var(--green700)) inset',

        secondary: '0px 0px 0px 2px hsl(var(--blue500)) inset',
        'secondary-lg': '0px 0px 0px 4px hsl(var(--blue500)) inset',

        destructive: '0px 0px 0px 2px hsl(var(--red500)) inset',
        'destructive-lg': '0px 0px 0px 4px hsl(var(--red500)) inset',
      },
    },
  },
  plugins: [],
}
