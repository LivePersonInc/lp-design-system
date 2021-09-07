# LivePerson Design System

Checkout the [demos](https://livepersoninc.github.io/lp-design-system)

## Installing

You can install LPDS with [NPM](https://www.npmjs.com/package/liveperson-design-system) or Yarn.

- NPM: `npm i liveperson-design-system`
- YARN: `yarn add liveperson-design-system`

## How to use

### Setup

First, you have to add the following script inside `head` tag

```html
<script src="https://unpkg.com/liveperson-design-system/main.js"></script>
```

### Usage

You can use any LPDS component either in a browser or with a front-end framework

#### Browser
```html
<html>
  <head>
    <script src="https://unpkg.com/liveperson-design-system/components/button.js" />
  </head>

  <body>
    <lp-button labal="Button" />
  </body>
</html>
```

#### Framework (React)
```jsx
import React from 'react';

import 'liveperson-design-system/components/button';

const App = () => {
  return (
    <lp-button label="Button" />
  );
};

export default App
```

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
