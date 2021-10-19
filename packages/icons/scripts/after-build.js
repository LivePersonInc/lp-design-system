const fse = require('fs-extra');
const path = require('path');

const buildPath = path.resolve(__dirname, '../build');

console.log('Removing all unnecessary files');

fse.removeSync(path.resolve(buildPath, 'main.js'));
