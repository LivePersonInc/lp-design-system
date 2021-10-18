const fse = require('fse');
const path = require('path');

console.log('Removing build folder');

fse.removeSync(path.resolve(__dirname, '../build'));
