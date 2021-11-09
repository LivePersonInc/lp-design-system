import responsive from '../scss/responsive.exports.scss';

import { groupListVariables } from './helpers';

export type Breakpoints = 'laptop' | 'desktop' | 'desktopLarge'

export const variables = {
  breakpoints: groupListVariables<Record<Breakpoints, string>>(responsive, 'breakpoints-'),
};

type BreakpointArg = Breakpoints | string | number
export const mixins = {
  media: (breakpoint: BreakpointArg, up: boolean = true) => (content: string): string => (
    up
      ? `
        @media (min-width: ${variables.breakpoints[breakpoint] || breakpoint}) {
          ${content}
        }
      `
      : `
        @media (max-width: calc(${variables.breakpoints[breakpoint] || breakpoint} - 1px)) {
          ${content}
        }
      `
  ),
  mediaFromTo: (from: BreakpointArg, to: BreakpointArg) => (content: string): string => `
    @media (min-width: ${variables.breakpoints[from] || from}) and (max-width: calc(${variables.breakpoints[to] || to} - 1px)) {
      ${content}
    }
  `,
};
