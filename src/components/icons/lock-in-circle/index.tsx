import { DireflowComponent } from 'direflow-component';

import LockInCircleIcon, { LockInCircleIconProps } from './LockInCircleIcon';

DireflowComponent.create({
  component: LockInCircleIcon,
  configuration: {
    tagname: 'lp-lock-in-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-lock-in-circle-icon': LockInCircleIconProps
    }
  }
}
