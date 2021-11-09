import transparency from '../scss/transparency.exports.scss';

import { groupListVariables } from './helpers';

export type Transparencies = 0 | 1 | 2 | 3 | 4

export const variables = {
  disabled: +transparency.disabled,

  dark: groupListVariables<Record<Transparencies, string>>(transparency, 'dark-'),
  light: groupListVariables<Record<Transparencies, string>>(transparency, 'light-'),
};
