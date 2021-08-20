import { DireflowComponent } from 'direflow-component';

import ApplicationConversationBuilderIcon, { ApplicationConversationBuilderIconProps } from './ApplicationConversationBuilderIcon';

DireflowComponent.create({
  component: ApplicationConversationBuilderIcon,
  configuration: {
    tagname: 'lp-application-conversation-builder-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-conversation-builder-icon': ApplicationConversationBuilderIconProps
    }
  }
}
