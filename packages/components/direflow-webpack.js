const { webpackConfig } = require('direflow-scripts');

module.exports = (config, env) => {
  config = webpackConfig(config, env);

  if (env === 'production') {
    delete config.entry['path-0'];
  }

  return config;
};
