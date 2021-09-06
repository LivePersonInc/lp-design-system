import { DireflowComponent } from 'direflow-component';

import ArrowRightIcon, { ArrowRightIconProps } from './ArrowRightIcon';

DireflowComponent.create({
  component: ArrowRightIcon,
  configuration: {
    tagname: 'lp-arrow-right-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-right-icon': ArrowRightIconProps
    }
  }
}
