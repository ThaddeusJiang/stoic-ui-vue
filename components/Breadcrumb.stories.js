export default {
  title: 'Components',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <breadcrumb />
  `,
})

export const Breadcrumb = Template.bind({})
