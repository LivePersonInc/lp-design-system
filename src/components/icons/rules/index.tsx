import { DireflowComponent } from 'direflow-component';

import RulesIcon, { RulesIconProps } from './RulesIcon';

DireflowComponent.create({
  component: RulesIcon,
  configuration: {
    tagname: 'lp-rules-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-rules-icon': RulesIconProps
    }
  }
}
