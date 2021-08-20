const fs = require('fs-extra');
const path = require('path');

fs.removeSync(path.resolve(__dirname, '../public/direflowBundle.js'));

console.log('\ndireflowBundle.js was removed from a public folder\n');
