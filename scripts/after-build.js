const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const buildPath = path.resolve(__dirname, '../build');

console.log('\nGrouping all icons components in one folder');

fs.readdirSync(buildPath)
  .filter(file => file.includes('-icon'))
  .forEach(file => {
    fse.moveSync(
      path.resolve(buildPath, file),
      path.resolve(buildPath, 'icons', file.replace('-icon', '')),
      { overwrite: true },
    );
  });

console.log('\nAll icons components have been grouped in one folder\n');
