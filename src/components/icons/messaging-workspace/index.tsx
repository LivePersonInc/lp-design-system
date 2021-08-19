import { DireflowComponent } from 'direflow-component';

import MessagingWorkspaceIcon, { MessagingWorkspaceIconProps } from './MessagingWorkspaceIcon';

DireflowComponent.create({
  component: MessagingWorkspaceIcon,
  configuration: {
    tagname: 'lp-messaging-workspace-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-messaging-workspace-icon': MessagingWorkspaceIconProps
    }
  }
}
