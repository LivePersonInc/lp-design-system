import { DireflowComponent } from 'direflow-component';

import FirstIcon, { FirstIconProps } from './FirstIcon';

DireflowComponent.create({
  component: FirstIcon,
  configuration: {
    tagname: 'lp-first-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-first-icon': FirstIconProps
    }
  }
}
