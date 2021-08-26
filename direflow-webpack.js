const fs = require('fs');

const webpackAlias = require('./webpack-alias');

module.exports = config => {
  const iconsFolderPath = `${webpackAlias['lpds/components']}/icons`;

  fs.readdirSync(iconsFolderPath, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .forEach(({ name }) => {
      config.entry[`${name}-icon`] = `${iconsFolderPath}/${name}`;
    });

  config.resolve.alias = { ...config.resolve.alias, ...webpackAlias };

  return config;
};
