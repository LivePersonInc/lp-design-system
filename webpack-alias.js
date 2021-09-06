const path = require('path');

const direflowConfig = require('./direflow-config.json');

module.exports = {
  'lpds/components': path.resolve(__dirname, `./src/${direflowConfig.build.componentPath}`),
  'lpds/icons': path.resolve(__dirname, `./src/icons`),
  'lpds/styles': path.resolve(__dirname, './src/styles'),
};
