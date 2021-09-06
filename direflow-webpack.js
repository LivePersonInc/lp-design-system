const fs = require('fs');
const { webpackConfig } = require('direflow-scripts');

const webpackAlias = require('./webpack-alias');

module.exports = (config, env) => {
  config = webpackConfig(config, env);

  config.resolve.alias = { ...config.resolve.alias, ...webpackAlias };

  if (env === 'production') {
    fs.readdirSync(webpackAlias['lpds/icons'], { withFileTypes: true })
      .filter(dir => dir.isDirectory())
      .forEach(({ name }) => {
        config.entry[`${name}-icon`] = `${webpackAlias['lpds/icons']}/${name}`;
      });

    delete config.entry['path-0'];
  }

  return config;
};
