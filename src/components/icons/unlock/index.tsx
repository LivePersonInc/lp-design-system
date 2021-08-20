import { DireflowComponent } from 'direflow-component';

import UnlockIcon, { UnlockIconProps } from './UnlockIcon';

DireflowComponent.create({
  component: UnlockIcon,
  configuration: {
    tagname: 'lp-unlock-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-unlock-icon': UnlockIconProps
    }
  }
}
