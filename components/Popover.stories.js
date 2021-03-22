export default {
  title: 'Components',
}

export const Popover = () =>
  `
    <popover title="popover">
      <s-table :titles="['A', 'B', 'C']" :items="[
        {
          A: 'a',
          B: 'b',
          C: 'c',
        },
        {
          A: 'a',
          B: 'b',
          C: 'c',
        },
        {
          A: 'a',
          B: 'b',
          C: 'c',
        },
      ]" />
    </popover>
  `

Popover.parameters = {
  docs: {
    description: {
      story:
        "use vue-tippy, see docs https://kabbouchi.github.io/vue-tippy/4.0/demo.html, if don't understand see https://atomiks.github.io/tippyjs/v6/html-content/",
    },
  },
}
