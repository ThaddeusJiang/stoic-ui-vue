export default {
  title: 'Components',
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <avatar :firstname="firstname"  lastname="lastname"/>
  `,
})

export const Avatar = Template.bind({})
Avatar.args = {
  firstname: 'Thaddeus',
  lastname: 'Jiang',
}

export const ColorAvatar = () => `
  <avatar firstname="T" lastname="J" class="bg-red-500" />
`

export const MultiAvatars = () => `
  <div class="flex">
    <!- TODO: windi CSS -ml-{float} 无效 -->
    <avatar firstname="T" lastname="J" class="" />
    <avatar firstname="T" lastname="J" class="-ml-1" />
    <avatar firstname="T" lastname="J" class="-ml-1"  />
  </div>
`
