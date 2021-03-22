export default {
  title: 'Components',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <progress-bar :title="title" :value="value" :badge="badge"></progress-bar>
  `,
})

export const ProgressBar = Template.bind({})
ProgressBar.args = {
  title: 'Progress',
  value: 0.3,
  badge: true,
}
