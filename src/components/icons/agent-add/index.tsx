import { DireflowComponent } from 'direflow-component';

import AgentAddIcon, { AgentAddIconProps } from './AgentAddIcon';

DireflowComponent.create({
  component: AgentAddIcon,
  configuration: {
    tagname: 'lp-agent-add-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-agent-add-icon': AgentAddIconProps
    }
  }
}
