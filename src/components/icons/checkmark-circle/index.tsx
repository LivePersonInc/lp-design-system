import { DireflowComponent } from 'direflow-component';

import CheckmarkCircleIcon, { CheckmarkCircleIconProps } from './CheckmarkCircleIcon';

DireflowComponent.create({
  component: CheckmarkCircleIcon,
  configuration: {
    tagname: 'lp-checkmark-circle-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-checkmark-circle-icon': CheckmarkCircleIconProps
    }
  }
}
