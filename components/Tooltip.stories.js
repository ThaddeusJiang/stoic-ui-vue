export default {
  title: 'Components',
}

export const Tooltip = () =>
  `
  <div>
    <button class="btn" content="Some mobile browsers only fire mouseenter"
      v-tippy="{ trigger : 'mouseenter' }">
    Hover or touch
    </button>

    <popover />
  </div>
  `

Tooltip.parameters = {
  docs: {
    description: {
      story:
        "use vue-tippy, see docs https://kabbouchi.github.io/vue-tippy/4.0/demo.html, if don't understand see https://atomiks.github.io/tippyjs/v6/html-content/",
    },
  },
}
