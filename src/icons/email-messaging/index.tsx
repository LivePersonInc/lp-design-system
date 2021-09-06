import { DireflowComponent } from 'direflow-component';

import EmailMessagingIcon, { EmailMessagingIconProps } from './EmailMessagingIcon';

DireflowComponent.create({
  component: EmailMessagingIcon,
  configuration: {
    tagname: 'lp-email-messaging-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-email-messaging-icon': EmailMessagingIconProps
    }
  }
}
