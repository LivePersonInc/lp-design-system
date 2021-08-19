import { DireflowComponent } from 'direflow-component';

import ArrowRightCircleIcon, { ArrowRightCircleIconProps } from './ArrowRightCircleIcon';

DireflowComponent.create({
  component: ArrowRightCircleIcon,
  configuration: {
    tagname: 'lp-arrow-right-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-right-circle-icon': ArrowRightCircleIconProps
    }
  }
}
