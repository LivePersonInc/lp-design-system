import borderRadiusStyles from '../scss/border-radius.exports.scss';

import { groupListVariables, getArgValue } from './helpers';

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

export const mixins = {
  borderRadius: (size: BorderRadius | string | number): string => (
    `border-radius: ${getArgValue(variables.borderRadius, size)};`
  ),
};
