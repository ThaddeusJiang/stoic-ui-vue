export default {
  title: 'Components',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<s-table :titles="titles" :items="items" />',
})

const titles = ['A', 'B', 'C']
const items = [
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
]

export const Table = Template.bind({})
Table.args = {
  titles,
  items,
}
