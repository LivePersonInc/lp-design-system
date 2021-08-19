import { DireflowComponent } from 'direflow-component';

import ArrowLeftCircleIcon, { ArrowLeftCircleIconProps } from './ArrowLeftCircleIcon';

DireflowComponent.create({
  component: ArrowLeftCircleIcon,
  configuration: {
    tagname: 'lp-arrow-left-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-left-circle-icon': ArrowLeftCircleIconProps
    }
  }
}
