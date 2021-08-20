import { DireflowComponent } from 'direflow-component';

import MobileAppIcon, { MobileAppIconProps } from './MobileAppIcon';

DireflowComponent.create({
  component: MobileAppIcon,
  configuration: {
    tagname: 'lp-mobile-app-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-mobile-app-icon': MobileAppIconProps
    }
  }
}
