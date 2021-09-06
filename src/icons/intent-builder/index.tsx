import { DireflowComponent } from 'direflow-component';

import IntentBuilderIcon, { IntentBuilderIconProps } from './IntentBuilderIcon';

DireflowComponent.create({
  component: IntentBuilderIcon,
  configuration: {
    tagname: 'lp-intent-builder-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-intent-builder-icon': IntentBuilderIconProps
    }
  }
}
