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
- `yarn storybook:build` - builds all web-components and Storybook to the `storybook-static` folder
  - `yarn storybook:build:docs` - builds all web-components and Storybook in docs mode to the `storybook-static` folder

## Storybook deploying

To deploy a new version of LPDS documentation (Storybook) to GH Pages you can simply run this command:

```bash
yarn storybook:deploy
```
or
```bash
yarn storybook:docs:deploy
```

## NPM package publishing

LPDS is using [np](https://www.npmjs.com/package/liveperson-design-system) package to help with publishing

Run the following command to publish a new version of `liveperson-design-system` package.

```bash
yarn npm:publish
```

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
