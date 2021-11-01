import animation from '../scss/animation.exports.scss';

import { groupListVariables } from './helpers';

export type Durations = 'fast' | 'normal' | 'slow'
export type TimingFunctions = 'ease-in-quad' |
  'ease-out-quad' |
  'ease-in-out-quad' |
  'ease-in-cubic' |
  'ease-out-cubic' |
  'ease-in-out-cubic' |
  'ease-in-quart' |
  'ease-out-quart' |
  'ease-in-out-quart'

export const variables = {
  durations: groupListVariables<Record<Durations, string>>(animation, 'duration-'),
  timingFunctions: groupListVariables<Record<TimingFunctions, string>>(animation, 'timing-function-'),
};

export const mixins = {
  animation: (
    name: string = 'slide-up-fade-in',
    duration: Durations | string = 'normal',
    timingFunction: TimingFunctions | string = 'ease-out-cubic',
    delay: string = '0s',
    iterationCount: string | number = '1',
    direction: string = 'normal',
    fillMode: string = 'none',
    playState: string = 'running',
  ): string => {
    if (variables.durations[duration]) {
      duration = variables.durations[duration];
    }

    if (variables.timingFunctions[timingFunction]) {
      timingFunction = variables.timingFunctions[timingFunction];
    }

    return `animation: ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState} ${name};`;
  },
};
