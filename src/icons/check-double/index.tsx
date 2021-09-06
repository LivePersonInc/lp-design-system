import { DireflowComponent } from 'direflow-component';

import CheckDoubleIcon, { CheckDoubleIconProps } from './CheckDoubleIcon';

DireflowComponent.create({
  component: CheckDoubleIcon,
  configuration: {
    tagname: 'lp-check-double-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-check-double-icon': CheckDoubleIconProps
    }
  }
}
