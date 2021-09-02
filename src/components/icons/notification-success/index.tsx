import { DireflowComponent } from 'direflow-component';

import NotificationSuccessIcon, { NotificationSuccessIconProps } from './NotificationSuccessIcon';

DireflowComponent.create({
  component: NotificationSuccessIcon,
  configuration: {
    tagname: 'lp-notification-success-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-notification-success-icon': NotificationSuccessIconProps
    }
  }
}
