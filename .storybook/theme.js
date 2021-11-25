import { create } from '@storybook/theming';

import { variables as colorsVariables } from '@liveperson-design-system/tokens/build/js/colors';
import { variables as transparencyVariables } from '@liveperson-design-system/tokens/build/js/transparency';
import { variables as typographyVariables } from '@liveperson-design-system/tokens/build/js/typography';

import LPLogo from './assets/lp-logo-small.svg';

export default create({
  base: 'dark',

  //colorPrimary: '#FF6900',
  colorSecondary: '#FF6900',

  // UI
  appBg: colorsVariables.navy.dark,
  appContentBg: colorsVariables.navy.darker,
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: typographyVariables.fonts.roboto,
  fontCode: typographyVariables.fonts.robotoMono,

  // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  barBg: 'transparent',

  // Form colors
  inputBg: transparencyVariables.light['1'],
  inputBorder: transparencyVariables.light['4'],
  inputTextColor: colorsVariables.navy.white,
  // inputBorderRadius: 4,

  brandTitle: 'LPDS',
  //brandUrl: 'https://example.com',
  brandImage: LPLogo,
});
