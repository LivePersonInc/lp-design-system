# LivePerson Design System

Checkout the [demos](https://livepersoninc.github.io/lp-design-system)

# Developing

**LPDS is using Monorepo development strategy and [Lerna](https://lerna.js.org/) tool to work with it.**

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

### 3. Start Storybook

```bash
yarn start
```

Once started the browser will open to the storybook url. From here you can see and try all things that LPDS provides

**Note:** you can run Storybook in docs mode by using `yarn start:docs` command

## Storybook deploying

To deploy a new version of LPDS documentation (Storybook) to GH Pages you can simply run this command:

```bash
yarn storybook:deploy
```

or

```bash
yarn storybook:docs:deploy
```

## Other scripts

There are few NPM scripts to help work with the project

- `yarn build:components` - to build LPDS components
- `yarn build:core` - to build LPDS core
- `yarn build:icons` - to build LPDS icons
- `yarn bootstrap` - [lerna bootstrap](https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme)

## License

MIT © [LivePersonInc](https://github.com/LivePersonInc)
