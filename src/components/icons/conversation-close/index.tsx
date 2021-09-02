import { DireflowComponent } from 'direflow-component';

import ConversationCloseIcon, { ConversationCloseIconProps } from './ConversationCloseIcon';

DireflowComponent.create({
  component: ConversationCloseIcon,
  configuration: {
    tagname: 'lp-conversation-close-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-close-icon': ConversationCloseIconProps
    }
  }
}
