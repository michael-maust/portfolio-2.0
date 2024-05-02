/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Alegreya', 'serif'],
      },

      colors: {
        white: '#fff',
        gray: {
          DEFAULT: '#3D3D3E',
          50: '#f6f6f7',
          100: '#e3e3e4',
          200: '#c7c7c8',
          300: '#a3a3a5',
          400: '#808081',
          500: '#656567',
          600: '#505051',
          700: '#3d3d3e',
          800: '#373738',
          900: '#303031',
        },

        lightgray: {
          DEFAULT: '#48484A',
        },

        tan: {
          DEFAULT: '#FFE5D9',
          50: '#fff2ed',
          100: '#ffe5d9',
          200: '#fec2aa',
          300: '#fd9774',
          400: '#fb613c',
          500: '#f93916',
          600: '#ea1f0c',
          700: '#c2120c',
          800: '#9a1213',
          900: '#7c1212',
        },

        primary: {
          DEFAULT: '#E07A5F',
          50: '#fdf5f3',
          100: '#fbeae5',
          200: '#f9d8cf',
          300: '#f3bcae',
          400: '#eb957e',
          500: '#e07a5f',
          600: '#ca5738',
          700: '#a9462c',
          800: '#8d3c27',
          900: '#753727',
        },

        blue: {
          DEFAULT: '#5C8084',
          50: '#f4f7f7',
          100: '#e2eaeb',
          200: '#c8d8d9',
          300: '#a2bcbe',
          400: '#75989b',
          500: '#5c8084',
          600: '#4d686d',
          700: '#43575b',
          800: '#3c4b4e',
          900: '#354144',
        },

        lightblue: {
          DEFAULT: '#919aa2',
          50: '#f6f7f8',
          100: '#ebecee',
          200: '#dcdfe1',
          300: '#c3c9cd',
          400: '#a6aeb4',
          500: '#919aa2',
          600: '#7f8891',
          700: '#727983',
          800: '#60656d',
          900: '#4f5359',
        },

        green: {
          DEFAULT: '#5C846A',
          50: '#f3f6f4',
          100: '#e1eae2',
          200: '#c5d5c9',
          300: '#9eb7a5',
          400: '#73947d',
          500: '#5c846a',
          600: '#3e5d49',
          700: '#324a3b',
          800: '#293c31',
          900: '#223229',
        },

        warning: {
          DEFAULT: '#ffdf88',
          50: '#fffaeb',
          100: '#fff0c6',
          200: '#ffdf88',
          300: '#ffd166',
          400: '#ffb220',
          500: '#f98f07',
          600: '#dd6802',
          700: '#b74706',
          800: '#94360c',
          900: '#7a2e0d',
        },
      },

      keyframes: {
        aurora: {
          from: {
            backgroundPosition: '50% 50%, 50% 50%',
          },
          to: {
            backgroundPosition: '350% 50%, 350% 50%',
          },
        },
      },

      animation: {
        aurora: 'aurora 60s linear infinite',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
