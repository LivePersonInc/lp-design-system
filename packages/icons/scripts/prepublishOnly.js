const fs = require('fs');
const path = require('path');

const packageJson = require('../package.json');

const buildPath = path.resolve(__dirname, '../build');

console.log('\n');

console.log('Preparing package.json');

const fields = {
  files: ['*'],
  publishConfig: {
    access: 'public',
    directory: '.',
  },
  scripts: null,
  dependencies: null,
  devDependencies: null,
  eslintConfig: null,
  browserslist: null,
  jest: null,
  'config-overrides-path': null,
};

Object.keys(fields).forEach(key => {
  if (fields[key] === null) {
    delete packageJson[key];

    return true;
  }

  packageJson[key] = fields[key];
});

fs.writeFileSync(
  path.resolve(__dirname, buildPath, 'package.json'),
  JSON.stringify(packageJson, null, 2),
);

console.log('Preparing README file');

fs.copyFileSync(path.resolve(__dirname, '../README.md'), path.resolve(__dirname, buildPath, 'README.md'));

console.log('\n');
