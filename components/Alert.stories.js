export default {
  title: 'Components',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <alert :title="title" :message="message" :is-open="true"></alert>
  `,
})

export const Alert = Template.bind({})
Alert.args = {
  title: 'Alert',
  message: 'This is an alert.',
}
