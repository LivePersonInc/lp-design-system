import spacing from '../scss/spacing.exports.scss';

import { groupListVariables, functions as helpersFunctions } from './helpers';
import { Breakpoints, mixins as responsiveMixins } from './responsive';

export type Spaces = 'none' |
  'xxs' |
  'xs' |
  's' |
  'm' |
  'l' |
  'xl' |
  'xxl'

export const variables = {
  spaces: groupListVariables<Record<Spaces, string>>(spacing, 'spaces-'),
  spacesInner: groupListVariables<Record<Spaces, string>>(spacing, 'spaces-inner-'),
};

type SpaceArg = Spaces | string

export const functions = {
  getSpace: (size: SpaceArg, inner: boolean = false): string => variables[(inner ? 'spacesInner' : 'spaces')][size],
  getSpaceRem: (size: SpaceArg, inner: boolean = false, parentSize?: string): string => (
    helpersFunctions.getRem(functions.getSpace(size, inner), parentSize)
  ),
};

export const mixins = {
  padding: (size: SpaceArg, hSize?: SpaceArg, inner: boolean = false): string => (
    hSize
      ? `padding: ${functions.getSpace(size, inner)} ${functions.getSpace(hSize, inner)};`
      : `padding: ${functions.getSpace(size, inner)};`
  ),
  autoPadding: (
    breakpoints: { [breakpoint in Breakpoints | 'mobile']: SpaceArg | [SpaceArg, SpaceArg?, boolean?] } = {
      mobile: ['xs', 's'],
      laptop: ['s', 'm'],
      desktop: ['m', 'l'],
      desktopLarge: ['l', 'xl'],
    },
  ): string => (
    Object.keys(breakpoints)
      .map(key => (
        responsiveMixins.media((key === 'mobile' ? 'laptop' : key), !(key === 'mobile'))(
          Array.isArray(breakpoints[key])
            ? mixins.padding(...(breakpoints[key] as [string, string?, boolean?]))
            : mixins.padding(breakpoints[key])
        ))
      )
      .join('\n')
  ),
};
