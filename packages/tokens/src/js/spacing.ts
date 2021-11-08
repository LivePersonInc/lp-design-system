import spacing from '../scss/spacing.exports.scss';

import { groupListVariables } from './helpers';
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

const getSpace = (space: SpaceArg): string => (
  variables.spaces[space] || (typeof space === 'number' && space !== 0 ? `${space}px` : space)
);

export const mixins = {
  padding: (size: SpaceArg, hSize?: SpaceArg): string => {
    size = getSpace(size);
    hSize = getSpace(hSize);

    return `padding: ${hSize ? `${size} ${hSize}` : size};`;
  },
  margin: (size: SpaceArg, hSize?: SpaceArg): string => {
    size = getSpace(size);
    hSize = getSpace(hSize);

    return `margin: ${hSize ? `${size} ${hSize}` : size};`;
  },
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
        responsiveMixins.media((key === 'mobile' ? 'laptop' : key), !(key === 'mobile'))(
          Array.isArray(breakpoints[key])
            ? `${rule}: ${breakpoints[key].map(v => getSpace(v)).join(' ')}`
            : `${rule}: ${getSpace(breakpoints[key])}`
        )
      ))
      .join('\n')
  ),
};
