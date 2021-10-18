# LivePerson Design System Icons

Checkout the [demos](https://livepersoninc.github.io/lp-design-system/?path=/story/icons)

## Installing

You can install LPDS icons with NPM or Yarn.

- NPM: `npm i @liveperson-design-system/icons`
- YARN: `yarn add @liveperson-design-system/icons`

These components have a peer-dependency on the LPDS core functionality.
Because of this before use LPDS icons, you have to add the following script inside `head` tag

```html
<script src="https://unpkg.com/@liveperson-design-system/core/main.js"></script>
```

## How to use

### Usage

You can use any LPDS icon either in a browser or with a front-end framework

#### Browser
```html
<html>
  <head>
    <script src="https://unpkg.com/@liveperson-design-system/icons/build/arrow-down.js" />
  </head>

  <body>
    <lp-arrow-down-icon />
  </body>
</html>
```

#### Framework (React)
```jsx
import React from 'react';

import '@liveperson-design-system/icons/build/arrow-down';

const App = () => {
  return (
    <lp-arrow-down-icon />
  );
};

export default App
```

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
