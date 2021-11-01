import responsive from '../scss/responsive.exports.scss';

import { groupListVariables } from './helpers';

export type Breakpoints = 'laptop' | 'desktop' | 'desktopLarge'

export const variables = {
  breakpoints: groupListVariables<Record<Breakpoints, string>>(responsive, 'breakpoints-'),
};

export const functions = {
  getBreakpoint: (breakpoint: Breakpoints): string => variables.breakpoints[breakpoint],
};

export const mixins = {
  media: (breakpoint: Breakpoints | string | number, up: boolean = true) => (content: string): string => {
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
};
