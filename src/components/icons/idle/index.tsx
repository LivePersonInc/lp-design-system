import { DireflowComponent } from 'direflow-component';

import IdleIcon, { IdleIconProps } from './IdleIcon';

DireflowComponent.create({
  component: IdleIcon,
  configuration: {
    tagname: 'lp-idle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-idle-icon': IdleIconProps
    }
  }
}
