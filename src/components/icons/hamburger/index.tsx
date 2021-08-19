import { DireflowComponent } from 'direflow-component';

import HamburgerIcon, { HamburgerIconProps } from './HamburgerIcon';

DireflowComponent.create({
  component: HamburgerIcon,
  configuration: {
    tagname: 'lp-hamburger-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-hamburger-icon': HamburgerIconProps
    }
  }
}
