# LivePerson Design System

## Docs

We use [Storybook](https://storybook.js.org/) to create [LPDS docs and demos](https://livepersoninc.github.io/lp-design-system/)

## Developing

**LPDS is using Monorepo development strategy and [Lerna](https://lerna.js.org/) + [Yarn 3 Workspaces](https://yarnpkg.com/features/workspaces) to work with it.**

If you want to run the project locally, its really easy!

This project uses Storybook for its demos and development environment.

#### 1. Clone repo

```bash
git clone https://github.com/LivePersonInc/lp-design-system.git
```

#### 2. Install dependencies

```bash
yarn install
```

#### 3. Bootstrap project

```bash
yarn bootstrap
```

#### 4. Start Storybook

```bash
yarn start
```

Once started the browser will open to the Storybook url. From here you can see all things that LPDS provides

### Storybook deploying

To deploy a new version of LPDS documentation (Storybook) to GH Pages you can simply run this command:

```bash
yarn deploy
```

### Publishing

To start publishing process simply run this script

```bush
yarn publish:all
```

### Release

To start release process simply run this script

```bush
yarn release
```

### Other scripts

There are few NPM scripts to help work with the project

- `yarn tokens:build` - to build LPDS tokens
- `yarn icons:build` - to build LPDS icons
- `yarn components:build` - to build LPDS components
- `yarn react-components:build` - to build LPDS React components
- `yarn build:all` - to build all packages

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
