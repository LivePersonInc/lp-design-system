import { DireflowComponent } from 'direflow-component';

import ProactiveMessagingIcon, { ProactiveMessagingIconProps } from './ProactiveMessagingIcon';

DireflowComponent.create({
  component: ProactiveMessagingIcon,
  configuration: {
    tagname: 'lp-proactive-messaging-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-proactive-messaging-icon': ProactiveMessagingIconProps
    }
  }
}
