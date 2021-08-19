import { DireflowComponent } from 'direflow-component';

import NotificationErrorIcon, { NotificationErrorIconProps } from './NotificationErrorIcon';

DireflowComponent.create({
  component: NotificationErrorIcon,
  configuration: {
    tagname: 'lp-notification-error-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-notification-error-icon': NotificationErrorIconProps
    }
  }
}
