import { DireflowComponent } from 'direflow-component';

import MinusCircleIcon, { MinusCircleIconProps } from './MinusCircleIcon';

DireflowComponent.create({
  component: MinusCircleIcon,
  configuration: {
    tagname: 'lp-minus-circle-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-minus-circle-icon': MinusCircleIconProps
    }
  }
}
