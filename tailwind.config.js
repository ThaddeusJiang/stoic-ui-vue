// tailwind.config.js
const plugin = require('windicss/plugin')

module.exports = {
  plugins: [
    require('windicss/plugin/forms'),
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
  ],
}
