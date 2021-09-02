import { DireflowComponent } from 'direflow-component';

import MobilePhoneIcon, { MobilePhoneIconProps } from './MobilePhoneIcon';

DireflowComponent.create({
  component: MobilePhoneIcon,
  configuration: {
    tagname: 'lp-mobile-phone-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-mobile-phone-icon': MobilePhoneIconProps
    }
  }
}
