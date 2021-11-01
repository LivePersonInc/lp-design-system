import boxShadow from '../scss/box-shadow.exports.scss';

import { Theme } from './common';
import { groupListVariables } from './helpers';

export type BoxShadows = 's' | 'l' | 'xl' | 'xxl'

export const variables = {
  shadow: groupListVariables<Record<BoxShadows, string>>(boxShadow, 'shadow-'),

  shadowText: {
    dark: {
      s: boxShadow['shadow-dark-text-s'] as string,
      l: boxShadow['shadow-dark-text-l'] as string,
    },
    light: {
      s: boxShadow['shadow-light-text-s'] as string,
      l: boxShadow['shadow-light-text-l'] as string,
    },
  },

  shadowLayer: {
    dark: {
      1: boxShadow['layering-1-dark'] as string,
      2: boxShadow['layering-2-dark'] as string,
    },
    light: {
      1: boxShadow['layering-1-light'] as string,
      2: boxShadow['layering-2-light'] as string,
    },
  },

  shadowInput: {
    v: boxShadow['shadow-input-v'] as string,
  },
};

export const mixins = {
  boxShadow: (size: BoxShadows | string): string => `box-shadow: ${variables.shadow[size] || size};`,
  textShadow: (size: 's' | 'l' = 's', textColor: 'light' | 'dark' = 'light'): string => (
    `text-shadow: ${variables.shadowText[textColor][size]};`
  ),
  layerShadow: (type: 1 | 2 = 1, theme: Theme = 'dark'): string => (
    `box-shadow: ${variables.shadowLayer[theme][type]};`
  ),
  inputShadow: (type: 'v' = 'v'): string => `box-shadow: ${variables.shadowInput[type]};`,
};
