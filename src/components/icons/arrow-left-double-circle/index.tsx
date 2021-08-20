import { DireflowComponent } from 'direflow-component';

import ArrowLeftDoubleCircleIcon, { ArrowLeftDoubleCircleIconProps } from './ArrowLeftDoubleCircleIcon';

DireflowComponent.create({
  component: ArrowLeftDoubleCircleIcon,
  configuration: {
    tagname: 'lp-arrow-left-double-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-left-double-circle-icon': ArrowLeftDoubleCircleIconProps
    }
  }
}
