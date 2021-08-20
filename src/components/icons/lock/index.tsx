import { DireflowComponent } from 'direflow-component';

import LockIcon, { LockIconProps } from './LockIcon';

DireflowComponent.create({
  component: LockIcon,
  configuration: {
    tagname: 'lp-lock-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-lock-icon': LockIconProps
    }
  }
}
