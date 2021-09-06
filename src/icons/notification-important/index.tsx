import { DireflowComponent } from 'direflow-component';

import NotificationImportantIcon, { NotificationImportantIconProps } from './NotificationImportantIcon';

DireflowComponent.create({
  component: NotificationImportantIcon,
  configuration: {
    tagname: 'lp-notification-important-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-notification-important-icon': NotificationImportantIconProps
    }
  }
}
