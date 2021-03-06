import boxShadow from '../scss/shadow.exports.scss';

import { Theme } from './common';
import { groupListVariables } from './helpers';

export type BoxShadows = 's' | 'l' | 'xl' | 'xxl'
export type TextShadows = 's' | 'l'
export type InputShadows = 'v'

export const variables = {
  shadow: groupListVariables<Record<BoxShadows, string>>(boxShadow, 'shadow-', ['s', 'l', 'xl', 'xxl']),

  shadowText: {
    dark: groupListVariables<Record<TextShadows, string>>(boxShadow, 'shadow-text-dark-'),
    light: groupListVariables<Record<TextShadows, string>>(boxShadow, 'shadow-text-light-'),
  },

  shadowCard: groupListVariables<Record<'dark' | 'darkHover' | 'light' | 'lightHover', string>>(boxShadow, 'shadow-card-'),

  shadowInput: groupListVariables<Record<InputShadows, string>>(boxShadow, 'shadow-input-'),
};

export const mixins = {
  boxShadow: (size: BoxShadows | string): string => `box-shadow: ${variables.shadow[size] || size};`,
  textShadow: (size: TextShadows, textColor: 'light' | 'dark' = 'light'): string => (
    `text-shadow: ${variables.shadowText[textColor][size]};`
  ),
  cardShadow: (hover: boolean = false, theme: Theme = 'dark'): string => (
    `box-shadow: ${variables.shadowCard[`${theme}${hover ? 'Hover' : ''}`]};`
  ),
  inputShadow: (type: 'v'): string => `box-shadow: ${variables.shadowInput[type]};`,
};
