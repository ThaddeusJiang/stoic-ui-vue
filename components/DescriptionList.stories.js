export default {
  title: 'Components',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<description-list :items="items" />',
})

const items = [
  {
    title: 'Title',
    description: 'description description description',
  },
  {
    title: 'Title',
    description: 'description description description',
  },
  {
    title: 'Title',
    description: 'description description description',
  },
]

export const DescriptionList = Template.bind({})
DescriptionList.args = {
  items,
}
