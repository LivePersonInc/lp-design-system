import { DireflowComponent } from 'direflow-component';

import AgentIcon, { AgentIconProps } from './AgentIcon';

DireflowComponent.create({
  component: AgentIcon,
  configuration: {
    tagname: 'lp-agent-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-agent-icon': AgentIconProps
    }
  }
}
