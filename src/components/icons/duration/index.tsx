import { DireflowComponent } from 'direflow-component';

import DurationIcon, { DurationIconProps } from './DurationIcon';

DireflowComponent.create({
  component: DurationIcon,
  configuration: {
    tagname: 'lp-duration-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-duration-icon': DurationIconProps
    }
  }
}
