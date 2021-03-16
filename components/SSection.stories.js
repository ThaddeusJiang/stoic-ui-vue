export default {
  title: 'Components',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <s-section :title="title" >
    You can show the details.

  </s-section>
  `,
})

export const Section = Template.bind({})
Section.args = {
  title: 'Title',
}
