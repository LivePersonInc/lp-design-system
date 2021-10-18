# LivePerson Design System Components

Checkout the [demos](https://livepersoninc.github.io/lp-design-system/?path=/story/components)

## Installing

You can install LPDS components with NPM or Yarn.

- YARN: `yarn add @liveperson-design-system/components`
- NPM: `npm i @liveperson-design-system/components`

These components have a peer-dependency on the LPDS core functionality.
Because of this before use LPDS components, you have to add the following script inside `head` tag

```html
<script src="https://unpkg.com/@liveperson-design-system/core/main.js"></script>
```

## How to use

You can use any LPDS component either in a browser or with a front-end framework

#### Browser
```html
<html>
  <head>
    <script src="https://unpkg.com/liveperson-design-system/components/build/button.js" />
  </head>

  <body>
    <lp-button labal="Button" />
  </body>
</html>
```

#### Framework (React)
```jsx
import React from 'react';

import 'liveperson-design-system/components/build/button';

const App = () => {
  return (
    <lp-button label="Button" />
  );
};

export default App
```

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
