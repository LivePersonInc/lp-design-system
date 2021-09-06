import { DireflowComponent } from 'direflow-component';

import NotificationIcon, { NotificationIconProps } from './NotificationIcon';

DireflowComponent.create({
  component: NotificationIcon,
  configuration: {
    tagname: 'lp-notification-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-notification-icon': NotificationIconProps
    }
  }
}
