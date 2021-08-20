import { DireflowComponent } from 'direflow-component';

import ClockIcon, { ClockIconProps } from './ClockIcon';

DireflowComponent.create({
  component: ClockIcon,
  configuration: {
    tagname: 'lp-clock-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-clock-icon': ClockIconProps
    }
  }
}
