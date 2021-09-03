import { DireflowComponent } from 'direflow-component';

import AppleIcon, { AppleIconProps } from './AppleIcon';

DireflowComponent.create({
  component: AppleIcon,
  configuration: {
    tagname: 'lp-apple-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-apple-icon': AppleIconProps
    }
  }
}
