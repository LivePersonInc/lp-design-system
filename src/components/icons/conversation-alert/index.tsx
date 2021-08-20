import { DireflowComponent } from 'direflow-component';

import ConversationAlertIcon, { ConversationAlertIconProps } from './ConversationAlertIcon';

DireflowComponent.create({
  component: ConversationAlertIcon,
  configuration: {
    tagname: 'lp-conversation-alert-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-alert-icon': ConversationAlertIconProps
    }
  }
}
