import { DireflowComponent } from 'direflow-component';

import ConversationTranslateIcon, { ConversationTranslateIconProps } from './ConversationTranslateIcon';

DireflowComponent.create({
  component: ConversationTranslateIcon,
  configuration: {
    tagname: 'lp-conversation-translate-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-translate-icon': ConversationTranslateIconProps
    }
  }
}
