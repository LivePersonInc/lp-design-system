import { camelCase } from 'change-case';

import typography from '../scss/typography.exports.scss';

export const functions = {
  getRem: (size: string | number, parentSize: string | number = typography.sizeDefault): string => (
    `${(parseInt(size as string)) / (parseInt(parentSize as string))}rem`
  ),
  getEm: (size: string | number, parentSize: string | number = typography.sizeDefault): string => (
    `${(parseInt(size as string)) / (parseInt(parentSize as string))}em`
  ),
};

export const mixins = {
  buttonTransparent: (): string => `
    font: inherit;
    color: inherit;
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  `,
  hostWithAttr: (attr: string, withSelector = '', withParent = false) => (content: string): string => {
    const selector = `[${attr}]:not([${attr}="false"])${withSelector}`;

    return (
      withParent
        ? `
          :host(${selector}) & {
            ${content};
          }
        `
        : `
          :host(${selector}) {
            ${content};
          }
        `
    );
  },
  rule: (rule: string, value: string): string => `${rule}: ${value};`,
};

export const groupListVariables = <T extends Object = Object>(
  variables: Object,
  keyPrefix: string,
  includes?: string[],
): T => {
  const group = {};

  const keys = Object.keys(variables);

  (includes ? keys.filter(key => includes.includes(key)) : keys).filter(key => key.includes(keyPrefix)).forEach(key => {
    group[camelCase(key.replace(keyPrefix, ''))] = variables[key];
  });

  return group as T;
};

export const getArgValue = <T extends Object = Object>(variables: T, value: keyof T | string | number): string | number => (
  String(variables[value as keyof T]) || ((typeof value === 'number' && value !== 0 ? `${value}px` : value) as string | number)
);
