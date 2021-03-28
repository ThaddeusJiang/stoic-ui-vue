// tailwind.config.js
const plugin = require('windicss/plugin')
const colors = require('windicss/colors')

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors,
      primary: colors.pink,
      link: colors.blue,
      info: colors.indigo,
      success: colors.green,
      warning: colors.yellow,
      danger: colors.red,
    },
  },
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/typography'),
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1, h2, h3': {
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.tight'),
        },
        h1: {
          fontSize: theme('fontSize.5xl'),
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
        },
        h3: {
          fontSize: theme('fontSize.xl'),
        },

        summary: {
          display: 'block',
        },
        'summary::marker': {
          display: 'none',
        },
        'summary::-webkit-details-marker': {
          display: 'none',
        },
        'details[open] > summary > span.g-summary-arrow': {
          transform: 'rotate(180deg)',
        },
        'th, dt': {
          fontWeight: theme('font.bold'),
          padding: `${theme('spacing.2')} ${theme('spacing.2')}`,
          backgroundColor: theme('colors.gray.100'),
          '&:hover': {
            backgroundColor: theme('colors.gray.200'),
          },
        },
        'td, dd': {
          padding: `${theme('spacing.2')} ${theme('spacing.2')}`,
        },
      })
    }),
    plugin(function ({ addComponents, theme }) {
      const button = {
        '.button': {
          backgroundColor: theme('colors.white'),
          borderWidth: '1px',
          borderColor: theme('colors.gray.300'),
          borderRadius: theme('borderRadius.md'),
          paddingTop: theme('spacing.2'),
          paddingBottom: theme('spacing.2'),
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
          cursor: 'pointer',
          textAlign: 'center',
          whiteSpace: 'nowrap',

          '&.is-white': {
            backgroundColor: theme('colors.white'),
            borderColor: 'transparent',
          },
          '&.is-light': {
            backgroundColor: theme('colors.gray.200'),
          },
          '&.is-dark': {
            backgroundColor: theme('colors.gray.700'),
            color: theme('colors.gray.200'),
          },
          '&.is-black': {
            backgroundColor: theme('colors.black'),
            color: theme('colors.white'),
          },
          '&.is-text': {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            textDecoration: 'underline',
          },
          '&.is-ghost': {
            background: '0 0',
            borderColor: 'transparent',
            color: theme('colors.blue.600'),
          },
        },
      }
      addComponents(button)
    }),

    plugin(function ({ addComponents, theme }) {
      const colors = {
        '.is-primary': {
          backgroundColor: theme('colors.primary.600'),
          color: theme('colors.white'),
        },

        '.is-link': {
          backgroundColor: theme('colors.link.600'),
          color: theme('colors.white'),
        },
        '.is-info': {
          backgroundColor: theme('colors.info.600'),
          color: theme('colors.white'),
        },
        '.is-success': {
          backgroundColor: theme('colors.success.600'),
          color: theme('colors.white'),
        },
        '.is-warning': {
          backgroundColor: theme('colors.warning.600'),
          color: theme('colors.black'),
        },
        '.is-danger': {
          backgroundColor: theme('colors.danger.600'),
          color: theme('colors.white'),
        },
      }
      addComponents(colors)
    }),
  ],
}
