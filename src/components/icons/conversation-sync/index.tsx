import { DireflowComponent } from 'direflow-component';

import ConversationSyncIcon, { ConversationSyncIconProps } from './ConversationSyncIcon';

DireflowComponent.create({
  component: ConversationSyncIcon,
  configuration: {
    tagname: 'lp-conversation-sync-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-sync-icon': ConversationSyncIconProps
    }
  }
}
