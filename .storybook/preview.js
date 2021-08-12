export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'light', value: '#FFF' },
      { name: 'dark', value: '#07092E' },
    ],
  },
};
