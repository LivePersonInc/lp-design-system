import spacing from '../scss/spacing.exports.scss';

import { groupListVariables, getArgValue } from './helpers';
import { Breakpoints, mixins as responsiveMixins } from './responsive';

export type Spaces = 'none' |
  'xxs' |
  'xs' |
  's' |
  'm' |
  'l' |
  'xl' |
  'xxl' |
  'xxxl'

export const variables = {
  spaces: groupListVariables<Record<Spaces, string>>(spacing, 'spaces-'),
};

type SpaceArg = Spaces | string | number

export const mixins = {
  padding: (size: SpaceArg, hSize?: SpaceArg): string => (
    `padding: ${getArgValue(variables.spaces, size)}${hSize ? ` ${getArgValue(variables.spaces, hSize)}` : ''};`
  ),
  margin: (size: SpaceArg, hSize?: SpaceArg): string => (
    `margin: ${getArgValue(variables.spaces, size)}${hSize ? ` ${getArgValue(variables.spaces, hSize)}` : ''};`
  ),
  autoSpacing: (
    breakpoints: { [breakpoint in Breakpoints | 'mobile']: SpaceArg | [SpaceArg, SpaceArg?] } = {
      mobile: ['xs', 's'],
      laptop: ['s', 'm'],
      desktop: ['m', 'l'],
      desktopLarge: ['l', 'xl'],
    },
    rule: string = 'padding',
  ): string => (
    Object.keys(breakpoints)
      .map(key => (
        responsiveMixins.media((key === 'mobile' ? 'laptop' : key), !(key === 'mobile'))(`
          ${rule}: ${(
            Array.isArray(breakpoints[key])
              ? breakpoints[key].map(v => getArgValue(variables.spaces, v)).join(' ')
              : getArgValue(variables.spaces, breakpoints[key])
          )}
        `)
      ))
      .join('\n')
  ),
};
