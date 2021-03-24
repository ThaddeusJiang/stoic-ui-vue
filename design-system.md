# Design System

Goals:

- dev https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/images
- provide https://bulma.io/ class

# Modifiers syntax
all start with `is-` or `has-`

## Colors

- white
- black
- is-primary
- is-link
- is-info
- is-success
- is-warning
- is-danger

## Size
- is-small
- is-normal (default)
- is-medium
- is-large

## Style or State

- is-outlined
- is-loading
- [disabled]

# Breakpoints = Tailwind CSS
5 breakpoints:

- mobile: up to `768px`
- tablet: from `769px`
- desktop: from `1024px`
- widescreen: from `1216px`
- fullhd: from `1408px`

# Responsive = Tailwind CSS
- columns use `grid` + `grap`
- flex

# Elements

Block

```css
.block:not(:last-child) {
  margin-bottom: 1.5rem;
}
```

Box

- box-shadow
- box-radius
- box-padding
- box-link-hover-shadow
- box-link-active-shadow

Button
- button is-white
- button is-light
- button is-dark
- button is-black
- button is-text
- button is-ghost
- button is-rounded
- button :hover :focus :active

With Font Awesome icons

```html
  <button class="button">
    <span class="icon">
      <i class="fab fa-github"></i>
    </span>
    <span>GitHub</span>
  </button>
```

# Content = Tailwind CSS Typography
You can't modify internal class, only provide classes for wrapper.

学会了一个新实现方法

```html
<sub><a>[1]</a></sub>
```

[![HTML sub tag](https://i.gyazo.com/bb843b07fb0e9d33997768d541028418.jpg)](https://gyazo.com/bb843b07fb0e9d33997768d541028418)

## Delete 原来可以仅用 CSS 来实现

## Image

Fixed square images

- `image is-square`

Rounded images

- `image is-rounded`

Ratio images
- `image is-1by1`
- `image is-5by4`
- `image is-4by3`
- `image is-3by2`

more: https://bulma.io/documentation/elements/image/#responsive-images-with-ratios

# Notification

```html
<div class="notification is-primary">
  <button class="delete"></button>
  Primar lorem ipsum dolor sit amet, consectetur
  adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
</div>
```


TODO:

Indeterminate Progressbar

# Tag

```html
<span class="tag">
  Tag label
</span>
```

- $tag-radius
- $tag-background-color
- $tag-color

# Title


# Form

Field

```html
<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>
```

Field select with icons

```html
<div class="control has-icons-left">
  <div class="select">
    <select>
      <option selected>Country</option>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
  <div class="icon is-small is-left">
    <i class="fas fa-globe"></i>
  </div>
</div>
```

Form File
- https://bulma.io/documentation/form/file/

# Layout
- Container = $container-max-width
- Level = Tailwind CSS Flex
- Media Object
- Hero
- Section
- Footer
- Tiles


## Hero

```html
<section class="hero">
  <div class="hero-body">
    <p class="title">
      Hero title
    </p>
    <p class="subtitle">
      Hero subtitle
    </p>
  </div>
</section>
```

- for section
  - 指定高度
- hero-head
- hero-body
  - title
  - subtitle
- hero-foot

TODO:
其实 Hero 最酷的是像滑块一样滑动。

## Section
- padding

## Footer
- padding

# Tile

可以实现很酷的布局

## Customize

- Color
- Spacing
- Typography
- Visibility
- Flexbox

Initial variables and Derived variables
