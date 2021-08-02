import { css } from 'styled-components';

const breakpoints = {
  laptop: '900px',
  desktop: '1200px',
  desktopLarge: '1600px',
}

type Breakpoints = keyof typeof breakpoints

export const media = (breakpoint: Breakpoints | string | number, content: string, up = true) => {
  if (typeof breakpoint === 'number') {
    breakpoint = `${breakpoint}px`;
  } else if (breakpoints[breakpoint as Breakpoints]) {
    breakpoint = breakpoints[breakpoint as Breakpoints];
  }

  return css`
    @media (${up ? 'min-width' : 'max-width'}: ${up ? breakpoint : `${breakpoint} - 1px`}) {
      ${content}
    }
  `;
}
