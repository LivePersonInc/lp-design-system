import { ReactNode } from 'react';
import { styled, css } from '@storybook/theming';
import { mapValues } from 'lodash';

import * as typography from '@liveperson-design-system/tokens/js/typography';

const commonPStyles = ({ theme }: any) => css`
  font-size: ${theme.typography.size.s2}px;
  margin: 0;
`;

export const Typography = {
  fonts: mapValues<typeof typography.variables.fonts, ReactNode>(
    typography.variables.fonts,
    (val, key) => styled.p`
      ${typography.mixins.fontFamily(key)}
      font-size: ${({ theme }) => `${theme.typography.size.m2}px`};
      margin: 0;
    `,
  ),
  sizes: mapValues<typeof typography.variables.sizes, ReactNode>(
    typography.variables.sizes,
    val => styled.p`
      font-size: ${val};
      margin: 0;
    `,
  ),
  lineHeights: mapValues<typeof typography.variables.lineHeights, ReactNode>(
    typography.variables.lineHeights,
    val => styled.p`
      ${commonPStyles};
      line-height: ${val};
      background-color: rgba(0, 0, 0, .1);
    `,
  ),
  weights: mapValues<typeof typography.variables.weights, ReactNode>(
    typography.variables.weights,
    val => styled.p`
      ${commonPStyles};
      font-weight: ${val};
    `,
  ),
  letterSpacings: mapValues<typeof typography.variables.letterSpacings, ReactNode>(
    typography.variables.letterSpacings,
    val => styled.p`
      ${commonPStyles};
      letter-spacing: ${val};
    `,
  ),

  heading: mapValues<typeof typography.variables.heading, ReactNode>(
    typography.variables.heading,
    // @ts-ignore
    (val, key: keyof typeof typography.variables.heading) => (styled[`h${key}`] as typeof styled.h1)`
      ${typography.mixins.header(key)}
      margin: 0;
    `,
  ),
  display: mapValues<typeof typography.variables.display, ReactNode>(
    typography.variables.display,
    // @ts-ignore
    (val, key: keyof typeof typography.variables.display) => styled.div`${typography.mixins.display(key)}`,
  ),

  // Modifications
  modifications: {
    typeAllCaps: styled.p`
      ${commonPStyles};
      ${typography.mixins.typeAllCaps()}
    `,
    typeLinkActive: styled.p`
      ${commonPStyles};
      ${typography.mixins.typeLinkActive()}
    `,
    typeInlineEmphasis: styled.p`
      ${commonPStyles};
      ${typography.mixins.typeInlineEmphasis()}
    `,
    typeCode: styled.p`
      ${commonPStyles};
      ${typography.mixins.typeCode()}
    `,
    typeCondensed: styled.p`
      ${commonPStyles};
      ${typography.mixins.typeCondensed()}
    `,
  },

  // Body
  body: {
    body: styled.p`
      ${commonPStyles};
      ${typography.mixins.body()}
    `,
    bodyBold: styled.p`
      ${commonPStyles};
      ${typography.mixins.bodyBold()}
    `,
    bodyItalic: styled.p`
      ${commonPStyles};
      ${typography.mixins.bodyItalic()}
    `,
    bodySmall: styled.p`
      ${commonPStyles};
      ${typography.mixins.body(true)}
    `,
    bodyBoldSmall: styled.p`
      ${commonPStyles};
      ${typography.mixins.bodyBold(true)}
    `,
    bodyItalicSmall: styled.p`
      ${commonPStyles};
      ${typography.mixins.bodyItalic(true)}
    `,
  },

  // Button
  button: {
    small: styled.p`
      ${commonPStyles};
      ${typography.mixins.button('small')}
    `,
    medium: styled.p`
      ${commonPStyles};
      ${typography.mixins.button('medium')}
    `,
    large: styled.p`
      ${commonPStyles};
      ${typography.mixins.button('large')}
    `,
  },

  // Tag
  tag: {
    tag: styled.p`
      ${commonPStyles};
      ${typography.mixins.tag()}
    `,
  },

  // Table
  table: {
    header: styled.p`
      ${commonPStyles};
      ${typography.mixins.tableHeader()}
    `,
    cell: styled.p`
      ${commonPStyles};
      ${typography.mixins.tableCell()}
    `,
  },

  // Input
  input: {
    label: styled.p`
      ${commonPStyles};
      ${typography.mixins.inputLabel()}
    `,
    value: styled.p`
      ${commonPStyles};
      ${typography.mixins.inputValue()}
    `,
  },

  // Code
  code: {
    code: styled.p`
      ${commonPStyles};
      ${typography.mixins.code()}
    `,
  },

  // Charts
  charts: {
    title: styled.p`
      ${commonPStyles};
      ${typography.mixins.chartTitle()}
    `,
    axisTitle: styled.p`
      ${commonPStyles};
      ${typography.mixins.chartAxisTitle()}
    `,
    axisLabel: styled.p`
      ${commonPStyles};
      ${typography.mixins.chartAxisLabel()}
    `,
    numberTitle: styled.p`
      ${commonPStyles};
      ${typography.mixins.chartNumberTitle()}
    `,
    number: styled.p`
      ${commonPStyles};
      ${typography.mixins.chartNumber()}
    `,
    numberBig: styled.p`
      ${commonPStyles};
      ${typography.mixins.chartNumber(true)}
    `,
  },
};
