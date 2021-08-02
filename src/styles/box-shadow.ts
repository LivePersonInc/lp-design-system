import { css } from 'styled-components';

import { Theme } from './common';

const shadow = {
  s: '0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)',
  l: '0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23)',
  xl: '0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)',
  xxl: '0 19px 38px rgba(0, 0, 0, .30), 0 15px 12px rgba(0, 0, 0, .22)',
};
export const boxShadow = (size: keyof typeof shadow) => css`
  box-shadow: ${shadow[size]};
`;

// Text shadow
type TextColor = 'light' | 'dark';
const shadowText: { [size: string]: { [textColor in TextColor]: string } } = {
  s: {
    light: '1px 1px .5px rgba(255, 255, 255, .16)',
    dark: '1px 1px .5px rgba(0, 0, 0, .16)',
  },
  l: {
    light: `
      .5px .5px 1px rgba(255, 255, 255, .12),
      .5px .5px 4px rgba(255, 255, 255, .1),
      1px 1px 16px rgba(255, 255, 255, .55)
    `,
    dark: `
      .5px .5px 0px rgba(0, 0, 0, .16),
      1px 1px 3px rgba(0, 0, 0, .18),
      -7px 1px 16px rgba(0, 0, 0, .4)
    `,
  },
};
export const textShadow = (size: keyof typeof shadowText = 's', textColor: TextColor = 'light') => css`
  text-shadow: ${shadowText[size][textColor]};
`;

// Layer shadow
const shadowLayer: { [type in string | number]: { [theme in Theme]: string } } = {
  1: {
    light: `
      0 16px 20px rgba(89, 112, 171, .06),
      0 5px 16px rgba(89, 112, 171, .12),
      0 -2px 7px rgba(89, 112, 171, .05),
      0 1px 3px rgba(89, 112, 171, .13)
    `,
    dark: `
      0 16px 20px rgba(1, 2, 11, .06),
      0 -2px 7px rgba(1, 2, 11, .05),
      0 1px 3px rgba(1, 2, 11, .13)
    `,
  },
  2: {
    light: `
      0 5px 11px 1 rgba(89, 112, 171, .16),
      0 -2px 4px rgba(209, 223, 255, .23),
      0 1px 2px rgba(89, 112, 171, .03)
    `,
    dark: `
      0 9px 22px rgba(10, 13, 60, .43),
      0 5px 5px rgba(9, 12, 67, .26),
      0 1px 2px rgba(9, 12, 67, .17)
    `,
  },
};
export const layerShadow = (type: keyof typeof shadowLayer, theme: Theme) => css`
  box-shadow: ${shadowLayer[type][theme]};
`;

// Input shadow
const shadowInput = 'inset 0px -1px 2px -1px rgba(0, 0, 0, .11), inset 0px 2px 2px -1px rgba(0, 0, 0, .11)';

export const inputShadow = () => css`
  box-shadow: ${shadowInput};
`;
