import { DireflowComponent } from 'direflow-component';

import ConversationHelpIcon, { ConversationHelpIconProps } from './ConversationHelpIcon';

DireflowComponent.create({
  component: ConversationHelpIcon,
  configuration: {
    tagname: 'lp-conversation-help-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-help-icon': ConversationHelpIconProps
    }
  }
}
