import { DireflowComponent } from 'direflow-component';

import ArrowLeftDoubleIcon, { ArrowLeftDoubleIconProps } from './ArrowLeftDoubleIcon';

DireflowComponent.create({
  component: ArrowLeftDoubleIcon,
  configuration: {
    tagname: 'lp-arrow-left-double-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-left-double-icon': ArrowLeftDoubleIconProps
    }
  }
}
