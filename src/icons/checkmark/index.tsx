import { DireflowComponent } from 'direflow-component';

import CheckmarkIcon, { CheckmarkIconProps } from './CheckmarkIcon';

DireflowComponent.create({
  component: CheckmarkIcon,
  configuration: {
    tagname: 'lp-checkmark-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-checkmark-icon': CheckmarkIconProps
    }
  }
}
