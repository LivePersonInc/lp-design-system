import { DireflowComponent } from 'direflow-component';

import ChatWorkspaceIcon, { ChatWorkspaceIconProps } from './ChatWorkspaceIcon';

DireflowComponent.create({
  component: ChatWorkspaceIcon,
  configuration: {
    tagname: 'lp-chat-workspace-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-chat-workspace-icon': ChatWorkspaceIconProps
    }
  }
}
