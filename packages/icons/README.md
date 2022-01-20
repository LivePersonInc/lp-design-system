# LivePerson Design System Icons

This project uses [Lit](https://lit.dev/) to create Web Components.
For more details please check [Lit Docs](https://lit.dev/docs/)

## Installing

You can install LPDS icons with NPM or Yarn.

- NPM: `npm i @liveperson-design-system/icons`
- YARN: `yarn add @liveperson-design-system/icons`

## How to use

### Project with a Framework

To use all LPDS Icons simply import `@liveperson-design-system/icons`

```javascript
import `@liveperson-design-system/icons`;
```

Also you can import specific icons to use it

```javascript
import `@liveperson-design-system/icons/dist/add-target`;
```

### Project without a Framework

If you're using a simple HTML page, you can add your component via a script tag.
For example, if we published a component to npm, we could load the component through the [unpkg](https://unpkg.com/) CDN like this:

```html
<html>
  <head>
    <script src="https://unpkg.com/@liveperson-design-system/icons"></script>
    <!-- or -->
    <script src="https://unpkg.com/@liveperson-design-system/icons/dist/add-target"></script>
  </head>
  <body>
    <lp-add-target-icon />
  </body>
</html>
```

Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement.
Note that type="module" only works in modern browsers (not available in IE11 or Edge 12-18).

```html
<html>
  <head>
    <script type="module">
      import 'https://unpkg.com/@liveperson-design-system/icons';
      // or
      import 'https://unpkg.com/@liveperson-design-system/icons/dist/add-target';
    </script>
  </head>
  <body>
    <lp-add-target-icon />
  </body>
</html>
```

## Docs

We use [Storybook](https://storybook.js.org/) to create [LPDS docs and demos](https://livepersoninc.github.io/lp-design-system/?path=/story/icons)

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
