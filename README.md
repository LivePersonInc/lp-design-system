# LivePerson Design System

## Installing

You can install LPDS with [NPM](https://www.npmjs.com/package/@liveperson/design-system) or Yarn.

- NPM: `npm i @liveperson/design-system`
- YARN: `yarn add @liveperson/design-system`

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
import '@liveperson/design-system/button';

const App = () => {
  return (
    <lp-button label="Button" />
  );
};

export default App
```

# Developing

If you want to run the project locally, its really easy!

The project uses Storybook for its demos and development environment.

### 1. Clone repo

```bash
git clone https://github.com/LivePersonInc/lp-design-system.git
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Start DevServer

```bash
yarn start
```

Once started the browser will open to the storybook url.
From here you can see and try all things that LPDS provides

**Note:** you can run Storybook in docs mode by using `yarn start:docs` command


## Other development scripts

In the project directory, you can run:

- `yarn start` - runs Storybook dev server
  - `yarn start:docs` - runs Storybook dev server in docs mode
- `yarn build` - builds all web-components to the `build` folder
- `yarn build-storybook` - builds all web-components and Storybook to the `storybook-static` folder
  - `yarn build-storybook-docs` - builds all web-components and Storybook in docs mode to the `storybook-static` folder

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
