import { DireflowComponent } from 'direflow-component';

import ShiftStatusIcon, { ShiftStatusIconProps } from './ShiftStatusIcon';

DireflowComponent.create({
  component: ShiftStatusIcon,
  configuration: {
    tagname: 'lp-shift-status-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-shift-status-icon': ShiftStatusIconProps
    }
  }
}
