const fs = require('fs');
const path = require('path');

const componentsPath = path.resolve(__dirname, '../src/components');

fs.readdirSync(componentsPath).forEach(dir => {
  const readmePath = path.resolve(componentsPath, dir, 'readme.md');

  if (!fs.existsSync(readmePath)) {
    return true;
  }

  const readmeContent = fs.readFileSync(readmePath).toString();

  const depsIndex = readmeContent.indexOf('## Dependencies');

  if (depsIndex === -1) {
    return true;
  }

  fs.writeFileSync(
    readmePath,
    readmeContent.slice(0, depsIndex) + readmeContent.slice(readmeContent.indexOf('---', depsIndex))
  );
});
