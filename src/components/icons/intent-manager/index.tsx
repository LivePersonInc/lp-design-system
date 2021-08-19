import { DireflowComponent } from 'direflow-component';

import IntentManagerIcon, { IntentManagerIconProps } from './IntentManagerIcon';

DireflowComponent.create({
  component: IntentManagerIcon,
  configuration: {
    tagname: 'lp-intent-manager-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-intent-manager-icon': IntentManagerIconProps
    }
  }
}
