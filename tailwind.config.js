// tailwind.config.js
const plugin = require('windicss/plugin')

module.exports = {
  plugins: [
    require('windicss/plugin/forms'),
    plugin(function ({ addBase }) {
      addBase({
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
      })
    }),
  ],
}
