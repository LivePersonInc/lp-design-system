export type Theme = 'light' | 'dark'

export const fontSize = '16px';

export const getRem = (size: number | string): string => `${+size / +fontSize}rem`;
