import { DireflowComponent } from 'direflow-component';

import RotateCwIcon, { RotateCwIconProps } from './RotateCwIcon';

DireflowComponent.create({
  component: RotateCwIcon,
  configuration: {
    tagname: 'lp-rotate-cw-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-rotate-cw-icon': RotateCwIconProps
    }
  }
}
