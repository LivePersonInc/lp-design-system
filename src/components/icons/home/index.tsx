import { DireflowComponent } from 'direflow-component';

import HomeIcon, { HomeIconProps } from './HomeIcon';

DireflowComponent.create({
  component: HomeIcon,
  configuration: {
    tagname: 'lp-home-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-home-icon': HomeIconProps
    }
  }
}
