import { DireflowComponent } from 'direflow-component';

import ConversationIcon, { ConversationIconProps } from './ConversationIcon';

DireflowComponent.create({
  component: ConversationIcon,
  configuration: {
    tagname: 'lp-conversation-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-icon': ConversationIconProps
    }
  }
}
