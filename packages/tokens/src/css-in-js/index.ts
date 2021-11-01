import * as animation from './animation';
import * as borderRadius from './border-radius';
import * as boxShadow from './box-shadow';
import * as colors from './colors';
import * as colorsLight from './colors-light';
import * as responsive from './responsive';
import * as spacing from './spacing';
import * as transparency from './transparency';
import * as typography from './typography';

export const variables = {
  animation: animation.variables,
  borderRadius: borderRadius.variables,
  boxShadow: boxShadow.variables,
  colors: colors.variables,
  colorsLight: colorsLight.variables,
  responsive: responsive.variables,
  spacing: spacing.variables,
  transparency: transparency.variables,
  typography: typography.variables,
};

export const functions = {
  borderRadius: borderRadius.functions,
  responsive: responsive.functions,
  spacing: spacing.functions,
  transparency: transparency.functions,
};

export const mixins = {
  animation: animation.mixins,
  borderRadius: borderRadius.mixins,
  boxShadow: boxShadow.mixins,
  responsive: responsive.mixins,
  spacing: spacing.mixins,
  typography: typography.mixins,
};

type ColorsType<T> = T extends true ? typeof variables.colors : typeof variables.colorsLight

export const getTheme = <T extends boolean>(light: boolean = false): Omit<typeof variables, 'colors' | 'colorsLight'> & { colors: ColorsType<T> } => {
  const { colors, colorsLight, ...tokens } = variables;

  return {
    ...tokens,
    colors: (light ? colorsLight : colors) as ColorsType<T>,
  };
};
