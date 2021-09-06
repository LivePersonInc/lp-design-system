import { DireflowComponent } from 'direflow-component';

import CheckIcon, { CheckIconProps } from './CheckIcon';

DireflowComponent.create({
  component: CheckIcon,
  configuration: {
    tagname: 'lp-check-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-check-icon': CheckIconProps
    }
  }
}
