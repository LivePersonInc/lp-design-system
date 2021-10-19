const fse = require('fs-extra');
const path = require('path');

console.log('Removing package.json and README files from build folder');

fse.removeSync(path.resolve(__dirname, '../build/package.json'));
fse.removeSync(path.resolve(__dirname, '../build/README.md'));
