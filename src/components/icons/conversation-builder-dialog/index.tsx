import { DireflowComponent } from 'direflow-component';

import ConversationBuilderDialogIcon, { ConversationBuilderDialogIconProps } from './ConversationBuilderDialogIcon';

DireflowComponent.create({
  component: ConversationBuilderDialogIcon,
  configuration: {
    tagname: 'lp-conversation-builder-dialog-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-builder-dialog-icon': ConversationBuilderDialogIconProps
    }
  }
}
