import { DireflowComponent } from 'direflow-component';

import LockInSquareIcon, { LockInSquareIconProps } from './LockInSquareIcon';

DireflowComponent.create({
  component: LockInSquareIcon,
  configuration: {
    tagname: 'lp-lock-in-square-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-lock-in-square-icon': LockInSquareIconProps
    }
  }
}
