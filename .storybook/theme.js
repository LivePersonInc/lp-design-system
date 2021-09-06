import { create } from '@storybook/theming';

import LPLogo from './assets/lp-logo-small.svg';

export default create({
  base: 'light',

  //colorPrimary: '#FF6900',
  colorSecondary: '#FF6900',

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: '\'Roboto\', \'Helvetica Neue\', Arial, sans-serif',
  fontCode: '\'Roboto Mono\', monospace, sans-serif',

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'LPDS',
  //brandUrl: 'https://example.com',
  brandImage: LPLogo,
});
