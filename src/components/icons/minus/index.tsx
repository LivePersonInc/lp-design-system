import { DireflowComponent } from 'direflow-component';

import MinusIcon, { MinusIconProps } from './MinusIcon';

DireflowComponent.create({
  component: MinusIcon,
  configuration: {
    tagname: 'lp-minus-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-minus-icon': MinusIconProps
    }
  }
}
