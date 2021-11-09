import typography from '../scss/typography.exports.scss';

import { groupListVariables } from './helpers';

export type Fonts = 'roboto' | 'robotoMono' | 'robotoCondensed'
export type Sizes = 'default' | 'body' | 'small' | 'large'
export type LineHeights = 'small' | 'medium' | 'large'
export type Weights = 'light' | 'regular' | 'medium' | 'bold'
export type LetterSpacings = 'regular' | 'allCaps' | 'compact'
export type Headings = 1 | 2 | 3 | 4 | 5 | 6

export const variables = {
  fonts: groupListVariables<Record<Fonts, string>>(typography, 'fonts-'),
  sizes: groupListVariables<Record<Sizes, string>>(typography, 'sizes-'),
  lineHeights: groupListVariables<Record<LineHeights, string>>(typography, 'line-heights-'),
  weights: groupListVariables<Record<Weights, string>>(typography, 'weights-'),
  letterSpacings: groupListVariables<Record<LetterSpacings, string>>(typography, 'letter-spacings-'),
  heading: groupListVariables<Record<Headings, string>>(typography, 'heading-'),
};

export const mixins = {
  fontFamily: (font: Fonts | string = 'roboto'): string => `font-family: ${variables.fonts[font] || font};`,
  withFontFamily: (font: Fonts | string = 'roboto'): string => `
    ${font ? mixins.fontFamily(font) : ''}
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,

  // Modifications mixins
  typeAllCaps: (): string => `
    letter-spacing: ${variables.letterSpacings.allCaps};
    text-transform: uppercase;
  `,
  typeLinkActive: (): string => `text-decoration: underline;`,
  typeInlineEmphasis: (): string => `font-style: italic;`,
  typeCode: (): string => mixins.fontFamily(variables.fonts.robotoMono),
  typeCondensed: (): string => mixins.fontFamily(variables.fonts.robotoCondensed),

  // Headers mixins
  header: (header: Headings = 1): string => `
    font-size: map-get($font-size-heading, $header);
    line-height: if($header == 1 or $header == 2 or $header == 3, $line-height-medium, $line-height-small);
    font-weight: if($header == 1 or $header == 2, $weight-bold, $weight-medium);
    ${header === 5 ? mixins.typeAllCaps() : `letter-spacing: ${variables.letterSpacings.regular};`}
  `,

  // Body mixins
  body: (small: boolean = false): string => `
    font-size: ${small ? variables.sizes.small : variables.sizes.body};
    font-weight: ${variables.weights.regular};
    line-height: ${variables.lineHeights.large};
    letter-spacing: ${variables.letterSpacings.regular};
  `,
  bodyBold: (small: boolean = false): string => `
    ${mixins.body(small)}
    font-weight: ${variables.weights.bold};
  `,
  bodyItalic: (small: boolean = false): string => `
    ${mixins.body(small)}
    font-style: italic;
  `,

  // Button mixins
  button: (size: 'small' | 'medium' | 'large'): string => `
    ${(() => {
      switch (size) {
        case 'small':
          return `
            font-size: ${variables.sizes.small};
            font-weight: ${variables.weights.bold};
          `;
        case 'medium':
          return `
            font-size: ${variables.sizes.default};
            font-weight: ${variables.weights.bold};
          `;
        case 'large':
          return `
            font-size: ${variables.sizes.large};
            font-weight: ${variables.weights.medium};
          `;
        default:
          return '';
      }
    })()}
  
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,

  // Tag mixins
  tag: (): string => `
    font-size: ${variables.sizes.small};
    font-weight: ${variables.weights.medium};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.compact};
  `,

  // Table mixins
  tableHeader: (): string => `
    font-size: ${variables.sizes.default};
    font-weight: ${variables.weights.medium};
    line-height: ${variables.lineHeights.small};
    ${mixins.typeAllCaps()}
  `,
  tableCell: (): string => `
    font-size: ${variables.sizes.default};
    font-weight: ${variables.weights.regular};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,

  // Input mixins
  inputLabel: (): string => `
    font-size: ${variables.sizes.small};
    font-weight: ${variables.weights.regular};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,
  inputValue: (): string => `
    font-size: ${variables.sizes.default};
    font-weight: ${variables.weights.regular};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,

  // Code mixins
  code: (): string => `
    ${mixins.typeCode()}
    font-size: ${variables.sizes.small};
    font-weight: ${variables.weights.regular};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,

  // Charts mixins
  chartTitle: (): string => `
    font-size: ${variables.sizes.large};
    font-weight: ${variables.weights.bold};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,
  chartAxisTitle: (): string => `
    font-size: ${variables.sizes.small};
    font-weight: ${variables.weights.bold};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,
  chartAxisLabel: (): string => `
    ${mixins.typeCondensed()}
    font-size: ${variables.sizes.small};
    font-weight: ${variables.weights.regular};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,
  chartNumberTitle: (): string => `
    font-size: ${variables.sizes.large};
    font-weight: ${variables.weights.light};
    line-height: ${variables.lineHeights.small};
    ${mixins.typeAllCaps()}
    letter-spacing: ${variables.letterSpacings.regular};
  `,
  chartNumber: (big: boolean = false): string => `
    font-size: ${variables.heading[big ? '1' : '3']};
    font-weight: ${variables.weights.light};
    line-height: ${variables.lineHeights.small};
    letter-spacing: ${variables.letterSpacings.regular};
  `,
};
