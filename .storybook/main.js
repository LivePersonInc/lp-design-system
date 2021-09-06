const webpackAlias = require('../webpack-alias');

module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async config => {
    config.resolve.alias = { ...config.resolve.alias, ...webpackAlias };

    const oneOfRuleIndex = config.module.rules.findIndex(item => item.oneOf);

    if (oneOfRuleIndex !== -1) {
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
    }

    return config;
  },
};
