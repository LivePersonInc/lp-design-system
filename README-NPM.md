# LivePerson Design System

Checkout the [demos](https://livepersoninc.github.io/lp-design-system)

## Installing

You can install LPDS with [NPM](https://www.npmjs.com/package/liveperson-design-system) or Yarn.

- NPM: `npm i liveperson-design-system`
- YARN: `yarn add liveperson-design-system`

## How to use

You can use any LPDS component either in a browser or with a front-end framework

### Browser usage
```html
<html>
  <head>
    <script src="button.js" />
  </head>

  <body>
    <lp-button labal="button" />
  </body>
</html>
```

### Framework usage (React)
```jsx
import 'liveperson-design-system/button';

const App = () => {
  return (
    <lp-button label="Button" />
  );
};

export default App
```

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
