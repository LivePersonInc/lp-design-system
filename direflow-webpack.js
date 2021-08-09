const { webpackConfig } = require('direflow-scripts');

const webpackAlias = require('./webpack-alias');

module.exports = (config, env) => {
  config = webpackConfig(config, env);

  config.resolve.alias = { ...config.resolve.alias, ...webpackAlias };

  return config;
};
