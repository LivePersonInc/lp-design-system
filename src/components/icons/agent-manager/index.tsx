import { DireflowComponent } from 'direflow-component';

import AgentManagerIcon, { AgentManagerIconProps } from './AgentManagerIcon';

DireflowComponent.create({
  component: AgentManagerIcon,
  configuration: {
    tagname: 'lp-agent-manager-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-agent-manager-icon': AgentManagerIconProps
    }
  }
}
