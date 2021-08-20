import { DireflowComponent } from 'direflow-component';

import CheckDoubleCircleIcon, { CheckDoubleCircleIconProps } from './CheckDoubleCircleIcon';

DireflowComponent.create({
  component: CheckDoubleCircleIcon,
  configuration: {
    tagname: 'lp-check-double-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-check-double-circle-icon': CheckDoubleCircleIconProps
    }
  }
}
