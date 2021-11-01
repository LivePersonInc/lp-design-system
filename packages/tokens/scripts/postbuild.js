const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const buildPath = path.resolve(__dirname, '../build');

const cssPath = path.resolve(buildPath, 'css');

fs.readdirSync(cssPath).filter(file => path.extname(file).toLowerCase() === '.js').forEach(file => {
  fs.rmSync(path.resolve(cssPath, file));
});

const scssPath = path.resolve(buildPath, 'scss');

fse.copySync(path.resolve(__dirname, '../src/scss'), scssPath);

fs.readdirSync(scssPath).filter(file => file.includes('.exports')).forEach(file => {
  fs.rmSync(path.resolve(scssPath, file));
});
