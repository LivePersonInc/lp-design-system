const fs = require('fs-extra');
const path = require('path');

fs.moveSync(
  path.resolve(__dirname, '../build/direflowBundle.js'),
  path.resolve(__dirname, '../public/direflowBundle.js'),
  { overwrite: true },
);

fs.removeSync(path.resolve(__dirname, '../build'));

console.log('\ndireflowBundle.js was moved to a public folder\n');
