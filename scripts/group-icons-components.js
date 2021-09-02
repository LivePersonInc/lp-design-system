const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const buildPath = path.resolve(__dirname, '../build');

fs.readdirSync(buildPath)
  .filter(file => file.includes('-icon'))
  .forEach(file => {
    fse.moveSync(
      path.resolve(buildPath, file),
      path.resolve(buildPath, 'icons', file),
      { overwrite: true },
    );
  });

console.log('\nAll icons components have been grouped in one folder\n');
