import { DireflowComponent } from 'direflow-component';

import NotificationInfoIcon, { NotificationInfoIconProps } from './NotificationInfoIcon';

DireflowComponent.create({
  component: NotificationInfoIcon,
  configuration: {
    tagname: 'lp-notification-info-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-notification-info-icon': NotificationInfoIconProps
    }
  }
}
