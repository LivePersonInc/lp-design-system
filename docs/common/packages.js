export const packagesScope = '@liveperson-design-system';

export const packages = ['Tokens', 'Icons', 'Components', 'React-Components'].map(title => ({
  key: title.toLowerCase(),
  name: `${packagesScope}/${title.toLowerCase()}`,
  title: title.replaceAll('-', ' '),
}));
