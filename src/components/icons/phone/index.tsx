import { DireflowComponent } from 'direflow-component';

import PhoneIcon, { PhoneIconProps } from './PhoneIcon';

DireflowComponent.create({
  component: PhoneIcon,
  configuration: {
    tagname: 'lp-phone-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-phone-icon': PhoneIconProps
    }
  }
}
