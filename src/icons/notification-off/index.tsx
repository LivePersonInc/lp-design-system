import { DireflowComponent } from 'direflow-component';

import NotificationOffIcon, { NotificationOffIconProps } from './NotificationOffIcon';

DireflowComponent.create({
  component: NotificationOffIcon,
  configuration: {
    tagname: 'lp-notification-off-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-notification-off-icon': NotificationOffIconProps
    }
  }
}
