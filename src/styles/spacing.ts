import { getRem } from './common';

const spaces = {
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '20px',
  l: '32px',
  xl: '52px',
  xxl: '84px',
}

const spacesInner = {
  xxs: '4px',
  xs: '8px',
  s: '12px',
  m: '16px',
  l: '24px',
  xl: '20px',
  xxl: '32px',
}

const spacing = {
  xxs: '0.25rem',
  xs: '0.5rem',
  s: '0.75rem',
  m: '1.25rem',
  l: '2rem',
  xl: '3.25rem',
  xxl: '5.25rem',
}

export const getSpace = (size: keyof typeof spaces, inner = false): string => (inner ? spacesInner : spaces)[size];

export const getSpaceRem = (size: keyof typeof spaces, inner = false): string => getRem(getSpace(size, inner));

export default spacing;
