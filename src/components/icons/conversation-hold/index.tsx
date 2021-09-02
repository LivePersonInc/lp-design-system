import { DireflowComponent } from 'direflow-component';

import ConversationHoldIcon, { ConversationHoldIconProps } from './ConversationHoldIcon';

DireflowComponent.create({
  component: ConversationHoldIcon,
  configuration: {
    tagname: 'lp-conversation-hold-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-hold-icon': ConversationHoldIconProps
    }
  }
}
