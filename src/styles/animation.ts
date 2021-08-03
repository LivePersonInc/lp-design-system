import { css } from 'styled-components';

const durations = {
  fast: '.15s',
  normal: '.3s',
  slow: '.4s',
};

const timingFunctions = {
  easeInQuad: 'cubic-bezier(.11, 0, .5, 0)',
  easeOutQuad: 'cubic-bezier(.5, 1, .89, 1)',
  easeInOutQuad: 'cubic-bezier(.45, 0, .55, 1)',
  easeInCubic: 'cubic-bezier(.32, 0, .67, 0)',
  easeOutCubic: 'cubic-bezier(.33, 1, .68, 1)',
  easeInOutCubic: 'cubic-bezier(.65, 0, .35, 1)',
  easeInQuart: 'cubic-bezier(.5, 0, .75, 0)',
  easeOutQuart: 'cubic-bezier(.25, 1, .5, 1)',
  easeInOutQuart: 'cubic-bezier(.76, 0, .24, 1)',
};

type AnimationDurations = keyof typeof durations
type AnimationTimingFunctions = keyof typeof timingFunctions

export const animation = (
  name: string = 'slide-up-fade-in',
  duration: AnimationDurations | string = 'normal',
  timingFunction: AnimationTimingFunctions | string = 'ease-out-cubic',
  delay: string = '0s',
  iterationCount: string | number = 1,
  direction: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' = 'normal',
  fillMode: 'none' | 'forwards' | 'backwards' | 'both' =  'none',
  playState: 'running' | 'paused' = 'running',
) => {
  if (durations[duration as AnimationDurations]) {
    duration = durations[duration as AnimationDurations];
  }

  if (timingFunctions[timingFunction as AnimationTimingFunctions]) {
    timingFunction = timingFunctions[timingFunction as AnimationTimingFunctions];
  }

  return css`
    animation: ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState} ${name};
  `;
};
