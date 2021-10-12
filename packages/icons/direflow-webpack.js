const fs = require('fs');
const path = require('path');
const { webpackConfig } = require('direflow-scripts');

const direflowConfig = require('./direflow-config.json');

const webpackAlias = require('./webpack-alias');

module.exports = (config, env) => {
  config = webpackConfig(config, env);

  config.resolve.alias = { ...config.resolve.alias, ...webpackAlias };

  if (env === 'production') {
    fs.readdirSync(webpackAlias['lpds/components'], { withFileTypes: true })
      .filter(dir => dir.isDirectory())
      .forEach(({ name }) => {
        config.entry[name] = `${webpackAlias['lpds/components']}/${name}`;
      });

    delete config.entry['path-0'];
    delete config.entry['IconsList'];
  }

  return config;
};
