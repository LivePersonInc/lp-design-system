import { DireflowComponent } from 'direflow-component';

import AgentsIcon, { AgentsIconProps } from './AgentsIcon';

DireflowComponent.create({
  component: AgentsIcon,
  configuration: {
    tagname: 'lp-agents-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-agents-icon': AgentsIconProps
    }
  }
}
