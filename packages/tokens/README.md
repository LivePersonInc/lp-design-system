# LivePerson Design System Tokens

Checkout the [demos](https://livepersoninc.github.io/lp-design-system/?path=/story/tokens)

## Installing

You can install LPDS tokens with NPM or Yarn.

- NPM: `npm i @liveperson-design-system/tokens`
- YARN: `yarn add @liveperson-design-system/tokens`

## How to use

LPDS Tokens provides a few options how you can use it.
Also, each module contains variables and some of them can has functions and mixins

### SCSS

```scss
@use '~@liveperson-design-system/tokens/scss/colors';

.button {
  background-color: colors.$blue;
}
```

### JS

```js
import styled from 'styled-components';

import { variables } from '@liveperson-design-system/tokens/js/colors';

const Button = styled.button`
  background-color: ${variables.blue.default};
`;
```

Some mixins can handle content. For example, Responsive module have `media` mixin and it works like this

```js
import styled from 'styled-components';

import { mixins } from '@liveperson-design-system/tokens/js/responsive';

const Button = styled.button`
  ${mixins.media('laptop')(`
    display: none;
  `)}
`;
```

### CSS

`{tokens}.css` includes CSS variables, helpers classes and others related things.
To use all of these, you have to add CSS file to the `head` tag

```html
<link rel="stylesheet" href="https://unpkg.com/@liveperson-design-system/tokens/css/colors.css">
```

#### CSS variables

To use CSS variables just add `lpds-{tokens}` class to the container. In most cases this is `body` tag.

```html
<body class="lpds-colors">
  <button>Button</button>
</body>

<style>
  button {
    background-color: var(--lpds-colors-blue);
  }
</style>
```

#### CSS helpers classes

Each module provides its own list of helpers classes

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
