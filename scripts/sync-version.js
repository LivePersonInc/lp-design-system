const fs = require('fs');
const path = require('path');

const buildPackageJSON = require('../build/package.json');

buildPackageJSON.version = process.env.npm_package_version;

fs.writeFileSync(
  path.resolve(__dirname, '../build/package.json'),
  JSON.stringify(buildPackageJSON, null, 2),
);

console.log('New version set to ./build/package.json');
