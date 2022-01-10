# LivePerson Design System Web Components

This project uses [Stencil](https://stenciljs.com/) to create Web Components.
For more details please check [Stencil Docs](https://stenciljs.com/docs/introduction)

## Installing

You can install LPDS components with NPM or Yarn.

- YARN: `yarn add @liveperson-design-system/components`
- NPM: `npm i @liveperson-design-system/components`

## How to use

### Project with a Framework

First, you have to define custom elements. To do this you can import `defineCustomElements` function from `@liveperson-design-system/components/loader`

```javascript
import { defineCustomElements } from '@liveperson-design-system/components/loader';

defineCustomElements();
```

If you need additional Polyfills use `applyPolyfills` function

```javascript
import { applyPolyfills, defineCustomElements } from '@liveperson-design-system/components/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

### Project without a Framework

If you're using a simple HTML page, you can add your component via a script tag.
For example, if we published a component to npm, we could load the component through the [unpkg](https://unpkg.com/) CDN like this:

```html
<html>
  <head>
    <script src="https://unpkg.com/@liveperson-design-system/components"></script>
  </head>
  <body>
    <lp-button>Button</lp-button>
  </body>
</html>
```

Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement.
Note that type="module" only works in modern browsers (not available in IE11 or Edge 12-18).

```html
<html>
  <head>
    <script type="module">
      import { defineCustomElements } from 'https://unpkg.com/@liveperson-design-system/components/loader/index.es2017.js';
      defineCustomElements();
    </script>
  </head>
  <body>
    <lp-button>Button</lp-button>
  </body>
</html>
```

## Docs

We use [Storybook](https://storybook.js.org/) to create [LPDS docs and demos](https://livepersoninc.github.io/lp-design-system/?path=/story/components)

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
