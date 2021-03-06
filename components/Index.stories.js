export default {
  title: 'Components',
}

export const Tabs = () => `<tabs />`

export const Title = () => `
  <div>
    <h1>Title 1</h1>
    <h2>Title 2</h2>
    <h3>Title 3</h3>

    <article>
      This is document.
    </article>
  </div>
`

export const Button = () => `
  <div>
    <button class="button">Button</button>



    <h2>Colors</h2>

    <button class="button is-white">White</button>
    <button class="button is-light">Light</button>
    <button class="button is-dark">Dark</button>
    <button class="button is-black">Black</button>
    <button class="button is-text">Text</button>
    <button class="button is-ghost">Ghost</button>

    <br/>

    <button class="button is-primary">Primary</button>
    <button class="button is-link">Link</button>
    <button class="button is-info">Info</button>
    <button class="button is-success">Success</button>
    <button class="button is-warning">Warning</button>
    <button class="button is-danger">Danger</button>
  </div>
`

export const Box = () => `
  <div >
    <box >I'm in a box.</box>
  </div>
`

export const Tag = () => `
  <div class="even: px-4">
    <tag text="primary" class="is-primary" />
    <tag text="link" class="is-link" />
    <tag text="info" class="is-info" />
    <tag text="success" class="is-success" />
    <tag text="warning" class="is-warning" />
    <tag text="danger" class="is-danger" />
  </div>
`
