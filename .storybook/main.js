const path = require('path');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const tsConfig = require('../tsconfig.json');

module.exports = {
  stories: [
    '../docs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-essentials',
  ],
  webpackFinal: async config => {
    const oneOfRuleIndex = config.module.rules.findIndex(({ oneOf }) => oneOf);

    if (oneOfRuleIndex !== -1) {
      const tsRuleIndex = config.module.rules[oneOfRuleIndex].oneOf.findIndex(rule => '.ts'.match(rule.test));
      if (tsRuleIndex !== -1) {
        config.module.rules[oneOfRuleIndex].oneOf[tsRuleIndex].include.push(
          path.resolve(__dirname, '../docs'),
          path.resolve(__dirname, '../packages'),
        );
      }

      const cssRuleIndex = config.module.rules[oneOfRuleIndex].oneOf.findIndex(rule => '.css'.match(rule.test));
      if (cssRuleIndex !== -1) {
        config.module.rules[oneOfRuleIndex].oneOf[cssRuleIndex].use = ['to-string-loader', 'css-loader'];
      }

      const scssRuleIndex = config.module.rules[oneOfRuleIndex].oneOf.findIndex(rule => '.scss'.match(rule.test));
      if (scssRuleIndex !== -1) {
        config.module.rules[oneOfRuleIndex].oneOf[scssRuleIndex].use = ['to-string-loader', 'css-loader', 'sass-loader'];
      }

      config.module.rules[oneOfRuleIndex].oneOf.unshift({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      config.module.rules[oneOfRuleIndex].oneOf.unshift({
        test: /\.exports\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      });
    }

    Object.keys(tsConfig.compilerOptions.paths).forEach(key => {
      config.resolve.alias[key.replace('/*', '')] = (
        path.resolve(__dirname, `../${tsConfig.compilerOptions.paths[key][0].replace('/*', '')}`)
      );
    });

    config.resolve.plugins[1] = new ModuleScopePlugin([
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname),
      path.resolve(__dirname, '../docs'),
      path.resolve(__dirname, '../packages'),
    ], [path.resolve(__dirname, '../package.json')]);

    return config;
  },
  typescript: {
    check: true,
  },
};
