/* eslint-disable @typescript-eslint/no-var-requires */
let defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        mono: ['MesloLGS NF', ...defaultTheme.fontFamily.mono],
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              fontSize: '0.875rem',
            },
          },
          lg: {
            css: {
              fontSize: '1rem',
            },
          },
        };
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
