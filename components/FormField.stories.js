export default {
  title: 'Form',
}

export const GeneralFormField = () => `
  <div>
    <form-field label="Name" >
      <input type="text" placeholder="Name" />
    </form-field>

    <form-field label="Email" :is-error="true" message="This email is invalid">
      <input type="email" />
    </form-field>
  </div>
`
