import { DireflowComponent } from 'direflow-component';

import GoogleIcon, { GoogleIconProps } from './GoogleIcon';

DireflowComponent.create({
  component: GoogleIcon,
  configuration: {
    tagname: 'lp-google-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-google-icon': GoogleIconProps
    }
  }
}
