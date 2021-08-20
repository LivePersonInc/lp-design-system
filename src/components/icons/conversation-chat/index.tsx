import { DireflowComponent } from 'direflow-component';

import ConversationChatIcon, { ConversationChatIconProps } from './ConversationChatIcon';

DireflowComponent.create({
  component: ConversationChatIcon,
  configuration: {
    tagname: 'lp-conversation-chat-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-chat-icon': ConversationChatIconProps
    }
  }
}
