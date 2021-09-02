import { DireflowComponent } from 'direflow-component';

import ArrowDownDoubleIcon, { ArrowDownDoubleIconProps } from './ArrowDownDoubleIcon';

DireflowComponent.create({
  component: ArrowDownDoubleIcon,
  configuration: {
    tagname: 'lp-arrow-down-double-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-arrow-down-double-icon': ArrowDownDoubleIconProps
    }
  }
}
