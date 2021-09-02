import { addons } from '@storybook/addons';

import theme from './theme';

addons.setConfig({
  panelPosition: 'right',
  enableShortcuts: false,
  theme,
  toolbar: {
    fullscreen: { hidden: false },
  },
});
