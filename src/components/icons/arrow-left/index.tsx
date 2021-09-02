import { DireflowComponent } from 'direflow-component';

import ArrowLeftIcon, { ArrowLeftIconProps } from './ArrowLeftIcon';

DireflowComponent.create({
  component: ArrowLeftIcon,
  configuration: {
    tagname: 'lp-arrow-left-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-left-icon': ArrowLeftIconProps
    }
  }
}
