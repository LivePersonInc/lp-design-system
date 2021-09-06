import { DireflowComponent } from 'direflow-component';

import DisabledRulesIcon, { DisabledRulesIconProps } from './DisabledRulesIcon';

DireflowComponent.create({
  component: DisabledRulesIcon,
  configuration: {
    tagname: 'lp-disabled-rules-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-disabled-rules-icon': DisabledRulesIconProps
    }
  }
}
