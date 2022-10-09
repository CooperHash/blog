import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

import { NAV_BUTTON } from './src/styles/styles'

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      // screens: {
      //   'sm': { max: '640px' },
      //   'md': { min: '786px', max: '1024px' },
      //   'lg': { min: '1024px', max: '1280px' },
      //   'xl': { min: '1280px', max: '1536px' },
      //   '2xl': { min: '1536px'},
      // },
      lineClamp: {
        sm: '8',
        lg: '10',
      },
      colors: {
        blue: colors.sky,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      lineHeight: {
        'video': '1.2',
      },
      width: {
        all: '100%',
        bar: '90%',
        half: '50%'
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '4px',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
        cycle: '50%'
      },
      outline: {
        no: '0px'
      },
      keyframes: {
        editor: {
          '0%, 100%': { transform: 'translateY(0em) ' },
          '20%': { transform: 'translateY(0.5em) ' },
          '30%': { transform: 'translateY(1em) ' },
          '40%': { transform: 'translateY(0em) ' },
          '50%': { transform: 'translateY(1em) ' },
          '70%': { transform: 'translateY(0em) ' },
          '90%': { transform: 'translateY(1em) ' },
        },
      },
      animation: {
        editor: 'editor 2s ease-in',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }
      addUtilities(newUtilities)
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.nav': NAV_BUTTON,
        '.btn-blue': {
          'backgroundColor': '#3490dc',
          'color': '#3490dc',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          'backgroundColor': '#e3342f',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      }
      addComponents(buttons)
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic('skew', ({ Utility, Style }) => {
        return Utility.handler
          .handleStatic(Style('skew'))
          .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
          .createProperty('transform')
      }, variants('skew'))
    }),
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
})