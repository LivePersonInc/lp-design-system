import borderRadiusStyles from '../scss/border-radius.exports.scss';

import { groupListVariables } from './helpers';

export type BorderRadius = 'xxxs' |
  'xxs' |
  'xs' |
  's' |
  'm' |
  'l' |
  'xl'

export const variables =  {
  borderRadius: groupListVariables<Record<BorderRadius, string>>(borderRadiusStyles, 'border-radius-'),
};

export const functions = {
  getBorderRadius: (size: BorderRadius) => variables.borderRadius[size],
};

export const mixins = {
  borderRadius: (size: BorderRadius | string): string => `border-radius: ${variables.borderRadius[size] || size};`,
};
