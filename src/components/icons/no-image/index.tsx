import { DireflowComponent } from 'direflow-component';

import NoImageIcon, { NoImageIconProps } from './NoImageIcon';

DireflowComponent.create({
  component: NoImageIcon,
  configuration: {
    tagname: 'lp-no-image-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-no-image-icon': NoImageIconProps
    }
  }
}
