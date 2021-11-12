const path = require('path');

module.exports = {
  stories: [
    '../docs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-essentials',
  ],
  webpackFinal: async config => {
    const oneOfRuleIndex = config.module.rules.findIndex(item => item.oneOf);

    if (oneOfRuleIndex !== -1) {
      const tsRuleIndex = config.module.rules[oneOfRuleIndex].oneOf.findIndex(rule => '.ts'.match(rule.test));
      if (tsRuleIndex !== -1) {
        config.module.rules[oneOfRuleIndex].oneOf[tsRuleIndex].include.push(path.resolve(__dirname, '../packages'));
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

    return config;
  },
  typescript: {
    check: true,
  },
};
