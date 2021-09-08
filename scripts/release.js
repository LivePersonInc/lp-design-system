const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJSON = require('../package.json');

const buildPath = path.resolve(__dirname, '../build');

if (!fs.existsSync(buildPath)) {
  execSync('yarn build', { stdio: 'inherit' });
}

console.log('\n');

console.log('Preparing package.json');

const fields = {
  main: 'main.js',
  files: ['*'],
  scripts: null,
  dependencies: null,
  devDependencies: null,
  eslintConfig: null,
  browserslist: null,
  jest: null,
  'config-overrides-path': null,
};

Object.keys(fields).forEach(key => {
  if (!packageJSON[key]) {
    return true;
  }

  if (fields[key] === null) {
    delete packageJSON[key];

    return true;
  }

  packageJSON[key] = fields[key];
});

fs.writeFileSync(
  path.resolve(__dirname, buildPath, 'package.json'),
  JSON.stringify(packageJSON, null, 2),
);

console.log('Preparing README file');

fs.copyFileSync(path.resolve(__dirname, '../README-NPM.md'), path.resolve(__dirname, buildPath, 'README.md'));

console.log('\n');
