import { DireflowComponent } from 'direflow-component';

import SocialMessagingIcon, { SocialMessagingIconProps } from './SocialMessagingIcon';

DireflowComponent.create({
  component: SocialMessagingIcon,
  configuration: {
    tagname: 'lp-social-messaging-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-social-messaging-icon': SocialMessagingIconProps
    }
  }
}
