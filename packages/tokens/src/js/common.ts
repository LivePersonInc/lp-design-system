export type Theme = 'dark' | 'light'

export const mixins = {
  baseStyles: (): string => `
    * {
      &,
      &::before,
      &::after {
        box-sizing: border-box;
      }
    }
  `,
};
