const fs = require('fs');
const path = require('path');

const buildPackageJSONPath = path.resolve(__dirname, '../build/package.json');

const buildPackageJSON = require(buildPackageJSONPath);

buildPackageJSON.version = process.env.npm_package_version;

fs.writeFileSync(buildPackageJSONPath, JSON.stringify(buildPackageJSON, null, 2));

console.log('New version set to ./build/package.json');
