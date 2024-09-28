/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '2rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '2rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '4xl': [
        '2.5rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '5xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '6xl': [
        '3.75rem',
        {
          lineHeight: '1',
        },
      ],
      '7xl': [
        '4.5rem',
        {
          lineHeight: '1.1',
        },
      ],
      '8xl': [
        '6rem',
        {
          lineHeight: '1',
        },
      ],
      '9xl': [
        '8rem',
        {
          lineHeight: '1',
        },
      ],
    },
    extend: {
      keyframes: {
        disco: {
          '0%': {
            transform: 'translateY(-50%) rotate(0deg)',
          },
          '100%': {
            transform: 'translateY(-50%) rotate(360deg)',
          },
        },
      },

      colors: {
        chalk: '#ffffff',
        white: '#f5f5f5',
        black: '#171717',
        accent: {
          50: '#f2f9fd',
          100: '#e5f1f9',
          200: '#c4e3f3',
          300: '#91cbe8',
          400: '#56b1da',
          500: '#3097c7',
          600: '#2383b6',
          700: '#1b6189',
          800: '#1a5272',
          900: '#1b465f',
          950: '#122d3f',
        },
        primaryGreen: '#C9D94E',
        darkBlue: '#060E40',
        primaryBlue: '#0588A6',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Familjen Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
