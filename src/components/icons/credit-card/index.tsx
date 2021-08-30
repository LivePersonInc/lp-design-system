import { DireflowComponent } from 'direflow-component';

import CreditCardIcon, { CreditCardIconProps } from './CreditCardIcon';

DireflowComponent.create({
  component: CreditCardIcon,
  configuration: {
    tagname: 'lp-credit-card-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-credit-card-icon': CreditCardIconProps
    }
  }
}
