# LivePerson Design System Components

Checkout the [demos](https://livepersoninc.github.io/lp-design-system/?path=/story/components)

## Installing

You can install LPDS components with NPM or Yarn.

- YARN: `yarn add @liveperson-design-system/components`
- NPM: `npm i @liveperson-design-system/components`

## How to use

Before using this package you have to add the following script inside `head` tag

```html
<script src="https://unpkg.com/@liveperson-design-system/components/main.js"></script>
```

You can use any LPDS component either in a browser or with a front-end framework

#### Browser
```html
<html>
  <head>
    <script src="https://unpkg.com/@liveperson-design-system/components/button.js" />
  </head>

  <body>
    <lp-button labal="Button" />
  </body>
</html>
```

#### Framework (React)
```jsx
import React from 'react';

import '@liveperson-design-system/components/button';

const App = () => {
  return (
    <lp-button label="Button" />
  );
};

export default App
```

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
