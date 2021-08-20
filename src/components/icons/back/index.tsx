import { DireflowComponent } from 'direflow-component';

import BackIcon, { BackIconProps } from './BackIcon';

DireflowComponent.create({
  component: BackIcon,
  configuration: {
    tagname: 'lp-back-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-back-icon': BackIconProps
    }
  }
}
