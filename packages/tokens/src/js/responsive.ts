import responsive from '../scss/responsive.exports.scss';

import { groupListVariables } from './helpers';

export type Breakpoints = 'laptop' | 'desktop' | 'desktopLarge'

export const variables = {
  breakpoints: groupListVariables<Record<Breakpoints, string>>(responsive, 'breakpoints-'),
};

type BreakpointArg = Breakpoints | string | number
export const mixins = {
  media: (breakpoint: BreakpointArg, up: boolean = true) => (content: string): string => {
    if (variables.breakpoints[breakpoint]) {
      breakpoint = variables.breakpoints[breakpoint];
    }

    return (
      up
        ? `
          @media (min-width: ${breakpoint}) {
            ${content}
          }
        `
        : `
          @media (max-width: calc(${breakpoint} - 1px)) {
            ${content}
          }
        `
    );
  },
  mediaFromTo: (from: BreakpointArg, to: BreakpointArg) => (content: string): string => {
    if (variables.breakpoints[from]) {
      from = variables.breakpoints[from];
    }

    if (variables.breakpoints[to]) {
      to = variables.breakpoints[to];
    }

    return `
      @media (min-width: ${from}) and (max-width: calc(${to} - 1px)) {
        ${content}
      }
    `;
  },
};
