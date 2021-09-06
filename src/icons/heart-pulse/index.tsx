import { DireflowComponent } from 'direflow-component';

import HeartPulseIcon, { HeartPulseIconProps } from './HeartPulseIcon';

DireflowComponent.create({
  component: HeartPulseIcon,
  configuration: {
    tagname: 'lp-heart-pulse-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-heart-pulse-icon': HeartPulseIconProps
    }
  }
}
