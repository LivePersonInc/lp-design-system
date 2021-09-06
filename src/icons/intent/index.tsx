import { DireflowComponent } from 'direflow-component';

import IntentIcon, { IntentIconProps } from './IntentIcon';

DireflowComponent.create({
  component: IntentIcon,
  configuration: {
    tagname: 'lp-intent-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-intent-icon': IntentIconProps
    }
  }
}
