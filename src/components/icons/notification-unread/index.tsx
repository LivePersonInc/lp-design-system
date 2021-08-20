import { DireflowComponent } from 'direflow-component';

import NotificationUnreadIcon, { NotificationUnreadIconProps } from './NotificationUnreadIcon';

DireflowComponent.create({
  component: NotificationUnreadIcon,
  configuration: {
    tagname: 'lp-notification-unread-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-notification-unread-icon': NotificationUnreadIconProps
    }
  }
}
