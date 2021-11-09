import animation from '../scss/animation.exports.scss';

import { groupListVariables } from './helpers';

export type Durations = 'fast' | 'normal' | 'slow'
export type TimingFunctions = 'easeInQuad' |
  'easeOutQuad' |
  'easeInOutQuad' |
  'easeInCubic' |
  'easeOutCubic' |
  'easeInOutCubic' |
  'easeInQuart' |
  'easeOutQuart' |
  'easeInOutQuart'
export type Animations = 'slideUpFadeIn' |
  'slideUpFadeOut' |
  'slideDownFadeIn' |
  'slideDownFadeOut'

export const variables = {
  durations: groupListVariables<Record<Durations, string>>(animation, 'duration-'),
  timingFunctions: groupListVariables<Record<TimingFunctions, string>>(animation, 'timing-function-'),
  animationSetting: animation['animation-setting'] as string,
  animations: groupListVariables<Record<Animations, string>>(animation, 'animation-'),
};

export const keyframes: { [name in Animations]: { [key in 'from' | 'to' | string]: Object } } = {
  slideUpFadeIn: {
    '0%': {
      opacity: 0,
      transform: 'translateY(3rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  slideUpFadeOut: {
    '0%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(-3rem)',
    },
  },
  slideDownFadeIn: {
    '0%': {
      opacity: 0,
      transform: 'translateY(-3rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  slideDownFadeOut: {
    '0%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(3rem)',
    },
  },
};

