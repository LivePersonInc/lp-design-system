import { DireflowComponent } from 'direflow-component';

import SubscriptionIcon, { SubscriptionIconProps } from './SubscriptionIcon';

DireflowComponent.create({
  component: SubscriptionIcon,
  configuration: {
    tagname: 'lp-subscription-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-subscription-icon': SubscriptionIconProps
    }
  }
}
