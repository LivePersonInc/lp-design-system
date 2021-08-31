import { addons } from '@storybook/addons';

import LPDSTheme from './LPDSTheme';

addons.setConfig({
  panelPosition: 'right',
  enableShortcuts: false,
  theme: LPDSTheme,
  toolbar: {
    fullscreen: { hidden: false },
  },
});
