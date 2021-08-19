import { DireflowComponent } from 'direflow-component';

import ConversationOrchestratorIcon, { ConversationOrchestratorIconProps } from './ConversationOrchestratorIcon';

DireflowComponent.create({
  component: ConversationOrchestratorIcon,
  configuration: {
    tagname: 'lp-conversation-orchestrator-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-conversation-orchestrator-icon': ConversationOrchestratorIconProps
    }
  }
}
