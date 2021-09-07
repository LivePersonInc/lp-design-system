const fs = require('fs');
const path = require('path');

const buildPackageJSON = require('../build/package.json');
const rootPackageJSON = require('../package.json');

console.log('\n');

console.log('Sync versions');

rootPackageJSON.version = buildPackageJSON.version;

fs.writeFileSync(
  path.resolve(__dirname, '../package.json'),
  JSON.stringify(rootPackageJSON, null, 2),
);

console.log('\n');
