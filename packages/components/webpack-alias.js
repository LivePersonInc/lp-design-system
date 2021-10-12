const path = require('path');

const direflowConfig = require('./direflow-config.json');

module.exports = {
  'lpds/common': path.resolve(__dirname, `./src/common`),
  'lpds/components': path.resolve(__dirname, `./src/${direflowConfig.build.componentPath}`),
};
