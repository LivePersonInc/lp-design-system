import { DireflowComponent } from 'direflow-component';

import RotateCcwIcon, { RotateCcwIconProps } from './RotateCcwIcon';

DireflowComponent.create({
  component: RotateCcwIcon,
  configuration: {
    tagname: 'lp-rotate-ccw-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-rotate-ccw-icon': RotateCcwIconProps
    }
  }
}
