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

console.log('Grouping all UI components in one folder');

fs.readdirSync(buildPath)
  .filter(file => path.extname(file).toLowerCase() === '.js')
  .forEach(file => {
    fse.moveSync(
      path.resolve(buildPath, file),
      path.resolve(buildPath, 'components', file.replace('-icon', '')),
      { overwrite: true },
    );
  });

console.log('Removing all unnecessary files\n');

fse.removeSync(path.resolve(buildPath, 'components/main.js'));
